"use server";
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User id is required");
  }
  const { userId } = sessionUser;
  const property = await Property.findById(propertyId);

  if (!property) {
    throw new Error("Property not found!");
  }
  // verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  // extract public ID from image URLs
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  // delete images from cloudinary
  if (publicIds.length) {
    for (const publicId of publicIds) {
      await cloudinary.uploader.destroy("ProperTea/" + publicId);
    }
  }

  await Property.deleteOne();
  revalidatePath("/", "layout");
}
export default deleteProperty;
