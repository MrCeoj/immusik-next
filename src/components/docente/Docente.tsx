import type { Docente } from "@prisma/client";
import ModalDocente from "./ModalDocente";
import { obtenerDocente } from "@/business/DocenteDelegate";

export default function Docente({
  docente,
  obtenerDocentes,
}: {
  docente: Docente;
  obtenerDocentes: () => void;
}) {
  return (
    <>
      <div className="grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg font-bold pl-4 gap-5 items-center">
        <div className="col-span-4 text-left">
          {docente.nombre} {docente.aPaterno} {docente.aMaterno}
        </div>
        <div className="col-span-2 text-left">{docente.telefono}</div>
        <div
          className={`col-span-2 max-w-28 min-w-20 text-left justify-center ${
            docente.estado === "ACTIVO"
              ? "bg-active-fill rounded-xl border-4 border-active-stroke text-center text-active-stroke"
              : docente.estado === "INACTIVO"
              ? "bg-inactive-fill rounded-xl border-4 border-inactive-stroke text-center text-inactive-stroke"
              : "bg-banned-fill rounded-xl border-4 border-banned-stroke text-center text-banned-stroke"
          }`}
        >
          {docente.estado}
        </div>
        <ModalDocente
          docenteArgs={docente}
          obtenerDocentes={obtenerDocentes}
        ></ModalDocente>
      </div>
    </>
  );
}
