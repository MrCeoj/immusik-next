import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllMasterKeys(){
    return await prisma.masterKey.findMany()
}