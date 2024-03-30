import React, { useState, useEffect } from "react";
import router from "next/router";

import { Docente } from "@/entities/index";
import Image from "next/image";
import Link from "next/link";


const Index = () => {
  const [docentes, setDocentes] = useState([]);
  const [search, setSearch] = useState("");
  const [viewed, setViewed] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "estado",
    direction: "asc",
  });

  const obtenerDocentes = async () => {
    const response = await fetch("/api/docente/fetchAll");
    const data = await response.json();
    setDocentes(data);
    setViewed(data);
  };

  const sortBy = (key: any) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    obtenerDocentes();
  }, []);

  useEffect(() => {
    const busquedaSeparada = search.trim();

    const filtrados = docentes.filter((docente: Docente) => {
      const fullName =
        `${docente.nombre} ${docente.aPaterno} ${docente.aMaterno}`.toLowerCase();
      return fullName.includes(busquedaSeparada.toLowerCase());
    });

    const sortedDocentes = [...filtrados].sort((a: Docente, b: Docente) => {
      if (sortConfig.key === "estado") {
        return a.estado.localeCompare(b.estado);
      } else {
        if ((a as any)[sortConfig.key] < (b as any)[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if ((a as any)[sortConfig.key] > (b as any)[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      }
    });

    setViewed(sortedDocentes);
  }, [docentes, search, sortConfig]);

  const handleRegister = () => {
    router.push("/docente/registrar");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleAlumno = () => {
    router.push("/login");
  };

  return (
    <div>
      <div className="w-screen flex items-center bg-primary h-1/8 z-50 rounded-lg mt-1">
        <Image
          src={require("@/img/immusik.png")}
          alt={"hola"}
          className="w-20 m-1"
        />
        <div className="flex gap-10 ml-4 text-xl">
          <button
            className="text-white font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            onClick={handleAlumno}
          >
            Alumnos
          </button>
          <button
            className="text-primary bg-white rounded-md pl-2 pr-2 pt-1 pb-1 font-bold shadow-md"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Docentes
          </button>
          <button
            className="text-white font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Cursos
          </button>
        </div>
        <Link
          onClick={() => window.history.back()}
          href={""}
          className="ml-auto pr-1"
        >
          <Image src={require("@/img/back.png")} alt={"foto"} />
        </Link>
      </div>

      <div className="flex mt-5 ml-10 mr-10">
        <button
          className="bg-gray-300 rounded-md pr-7 pl-7 text-lg shadow-md"
          onClick={handleRegister}
        >
          Registrar
        </button>

        <div className="flex bg-gray-300 ml-auto rounded-md">
          <Image
            src={require("@/img/lupa.png")}
            className="w-7"
            alt={"fotolupa"}
          />
          <input
            value={search}
            placeholder="Buscar docente..."
            onChange={handleChange}
            className="bg-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex bg-pink-300 justify-center mr-10 ml-10 mt-5 rounded-md">
        <div className=" w-full max-h-[620px] overflow-y-auto rounded-md">
          {docentes.length === 0 ? (
            <p>No se encontraron docentes</p>
          ) : (
            <table className="bg-pink-200 w-full rounded-md">
              <thead>
                <tr className="text-left text-xl cursor-pointer">
                  <th onClick={() => sortBy("nombre")} className="pt-4 pl-4">
                    Nombre
                  </th>
                  <th onClick={() => sortBy("aPaterno")} className="pt-4">
                    Apellido P.
                  </th>
                  <th onClick={() => sortBy("aMaterno")} className="pt-4">
                    Apellido M.
                  </th>
                  <th className="pt-4">Teléfono</th>
                  <th
                    onClick={() => sortBy("estado")}
                    className="pt-4 text-center"
                  >
                    Estado
                  </th>
                  <th className="pt-4"></th>
                </tr>
              </thead>
              <tbody>
                {viewed.map((docente: Docente) => (
                  <tr key={docente.id} className="text-lg">
                    <td className="pl-4 pt-4">{docente.nombre}</td>
                    <td className="pt-4">{docente.aPaterno}</td>
                    <td className="pt-4">{docente.aMaterno}</td>
                    <td className="pt-4">{docente.telefono}</td>
                    <td className="flex justify-center pt-4">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          docente.estado === "ACTIVO"
                            ? "bg-green-500"
                            : docente.estado === "VETADO"
                            ? "bg-red-500"
                            : "bg-yellow-300"
                        }`}
                      ></div>
                    </td>
                    <td className="text-center pt-4">
                      <button
                        className="underline"
                        onClick={() => router.push(`/docente/${docente.id}`)}
                      >
                        Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
