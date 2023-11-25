import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="text-black-400 w-10" />
      <h2 className="text-xl font-semibold">404 - Página não encontrada</h2>
      <p className="text-red-600">
        Não foi possível encontrar a fatura solicitada
      </p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-emerald-600 px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-500"
      >
        Retornar
      </Link>
    </main>
  );
}
