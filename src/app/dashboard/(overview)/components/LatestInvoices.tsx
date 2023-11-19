import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import InvoiceItem from "./InvoiceItem";
import { fetchLatestInvoices } from "@/app/lib/fetchData";
import { formatCurrency } from "@/app/lib/utils";
import Link from "next/link";

export default async function LastInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  if (!latestInvoices) return null;

  return (
    <div className="mt-4 rounded-md bg-emerald-50 p-3">
      <div className="rounded-md bg-white">
        <div className="rounded-lg  bg-white p-4 ">
          <div className="mb-4 flex place-content-end">
            <Link
              href="/dashboard/invoices"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Ver todas
            </Link>
          </div>
          <div>
            <ul className="divide-y divide-gray-200">
              {latestInvoices.map((invoice) => {
                return (
                  <InvoiceItem
                    key={invoice.id}
                    src={invoice.customer.imageUrl}
                    alt={`${invoice.customer.name + " image"}`}
                    name={invoice.customer.name}
                    email={invoice.customer.email}
                    value={formatCurrency(Number(invoice.amount))}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 py-3 text-slate-500">
        <ArrowPathIcon className="w-5" />
        <p className="mt-1 text-sm">Atualizado agora há pouco</p>
      </div>
    </div>
  );
}
