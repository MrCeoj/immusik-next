import Image from "next/image";
import Link from "next/link";

export default function BarraNavegacion({ titulo }: { titulo: string }) {
  return (
    <div className="w-screen flex items-center fixed top-0 z-101 rounded-lg px-20 pb-20 mt-5">
      <h1 className="font-PassionOne text-6xl text-white">i.m.musik</h1>
      <h1 className="font-bold text-white text-2xl ml-8">{titulo}</h1>
      <Link
        onClick={() => window.history.back()}
        href={""}
        className="ml-auto pr-1"
      >
        <Image src={require("@/img/back.png")} alt={"foto"} />
      </Link>
    </div>
  );
}
