"use client";

import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { Customers } from "@prisma/client";
import { State, createInvoice } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function CreateForm({ customers }: { customers: Customers[] }) {
  const initialState: State = { errors: {}, message: null };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-emerald-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-bold text-emerald-900"
          >
            Nome
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Selecione um cliente
              </option>
              {customers?.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.customerId ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.customerId.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-bold text-emerald-900"
          >
            Valor
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                aria-describedby="amount-error"
                placeholder="Digite um valor"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.amount ? (
            <div
              id="amount-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.amount.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-bold text-emerald-900">
            Status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="PENDING"
                  aria-describedby="status-error"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="PAID"
                  aria-describedby="status-error"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white dark:text-gray-300"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          {state.errors?.status ? (
            <div
              id="status-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.status.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </fieldset>
        {state?.message && (
          <p id="message-error" className="mt-2 text-sm text-red-500">
            {state?.message}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-300"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:bg-emerald-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Criar Fatura
        </button>
      </div>
    </form>
  );
}
