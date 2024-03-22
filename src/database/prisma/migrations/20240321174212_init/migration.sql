/*
  Warnings:

  - Added the required column `estado` to the `Docente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Docente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "aPaterno" TEXT NOT NULL,
    "aMaterno" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "phone" INTEGER NOT NULL
);
INSERT INTO "new_Docente" ("aMaterno", "aPaterno", "id", "nombre", "phone") SELECT "aMaterno", "aPaterno", "id", "nombre", "phone" FROM "Docente";
DROP TABLE "Docente";
ALTER TABLE "new_Docente" RENAME TO "Docente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
