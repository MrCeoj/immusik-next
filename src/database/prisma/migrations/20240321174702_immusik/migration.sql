/*
  Warnings:

  - You are about to drop the column `address` on the `Sucursal` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Docente` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - Added the required column `direccion` to the `Sucursal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Docente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contrasena` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sucursal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL
);
INSERT INTO "new_Sucursal" ("id", "nombre") SELECT "id", "nombre" FROM "Sucursal";
DROP TABLE "Sucursal";
ALTER TABLE "new_Sucursal" RENAME TO "Sucursal";
CREATE TABLE "new_Docente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "aPaterno" TEXT NOT NULL,
    "aMaterno" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL
);
INSERT INTO "new_Docente" ("aMaterno", "aPaterno", "estado", "id", "nombre") SELECT "aMaterno", "aPaterno", "estado", "id", "nombre" FROM "Docente";
DROP TABLE "Docente";
ALTER TABLE "new_Docente" RENAME TO "Docente";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL
);
INSERT INTO "new_User" ("id") SELECT "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_nombre_key" ON "User"("nombre");
CREATE UNIQUE INDEX "User_correo_key" ON "User"("correo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
