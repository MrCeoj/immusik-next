import { create } from "zustand"
import { Gasto } from "@/entities"

type State = {
  gastos: Gasto[]
  fetchGastos: (idSucursal: number) => void
}

export const useGastos = create<State>((set, get) => ({
    gastos: [],
    fetchGastos: async (idSucursal: number) => {
        try {
            const response = await fetch(`/api/gastos/${idSucursal}`).catch(() => {
                throw new Error("Error al obtener los gastos, verifique su conexión a internet")
            })
            
            if(response.ok){
                const gastos: Gasto[] = await response.json()
                set({ gastos })
            }else {
                throw new Error("Error al obtener los gastos")
            }
            
        }catch(error: any){

        }
    },

}))