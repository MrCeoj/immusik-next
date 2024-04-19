/*
  Warnings:

  - You are about to drop the column `edad` on the `Alumno` table. All the data in the column will be lost.
  - Added the required column `curp` to the `Alumno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNac` to the `Alumno` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "aPaterno" TEXT NOT NULL,
    "aMaterno" TEXT NOT NULL,
    "tutor" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "fechaNac" TEXT NOT NULL,
    "curp" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL
);
INSERT INTO "new_Alumno" ("aMaterno", "aPaterno", "activo", "contacto", "id", "nombre", "tutor") SELECT "aMaterno", "aPaterno", "activo", "contacto", "id", "nombre", "tutor" FROM "Alumno";
DROP TABLE "Alumno";
ALTER TABLE "new_Alumno" RENAME TO "Alumno";
CREATE UNIQUE INDEX "Alumno_curp_key" ON "Alumno"("curp");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
