import React from "react";

function TodosLosPagos({
  pagos,
  setVerTodos,
}: {
  pagos: any;
  setVerTodos: any;
}) {
  const handleSalir = () => {
    setVerTodos(false);
  };

  return (
    <div className="bg-black bg-opacity-50 absolute z-30 top-0 left-0 h-screen w-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-5 h-5/6 w-11/12 flex items-center justify-center flex-col">
        {pagos.map((pago: any) => (
          <div>
            {pago.monto} {pago.metodo} {pago.fecha} {pago.concepto}
          </div>
        ))}
        <button onClick={handleSalir} className="bg-blue-500">
          Salir
        </button>
      </div>
    </div>
  );
}

export default TodosLosPagos;
