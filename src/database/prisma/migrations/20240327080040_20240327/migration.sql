/*
  Warnings:

  - The primary key for the `AlumnoClase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `AlumnoClase` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AlumnoClase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "alumnoId" INTEGER NOT NULL,
    "claseId" INTEGER NOT NULL,
    CONSTRAINT "AlumnoClase_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlumnoClase_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AlumnoClase" ("alumnoId", "claseId") SELECT "alumnoId", "claseId" FROM "AlumnoClase";
DROP TABLE "AlumnoClase";
ALTER TABLE "new_AlumnoClase" RENAME TO "AlumnoClase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
