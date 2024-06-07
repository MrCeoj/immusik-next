import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import "react-toastify/dist/ReactToastify.css";

// Formulario para registrar un docente
function FormDocente({
  setCambio,
  cambio,
  setModalOpen,
}: {
  setCambio: React.Dispatch<React.SetStateAction<boolean>>;
  cambio: boolean;
  setModalOpen: any;
}) {

  // useForm para manejar los inputs del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función que se ejecuta al enviar el formulario, consume la api para registrar un docente
  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("/api/docente/registerDocente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docente: {
          nombre: data.nombre,
          aPaterno: data.aPaterno,
          aMaterno: data.aMaterno,
          telefono: data.telefono,
          curp: data.curp,
          estado: "INACTIVO",
        },
      }),
    });
    const resJSON = await response.json();
    if (response.status === 500) {
      toast.error(resJSON.error)
    } else {
      if (cambio) {
        setCambio(false);
      } else {
        setCambio(true);
      }

      toast.success("Docente registrado", {
        className: "text-white px-6 py-4 border-0 rounded-md bg-green-500",
        bodyClassName: "font-semibold text-sm text-green-500",
        autoClose: 2000,
        draggable: false,
        onClose: () => setModalOpen(false),
      });
    }
  });

  //Función para cerrar el modal
  const handleCancelar = () => {
    setModalOpen(false);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 bg-transparent p-8 rounded-md"
      >
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="nombre"
            label="Nombre del docente"
            error={Boolean(errors.nombre?.type === "required")}
            className="text-lg "
          />
          <Input
            type="text"
            id="nombre"
            placeholder="Nombre del docente"
            error={errors.nombre}
            register={register("nombre", {
              required: {
                value: true,
                message: "El nombre del docente es requerido.",
              },
                pattern:{
                  value: /^[A-Za-z\s]+$/i,
                  message: "El nombre no debe contener números.",
                },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="aPaterno"
            label="Apellido Paterno"
            error={Boolean(errors.aPaterno?.type === "required")}
            className="text-lg "
          />
          <Input
            type="text"
            id="aPaterno"
            placeholder="Apellido Paterno"
            error={errors.aPaterno}
            register={register("aPaterno", {
              required: {
                value: true,
                message: "El apellido paterno es requerido.",
              },
                pattern:{
                  value: /^[A-Za-z\s]+$/i,
                  message: "El apellido no debe contener números.",
                },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="aMaterno"
            label="Apellido Materno"
            error={Boolean(errors.aMaterno?.type === "required")}
            className="text-lg "
          />
          <Input
            type="text"
            id="aMaterno"
            placeholder="Apellido Materno"
            error={errors.aMaterno}
            register={register("aMaterno", {
              required: {
                value: true,
                message: "El apellido materno es requerido.",
              },
                pattern:{
                  value: /^[A-Za-z\s]+$/i,
                  message: "El apellido no debe contener números.",
                },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="curp"
            label="CURP"
            error={Boolean(errors.curp?.type === "required")}
            className="text-lg"
          />
          <Input
            type="text"
            id="curp"
            placeholder="CURP"
            error={errors.curp}
            register={register("curp", {
              required: {
                value: true,
                message: "La CURP es requerida.",
              },
              minLength: {
                value: 18,
                message: "La CURP debe tener 18 caracteres.",
              },
              maxLength: {
                value: 18,
                message: "La CURP debe tener 18 caracteres.",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "Formato de CURP no válido.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="telefono"
            label="Teléfono"
            error={Boolean(errors.telefono?.type === "required")}
            className="text-lg font-normal"
          />
          <Input
            type="text"
            id="telefono"
            placeholder="Telefono"
            error={errors.telefono}
            register={register("telefono", {
              required: {
                value: true,
                message: "El teléfono es requerido.",
              },
              minLength: {
                value: 10,
                message: "El teléfono debe tener 10 dígitos.",
              },
            })}
            onlyNumeric
          />
        </div>

        <div className="flex justify-center items-center mt-3 gap-x-3">
          <button
            className="bg-gray-500 py-1 px-3 rounded-md text-lg shadow-md mr-2 hover:bg-gray-600"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
          <button
            className="bg-pink-500 py-1 px-3 rounded-md text-lg shadow-md hover:bg-pink-600"
            type="submit"
          >
            Aceptar
          </button>
        </div>
      </form>
    </>
  );
}


export default FormDocente;
