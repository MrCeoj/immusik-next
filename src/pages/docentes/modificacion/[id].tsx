import FormMod from "@/components/docente/mod-docente";
import { Docente } from "@/entities/index";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import withAuth from "@/lib/withAuth"


const Modificacion = () => {
  const router = useRouter();
  const data = router.query;

  //Parsear los datos de la url a un objeto Docente
  const [docente, setDocente] = useState<Docente | null>(null);
  
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

  return <div>{docente && <FormMod {...docente} />}</div>;
};

const ModificacionAuth = withAuth(Modificacion) // Proteger la página con el HOC, mirar @/lib/withAuth.tsx

export default ModificacionAuth;

/**
 * Detalle importante, este archivo tiene corchetes [ ] en el nombre
 * porque es parte del router dinámico de Next.js
 * Lo que sucede es que Next.js toma el nombre desde el push del router
 * y lo convierte en un archivo con el nombre del archivo y los corchetes
 * para que sea dinámico. Tipo, un profesor con id 1, se vería como
 * /docente/modificacion/1
 */