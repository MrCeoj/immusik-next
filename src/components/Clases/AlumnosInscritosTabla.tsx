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
} from "@nextui-org/react";
import { Alumno } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AlumnosInscritosTabla({
  alumnos,
  clase,
}: {
  alumnos: any;
  clase: any;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ids, setIds] = useState<number[]>([]);
  const [nombres, setNombres] = useState<string[]>([]);
  const [alumnosTemp, setAlumnosTemp] = useState([]);

  const conseguirAlumnos = () => {
    const data = {
      id: clase.id,
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

  const handleDesasignar = () => {
    if (ids.length === 0) {
      toast.error("Seleccione los alumnos a desasignar.");
    } else {
      onOpen();
    }
  };

  const handleSelect = (id: number, nombre: string, aPaterno: string) => {
    const index = ids.indexOf(id);
    if (index === -1) {
      setIds([...ids, id]);
      const nombreTemp: string = nombre + " " + aPaterno;
      setNombres([...nombres, nombreTemp]);
    } else {
      setIds(ids.filter((idTemp) => idTemp !== id));
      const nombreTemp2: string = nombre + " " + aPaterno;
      setNombres(nombres.filter((nombreTemp) => nombreTemp !== nombreTemp2));
    }
  };

  const handleSelectTodos = () => {
    if (ids.length === alumnosTemp.length) {
      setIds([]);
      setNombres([]);
    } else {
      setIds(alumnosTemp.map((alumno: Alumno) => alumno.id));
      setNombres(
        alumnosTemp.map(
          (alumno: Alumno) => alumno.nombre + " " + alumno.aPaterno
        )
      );
    }
  };

  useEffect(() => {
    conseguirAlumnos();
  }, []);

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
            onClose();
            setIds([]);
            setNombres([]);
            toast.success("Alumnos desasignados exitosamente.");
            conseguirAlumnos();
          } else {
            onClose();
            setIds([]);
            setNombres([]);
            toast.error("Error al desasignar a los alumnos.");
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
        <Table>
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
        <Table>
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
        className="bg-red-500 py-2 px-3 mt-3 rounded-md text-white hover:bg-red-700 self-center"
      >
        Desasignar
      </button>
    </div>
  );
}

export default AlumnosInscritosTabla;
