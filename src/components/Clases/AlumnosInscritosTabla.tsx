import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
  cn,
} from "@nextui-org/react";
import { Alumno } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AlumnosInscritosTabla({
  alumnos,
  clase,
  actualizarCupo,
}: {
  alumnos: any;
  clase: any;
  actualizarCupo: () => void;
}) {
  //Variables para manejar el modal de confirmación para desasignar alumnos
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [ids, setIds] = useState<number[]>([]); //ids de alumnos a desasignar
  const [nombres, setNombres] = useState<string[]>([]); //nombres de alumnos a desasignar
  const [alumnosTemp, setAlumnosTemp] = useState([]); //variable donde se guardan los alumnos actuales

  //Se consiguen los alumnos de la clase actual
  const conseguirAlumnos = () => {
    const data = {
      id: clase.id, //se envia como parametro la id de la clase
    };
    fetch("api/alumnoClaseDeCiertaClase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          setAlumnosTemp(data);
        });
      } else {
        return response.json().then((data) => {
          if (
            data.message === "No se encontraron alumnos inscritos a la clase."
          ) {
            setAlumnosTemp([]);
          } else {
            toast.error("Error al conseguir a los alumnos.");
          }
        });
      }
    });
  };

  //Función para desasignar alumnos seleccionados
  const handleDesasignar = () => {
    if (ids.length === 0) {
      //Si no hay ningun alumno seleccionado no se permite desasignar
      toast.error("Seleccione los alumnos a desasignar.");
    } else {
      onOpen();
    }
  };

  //Función que maneja la selección de un alumno, recibe la id del alumno,
  //su nombre y su apellido paterno
  const handleSelect = (id: number, nombre: string, aPaterno: string) => {
    const index = ids.indexOf(id); //se busca su id dentro de las seleccionadas
    if (index === -1) {
      //Si no está se agrega su id al arreglo de ids y su nombre+apellido paterno al arreglo de nombres
      setIds([...ids, id]);
      const nombreTemp: string = nombre + " " + aPaterno;
      setNombres([...nombres, nombreTemp]);
    } else {
      //Si ya está en el arreglo se quita de el.
      setIds(ids.filter((idTemp) => idTemp !== id));
      const nombreTemp2: string = nombre + " " + aPaterno;
      setNombres(nombres.filter((nombreTemp) => nombreTemp !== nombreTemp2));
    }
  };

  //Selecciona todos
  const handleSelectTodos = () => {
    if (ids.length === alumnosTemp.length) {
      //Si ya están seleccionados todos, se vacía el arreglo.
      setIds([]);
      setNombres([]);
    } else {
      //Si no están seleccionados todos, se seleccionan todos
      setIds(alumnosTemp.map((alumno: Alumno) => alumno.id));
      setNombres(
        alumnosTemp.map(
          (alumno: Alumno) => alumno.nombre + " " + alumno.aPaterno
        )
      );
    }
  };

  //Esto se ejecuta cada que carga este componente
  useEffect(() => {
    conseguirAlumnos(); //Se consiguen los alumnos que hay en esta clase
  }, []);

  //Esto se ejecuta ya que se presiona aceptar en la pantalla de confirmación
  const desasignar = (onClose: any) => {
    const data = {
      claseId: clase.id,
      alumnoId: ids,
    };

    fetch("api/alumnoClaseEliminarMuchos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Alumnos desasignados exitosamente.") {
            actualizarCupo(); //Se actualiza el cupo de la clase
            onClose(); //Se cierra el modal
            setIds([]); //Se vacía el arreglo de is
            setNombres([]); //Se vacía el arreglo de nombres
            toast.success("Alumnos desasignados exitosamente."); //Se informa al usuario
            conseguirAlumnos(); //Se actualiza la tabla de alumnos
          } else {
            onClose(); //Se cierra el modal
            setIds([]); //Se vacía el arreglo de ids
            setNombres([]); //Se vacía el arreglo de nombres
            toast.error("Error al desasignar a los alumnos."); //Se informa al usuario
          }
        });
      } else {
        return response.json().then((data) => {
          onClose();
          setIds([]);
          setNombres([]);
          toast.error(data.message);
        });
      }
    });
  };

  return (
    <div className="text-black flex flex-col items-center gap-1">
      <h1 className="font-bold text-white text-lg">Alumnos</h1>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                ¿Seguro que quiere desasignar a los siguientes alumnos de{" "}
                {clase.nombre}?
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  {nombres.map((nombreTemp) => (
                    <p>{nombreTemp}</p>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cancelar</Button>
                <Button color="danger" onPress={() => desasignar(onClose)}>
                  Desasignar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {alumnosTemp.length > 0 ? (
        <Table
          removeWrapper
          className={cn("bg-transparent text-white")}
          classNames={{
            table: "bg-secciones",
            th: "bg-gray-contrast bg-opacity-40 text-lg text-white ",
            td: "bg-transparent border-b border-white",
          }}
        >
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Apellido Paterno</TableColumn>
            <TableColumn>Apellido Materno</TableColumn>
            <TableColumn>
              <Checkbox
                isSelected={ids.length === alumnosTemp.length}
                onChange={handleSelectTodos}
              />
            </TableColumn>
          </TableHeader>
          <TableBody>
            {alumnosTemp.map((alumno: any) => (
              <TableRow>
                <TableCell>{alumno.nombre}</TableCell>
                <TableCell>{alumno.aPaterno}</TableCell>
                <TableCell>{alumno.aMaterno}</TableCell>
                <TableCell>
                  <Checkbox
                    isSelected={ids.includes(alumno.id)}
                    onChange={() =>
                      handleSelect(alumno.id, alumno.nombre, alumno.aPaterno)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Table
          removeWrapper
          className={cn("bg-transparent text-white")}
          classNames={{
            table: "bg-secciones",
            th: "bg-gray-contrast bg-opacity-40 text-lg text-white ",
            td: "bg-transparent border-b border-white",
          }}
        >
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Apellido Paterno</TableColumn>
            <TableColumn>Apellido Materno</TableColumn>
            <TableColumn>
              <Checkbox></Checkbox>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>.</TableCell>
              <TableCell>.</TableCell>
              <TableCell>.</TableCell>
              <TableCell>.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      <button
        onClick={handleDesasignar}
        className="my-4 bg-red-500 py-1 px-2 rounded-md text-white font-normal text-base hover:bg-red-600 active:bg-red-700"
      >
        Desasignar Alumno(s)
      </button>
    </div>
  );
}

export default AlumnosInscritosTabla;
