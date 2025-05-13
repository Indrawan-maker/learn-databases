import { PrismaClient } from "../generated/prisma"

describe("prisma-client", () => {
    it("should be connect to database", async () => {
        const prisma = new PrismaClient();
        await prisma.$connect()

        // do something

        await prisma.$disconnect()
    })
})