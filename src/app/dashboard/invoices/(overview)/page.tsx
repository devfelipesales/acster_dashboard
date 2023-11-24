import Search from "@/app/UI/Search";
import TableInvoices from "../TableInvoices";
import { Fonts } from "@/app/UI/fonts";
import { CreateInvoice } from "@/app/UI/invoices/buttons";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/UI/skeletons";
import RadioStatus from "@/app/UI/RadioStatus";

export default async function InvoicePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    status?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const status = searchParams?.status || "";
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = fetchCount(query)

  return (
    <main className="mt-8 flex flex-col gap-8 overflow-hidden p-3 md:mt-0 md:p-8 ">
      <h1 className={`${Fonts.lusitana.className} text-2xl`}>Faturas</h1>
      <div className="flex grow flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex w-full grow items-start gap-2">
            <Search placeholder="Pequise Faturas..." />
            <CreateInvoice />
          </div>
          <RadioStatus />
        </div>

        <Suspense fallback={<InvoicesTableSkeleton />}>
          <TableInvoices
            query={query}
            status={status}
            currentPage={currentPage}
          />
        </Suspense>
      </div>
    </main>
  );
}
