import { create } from "zustand";
import { Clase } from "@/entities"

/**
 * Interfaz que define la estructura de una clase con el nombre de la sucursal
 * Por defecto se usaría el tipo Clase para realizar la tarea,
 * pero tiene el inconveniente de que no incluye el nombre de la sucursal.
 * Para facilitar la visualización de la información en la tabla de clases,
 * se optó por crear esta interfaz que incluye el nombre de la sucursal.
 */
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

/**
 * Interfaz que define el estado de las clases de un alumno, incluyendo
 * tanto las clases como las funciones para obtenerlas y modificarlas.
 */
type State = {
  clases: claseSucursal[]; // Arreglo de clases con nombre de sucursal
  disponibles: Clase[]; // Arreglo de clases disponibles para inscribir
  fetchClases: (idAlumno: number) => void; // Función para obtener las clases de un alumno
  fetchEstado: (idAlumno: number) => void; // Función para actualizar el estado de un alumno
  
  // Función para desinscribir a un alumno de una clase, regresa un objeto con el status y un mensaje
  fetchDesiniscribir: (idClase: number, idAlumno: number) => Promise<{ status: number, message: string }>;

  // Función para obtener las clases disponibles de un alumno
  fetchDisponibles: (idAlumno: number) => Promise<(Clase | { status: number; message: string })[]>;

  // Función para inscribir a un alumno a una clase, regresa estado de la petición y mensaje
  inscribirAlumno: (idAlumno: number, idClase: number) => Promise<{ status: number, message: string }>;

  // Función par ainscribir a un alumno por su curp, dado que registros nuevos no contienen ID y para eso mejor lo hacemos por curp
  inscribirPorCurp: (curp: string, idClase: number) => Promise<{status: number, message: string}>
};


/**
 * Hook encargado de manejar las clases de un alumno desde su módulo de gestión.
 * @author Marce
 * @params set - función que permite modificar el estado de las clases, es como reemplazar useState
 */
export const useClases = create<State>((set, get) => ({
  // Estado inicial de las clases
  clases: [] as claseSucursal[],
  disponibles: [] as Clase[],
  // petición para obtener las clases de un alumno
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

  // petición para actualizar el estado de un alumno
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
      await fetch('/api/alumno/actualizarEstado')
    }catch(error){}
  },

  /**
   * petición para desinscribir a un alumno de una clase
   * notar que regreso un objeto con el status y un mensaje
   * el status es para separar mensajes de error y de éxito
   */
  fetchDesiniscribir: async(idClase: number, idAlumno: number) => {
    try{
      const response = await fetch(`/api/alumno/${idAlumno}`, {
        method: 'DELETE',
        body: JSON.stringify(idClase)
      }).catch(() => {
        throw new Error("Error al procesar la transacción, verifique su conexión a internet")
      })
      if(response.ok){
        return { status: 200, message: 'Alumno desinscrito' }
      }
      return { status: 500, message: 'Error al desinscribir al alumno'}
    }catch(error: any){
      return { status: 500, message: error.message }
    }
  },

  /**
   * Petición para obtener las clases disponibles de un alumno
   */
  fetchDisponibles: async(idAlumno: number) => {
    try{
      const response = await fetch('/api/clase/clasesDisponibles', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(idAlumno)
      }).catch((error) => {
        console.error(error.message)
        throw new Error("Error al obtener clases disponibles, verifique su conexión a internet")
      })
      const clases: Clase[] = await response.json()
      console.log(clases)
      set({ disponibles: clases })
      return clases
    }catch(error: any){
      return [{ status: 500, message: error.message }]
    }
  },
  inscribirAlumno: async(idAlumno: number, idClase: number) => {
    try{
      const response = await fetch('/api/clase/inscribirAlumno', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({idAlumno, idClase})
      }).catch(() => {
        throw new Error("Error al inscribir al alumno, verifique su conexión a internet")
      })

      if(response.ok){
        await set({clases: []})
        await get().fetchClases(idAlumno)
        return { status: 200, message: "Alumno inscrito correctamente" }
      }
      return { status: 400, message: "Error al inscribir al alumno" }
    }catch(error: any){
      return { status: 500, message: error.message }
    }
  },
  inscribirPorCurp: async(curp: string, idClase: number) => {
    try{
      const response = await fetch('api/clase/inscribirPorCurp', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({curp,idClase})
      }).catch(() => {
        throw new Error("Error al inscribir alumno en la clase, verifique su conexión a internet")
      })
      if(response.ok){
        return { status:200, message: "" }
      }
      return { status:400, message: "Error al inscribir alumno en la clase" }
    }catch(error:any){
      return {status: 500, message:error.message}
    }
  },
}));
