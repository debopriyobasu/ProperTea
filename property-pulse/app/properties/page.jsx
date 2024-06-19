// import Link from "next/link";
"use client";
import { useRouter } from "next/navigation";
useRouter;
const PropertiesPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl">Properties Page</h1>
      <button
        className="p-2 bg-blue-500 rounded-sm"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
      {/* <Link href="/">Go Home</Link> */}
    </div>
  );
};

export default PropertiesPage;
