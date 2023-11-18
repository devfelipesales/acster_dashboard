import Chart from "@/app/UI/Chart";
import { prismaClient } from "@/app/lib/prisma";
import { Invoice } from "@prisma/client";
import { IChart } from "@/app/lib/definitions";

export default async function RevenueChart() {
  const invoices = await prismaClient.invoice.findMany();

  if (!invoices) return null;

  function createDataChart(invoices: Invoice[]) {
    const dataChart = invoices.reduce(
      (acc: { [key: string]: IChart }, { date, amount }) => {
        const dateInvoice = new Date(date);
        const month = dateInvoice.toLocaleString("pt-BR", { month: "short" });

        if (!acc[month]) {
          acc[month] = {
            monthIndex: dateInvoice.getMonth(),
            month: month,
            amount: 0,
          };
        }

        acc[month].amount += Number(amount);

        return acc;
      },
      {},
    );

    return Object.values(dataChart).map((item) => item);
  }

  const dataChart = createDataChart(invoices);
  dataChart.sort((a, b) => a.monthIndex - b.monthIndex);

  return <Chart dataChart={dataChart} />;
}
