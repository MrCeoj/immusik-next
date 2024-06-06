import router from "next/router";
import Image from "next/image";

export default function Navbar() {
  //funciones para moverte
  const goClases = () => {
    router.push("/clases");
  };
  const regresarMenu = () => {
    router.push("/");
  };

  const goUsuarios = () => {
    router.push("/usuarios");
  };

  return (
    <div className="w-screen px-20 absolute flex items-center bg-transparent h-1/5 left-0 right-0 ml-auto mr-auto">
      <h1 className="font-PassionOne text-6xl text-white">i.m.musik</h1>
      <div className="flex ml-auto text-xl gap-10">
        <button
          className="text-white font-medium p-2 rounded-lg hover:bg-primary hover:relative hover:-translate-y-1 hover:shadow-[0px_0px_20px_8px_rgba(251,_3,_143,_0.25)] transition-all ease-out duration-75"
          onClick={() => router.push("/alumnos")}
        >
          Alumnos
        </button>
        <button
          className="text-white font-medium p-2 rounded-lg hover:bg-primary hover:relative hover:-translate-y-1 hover:shadow-[0px_0px_20px_8px_rgba(251,_3,_143,_0.25)] transition-all ease-out"
          onClick={() => router.push("/docentes")}
        >
          Docentes
        </button>
        <button
          className="text-white font-medium p-2 rounded-lg hover:bg-primary hover:relative hover:-translate-y-1 hover:shadow-[0px_0px_20px_8px_rgba(251,_3,_143,_0.25)] transition-all ease-out"
          onClick={goClases}
        >
          Clases
        </button>
        <button
          className="text-white font-medium p-2 rounded-lg hover:bg-primary hover:relative hover:-translate-y-1 hover:shadow-[0px_0px_20px_8px_rgba(251,_3,_143,_0.25)] transition-all ease-out"
          onClick={goUsuarios}
        >
          Usuarios
        </button>
        <Image
          src={require("@/img/back.png")}
          alt={""}
          className="cursor-pointer transform transition-transform hover:scale-110"
          onClick={regresarMenu}
        ></Image>
      </div>
    </div>
  );
}
