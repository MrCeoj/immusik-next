import { Docente } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormMod from "@/components/docente/mod-docente";
import Modal from "react-modal";

const Detalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const data = router.query;
  const [docente, setDocente] = useState<Docente | null>(null);

  const [estado, setEstado] = useState<string>("");
  const [masterKey, setMasterKey] = useState("");
  const [isMasterKeyModalOpen, setIsMasterKeyModalOpen] = useState(false);

  const obtenerDatos = async () => {
    const response = await fetch(`/api/docente/${id}`);
    const data = await response.json();
    setDocente(data);
  };

  useEffect(() => {
    if (id) obtenerDatos();
  }, [id]);

  useEffect(() => {
    if (data) {
      setDocente({
        id: parseInt(data.id as string),
        nombre: data.nombre as string,
        aPaterno: data.aPaterno as string,
        aMaterno: data.aMaterno as string,
        curp: data.curp as string,
        telefono: data.telefono as string,
        estado: data.estado as string,
      });
    }
  }, [data]);

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
          obtenerDatos();
        }
      });
    
      return response;
  };

  const handleBack = () => {
    router.push("/docente"); //regresa a la conuslta general de docente
  }

  return (
    <div>
      {docente ? (  
        <div className="w-screen flex items-center bg-primary h-1/8 z-50 rounded-lg mt-1">
        <div className={`w-8 h-8 rounded-full mx-2 p-1 m-3 ${docente.estado === 'Activo' ? 'bg-green-500' : docente.estado === 'VETADO' ? 'bg-red-500' : 'bg-yellow-300'}`}></div>
        <h1 className="text-2xl text-white font-bold m-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Información - {docente.nombre} {docente.aPaterno} {docente.aMaterno}</h1>
        <Link
          onClick={handleBack}
          href={''}
          className="ml-auto pr-1"
        >
          <Image src={require('@/img/back.png')} alt={'foto'} />
        </Link>
      </div>
      ) : (
        <p>Cargando...</p>
      )}

    <div className="grid grid-cols-2 h-full mt-10">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">Datos Personales</h1>
        {docente && <FormMod {...docente} />}
      </div>
      <div className="col-span-1 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl text-center pb-5">Clases Impartidas</h1>
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
              <tr>
                <td className="pl-4 pt-4">Guitarra</td>
                <td className="pl-4 pt-4">Villafontana</td>
                <td className="pl-4 pt-4">Martes - Miercoles</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="bg-gray-300 mt-10 min-w-[500px] max-w-[600px] flex-col rounded-md">
        <h1 className="font-bold text-2xl text-center mt-5">Cambiar Estado del Docente</h1>
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
                } else {
                  setEstado(e.target.value);
                }
              }}
              className="border-2 border-primary text-primary min-w-[170px] max-w-[200px] text-center bg-transparent cursor-pointer"
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

                    const { verified } = await res.json();

                    if (verified) {
                      await fetch(`/api/docente/changeEstado`, {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: docente.id.toString(),
                      });
                      setEstado("VETADO");
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
        </div>

      </div>
    </div>
    </div>
  );
};

export default Detalles;

/**
 * Detalle importante, este archivo tiene corchetes [ ] en el nombre
 * porque es parte del router dinámico de Next.js
 * Lo que sucede es que Next.js toma el nombre desde el push del router
 * y lo convierte en un archivo con el nombre del archivo y los corchetes
 * para que sea dinámico. Tipo, un profesor con id 1, se vería como
 * /docente/detalles/1
 */
