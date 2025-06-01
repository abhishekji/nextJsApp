import React from 'react'

import { users } from '@/app/data/users'


export const GET = async() => {
  return Response.json(users);
}

export const POST = async(req: Request) => {
  const user = await req.json();
  const newUser = {
    id: users.length + 1,
    name: user.name,
    username: user.username,
    email: user.email
  }
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {'Content-Type':'application/json'},
    status: 201
  })
}