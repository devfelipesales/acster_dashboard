import { Fonts } from "@/app/UI/fonts";
import React from "react";
import { CardWrapper } from "./components/Card";
import { CalendarIcon } from "@heroicons/react/24/outline";
import LastInvoices from "./components/LatestInvoices";
import RevenueChart from "./components/RevenueChart";

export default function DashboardPage() {
  return (
    <section className="mt-8 flex flex-col gap-10 overflow-hidden p-3 md:mt-0 md:p-8 lg:gap-16">
      <div className="">
        <h1 className={`${Fonts.lusitana.className} text-2xl`}>Dashboard</h1>
        <CardWrapper />
      </div>
      <div className=" xl:grid-cols-custom-1 grid gap-10 xl:gap-4">
        <div className="">
          <h1 className={`${Fonts.lusitana.className} text-2xl`}>Receita</h1>
          <div className="mt-4 rounded-md bg-emerald-50 p-3">
            <div className="xxs:p-5 rounded-md bg-white py-4">
              <RevenueChart />
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
          <LastInvoices />
        </div>
      </div>
    </section>
  );
}
