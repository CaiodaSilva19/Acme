import { PrismaPg } from '@prisma/adapter-pg'  // ← adicione isso
import path from 'node:path'
import type { PrismaConfig } from 'prisma'

export default {
  earlyAccess: true,
  schema: path.join('prisma', 'schema.prisma'),
  datasource: {
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  },
} satisfies PrismaConfig