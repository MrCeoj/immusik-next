import { useEffect, useState } from "react";

// Componente de React básico que compone  y muestra la lista de sucursales
export default function About() {
  const [sucursals, setSucursals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/Sucursal")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No records found");
        }
        return response.json();
      })
      .then((data) => setSucursals(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Sucursals</h1>
      {error ? (
        <div>{error}</div>
      ) : (
        Array.isArray(sucursals) &&
        sucursals.map((sucursal: any, index) => (
          <div key={index} className="flex gap-4">
            <h2>{sucursal.nombre}</h2>
            <h3>{sucursal.direccion}</h3>
          </div>
        ))
      )}
    </div>
  );
}
