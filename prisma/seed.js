 import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

 const prisma = new PrismaClient()

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10)
  await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'test23te34534@example.com',
      password: hashedPassword,
    },
  })
}

main().finally(() => prisma.$disconnect())
