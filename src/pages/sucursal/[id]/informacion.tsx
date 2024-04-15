import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSucursal } from "@/hooks/sucursal";
import { toTitleCase } from "@/lib/utils";
import Sucursal from "@/img/sucursal.png";
import Gastos from "@/img/gastos.png";
import Editar from "@/img/editar.png";
import BarraNavegacion from "@/components/barraNavegacion";

export function getServerSideProps() {
  return {
    props: { title: "Informacion" },
  };
}

export default function Informacion() {
  const router = useRouter();
  const id = router.query.id as string;
  const [sucursal] = useSucursal(id);
  return (
    <>
      <BarraNavegacion titulo="Información y gastos" />
      <div className="bg-[url('../img/fondo.svg')] bg-cover object-cover bg-no-repeat h-screen flex">
        <div className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[min-content_1fr] gap-6 m-auto">
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-[inherit] m-[2px] shadow-2xl border-2 border-white">
            <Image
              alt={`Imagen}`}
              width={1000}
              height={1000}
              className="block object-cover w-full max-w-[1000px] h-[431px] transition-transform group-hover:scale-105"
              src={Sucursal}
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-64 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm mix-blend-multiply"
              src="/wave-tarjeta-menu.svg"
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-64 translate-y-0 transition-transform group-hover:-translate-y-5 filter opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
            <div className="absolute bottom-0 left-0 right-0 pb-[80px] ">
              <h3 className="text-white text-center font-bold text-5xl ">
                Sucursal {sucursal?.nombre && toTitleCase(sucursal?.nombre)}
              </h3>
            </div>
          </div>
          <div className="col-span-1 relative overflow-hidden rounded-[inherit] m-[2px] shadow-2xl border-2 border-white">
            <Image
              alt={`Imagen}`}
              width={1000}
              height={1000}
              className="block object-cover w-full max-w-[350px] h-[300px] transition-transform group-hover:scale-105 "
              src={Gastos}
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-16 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm mix-blend-multiply"
              src="/wave-tarjeta-menu.svg"
            />
            <Image
              alt="Figura de onda que decora la tarjeta de menú de la sucursal"
              aria-hidden={true}
              width={1000}
              height={1000}
              className="object-cover absolute w-auto right-0 -bottom-16 translate-y-0 transition-transform group-hover:-translate-y-5 filter opacity-80"
              src="/wave-tarjeta-menu.svg"
            />
            <div className="absolute bottom-0 left-0 right-0 pb-16 ">
              <h3 className="text-white text-center font-bold text-3xl ">
                Gastos
              </h3>
            </div>
          </div>
          <Link
            href={`/sucursales`}
            className="col-span-1 relative overflow-hidden rounded-[inherit] m-[2px] shadow-2xl border-2 border-white"
          >
            <div>
              <Image
                alt={`Imagen}`}
                width={1000}
                height={1000}
                className="block object-cover w-full max-w-[350px] h-[100px] transition-transform group-hover:scale-105"
                src={Editar}
              />
              <Image
                alt="Figura de onda que decora la tarjeta de menú de la sucursal"
                aria-hidden={true}
                width={1000}
                height={1000}
                className="object-cover absolute w-auto right-0 -bottom-10 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm mix-blend-multiply"
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
              <div className="absolute bottom-0 left-0 right-0 pb-8 ">
                <h3 className="text-white text-center font-bold text-3xl ">
                  Editar Sucursales
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
