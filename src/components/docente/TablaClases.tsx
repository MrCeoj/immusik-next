import { toast } from "react-toastify";
import { toTitleCase } from "@/lib/utils";
import Image from "next/image";
import deleteIcon from "@/img/deleteIcon.png";
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
  cn,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  mensajeClase: () => string | null;
  clases: any[] | null;
  setClases: any;
  docente: any;
  actualizarDocente: any;
};

/**
 * Tabla que muestra las clases asignadas a un docente.
 * @param props - Lo formateé de esta forma porque como son dinámicos y pueden recibir null, necesitaba que fueran opcionales.
 * @returns Un componente con la tabla de clases asignadas a un docente.
 */
const TablaClases: React.FC<Props> = ({
  mensajeClase,
  clases,
  setClases,
  docente,
  actualizarDocente,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();
  const [ids, setIds] = useState<number[]>([]);
  const [nombres, setNombres] = useState<string[]>([]);

  const handleDesasignar = () => {
    if (ids.length === 0) {
      toast.error("Seleccione las clases a desasignar.");
    } else {
      onOpen();
    }
  };

  const handleSelect = (id: number, nombre: string) => {
    const index = ids.indexOf(id);

    if (index !== -1) {
      setIds(ids.filter((idTemp) => idTemp !== id));
      setNombres(nombres.filter((nom) => nom !== nombre));
    } else {
      setIds([...ids, id]);
      setNombres([...nombres, nombre]);
    }
  };

  const handleSelectTodos = () => {
    if (clases.length === ids.length) {
      setIds([]);
      setNombres([]);
    } else {
      setIds(clases?.map((clase) => clase.id));
      setNombres(clases?.map((clase) => clase.nombre));
    }
  };

  const desasignar = (onClose: any) => {
    fetch("/api/docente/desasignarMultiples", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ids),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if ((data.message = "Docente desasignado exitosamente.")) {
            toast.success("Docente desasignado exitosamente.");
            setCambio(!cambio);
          } else {
            toast.error(data.message);
          }
        });
      } else {
        toast.error("Error al desasignar al docente.");
      }
    });
    onClose();
  };

  return (
    <div className="flex flex-col justify-between overflow-y-auto w-full text-white ">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <div className="text-center">
                  Va a desasignar a {docente.nombre} {docente.aPaterno} de las
                  siguientes clases:
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col ml-5">
                  {nombres.map((n) => (
                    <p>{n}</p>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="flex flex-row gap-2">
                  <Button onPress={onClose}>Cancelar</Button>
                  <Button onPress={() => desasignar(onClose)} color="danger">
                    Desasignar
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <h1 className="text-center font-bold text-xl">Clases</h1>
      {clases.length === 0 ? (
        <Table aria-label="Clases" removeWrapper className={cn("bg-transparent text-white")} 
        classNames={{
          table: "bg-secciones",
          th: "bg-gray-contrast bg-opacity-40 text-lg text-white ",
          td: "bg-transparent border-b border-white"
        }}>
          <TableHeader>
            <TableColumn>Clase</TableColumn>
            <TableColumn>Horario</TableColumn>
            <TableColumn>Días</TableColumn>
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
      ) : (
        <Table aria-label="Clases" removeWrapper className={cn("bg-transparent text-white")} 
        classNames={{
          table: "bg-secciones",
          th: "bg-gray-contrast bg-opacity-40 text-lg text-white ",
          td: "bg-transparent border-b border-white"
        }}>
          <TableHeader>
            <TableColumn>Clase</TableColumn>
            <TableColumn>Horario</TableColumn>
            <TableColumn>Días</TableColumn>
            <TableColumn>
              <Checkbox
                isSelected={ids.length === clases.length}
                onChange={handleSelectTodos}
              ></Checkbox>
            </TableColumn>
          </TableHeader>
          <TableBody>
            {clases?.map((clase: any) => (
              <TableRow>
                <TableCell>{clase.nombre}</TableCell>
                <TableCell>{clase.hora}</TableCell>
                <TableCell>{clase.dias}</TableCell>
                <TableCell>
                  <Checkbox
                    isSelected={ids.includes(clase.id)}
                    onChange={() => handleSelect(clase.id, clase.nombre)}
                  ></Checkbox>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <div className="flex items-center justify-center">
        <button
          onClick={handleDesasignar}
          className="my-4 bg-red-500 py-1 px-2 rounded-md text-white font-normal text-base hover:bg-red-600 active:bg-red-700"
        >
          Desasignar clase(s)
        </button>
      </div>
    </div>
  );
};

export default TablaClases;
