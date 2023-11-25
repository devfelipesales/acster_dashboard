import { Fonts } from "@/app/UI/fonts";
import EditForm from "@/app/UI/invoices/Edit-form";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/fetchData";
import { notFound } from "next/navigation";

export default async function EditInvoicePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) notFound();

  return (
    <main className="mt-8 flex flex-col gap-8 overflow-hidden p-3 md:mt-0 md:p-8">
      <h1 className={`${Fonts.lusitana.className} text-2xl`}>Editar Fatura</h1>
      <div className="flex grow flex-col gap-3">
        <EditForm customers={customers} invoice={invoice} />
      </div>
    </main>
  );
}
