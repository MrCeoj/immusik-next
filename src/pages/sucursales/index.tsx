import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { sucursalContext } from "@/hooks/sucursalContext";
import BarraNavegacion from "@/components/barraNavegacion";
import Image from "next/image";
import Gastos from "@/img/gastos.png";
import Editar from "@/img/editar.png";
import Sucursal from "@/img/sucursal.png";

const Index = () => {
  const context = sucursalContext((state: any) => state.context);
  const router = useRouter();

  useEffect(() => {
    if (!context) {
      router.push("/inicio");
    }
  }, [context]);

  return (
    <>
      <BarraNavegacion titulo="Información y gastos" />
      <div className="bg-back-dark text-white h-screen flex flex-wrap justify-around bg-[url('../img/fondo.svg')] bg-cover object-cover bg-no-repeat">
        <div className="p-10 h-full flex flex-col justify-center rounded-2xl">
          <div
            className=" hover:cursor-pointer relative overflow-hidden rounded-[inherit] shadow-2xl border-2 border-white"
            onClick={() => router.push("/inicio")}
          >
            <div className="absolute bottom-0 left-0 right-0 pb-[50px] z-50">
              <h1 className="text-4xl font-bold text-center">
                {context && `${context.nombre}`}
              </h1>
              <h3 className="font-normal text-center text-2xl">
                Cambiar de sucursal
              </h3>
            </div>
            <Image
              alt={`Imagen`}
              width={1000}
              height={1000}
              className="w-full h-[431px]"
              src={Sucursal}
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              width={1000}
              height={1000}
              className="object-cover absolute w-full right-0 -bottom-64 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-64 translate-y-0 transition-transform group-hover:-translate-y-5 filter opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
          </div>
        </div>
        <div className="p-10 flex flex-col justify-center rounded-2xl">
          <div
            className="hover:cursor-pointer relative overflow-hidden rounded-[inherit] m-[2px] shadow-2xl border-2 border-white mb-6"
            onClick={() => router.push("/sucursales/gastos")}
          >
            <div className="absolute bottom-0 left-0 right-0 pb-[50px] z-50">
              <h1 className="text-4xl font-bold text-center">Gastos</h1>
            </div>
            <Image
              alt={`Imagen`}
              width={1000}
              height={1000}
              className="object-cover w-full max-w-[350px] h-[300px]"
              src={Gastos}
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-full right-0 -bottom-20 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-20 translate-y-0 transition-transform group-hover:-translate-y-5 filter opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
          </div>

          <div
            className="hover:cursor-pointer relative overflow-hidden rounded-[inherit] m-[2px] shadow-2xl border-2 border-white"
            onClick={() => router.push("/sucursales/modificar")}
          >
            <div className="absolute bottom-0 left-0 right-0 pb-8 z-50">
              <h1 className="text-4xl font-bold text-center">
                Editar sucursales
              </h1>
            </div>
            <Image
              alt={`Imagen}`}
              width={1000}
              height={1000}
              className="w-full max-w-[350px] h-[100px]"
              src={Editar}
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-10 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-10 translate-y-0 transition-transform group-hover:-translate-y-5 filter opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
