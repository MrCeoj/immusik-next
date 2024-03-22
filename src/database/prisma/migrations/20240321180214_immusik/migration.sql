-- CreateTable
CREATE TABLE "Gasto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idSucursal" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "decripcion" TEXT,
    "monto" REAL NOT NULL,
    "concepto" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    CONSTRAINT "Gasto_idSucursal_fkey" FOREIGN KEY ("idSucursal") REFERENCES "Sucursal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
