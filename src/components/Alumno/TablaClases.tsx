import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TableCell,
  cn,
} from "@nextui-org/react";
import { useClases } from "@/hooks/clases/useClases";
import { useEffect } from "react";
import { toast } from "react-toastify";

function TablaClases({ idAlumno }: { idAlumno: number }) {
  // Este objeto es manejado por zustand, revisar directirio de hooks useClases.ts
  const { clases, fetchClases, fetchEstado, fetchDesiniscribir } = useClases((state) => state);

  // Se ejecuta al cargar el componente
  useEffect(() => {
    fetchEstado(idAlumno);
    fetchClases(idAlumno);
  }, [idAlumno]);

  // Función para desinscribir a un alumno de una clase
  const handleDesinscribir = async (idClase: number) => {
    const result = await fetchDesiniscribir(idClase, idAlumno);
    if (result.status === 500) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message);
    fetchClases(idAlumno); // Refrescar la tabla tras desinscribir
  }

  return (
    <>
      <Table aria-label="Clases" className="text-black">
        <TableHeader>
          <TableColumn>Clase</TableColumn>
          <TableColumn>Dias</TableColumn>
          <TableColumn>Hora</TableColumn>
          <TableColumn>Sucursal</TableColumn>
          <TableColumn> </TableColumn>
        </TableHeader>
        <TableBody>
          {clases.length > 0 ? (
            clases.map((clase: any) => (
              <TableRow key={clase.id}>
                <TableCell>{clase.nombre}</TableCell>
                <TableCell>{clase.dias}</TableCell>
                <TableCell>{clase.hora}</TableCell>
                <TableCell>{clase.sucursal.nombre}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleDesinscribir(clase.id)} 
                    className="bg-rose-600 text-white font-bold w-6 h-6 rounded hover:bg-rose-900">
                    ×
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No hay clases inscritas</TableCell>
              <TableCell>.</TableCell>
              <TableCell>.</TableCell>
              <TableCell>.</TableCell>
              <TableCell>.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

export default TablaClases;
