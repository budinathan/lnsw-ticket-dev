//Type : Prisma Client
//This file is used to connect to the database.

import { PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.DATABASE_URL === "development") global.prisma = prisma;

export default prisma;
