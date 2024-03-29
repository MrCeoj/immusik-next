-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idSucursal" INTEGER NOT NULL,
    "idDocente" INTEGER,
    "nombre" TEXT NOT NULL,
    "cupoMax" INTEGER NOT NULL,
    "dias" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    CONSTRAINT "Clase_idSucursal_fkey" FOREIGN KEY ("idSucursal") REFERENCES "Sucursal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Clase_idDocente_fkey" FOREIGN KEY ("idDocente") REFERENCES "Docente" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Clase" ("cupoMax", "dias", "hora", "id", "idDocente", "idSucursal", "nombre") SELECT "cupoMax", "dias", "hora", "id", "idDocente", "idSucursal", "nombre" FROM "Clase";
DROP TABLE "Clase";
ALTER TABLE "new_Clase" RENAME TO "Clase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
