import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaBase = globalForPrisma.prisma ?? new PrismaClient();

// Prisma extension enables orphan carts to be automatically deleted from the DB when cookies are deleted
export const prisma = prismaBase.$extends({
  query: {
    cart: {
      async update({ args, query }) {
        args.data = { ...args.data, updatedAt: new Date() };
        return query(args);
      },
    },
  },
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaBase;
