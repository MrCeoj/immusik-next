import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { sucursalContext } from "@/hooks/sucursalContext";

import "react-toastify/dist/ReactToastify.css";

/**
 * Componente para validar la eliminación de la sucursal
 * @param sucursal: la sucursal a eliminar
 * @param setEliminar: permite cambiar el estado de eliminar a false o true
 * @param cambio: variable que si cambia el useEffect en sucursales.tsx se actualiza, actualizando
 * los registros de las sucursales
 * @param setCambio: modifica el valor de cambio de true a false o viceversa
 * @param setEditar: cambia el valor de editar a false o true.
 */
const ConfirmacionEliminar = ({
  sucursal,
  setEliminar,
  cambio,
  setCambio,
  setEditar,
}: {
  sucursal: any;
  setEliminar: any;
  cambio: any;
  setCambio: any;
  setEditar: any;
}) => {
  const router = useRouter();
  const context = sucursalContext((state: any) => state.context);
  const setContext = sucursalContext((state: any) => state.setContext);
  const [contextPrevent, setContextPrevent] = useState(true);
  //useState para la contraseña Maestra
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
    if (!context && contextPrevent) {
      console.log("bye");
      router.push("/inicio");
    }
  }, [context, router, contextPrevent]);

  useEffect(() => {
    if(!contextPrevent)
      setContext(null)
  }, [contextPrevent, setContext])

  const toggleCambio = () => {
    if (cambio) {
      setCambio(false);
    } else {
      setCambio(true);
    }
  };

  //Si se presiona eliminar se ejecuta el siguiente comando
  const handleEliminar = () => {
    if (contrasena === "") {
      toast.error("¡Ingrese la contraseña maestra para continuar!");
      return;
    }

    let id = sucursal.id;
    fetch("/api/Sucursal/", {
      //Se hace fetch a sucursal
      method: "DELETE", //metodo: DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //Se manda id y contraseña maestra
        id,
        contrasena,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Sucursal eliminada exitosamente.") {
            // Si la sucursal de contexto es igual a la que se eliminó se redirige a inicio
            if (context.id === id) {
              setContextPrevent(false);
              console.log("switch to:", contextPrevent)
              toast.success("Sucursal eliminada exitosamente.", {
                onClose: () => router.push("/inicio"),
                autoClose: 1500,
              });
            } else toast.success("Sucursal eliminada exitosamente.");

            setEliminar(false);
            setEditar(false);
            if (cambio) {
              setCambio(false);
            } else {
              setCambio(true);
            }
          } else {
            toast.error(data.message);
          }
        }); //Si hay una respuesta valida se regresa en formato json.
      } else {
        toast.error("Hubo un problema al eliminar la sucursal.");
      }
    });
  };

  //Cierra este componente, regresando a la pantalla de editar
  const handleCancelar = () => {
    setEliminar(false);
  };

  /*CUERPO DEL COMPONENTE:
  Un componente que se muestra frente al resto del programa donde se le pregunta al
  usuario por confirmación de si quiere realmente eliminar la sucursal, puede presionar cancelar
  para no eliminarla o eliminar para confirmar la eliminación.
  */
  return (
    <div className="h-screen w-screen absolute z-10 flex justify-center items-center top-0 left-0 bg-black bg-opacity-50">
      <div className="bg-white p-5 flex flex-col justify-center items-center rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">
          ¿Está seguro que quiere eliminar la sucursal {sucursal.nombre}?
        </h1>
        <p className="text-lg mt-3">
          Esto eliminará todas las clases dentro de esta sucursal y se
          desasignaran estas clases a los alumnos.
        </p>
        <form className="mt-2">
          <label className="text-lg mr-1">Contraseña Maestra</label>
          <input
            className="ml-1 bg-gray-100 py-1 px-2 text-lg rounded-md"
            type="password"
            placeholder="Contraseña Maestra"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          ></input>
        </form>
        <p className="text-sm text-red-500">
          (Es necesaria la Contraseña Maestra para eliminar la sucursal)
        </p>
        <div className="mt-5">
          <button
            onClick={handleCancelar}
            className="bg-gray-500 text-white py-1 px-10 rounded-lg text-lg hover:bg-gray-700 mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleEliminar}
            className="bg-red-500 text-white py-1 px-10 rounded-lg text-lg hover:bg-red-700 ml-2"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionEliminar;
