import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link
        className="bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-800"
        href="/sucursales"
      >
        Sucursales
      </Link>
    </div>
  );
}
