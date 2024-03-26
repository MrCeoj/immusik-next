import React, { useState, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const [docentes, setDocentes] = useState([]);

  const obtenerDocentes = async () => {
    const response = await fetch("/api/docente/fetchAll");
    const data = await response.json();
    setDocentes(data);
  };

  useEffect(() => {
    obtenerDocentes();
  }, []);

  const handleRegister = () => {
    router.push("/docente/registrar");
  };

  return (
    <div>
      <div className="flex items-center bg-primary h-1/8 static top-0 rounded-lg m-1 ">
        <Image src={require('@/img/immusik.png')} alt={'hola'} className="w-20 m-1"/>
        <ul className="font-bold text-white text-2xl ml-3 flex gap-7">
          <li className="p-1">Alumnos</li>
          <li className="text-primary bg-white rounded-md p-1">Docentes</li>
          <li className="p-1">Cursos</li>
        </ul>
        <Link onClick={() => window.history.back()} href={''} className="ml-auto pr-1">
          <Image src={require('@/img/back.png')} alt={'foto'}/>
        </Link>
      </div>

      <div className="flex flex-col mt-1">
        <div className="flex mx-10 my-1">
          <button className="bg-gray-200 rounded-md pl-5 pr-5 shadow-md text-lg hover:bg-gray-100" onClick={handleRegister}>
            Registrar
          </button>
          <div className="flex ml-auto bg-gray-200 rounded-md px-2 py-1">
            <Image
              src={require('@/img/lupa.png')} alt={'foto'} style={{ width: '30px', height: '30px' }}
            />
            <input 
              type="text" 
              className="text-gray-800 bg-gray-200"
            />
          </div>
        </div>     

        {docentes.length === 0 ? (
          <p>No se encontraron docentes</p>
        ) : (
          <div className="mx-10 my-2 bg-pink-200 rounded-lg overflow-y-auto max-h-96">
            <ul className="p-5 flex-col">
              <li className="flex py-1 text-xl ">
                <span className="flex-1">Nombre</span>
                <span className="flex-1">Apellido Paterno</span>
                <span className="flex-1">Apellido Materno</span>
                <span className="flex-1">Teléfono</span>
                <span className="flex-1">Estado</span>
                <span className="flex-1"></span>
              </li>
              {docentes.map((docente: any) => (
                <li key={docente.id} className="flex py-2">
                  <span className="flex-1">{docente.nombre}</span>
                  <span className="flex-1">{docente.aPaterno}</span>
                  <span className="flex-1">{docente.aMaterno}</span>
                  <span className="flex-1">{docente.telefono}</span>
                  <span className="flex-1">{docente.estado}</span>
                  <span className="flex-1">{docente.id}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
