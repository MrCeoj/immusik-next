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
import ConfirmarDesasignarClase from "./ConfirmarDesasignarClase";

function TablaClases({ idAlumno, alumno, cambio, setCambio }: { idAlumno: number; alumno: any; cambio: any; setCambio: any;}) {
  // Este objeto es manejado por zustand, revisar directirio de hooks useClases.ts
  const { clases, fetchClases, fetchEstado, fetchDesiniscribir } = useClases(
    (state) => state
  );

  //useState que maneja si están seleccionadas todas las clases o no
  const [todos, setTodos] = useState(false);

  //useStates que contienen los nombres de las clases a eliminar y sus ids
  const [idsAEliminar, setIdsAEliminar] = useState<number[]>([]);
  const [clasesAEliminar, setClasesAEliminar] = useState<string[]>([]);

  //useState que maneja el componente de confirmación de eliminación
  const [confirmar, setConfirmar] = useState(false);

  // //useState que detecta cualquier cambio
  // const [cambio, setCambio] = useState(false);

  //Función para eliminar, se ejecuta cuando se presiona el botón de desasignar clases.
  const handleEliminar = () => {
    //Si no hay clases seleccionadas no te permite operar
    if (idsAEliminar.length !== 0) {
      setConfirmar(true);
    } else {
      toast.error("Seleccione las clases a desasignar.");
    }
  };

  //Función para seleccionar todos, se ejecuta cuando se presiona el checkbox para seleccionar todo
  const selectAll = () => {
    //Si ya estan seleccionados todos se deseleccionan, vaciando el arreglo
    if (todos) {
      setIdsAEliminar([]);
      setClasesAEliminar([]);
      setTodos(false);
    } else {
      /*Si no están seleccionados todos, se seleccionan todos, agregando los nombres
      e ids de todas las clases al arreglo de ids a eliminar y clases a eliminar*/
      setIdsAEliminar(clases.map((cl) => cl.id));
      setClasesAEliminar(clases.map((cl) => cl.nombre));
      setTodos(true);
    }
  };

  /**
   * Función que se ejecuta cada que se selecciona un checkbox de una clase
   * @param id id de la clase seleccionada
   * @param nombre nombre de la clase seleccionada
   */
  const handleSelectClase = (id: number, nombre: string) => {
    //Se obtiene el indice de la id de la clase a eliminar dentro del
    //arreglo de clases para saber si ya está en el arreglo o no
    const idIndex = idsAEliminar.indexOf(id);

    if (idIndex === -1) {
      //Si no está en el arreglo, se agrega su id y su nombre a sus respectivos arreglos
      setIdsAEliminar([...idsAEliminar, id]);
      setClasesAEliminar([...clasesAEliminar, nombre]);
    } else {
      //Si ya está en el arreglo se quita de ambos arreglos
      setIdsAEliminar(idsAEliminar.filter((idAE) => idAE !== id));
      setClasesAEliminar(clasesAEliminar.filter((cl) => cl !== nombre));
    }
  };

  // Se ejecuta al cargar el componente
  useEffect(() => {
    fetchEstado(idAlumno);
    fetchClases(idAlumno);
  }, [idAlumno]);

  //Se ejecuta al cargar el componente y cuando se detecta un cambio en la variable cambio
  useEffect(() => {
    fetchClases(idAlumno);
  }, [cambio]);

  return (
    <div className="flex flex-col items-center p-5 ">
      {confirmar && (
        <ConfirmarDesasignarClase
          setConfirmar={setConfirmar}
          clases={clasesAEliminar}
          ids={idsAEliminar}
          alumno={alumno}
          cambio={cambio}
          setCambio={setCambio}
        />
      )}
      <Table aria-label="Clases" color={"secondary"} className={cn("bg-transparent text-white")} removeWrapper
        classNames={{
          table: "bg-secciones",
          th: "bg-gray-contrast bg-opacity-40 text-lg text-white ",
          td: "bg-transparent border-b border-white"
        }}>
        <TableHeader>
          <TableColumn >Clase</TableColumn>
          <TableColumn >Dias</TableColumn>
          <TableColumn >Hora</TableColumn>
          <TableColumn >Sucursal</TableColumn>
          <TableColumn >
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
        className="my-4 bg-red-500 py-1 px-2 rounded-md text-white font-normal text-base hover:bg-red-600 active:bg-red-700"
      >
        Desasignar clase(s)
      </button>
    </div>
  );
}

export default TablaClases;
