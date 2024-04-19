/*
  Warnings:

  - You are about to drop the column `decripcion` on the `Gasto` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gasto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idSucursal" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "monto" REAL NOT NULL,
    "concepto" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    CONSTRAINT "Gasto_idSucursal_fkey" FOREIGN KEY ("idSucursal") REFERENCES "Sucursal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Gasto" ("concepto", "fecha", "id", "idSucursal", "monto", "titulo") SELECT "concepto", "fecha", "id", "idSucursal", "monto", "titulo" FROM "Gasto";
DROP TABLE "Gasto";
ALTER TABLE "new_Gasto" RENAME TO "Gasto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
