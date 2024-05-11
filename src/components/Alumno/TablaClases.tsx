import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TableCell,
  cn,
  Checkbox,
} from "@nextui-org/react";
import { useClases } from "@/hooks/clases/useClases";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function TablaClases({ idAlumno }: { idAlumno: number }) {
  // Este objeto es manejado por zustand, revisar directirio de hooks useClases.ts
  const { clases, fetchClases, fetchEstado, fetchDesiniscribir } = useClases(
    (state) => state
  );

  const [todos, setTodos] = useState(false);
  const [idsAEliminar, setIdsAEliminar] = useState<number[]>([]);
  const [clasesAEliminar, setClasesAEliminar] = useState<string[]>([]);

  const handleEliminar = () => {
    if (idsAEliminar.length !== 0) {
      alert("Vas a eliminar " + clasesAEliminar);
    } else {
      toast.error("Seleccione las clases a desasignar.");
    }
  };

  const selectAll = () => {
    if (todos) {
      setIdsAEliminar([]);
      setClasesAEliminar([]);
      setTodos(false);
    } else {
      setIdsAEliminar(clases.map((cl) => cl.id));
      setClasesAEliminar(clases.map((cl) => cl.nombre));
      setTodos(true);
    }
  };

  const handleSelectClase = (id: number, nombre: string) => {
    const idIndex = idsAEliminar.indexOf(id);

    if (idIndex === -1) {
      setIdsAEliminar([...idsAEliminar, id]);
      setClasesAEliminar([...clasesAEliminar, nombre]);
    } else {
      setIdsAEliminar(idsAEliminar.filter((idAE) => idAE !== id));
      setClasesAEliminar(clasesAEliminar.filter((cl) => cl !== nombre));
    }
  };

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
  };

  return (
    <div className="flex flex-col items-center">
      <Table aria-label="Clases" className="text-black">
        <TableHeader>
          <TableColumn>Clase</TableColumn>
          <TableColumn>Dias</TableColumn>
          <TableColumn>Hora</TableColumn>
          <TableColumn>Sucursal</TableColumn>
          <TableColumn>
            <Checkbox
              isSelected={idsAEliminar.length === clases.length}
              onChange={selectAll}
            />
          </TableColumn>
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
                  <Checkbox
                    isSelected={idsAEliminar.includes(clase.id)}
                    onChange={() => handleSelectClase(clase.id, clase.nombre)}
                  />
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
      <button
        onClick={handleEliminar}
        className="my-2 bg-red-500 py-1 px-2 rounded-md text-white font-normal text-base hover:bg-red-600 active:bg-red-700"
      >
        Desasignar clases
      </button>
    </div>
  );
}

export default TablaClases;
