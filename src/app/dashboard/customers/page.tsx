import Search from "@/app/UI/Search";
import { Fonts } from "@/app/UI/fonts";
import TableCustomers from "./TableCustomers";
import { fetchCustomers } from "@/app/lib/fetchData";

export default async function CustomersPage() {
  const customers = await fetchCustomers();

  if (!customers) return null;

  return (
    <main className="mt-8 flex flex-col gap-8 overflow-hidden p-3 md:mt-0 md:p-8 ">
      <h1 className={`${Fonts.lusitana.className} text-2xl`}>Clientes</h1>
      <div className="flex grow flex-col gap-3">
        <Search placeholder="Pequise clientes..." />
        <TableCustomers data={customers} />
      </div>
    </main>
  );
}
