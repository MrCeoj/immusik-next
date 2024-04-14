import { useEffect, useState } from 'react'
import type { Clase, Docente} from '@prisma/client'
import Modal from "react-modal";
import Label from '../form/Label';
import Input from '../form/Input';
import { ToastContainer, toast } from 'react-toastify'
import ModalDocente from './ModalDocente';

export default function Docente ({docente, actualizarDocente} : { docente: Docente, actualizarDocente: any}){
    const [docentes, setDocentes] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [errorClases, setErrorClases] = useState(null);

    useEffect(() => {
        // Se obtienen todos los docentes disponibles (que no estén vetados)
        // para no hacer fetch por cada clase
        fetch("api/docente/obtenerDisponibles")
          .then((res) => res.json())
          .then((data) => setDocentes(data));
      }, [docente]); //Se ejecuta cada vez que se modifica el docente


    return (
        <>
            <div className="grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg font-bold pl-4 gap-5 justify-center">
				<div className="col-span-4 text-left">{docente.nombre} {docente.aPaterno} {docente.aMaterno}</div>
				<div className="col-span-2 text-left">{docente.telefono}</div>
				<div className={`col-span-2 max-w-28 min-w-20 text-left justify-center ${docente.estado === 'ACTIVO' ? 'bg-active-fill rounded-xl border-4 border-active-stroke text-center text-active-stroke' 
                : docente.estado === 'INACTIVO' ? 'bg-inactive-fill rounded-xl border-4 border-inactive-stroke text-center text-inactive-stroke' 
                : 'bg-banned-fill rounded-xl border-4 border-banned-stroke text-center text-banned-stroke'}`}>{docente.estado}
                </div>
                <ModalDocente
                    docente={docente} actualizarDocente={actualizarDocente}                   
                >
                </ModalDocente>
			</div>
        </>
    )
}