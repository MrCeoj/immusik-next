import { useEffect } from "react";
import { sucursalContext } from "@/hooks/sucursalContext";

const Index = () => {
  const context = sucursalContext((state: any) => state.context);

  useEffect(() => {
    if (!context) {
      router.push("/inicio");
    }
  }, [context]);

  return (
    <div className="bg-back-dark text-white h-screen flex flex-wrap justify-around">
      <div className="p-10">
        <div className="bg-red-400">
          <h1 className="text-4xl font-bold text-center"></h1>
        </div>
      </div>
      <div className="p-10">
        <div className="bg-red-400">
          <h1 className="text-4xl font-bold text-center">¡Bienvenido!</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
