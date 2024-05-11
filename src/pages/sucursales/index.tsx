import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { sucursalContext } from "@/hooks/sucursalContext";

const Index = () => {
  const context = sucursalContext((state: any) => state.context);
  const router = useRouter();

  useEffect(() => {
    if (!context) {
      router.push("/inicio");
    }
  }, [context]);

  return (
    <div className="bg-back-dark text-white h-screen flex flex-wrap justify-around">
      <div className="p-10 h-full flex flex-col justify-center">
        <div
          className="bg-red-600 hover:cursor-pointer"
          onClick={() => router.push("/inicio")}
        >
          <h1 className="text-4xl font-bold text-center">
            {context && `${context.nombre} Cambiar de sucursal`}
          </h1>
        </div>
      </div>
      <div className="p-10 flex flex-col justify-center">
        <div className="bg-red-600 my-10 hover:cursor-pointer" onClick={() => router.push('/sucursales/gastos')}>
          <h1 className="text-4xl font-bold text-center">Gastos</h1>
        </div>

        <div className="bg-red-600 my-10 hover:cursor-pointer" onClick={() => router.push('/sucursales/modificar')}>
          <h1 className="text-4xl font-bold text-center">Editar sucursales</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
