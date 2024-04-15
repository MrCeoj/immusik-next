import { toast } from "react-toastify";
import { toTitleCase } from "@/lib/utils";

type Props = {
    mensajeClase: () => string | null;
    clases: any[] | null;
    setClases: any;
    docente: any;
    actualizarDocente: any;
}

/**
 * Tabla que muestra las clases asignadas a un docente.
 * @param props - Lo formateé de esta forma porque como son dinámicos y pueden recibir null, necesitaba que fueran opcionales.
 * @returns Un componente con la tabla de clases asignadas a un docente.
 */
const TablaClases: React.FC<Props> =({
  mensajeClase,
  clases,
  setClases,
  docente,
  actualizarDocente
})=> {
  //funcion para eleiminar al docente de la clase
  const handleEliminarClase = async (idClase: number) => {
    const res = await fetch("/api/clase/eliminarDocente", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idClase,
        idDocente: docente.id,
      }),
    });

    const data = await res.json();

    if (data?.error) {
      toast.error(data.error);
    } else {
      //Actualizar lista de clases
      setClases(clases?.filter((clase) => clase.id !== idClase) || null);

      // Se actualiza la información de la clase
      actualizarDocente();
      toast.success("Clase desasignada correctamente", {
        autoClose: 2000,
      });
    }
  };
  return (
    <div className="flex flex-col justify-between overflow-y-auto w-full h-3/5 text-white">
      {mensajeClase() ? (
        <p className="flex-grow grid place-items-center">{mensajeClase()}</p>
      ) : (
        <table className="w-full text-center text-white">
          <caption className="font-bold text-xl sticky mb-3 top-0 z-10">
            Clases
          </caption>
          <thead>
            <tr className="bg-gray-contrast sticky rounded-lg top-0 z-10 font-normal">
              <th className="py-1">Clase</th>
              <th className="py-1">Horario</th>
              <th className="py-1">Días</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clases?.map((clase, index) => (
              <tr key={index} className="border-b-2">
                <td className="py-2">{toTitleCase(clase.nombre)}</td>
                <td className="py-2">{toTitleCase(clase.hora)}</td>
                <td className="py-2">{toTitleCase(clase.dias)}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEliminarClase(clase.id)}
                    className="bg-rose-600 text-white font-bold w-6 h-6 rounded"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TablaClases