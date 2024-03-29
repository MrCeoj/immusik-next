import Image from "next/image";
import Alumnos from "@/img/T1A.png";
import Docentes from "@/img/T2D.png";
import Cursos from "@/img/T3C.png";
import Sucursales from "@/img/T4S.png";

const Datos = [
  {
    id: 1,
    img: Alumnos,
    titulo: "Alumnos",
    desc: "Gestión de alumnos",
  },
  {
    id: 2,
    img: Docentes,
    titulo: "Alumnos",
    desc: "Gestión de docentes",
  },
  {
    id: 3,
    img: Cursos,
    titulo: "Alumnos",
    desc: "Gestión de clases",
  },
  {
    id: 4,
    img: Sucursales,
    titulo: "Alumnos",
    desc: "Información y gastos",
  },
];

const Tarjeta = () => {
  return (
    <div className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6">
      {Datos.map(({ id, img, titulo, desc }) => {
        return (
          <div
            key={id}
            className="bg-gradient-to-b from-pink-400 to-pink-900 p-1 rounded-2xl"
          >
            <Image
              alt=""
              className="object-cover w-full max-w-[250px] h-[300px] rounded-2xl"
              src={img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tarjeta;
