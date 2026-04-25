import path from 'node:path'
import { loadEnvFile } from 'node:process'
import type { PrismaConfig } from 'prisma'

loadEnvFile('.env')

export default {
  schema: path.join('prisma', 'schema.prisma'),
  datasource: {
    url: process.env.DATABASE_URL ?? '',
  },
} satisfies PrismaConfig