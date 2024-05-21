import { Clase, Docente, Sucursal } from "@/entities";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import FormMod from "@/components/docente/mod-docente";
import Modal from "react-modal";
import withAuth from "@/lib/withAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Detalles = () => {
  type ClaseSucursal = {
    id: number;
    nombre: string;
    dias: string;

    sucursal: Sucursal;
  };

  const router = useRouter();
  const { id } = router.query;
  const [docente, setDocente] = useState<Docente | null>(null);
  const [estado, setEstado] = useState<string>("");
  const [masterKey, setMasterKey] = useState("");
  const [isMasterKeyModalOpen, setIsMasterKeyModalOpen] = useState(false);
  const [clases, setClases] = useState([{}] as ClaseSucursal[]);
  const [tempEstado, setTempEstado] = useState("");
  const [color, setColor] = useState("");

  const toastError = (message: string) => {
    toast.error(message, {
      className: "text-white px-6 py-4 border-0 rounded-md bg-red-500",
      bodyClassName: "font-semibold text-sm text-red-500",
      autoClose: 5000,
      draggable: false,
    });
  };

  const toastSuccess = (message: string) => {
    toast.success(message, {
      className: "text-white px-6 py-4 border-0 rounded-md bg-green-500",
      bodyClassName: "font-semibold text-sm text-green-500",
      autoClose: 3000,
      draggable: false,
    });
  };

  const obtenerDatos = useCallback(async () => {
    if (!id) return;
    const response = await fetch(`/api/docente/${id}`);
    const data = await response.json();
    console.log(data);
    if (data && data.data && data.clases) {
      setDocente(data.data);
      setClases(data.clases);
      switch (data.data.estado) {
        case "VETADO":
          setEstado("VETADO");
          setColor("bg-red-500");
          break;
        default:
          if (clases.length > 0) {
            setEstado("ACTIVO");
            setColor("bg-green-500");
          } else {
            setEstado("INACTIVO");
            setColor("bg-yellow-300");
          }
      }
      console.log("fetcheado");
    }
  }, [clases.length, id]);

  useEffect(() => {
    if (id) {
      obtenerDatos();
    }
  }, [id, obtenerDatos, estado]);

  useEffect(() => {
    const changeEstado = async (estado: string) => {
      await fetch(`/api/docente/changeEstado`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ docente: docente, estado: estado }),
      }).then((res) => res.json());
    };
    if (docente && clases.length >= 0) {
      if (clases.length > 0 && estado === "INACTIVO") {
        setEstado("ACTIVO");
        setColor("bg-green-500");
      } else if (clases.length === 0 && estado === "ACTIVO") {
        setEstado("INACTIVO");
        setColor("bg-yellow-300");
      }

      changeEstado(estado);
    }
  }, [clases.length, docente, estado]);

  const deleteDocenteFromClase = async (id: number) => {
    const response = await fetch(`/api/clase/eliminarDocente`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toastError(data.error);
        } else {
          console.log("se elimino 1");
          obtenerDatos();
        }
      });

    return response;
  };

  const handleBack = () => {
    router.push("/docente"); //regresa a la conuslta general de docente
  };

  return (
    <div>
      {docente ? (
        <div className="w-screen flex items-center bg-primary h-1/8 z-50 rounded-lg mt-1">
          <div className={`w-8 h-8 rounded-full mx-2 p-1 m-3 ${color}`}></div>
          <h1
            className="text-2xl text-white font-bold m-1"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Información - {docente.nombre} {docente.aPaterno} {docente.aMaterno}
          </h1>
          <Link onClick={handleBack} href={""} className="ml-auto pr-1">
            <Image src={require("@/img/back.png")} alt={"foto"} />
          </Link>
        </div>
      ) : (
        <p>Cargando...</p>
      )}

      <ToastContainer />
      <div className="grid grid-cols-2 h-full mt-10">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Datos Personales</h1>
          {docente && (
            <FormMod
              docente={docente}
              onError={(message: string) => toastError(message)}
              onSuccess={(message: string) => toastSuccess(message)}
            />
          )}
        </div>
        <div className="col-span-1 flex justify-center items-center flex-col">
          <h1 className="font-bold text-2xl text-center pb-5">
            Clases Impartidas
          </h1>
          <div className="p-5 bg-gray-300 rounded-md min-w-[500px] max-w-[600px]">
            <table className="bg-gray-300 p-5 rounded-md w-full">
              <thead>
                <tr className="text-left">
                  <th className="pt-4 pl-4">Nombre</th>
                  <th className="pt-4 pl-4">Sucursal</th>
                  <th className="pt-4 pl-4">Dia</th>
                </tr>
              </thead>
              <tbody>
                {clases.map((clase: ClaseSucursal) => (
                  <tr key={clase.id}>
                    <td className="pl-4 pt-4">{clase.nombre}</td>
                    <td className="pl-4 pt-4">
                      {clase.sucursal ? clase.sucursal.nombre : ""}
                    </td>
                    <td className="pl-4 pt-4">{clase.dias}</td>
                    <td className="pl-4 pt-4 flex items-center">
                      <button
                        className="bg-red-500 text-white rounded-md px-3 py-1 mr-2"
                        onClick={() => deleteDocenteFromClase(clase.id)}
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-300 mt-10 min-w-[500px] max-w-[600px] flex-col rounded-md">
            <h1 className="font-bold text-2xl text-center mt-5">
              Cambiar Estado del Docente
            </h1>
            <div className="flex justify-center my-5">
              <select
                value={estado}
                onChange={(e) => {
                  if (estado === "VETADO") {
                    return;
                  }
                  if (e.target.value === "VETADO") {
                    setMasterKey("");
                    setIsMasterKeyModalOpen(true);
                    setTempEstado(e.target.value);
                  } else {
                    setEstado(e.target.value);
                    setTempEstado(e.target.value);
                  }
                }}
                className={`border-2 ${
                  estado === "VETADO"
                    ? "border-gray-500 text-gray-500"
                    : "border-primary text-primary"
                } min-w-[170px] max-w-[200px] text-center bg-transparent cursor-pointer`}
                aria-label="Cambiar estado"
                disabled={estado === "VETADO"}
              >
                {estado === "ACTIVO" && <option value="ACTIVO">ACTIVO</option>}
                <option value="INACTIVO">INACTIVO</option>
                <option value="VETADO">VETADO</option>
              </select>
            </div>

            <Modal
              isOpen={isMasterKeyModalOpen}
              onRequestClose={() => {
                setMasterKey("");
                setIsMasterKeyModalOpen(false);
              }}
            >
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-pink-500">
                    Ingresar contraseña Maestra para vetar a un docente
                  </h2>
                  <h3>Esta acción será permanente</h3>
                  <input
                    type="password"
                    value={masterKey}
                    onChange={(e) => setMasterKey(e.target.value)}
                    placeholder="Ingresa Contraseña Maestra"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
                  />
                  <button
                    onClick={async () => {
                      const res = await fetch("/api/docente/changeEstado", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ masterKey }),
                      });

                      if (docente) {
                        const { verified } = await res.json();

                        if (verified) {
                          await fetch(`/api/docente/changeEstado`, {
                            method: "PATCH",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: docente.id.toString(),
                          });
                          setEstado(tempEstado);
                          setIsMasterKeyModalOpen(false);
                          obtenerDatos();
                        } else {
                          toastError("Contraseña Maestra incorrecta");
                        }
                      }
                    }}
                    className="bg-pink-500 text-white rounded-md px-4 py-2 mr-2"
                  >
                    Confirmar
                  </button>
                  <button
                    onClick={() => {
                      setMasterKey("");
                      setIsMasterKeyModalOpen(false);
                    }}
                    className="bg-gray-300 text-gray-800 rounded-md px-4 py-2"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetallesWithAuth = withAuth(Detalles);

export default DetallesWithAuth;

/**
 * Detalle importante, este archivo tiene corchetes [ ] en el nombre
 * porque es parte del router dinámico de Next.js
 * Lo que sucede es que Next.js toma el nombre desde el push del router
 * y lo convierte en un archivo con el nombre del archivo y los corchetes
 * para que sea dinámico. Tipo, un profesor con id 1, se vería como
 * /docente/detalles/1
 */
