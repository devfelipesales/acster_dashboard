import { Fonts } from "@/app/UI/fonts";
import React, { Suspense } from "react";
import { CardWrapper } from "./components/Card";
import { CalendarIcon } from "@heroicons/react/24/outline";
import LastInvoices from "./components/LatestInvoices";
import RevenueChart from "./components/RevenueChart";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/UI/skeletons";

export default function DashboardPage() {
  return (
    <section className="mt-8 flex flex-col gap-10 overflow-hidden p-3 md:mt-0 md:p-8 lg:gap-16">
      <div className="">
        <h1 className={`${Fonts.lusitana.className} text-2xl`}>Dashboard</h1>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className=" grid gap-10 xl:grid-cols-custom-1 xl:gap-4">
        <div className="">
          <h1 className={`${Fonts.lusitana.className} text-2xl`}>Receita</h1>
          <div className="mt-4 rounded-md bg-emerald-50 p-3">
            <div className="rounded-md bg-white py-4 xxs:p-5">
              <Suspense fallback={<RevenueChartSkeleton />}>
                <RevenueChart />
              </Suspense>
            </div>
            <div className="flex items-center gap-1 py-3 text-slate-500">
              <CalendarIcon className="w-5" />
              <p className="mt-1 text-sm">Receita Anual</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={`${Fonts.lusitana.className} text-2xl`}>
            Últimas Faturas
          </h1>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LastInvoices />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
