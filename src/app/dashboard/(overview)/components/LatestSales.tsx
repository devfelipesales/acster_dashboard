import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import InvoiceItem from "./SaleItem";

export default function LastInvoices() {
  return (
    <div className="mt-4 rounded-md bg-emerald-50 p-3">
      <div className="rounded-md bg-white">
        <div className="rounded-lg  bg-white p-4 ">
          <div className="mb-4 flex place-content-end">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Ver todas
            </a>
          </div>
          <div>
            <ul className="divide-y divide-gray-200">
              <InvoiceItem
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
                name="Neil Sims"
                email="email@windster.com"
                value=" $320"
              />
              <InvoiceItem
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
                name="Neil Sims"
                email="email@windster.com"
                value=" $320"
              />
              <InvoiceItem
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
                name="Neil Sims"
                email="email@windster.com"
                value=" $320"
              />
              <InvoiceItem
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
                name="Neil Sims"
                email="email@windster.com"
                value=" $320"
              />
              <InvoiceItem
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
                name="Neil Sims"
                email="email@windster.com"
                value=" $320"
              />
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
