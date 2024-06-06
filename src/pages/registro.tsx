import FormRegistro from "@/components/FormRegistroUsuario";
import Navbar from "@/components/Navbar";
import BarraNavegacion from "@/components/barraNavegacion";

// Función que establece el título de la página
export function getServerSideProps() {
  return {
    props: { title: "Registro" },
  };
}

// Página de registro de usuario
export default function RegistroUsuario() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white">
        <h1 className="text-center text-4xl font-bold mb-4 text-white">
          Registrarse
        </h1>
        <FormRegistro />
      </div>
    </>
  );
}
