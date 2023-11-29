"use client";

import React from "react";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Fonts } from "@/app/UI/fonts";
import LoginButton from "./LoginButton";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter, redirect } from "next/navigation";

interface CustomElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  // const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const callbackUrl = "/dashboard";

  async function handleSubmit(event: React.FormEvent<CustomForm>) {
    event.preventDefault();

    const target = event.currentTarget.elements;

    const data = {
      email: target.email.value,
      password: target.password.value,
    };

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: target.email.value,
        password: target.password.value,
        callbackUrl,
      });

      setLoading(false);

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Credenciais inválidas");
      }
    } catch (error: any) {
      setLoading(false);
      setError("Erro ao fazer o login");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${Fonts.lusitana.className} mb-3 text-2xl`}>
          Entre com suas credenciais.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                autoComplete="current-email"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                required
                minLength={6}
                autoComplete="current-password"
              />

              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton loading={loading} />
        <div className="flex h-8 items-end space-x-1 text-red-500">
          {error && <p>{error}</p>}
        </div>
      </div>
    </form>
  );
}
