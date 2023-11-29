"use client";

import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function HandleSignOut(event: React.MouseEvent<HTMLElement>) {
    const res = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(res.url);
  }

  return (
    <div className="md:mt-auto">
      <button
        onClick={HandleSignOut}
        className="flex w-full grow items-center justify-center gap-3 rounded-lg bg-slate-50 p-3 font-semibold hover:bg-teal-100 hover:text-emerald-700 md:justify-normal "
      >
        <PowerIcon className="w-6" />
        <p className="hidden md:block">Sair</p>
      </button>
    </div>
  );
}
