import {create} from "zustand"
import { persist } from "zustand/middleware"
import { Sucursal } from "../entities"

export const sucursalContext = create(
    persist((set) => {
        return {
            context: null,
            setContext: (context: Sucursal) => set({context})
        }
    }, {name: "sucursal-context"
    })
)