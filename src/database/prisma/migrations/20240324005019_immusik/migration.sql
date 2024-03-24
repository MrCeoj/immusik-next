-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Docente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "aPaterno" TEXT NOT NULL,
    "aMaterno" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefono" TEXT NOT NULL
);
INSERT INTO "new_Docente" ("aMaterno", "aPaterno", "estado", "id", "nombre", "telefono") SELECT "aMaterno", "aPaterno", "estado", "id", "nombre", "telefono" FROM "Docente";
DROP TABLE "Docente";
ALTER TABLE "new_Docente" RENAME TO "Docente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
