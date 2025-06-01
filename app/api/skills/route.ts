import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const skills = await prisma.skills.findMany();
  return NextResponse.json(skills);
}

export async function POST(req: Request) {
  const body = await req.json();
  const skills = await prisma.skills.create({
    data: {
      id: body.id,
      name: body.name,
      level: body.level,
      userId: body.userId
    }
  });
  return NextResponse.json(skills);
}
