-- CreateTable
CREATE TABLE "Docente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "aPaterno" TEXT NOT NULL,
    "aMaterno" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "curp" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sucursal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Clase" (
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

-- CreateTable
CREATE TABLE "Alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "aPaterno" TEXT NOT NULL,
    "aMaterno" TEXT NOT NULL,
    "tutor" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "AlumnoClase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "alumnoId" INTEGER NOT NULL,
    "claseId" INTEGER NOT NULL,
    CONSTRAINT "AlumnoClase_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlumnoClase_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pagos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monto" REAL NOT NULL,
    "metodo" TEXT NOT NULL,
    "idAlumno" INTEGER NOT NULL,
    "concepto" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    CONSTRAINT "Pagos_idAlumno_fkey" FOREIGN KEY ("idAlumno") REFERENCES "Alumno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MasterKey" (
    "value" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "Docente_curp_key" ON "Docente"("curp");

-- CreateIndex
CREATE UNIQUE INDEX "User_nombre_key" ON "User"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "User_correo_key" ON "User"("correo");
