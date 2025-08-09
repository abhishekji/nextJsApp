'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const formData = new FormData(e.currentTarget);
    const res = await signIn('credentials', {
      redirect: false,
      email: formData.get("email"),
      // e.target.email.value,
      password: formData.get("password"), 
      //e.target.password.value,
    });

    if (res?.error) {
      setError('Invalid credentials');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6">
      <h1 className="text-xl mb-4">Login</h1>
      {error && <p className="text-red-600">{error}</p>}
      <input name="email" type="email" placeholder="Email" required className="border p-2 block mb-2" />
      <input name="password" type="password" placeholder="Password" required className="border p-2 block mb-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
    </form>
  );
}
