import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const skills = await prisma.skills.findMany();
  
  const response = NextResponse.json(skills);
  // Add no-cache headers
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  return response;
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
