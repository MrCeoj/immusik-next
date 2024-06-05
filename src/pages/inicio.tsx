import Image from "next/image";
import imgFondo from "@/img/immusik-inicio.png";
import logoImmusik from "@/img/immusik.png";
import { useSucursales } from "@/hooks/sucursal";
import { sucursalContext } from "@/hooks/sucursalContext";
import { toTitleCase } from "@/lib/utils";
import BarraNavegacionAdmin from "@/components/barraNavegacionAdmin";
import { useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Inicio() {
  const [sucursales] = useSucursales();
  const setContext = sucursalContext((state: any) => state.setContext);
  const context = sucursalContext((state: any) => state.context);
  const router = useRouter();
  const recienMontado = useRef(true);

  useEffect(() => {
    if ([sucursales].length === 0) {
      router.push("/sucursales/modificar");
      return;
    }

    if (recienMontado.current) {
      recienMontado.current = false;
      setContext(null);
      return;
    }

    console.log(context);
    if (
      context === null ||
      context === undefined ||
      context.id === null ||
      context.id === undefined
    ) {
      return;
    }
    router.push("/");
  }, [context]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-2 py-4 md:flex-row md:justify-evenly md:px-4">
      <ToastContainer />
      <Image
        src={imgFondo}
        aria-hidden="true"
        alt="Salón de clases de IMMUSIK"
        className="absolute h-screen w-screen top-0 right-0 object-cover opacity-20"
      />
      <BarraNavegacionAdmin />
      <div className="w-full md:w-1/4 z-10">
        <Image
          src={logoImmusik}
          width={280}
          height={100}
          alt="Logo de IMMUSIK"
          className="mx-auto"
        />
        <h1 className="text-center text-4xl font-bold text-white">
          ¡Bienvenido!
        </h1>
      </div>
      <div className="flex flex-col gap-4 z-10 mt-8 md:mt-0 w-3/4 md:w-1/3">
        {sucursales?.map((sucursal) => (
          <div
            key={sucursal.id}
            onClick={() => {
              setContext(sucursal);
            }}
            className="gradient-border bg-gradient-to-r from-primary/60 to-primary/20 text-white text-2xl text-center font-bold py-5 rounded-xl shadow-xl backdrop-blur-md hover:cursor-pointer"
          >
            {toTitleCase(sucursal.nombre)}
          </div>
        ))}
      </div>
    </div>
  );
}
