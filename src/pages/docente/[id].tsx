import { Docente } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [docente, setDocente] = useState<Docente | null>(null);

  const obtenerDatos = async () => {
    const response = await fetch(`/api/docente/${id}`);
    const data = await response.json();
    setDocente(data);
  };

  useEffect(() => {
    if (id) obtenerDatos();
  }, [id]);

  return (
    <div>
      <h1>Detalles del docente</h1>
      {docente ? (
        <div>
          <p>Nombre: {docente.nombre}</p>
          <p>Apellido paterno: {docente.aPaterno}</p>
          <p>Apellido materno: {docente.aMaterno}</p>
          <p>Telefono: {docente.telefono}</p>
          <p>Estado: {docente.estado}</p>
          <p>CURP: {docente.curp}</p>
          <button
            className="bg-pink-400"
            onClick={() => {
              // Redirigir a la página de modificación con id dinamico y los datos del docente
              router.push({
                pathname: `/docente/modificacion/${id}`,
                query: docente,   // Importante, los datos del docente se pasarán a la url de la página de modificación (no quería hacer manejo de context ni instalar zustand zzzz)
              });
            }}
          >
            Editar
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
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
