import { useSucursal } from "@/hooks/sucursal";
import toTitleCase from "@/lib/toTitleCase";
import { useRouter } from "next/router";
import BarraNavegacionAdmin from "@/components/barraNavegacionAdmin";
import Tarjeta from "@/components/sucursal/Tarjeta";

export function getServerSideProps() {
  return {
    props: { title: "Sucursal" },
  };
}

export default function Inicio() {
  const router = useRouter();
  const id = router.query.id as string;
  const [sucursal] = useSucursal(id);

  return (
    <>
      <BarraNavegacionAdmin />
      <div className="bg-[url('../img/fondo.svg')] bg-cover object-cover bg-no-repeat h-screen">
        <div className="pt-32 pb-20">
          <h1 className="text-center font-bold text-3xl">ImMusik</h1>
          <h2 className="text-center text-xl">
            {sucursal?.nombre && "Sucursal " + toTitleCase(sucursal?.nombre)}
          </h2>
        </div>
        <Tarjeta />
      </div>
    </>
  );
}
