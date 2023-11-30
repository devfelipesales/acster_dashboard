import Search from "@/app/UI/Search";
import { Fonts } from "@/app/UI/fonts";
import TableCustomers from "./TableCustomers";
import { Suspense } from "react";
import { CustomerTableSkeleton } from "@/app/UI/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes",
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <main className="mt-8 flex flex-col gap-8 overflow-hidden p-3 md:mt-0 md:p-8 ">
      <h1 className={`${Fonts.lusitana.className} text-2xl`}>Clientes</h1>
      <div className="flex grow flex-col gap-3">
        <Search placeholder="Pequise clientes..." />
        <Suspense fallback={<CustomerTableSkeleton />}>
          <TableCustomers query={query} />
        </Suspense>
      </div>
    </main>
  );
}
