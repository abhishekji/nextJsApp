"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div className="flex">
      <div className="p-6">
        <h1 className="text-2xl">Welcome, {session?.user?.name}</h1>
        <p>Role: {(session?.user as { role: string })?.role}</p>
      </div>
      <div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
