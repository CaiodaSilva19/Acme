import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'

export async function criarUsuario(name: string, email: string, password: string) {
  const hash = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      password: hash
    }
  })
}