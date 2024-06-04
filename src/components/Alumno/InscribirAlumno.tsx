import { useClases } from "@/hooks/clases/useClases";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { toast } from "react-toastify";

function InscribirAlumno({ idAlumno }: { idAlumno: number }) {
  const { disponibles, fetchDisponibles, clases, inscribirAlumno } = useClases((state) => state);
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    fetchDisponibles(idAlumno);
    console.log(disponibles);
  }, [idAlumno, clases]);

  useEffect(() => {
    setDisabled(seleccion === null);
  }, [seleccion]);

  const handleClick = async() => {
    if (seleccion === null) {
      toast.error("Seleccionar una clase antes de inscribir");
      return;
    }
    const result = await inscribirAlumno(idAlumno, seleccion)
    if(result.status === 500){
      toast.error(result.message)
    }
    if(result.status === 200){
      toast.success(result.message)
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-center">Inscribir en clase</h1>
      <Select
        label="Seleccionar clase"
        className="mt-4"
        size="sm"
        onChange={(e) => setSeleccion(parseInt(e.target.value))}
      >
        {disponibles.map((clase) => {
          return (
            <SelectItem key={clase.id} value={clase.id}>
              {clase.nombre}
            </SelectItem>
          );
        })}
      </Select>
      <div className="flex justify-center m-2">
        <button
          onClick={handleClick}
          disabled={disabled}
          className={
            disabled
              ? "text-md bg-disabled p-2 rounded-md"
              : "text-md bg-pink-accent p-2 rounded-md hover:cursor-pointer hover:bg-pink-600"
          }
        >
          Inscribir
        </button>
      </div>
      
    </div>
  );
}

export default InscribirAlumno;
