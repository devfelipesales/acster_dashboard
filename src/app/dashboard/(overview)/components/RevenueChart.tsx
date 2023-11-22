import Chart from "@/app/UI/Chart";
import { Invoice } from "@prisma/client";
import { IChart } from "@/app/lib/definitions";
import { fetchInvoices } from "@/app/lib/fetchData";
import { Fonts } from "@/app/UI/fonts";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default async function RevenueChart() {
  const invoices = await fetchInvoices();

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
            receita: 0,
          };
        }

        acc[month].receita += Number(amount);

        return acc;
      },
      {},
    );

    let arrDataChart: IChart[] = [];
    let arrMonthIndexChart: number[] = [];

    Object.values(dataChart).map((item) => {
      arrDataChart.push(item);
      arrMonthIndexChart.push(item.monthIndex);
    });

    return {
      arrDataChart,
      arrMonthIndexChart,
    };
  }

  const data = createDataChart(invoices);

  // Verifica se no array se há todos os meses do ano. Caso não haja, adiciona o mês com valor 0.
  if (data.arrMonthIndexChart.length < 12) {
    let dataChart = [...data.arrDataChart];
    // Monta array com todos os meses do ano.
    const arrMonths = Array.from({ length: 12 }, (e, i) => {
      return {
        monthIndex: i,
        month: new Date(0, i, 1).toLocaleDateString("pt-BR", {
          month: "short",
        }),
      };
    });

    // Adiciona ao array final o mês que não estava com valor zerado para aparecer no gráfico todos os meses.
    arrMonths.forEach((item) => {
      if (!data.arrMonthIndexChart.includes(item.monthIndex)) {
        dataChart.push({
          monthIndex: item.monthIndex,
          month: item.month,
          receita: 0,
        });
      }
    });

    dataChart.sort((a, b) => a.monthIndex - b.monthIndex);

    return <Chart dataChart={dataChart} />;
  }
}
