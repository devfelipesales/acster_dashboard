import BtnDelete from "@/app/UI/invoices/btnDeleteInvoice";
import { UpdateInvoice } from "@/app/UI/invoices/buttons";
import InvoiceStatus from "@/app/UI/invoices/status";
import { ITableInvoices } from "@/app/lib/definitions";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import Image from "next/image";

export default function TableInvoices({
  invoices,
}: {
  invoices: ITableInvoices[];
}) {
  return (
    <>
      <div className="block lg:hidden">
        {invoices?.map((invoice) => {
          return (
            <div
              key={invoice.id}
              className="mb-2 w-full rounded-md border-x-8 border-y-8 border-gray-50 bg-white p-4"
            >
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={invoice.customer.imageUrl}
                      className="h-8 rounded-full"
                      alt={`${invoice.customer.name} imagem perfil`}
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-col">
                      <p>{invoice.customer.name}</p>
                      <p className="xxxs:block hidden text-sm text-gray-500">
                        {invoice.customer.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <InvoiceStatus status={invoice.status} />
                </div>
              </div>
              <div className="flex w-full items-center justify-between border-b py-5">
                <p className="xxxs:text-base text-sm font-medium">
                  {formatCurrency(Number(invoice.amount))}
                </p>

                <div className="flex w-1/2 place-content-end gap-2">
                  <UpdateInvoice id={invoice.id} />
                  <BtnDelete id={invoice.id} />
                </div>
              </div>
              <div className="pt-4 text-sm">
                <p>{formatDateToLocal(invoice.date)}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/*  > 1024px */}

      <div className="relative hidden overflow-x-auto rounded-lg lg:block">
        <table className="w-full border-x-8 border-y-8 border-gray-50 text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices?.map((invoice) => {
              return (
                <tr className="border-b bg-white" key={invoice.id}>
                  <th
                    scope="row"
                    className="flex items-center gap-2 whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 rounded-full"
                        src={invoice.customer.imageUrl}
                        alt={`${invoice.customer.name} imagem perfil`}
                        width={32}
                        height={32}
                      />
                    </div>
                    {invoice.customer.name}
                  </th>
                  <td className="px-6 py-4">{invoice.customer.email}</td>
                  <td className="px-6 py-4">
                    {formatCurrency(Number(invoice.amount))}
                  </td>
                  <td className="px-6 py-4">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="px-6 py-4">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <BtnDelete id={invoice.id} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
