import { formatCurrency } from "@/app/lib/utils";
import Image from "next/image";
import { fetchTableCustomers } from "@/app/lib/fetchData";

export default async function TableCustomers({ query }: { query: string }) {
  const customers = await fetchTableCustomers(query);
  return (
    <>
      <div className="block lg:hidden">
        {customers?.map((customer) => {
          return (
            <div
              key={customer.email}
              className="mb-2 w-full rounded-md border-x-8 border-y-8 border-gray-50 bg-white p-4"
            >
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.imageUrl}
                        className="h-8 rounded-full"
                        alt={`${customer.name} imagem perfil`}
                        width={32}
                        height={32}
                      />
                      <p>{customer.name}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{customer.email}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between border-b py-5">
                <div className="flex w-1/2 flex-col">
                  <p className="text-xs">Pendente</p>
                  <p className="text-sm font-medium xxxs:text-base">
                    {formatCurrency(customer.totalPeding)}
                  </p>
                </div>
                <div className="flex w-1/2 flex-col items-end">
                  <p className="text-xs">Pago</p>
                  <p className="text-sm font-medium xxxs:text-base">
                    {formatCurrency(customer.totalPaid)}
                  </p>
                </div>
              </div>
              <div className="pt-4 text-sm">
                <p>{customer.countInvoices} Faturas</p>
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
                Total de Faturas
              </th>
              <th scope="col" className="px-6 py-3">
                Total Pendente
              </th>
              <th scope="col" className="px-6 py-3">
                Total Pago
              </th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer) => {
              return (
                <tr className="border-b bg-white" key={customer.email}>
                  <th
                    scope="row"
                    className="flex items-center gap-2 whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 rounded-full"
                        src={customer.imageUrl}
                        alt={`${customer.name} imagem perfil`}
                        width={32}
                        height={32}
                      />
                    </div>
                    {customer.name}
                  </th>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4 text-center">
                    {customer.countInvoices}
                  </td>
                  <td className="px-6 py-4">
                    {formatCurrency(customer.totalPeding)}
                  </td>
                  <td className="px-6 py-4">
                    {formatCurrency(customer.totalPaid)}
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
