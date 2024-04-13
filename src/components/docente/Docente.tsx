import { useEffect, useState } from 'react'
import type { Clase, Docente} from '@prisma/client'
import Modal from "react-modal";
import Label from '../form/Label';
import Input from '../form/Input';
import { ToastContainer, toast } from 'react-toastify'

export default function Docente ({docente} : { docente: Docente}){
    const [docentes, setDocentes] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [clases, setClases] = useState([]);
    const [errorClases, setErrorClases] = useState(null);

    fetch("api/docente/obtenerDisponibles").then((response) => {
        if (response.ok) {
          return response.json().then((data) => setDocentes(data)); //Los registros se guardan en alumnoClases
        } else {
          alert("Error al encontrar los registros AlumnoClase");
        }
      });

    const handleVerMas = async () => {
    // Si no se han obtenido las clases se hace una petición a la API para obtenerlos
        if (clases.length === 0) {
            const res = await fetch(`/api/docente/${docente.id}/`);
            const data = await res.json();

            data.error ? setErrorClases(data.error) : setClases(data);
        }
    
        setModalOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg font-bold pl-4 gap-5 justify-center">
				<div className="col-span-4 text-left">{docente.nombre} {docente.aPaterno} {docente.aMaterno}</div>
				<div className="col-span-2 text-left">{docente.telefono}</div>
				<div className={`col-span-2 max-w-28 min-w-20 text-left justify-center ${docente.estado === 'ACTIVO' ? 'bg-active-fill rounded-xl border-4 border-active-stroke text-center text-active-stroke' 
                : docente.estado === 'INACTIVO' ? 'bg-inactive-fill rounded-xl border-4 border-inactive-stroke text-center text-inactive-stroke' 
                : 'bg-banned-fill rounded-xl border-4 border-banned-stroke text-center text-banned-stroke'}`}>{docente.estado}
                </div>
				<div className="col-span-1">
                    <button className="underline" onClick={handleVerMas}>Ver detalles</button>
                </div>
                <Modal
                    isOpen={modalOpen}
                    ariaHideApp={false}
                    onRequestClose={() => setModalOpen(false)}
                    overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50"
                    className="relative bg-customGray p-4 w-full max-w-xl min-h-min rounded"
                    >
                    <h1 className="font-bold text-4xl mb-3 text-center text-white">
                        Detalles de la clase
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        
                    </div>
                    <button
                        onClick={() => setModalOpen(false)}
                        className="absolute top-4 right-4 bg-rose-600 text-white font-bold w-8 h-8 rounded"
                    >
                        ×
                    </button>
                </Modal>
			</div>
        </>
    )
}