"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
const PropertyPage = () => {
  const route = useRouter();
  const { id } = useParams();
  const search = useSearchParams();
  const name = search.get("name");
  const pathname = usePathname();
  return (
    <div>
      <h1>Property</h1>
      <button
        className="bg-blue-500 p-2 rounded-md"
        onClick={() => route.push("/")}
      >
        Go Home - {name} - {pathname} - {id} - {name}
      </button>
    </div>
  );
};

export default PropertyPage;
