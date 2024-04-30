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

function TablaClases({ idAlumno }: { idAlumno: number }) {
  const { clases, fetchClases, fetchEstado } = useClases((state) => state);

  useEffect(() => {
    fetchEstado(idAlumno);
    fetchClases(idAlumno);
  }, [idAlumno]);

  return (
    <>
      <Table aria-label="Clases" className="text-black">
        <TableHeader>
          <TableColumn>Clase</TableColumn>
          <TableColumn>Dias</TableColumn>
          <TableColumn>Hora</TableColumn>
          <TableColumn>Sucursal</TableColumn>
        </TableHeader>
        <TableBody>
          {clases.length > 0 ? (
            clases.map((clase: any) => (
              <TableRow key={clase.id}>
                <TableCell>{clase.nombre}</TableCell>
                <TableCell>{clase.dias}</TableCell>
                <TableCell>{clase.hora}</TableCell>
                <TableCell>{clase.sucursal.nombre}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No hay clases inscritas</TableCell>
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
