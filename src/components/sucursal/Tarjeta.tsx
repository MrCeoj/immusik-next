import Image from "next/image";
import Alumnos from "@/img/T1A.png";
import Docentes from "@/img/T2D.png";
import Cursos from "@/img/T3C.png";
import Sucursales from "@/img/T4S.png";
import { Sucursal } from "@prisma/client";
import { toTitleCase } from "@/lib/utils";
import Link from "next/link";

const datos = [
  {
    id: 1,
    img: Alumnos,
    titulo: "Alumnos",
    desc: "Gestión de alumnos",
    href: "alumnos",
  },
  {
    id: 2,
    img: Docentes,
    titulo: "Docentes",
    desc: "Gestión de docentes",
    href: "docentes",
  },
  {
    id: 3,
    img: Cursos,
    titulo: "Clases",
    desc: "Gestión de clases",
    href: "clases",
  },
  {
    id: 4,
    img: Sucursales,
    titulo: "Sucursal",
    desc: "Información y gastos",
    href: "sucursales",
  },
];

const Tarjeta = ({ sucursal }: { sucursal: Sucursal }) => {
  return (
    <div className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6">
      {datos.map(({ id, img, titulo, desc, href }) => {
        return (
          <Link
            href={`/${href}`}
            key={id}
            className="group bg-gradient-to-b from-black to-white rounded-2xl cursor-pointer"
          >
            <div className="relative w-[250px] max-w-[250px] h-[300px] overflow-hidden rounded-[inherit] m-[2px]">
              <Image
                alt={`Imagen que muestra ${desc} de la sucursal ${toTitleCase(
                  sucursal.nombre
                )}`}
                fill={true}
                className="block object-cover transition-transform group-hover:scale-105"
                src={img}
              />
              <Image
                alt="Figura de onda que decora la tarjeta de menú de la sucursal"
                aria-hidden={true}
                width={1000}
                height={1000}
                className="object-cover absolute w-full right-0 -bottom-14 translate-y-0 transition-transform group-hover:-translate-y-5 filter blur-sm mix-blend-multiply"
                src="/wave-tarjeta-menu.svg"
              />
              <Image
                alt="Figura de onda que decora la tarjeta de menú de la sucursal"
                aria-hidden={true}
                width={1000}
                height={1000}
                className="object-cover absolute w-full right-0 -bottom-14 translate-y-0 transition-transform group-hover:-translate-y-5 filter opacity-80"
                src="/wave-tarjeta-menu-bg.svg"
              />
              <div className="absolute bottom-0 left-0 right-0 pb-8">
                <h3 className="text-white text-center font-bold text-3xl">
                  {titulo}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows]">
                  <p className="text-white text-center overflow-hidden group-hover:opacity-100  transition-opacity">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Tarjeta;
