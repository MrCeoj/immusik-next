import { Docente } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { Clase } from "@/entities";
import Modal from "react-modal";

// Importante, este archivo es un componente que protege la página de usuarios no autenticados
// Mirar el archivo withAuth.tsx en la carpeta lib
import withAuth from "@/lib/withAuth";

const Detalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [docente, setDocente] = useState<Docente | null>(null);
  const [estado, setEstado] = useState<string>("");
  const [masterKey, setMasterKey] = useState("");
  const [isMasterKeyModalOpen, setIsMasterKeyModalOpen] = useState(false);
  const [clases, setClases] = useState([{}] as Clase[]);
  const [tempEstado, setTempEstado] = useState("");

  const obtenerDatos = useCallback(async () => {
    if (!id) return;

    const response = await fetch(`/api/docente/${id}`);
    const data = await response.json();
    if (data && data.data && data.clases) {
      setDocente(data.data);
      setClases(data.clases);
      switch(data.data.estado){
        case "VETADO":
          setEstado("VETADO");
          break;
        default:
          if (clases.length > 0) {
            setEstado("ACTIVO");
          } else {
            setEstado("INACTIVO");
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
      } else if (clases.length === 0 && estado === "ACTIVO") {
        setEstado("INACTIVO");
      }

      changeEstado(estado);
    }
  }, [clases.length, docente, estado]);

  const handleEditClick = () => {
    router.push(`/docente/modificacion/${id}`);
  };

  const deleteDocenteFromClase = async (id: number) => {
    const response = await fetch(`/api/clase/eliminarDocente`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: id.toString(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          console.log("se elimino 1");
          obtenerDatos();
        }
      });

    return response;
  };

  return (
    <div>
      <h1>Detalles del docente</h1>
      {docente ? (
        <div>
          <p>Nombre: {docente.nombre}</p>
          <p>Apellido paterno: {docente.aPaterno}</p>
          <p>Apellido materno: {docente.aMaterno}</p>
          <p>Telefono: {docente.telefono}</p>
          <p>CURP: {docente.curp}</p>
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
            aria-label="Cambiar estado"
            disabled={estado === "VETADO"}
          >
            {estado === "ACTIVO" && <option value="ACTIVO">ACTIVO</option>}
            <option value="INACTIVO">INACTIVO</option>
            <option value="VETADO">VETADO</option>
          </select>
          <h2>Clases</h2>
          <ul className="my-5">
            {clases.map((clase: Clase) => (
              <li key={clase.id} className="flex gap-5">
                <p>Nombre: {clase.nombre}</p>
                <p>Horario: {clase.dias}</p>
                <p>Salón: {clase.hora}</p>
                <button
                  onClick={() => deleteDocenteFromClase(clase.id)}
                  className="bg-red-500 text-white rounded-md px-4 py-2"
                ></button>
              </li>
            ))}
          </ul>

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
                    } else {
                      alert("Contraseña maestra incorrecta");
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
          <button className="bg-pink-400" onClick={handleEditClick}>
            Editar
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

const DetallesId = withAuth(Detalles); // Proteger la página con el HOC

export default DetallesId;

/**
 * Detalle importante, este archivo tiene corchetes [ ] en el nombre
 * porque es parte del router dinámico de Next.js
 * Lo que sucede es que Next.js toma el nombre desde el push del router
 * y lo convierte en un archivo con el nombre del archivo y los corchetes
 * para que sea dinámico. Tipo, un profesor con id 1, se vería como
 * /docente/detalles/1
 */
