import { sucursalContext } from "@/hooks/sucursalContext";
import { toTitleCase } from "@/lib/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BarraNavegacionAdmin from "@/components/barraNavegacionAdmin";
import Tarjeta from "@/components/sucursal/Tarjeta";
import { obtenerSucursal } from "@/business/SucursalDelegate";
import { Sucursal } from "@prisma/client";

/**
 * Función que ayuda a establecer el título de la página con el nombre de la sucursal.
 * Se ejecuta en el servidor por lo que en lugar de hacer una petición a la API,
 * se hace una petición a la base de datos directamente.
 *
 * @param context Contexto de la página
 * @returns Props de la página con el título de la sucursal
 **/

export default function Inicio() {
  const router = useRouter();
  const sucursal = sucursalContext((state: any) => state.context);

  useEffect(() => {
    if (!sucursal) {
      router.push("/inicio");
    }
  }, [sucursal, router]);

  return (
    <>
      <BarraNavegacionAdmin />
      <div className="bg-[url('../img/fondo.svg')] bg-cover object-cover bg-no-repeat h-screen">
        <div className="pt-24 pb-10">
          <h1 className="font-PassionOne text-center font-bold text-7xl text-white">
            i.m.musik
          </h1>
          <h2 className="text-center text-xl mt-2 text-white">
            Sucursal {sucursal?.nombre && toTitleCase(sucursal?.nombre)}
          </h2>
        </div>
        {sucursal && (
          <div className="flex justify-center px-2">
            <Tarjeta sucursal={sucursal} />
          </div>
        )}
      </div>
    </>
  );
}
