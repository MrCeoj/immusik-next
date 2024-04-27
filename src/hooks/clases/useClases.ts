import { create } from "zustand";


interface claseSucursal {
  clase: {
    id: number;
    nombre: string;
    cupoMax: number;
    dias: string;
    hora: string;
    sucursal: {
      nombre: string;
    };
  };
}

type State = {
  clases: claseSucursal[];
  fetchClases: (idAlumno: number) => void;
  fetchEstado: (idAlumno: number) => void;
};


/**
 * Hook encargado de manejar las clases de un alumno desde su módulo de gestión.
 * @author - Marce
 *
 */
export const useClases = create<State>((set) => ({
  clases: [] as claseSucursal[],
  fetchClases: async (idAlumno: number) => {
    try {
      const response = await fetch(`/api/alumno/${idAlumno}`).catch((error) => {
        throw new Error(error);
      });

      if (response.ok) {
        const data = await response.json();
        set({ clases: data });
      } else {
        throw new Error("Error al cargar las clases");
      }
    } catch (error) {}
  },
  fetchEstado: async (idAlumno: number) => {
    try{
      const response = await fetch(`/api/alumno/${idAlumno}`, {
        method: 'PATCH'
      }).catch((error) => {
        throw new Error(error)
      })

      if(response.ok){
        const data = await response.json()
        set({clases: data})
      }else{
        throw new Error('Error al actualizar el estado')
      }
    }catch(error){}
  }
}));
