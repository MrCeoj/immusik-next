import React, { useState, useEffect } from "react";
import router from "next/router";
import { Docente } from "@/entities/index";

// Pagina principal de docentes, contiene todos los docentes registrados y los obtiene con api, los muestra con useeffect al cargar
const Index = () => {
  // useState con los docentes almacenados en memoria
  const [docentes, setDocentes] = useState([]);

  //fetch a la api para obtener todos los docentes
  const obtenerDocentes = async () => {
    const response = await fetch("/api/docente/fetchAll");
    const data = await response.json();
    setDocentes(data);
  };

  //useEffect para obtener los docentes al cargar la página
  useEffect(() => {
    obtenerDocentes();
  }, []);

  // Función para redirigir a la página de registro de docente
  const handleRegister = () => {
    router.push("/docente/registrar");
  };

  return (
    <div>
      <h1>Docentes</h1>
      {docentes.length === 0 ? (
        <p>No se encontraron docentes</p>
      ) : (
        <ul>
          {docentes.map((docente: Docente) => (
            // Mapeo de los docentes para mostrarlos en la lista
            <li className="flex gap-5" key={docente.id}>
              {docente.nombre} {docente.aPaterno} {docente.aMaterno}{" "}
              {docente.telefono} {docente.estado}
              <button className="bg-pink-400" onClick={() => router.push(`/docente/${docente.id}`)}>
                Detalles
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="bg-pink-400" onClick={handleRegister}>
        Registrar
      </button>
    </div>
  );
};

export default Index;
