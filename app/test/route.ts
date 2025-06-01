import { users } from '@/app/data/users'
import { NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
  const reqHeaders = new Headers(request.headers);
  const headersSent = reqHeaders.get('abc');

  const cookiesPresent = request.cookies.get('cookie1');
  console.log('Cookie1', cookiesPresent);

  return new Response(`<p>Hello, your headers ->${headersSent}</p>`,{
    headers: {
        'Content-Type':'text/html',
        'Set-Cookie':'cookie1=hello'
    }
  });
}
