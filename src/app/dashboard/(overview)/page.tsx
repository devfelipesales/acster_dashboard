import { Fonts } from "@/app/UI/fonts";
import React from "react";
import { CardWrapper } from "./components/Card";
import { ArrowPathIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import LastInvoices from "./components/LatestSales";

export default function DashboardPage() {
  return (
    <section className="grid gap-10 p-8 lg:gap-16">
      <div className="">
        <h1 className={`${Fonts.lusitana.className} text-2xl`}>Dashboard</h1>
        <CardWrapper />
      </div>
      <div className=" grid gap-4 lg:grid-cols-2">
        <div className="">
          <h1 className={`${Fonts.lusitana.className} text-2xl`}>Receita</h1>
          <div className="mt-4 rounded-md bg-emerald-50 p-3">
            <div className="rounded-md bg-white p-16"></div>
            <div className="flex items-center gap-1 py-3 text-slate-500">
              <CalendarIcon className="w-5" />
              <p className="mt-1 text-sm">Últimos 12 meses</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={`${Fonts.lusitana.className} text-2xl`}>
            Últimas Vendas
          </h1>
          <LastInvoices />
        </div>
      </div>
    </section>
  );
}
