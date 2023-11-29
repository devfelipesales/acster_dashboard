"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Spinner } from "flowbite-react";

export default function LoginButton({ loading }: { loading: boolean }) {
  return (
    <button className="mt-4 flex w-full items-center justify-between rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
      Entrar
      {!loading && <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />}
      {loading && <Spinner aria-label="Loading" className="ml-auto h-5 w-5" />}
    </button>
  );
}
