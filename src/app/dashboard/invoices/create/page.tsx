import { Fonts } from "@/app/UI/fonts";
import CreateForm from "@/app/UI/invoices/create-form";
import { fetchCustomers } from "@/app/lib/fetchData";

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers();

  return (
    <main className="mt-8 flex flex-col gap-8 overflow-hidden p-3 md:mt-0 md:p-8">
      <h1 className={`${Fonts.lusitana.className} text-2xl`}>Criar Fatura</h1>
      <div className="flex grow flex-col gap-3">
        <CreateForm customers={customers} />
      </div>
    </main>
  );
}
