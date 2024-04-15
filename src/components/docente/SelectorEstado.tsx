import { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  estado: string;
  id: number;
  actualizarDocente: any; // Este método se encuentra en el index, actualiza los atributos de los doncentes en la lista principal
  setClases: any;
  handleEstadoChange: any;
};

const SelectorEstado: React.FC<Props> = ({
  estado,
  id,
  actualizarDocente,
  setClases,
  handleEstadoChange,
}) => {
  const [actualState, setActualState] = useState(estado); // Estado manejado dentro del componente
  const [custom, setCustom] = useState(""); // Estilos personalizados para el select
  const [confirmacion, setConfirmacion] = useState(false); // Para mostrar el modal de confirmación
  const [masterKey, setMasterKey] = useState(""); // Para almacenar la clave maestra ingresada

  // Sincroniza el estado del componente con el estado del docente
  useEffect(() => {
    setActualState(estado);
  }, [estado]);

  // Cambia los estilos del select dependiendo del estado del docente
  useEffect(() => {
    if (actualState === "ACTIVO") {
      setCustom(
        "bg-secciones px-2 py-1 bg-opacity-0 border border-active-fill text-active-fill"
      );
    } else if (actualState === "INACTIVO") {
      setCustom(
        "bg-secciones px-2 py-1 bg-opacity-0 border border-inactive-fill text-inactive-fill"
      );
      if (estado !== "INACTIVO") handleInactivo();
    } else if (actualState === "VETADO") {
      setCustom(
        "bg-secciones px-2 py-1 bg-opacity-0 border border-banned-fill text-banned-fill"
      );
    }
  }, [actualState]);

  // Maneja el cambio de estado del docente cuando se selecciona una opción
  const handleChange = (e: any) => {
    if (e.target.value === "VETADO" && estado !== "VETADO") {
      setConfirmacion(true);
    } else {
      setActualState(e.target.value);
    }
  };

  // Verifica si el docente ya está vetado para deshabilitar el select
  const handleVetado = () => {
    return actualState === "VETADO";
  };

  /**
   * Función que hace peticiones a la api para cambiar el estado del docente a Inactivo
   * @returns - Mensaje de éxito o error
   */
  const handleInactivo = async () => {
    const res = await fetch("/api/docente/changeEstado", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: "INACTIVO",
        docente: { id },
      }),
    });

    const data = await res.json();

    if (data?.error) {
      toast.error(data.error);
      return;
    }

    actualizarDocente();
    setClases([]);
    toast.info("Estado cambiado a Inactivo");
  };

  /**
   * Función que hace peticiones a la api para verificar clave maestra y vetar docente
   * @returns - Mensaje de éxito o error
   */
  const handleMasterKey = async () => {
    // Verificar clave maestra
    const res = await fetch("/api/docente/changeEstado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        masterKey,
      }),
    });

    const { verified } = await res.json(); // Verificar si la clave es correcta

    // Si la clave no es correcta, mostrar mensaje de error
    if (!verified) {
      toast.error("Contraseña maestra incorrecta");
      return;
    }

    // Vetar docente
    const resVeto = await fetch("/api/docente/changeEstado", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: id.toString(),
    });
    if (resVeto.status === 500) {
      toast.error("Error al vetar docente");
      return;
    }

    // Actualizar el estado del docente y mostrar mensaje de éxito
    setActualState("VETADO");
    setConfirmacion(false);
    handleVetado();
    setClases([]);
    handleEstadoChange("VETADO");
    actualizarDocente();
    toast.info("El docente ha sido vetado");
  };

  // Cierra el modal de confirmación
  const closeModal = () => {
    setConfirmacion(false);
  };

  return (
    <>
      <div className="pb-6 flex flex-col items-center gap-3">
        <label className="text-white font-semibold text-xl">Estado</label>
        <select
          value={actualState}
          className={custom}
          onChange={handleChange}
          disabled={handleVetado()}
        >
          {actualState === "ACTIVO" && (
            <option
              className="bg-secciones border-solid text-active-fill"
              value="ACTIVO"
            >
              ACTIVO
            </option>
          )}
          {actualState !== "VETADO" && (
            <option className="bg-secciones border-solid text-inactive-fill">
              INACTIVO
            </option>
          )}
          <option className="bg-secciones border-solid text-banned-fill">
            VETADO
          </option>
        </select>
      </div>
      <Modal
        isOpen={confirmacion}
        ariaHideApp={false}
        onRequestClose={() => closeModal()}
        overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/30 backdrop-blur-sm"
        className="relative bg-back-dark w-2/3 max-w-5xl min-h-min rounded"
      >
        <div className="flex flex-col p-4 items-center">
          <h2 className="text-center m-2 text-xl text-white font-semibold">
            ¿Estás seguro de vetar a este docente?
          </h2>
          <h3 className="text-center mb-2 text-lg text-danger-red">
            Esta acción será permanente
          </h3>
          <div className="flex flex-col w-3/5 gap-4 items-center">
            <div className="flex flex-col w-full">
              <label className="text-white font-semibold">
                Ingrese la contraseña maestra para confirmar
              </label>
              <input
                type="password"
                className="bg-secciones border-solid text-white p-2"
                onChange={(e) => setMasterKey(e.target.value)}
              />
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button
                className="bg-pink-accent text-white font-bold w-20 h-8 rounded hover:bg-danger-red transition ease-out duration-75 disabled:bg-disabled"
                onClick={() => handleMasterKey()}
                disabled={masterKey.length < 3}
              >
                Sí
              </button>
              <button
                className="bg-back-dark text-white font-bold w-20 h-8 rounded hover:bg-secciones transition ease-out duration-75"
                onClick={() => closeModal()}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectorEstado;
