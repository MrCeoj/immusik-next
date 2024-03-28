import { Metadata } from "next";
import Image from "next/image";
import FormDocente from "@/components/docente/form-docente";
import Link from "next/link";

// Función que establece el título de la página
export function getServerSideProps() {
  return {
    props: { title: "Registro Docente" },
  };
}

const Registrar = () => {
  return (
    <>
      <div className="w-screen flex items-center bg-primary h-1/8 fixed top-0 z-50 rounded-lg mt-1 ">
        <Image
          src={require("@/img/immusik.png")}
          alt={"hola"}
          className="w-20 m-1"
        />
        <h1 className="font-bold text-white text-2xl ml-3">
          Registro de Docente
        </h1>
        <Link
          onClick={() => window.history.back()}
          href={""}
          className="ml-auto pr-1"
        >
          <Image src={require("@/img/back.png")} alt={"foto"} />
        </Link>
      </div>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="bg-white/85 p-8 rounded-lg w-10/12">
          <h1 className="text-center text-4xl font-bold mb-4 text-black">
            Datos Personales
          </h1>
          <FormDocente />
        </div>
      </div>
    </>
  );
};

export default Registrar;
