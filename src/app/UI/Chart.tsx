"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { IChart } from "../lib/definitions";
import { ApexOptions } from "apexcharts";

export default function Chart({ dataChart }: { dataChart: IChart[] }) {
  console.log(dataChart);

  if (!dataChart) return null;

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "Receita",
        data: dataChart.map((item) => item.amount),
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Maio",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    colors: ["#77adea"],
    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type={chartOptions.chart?.type}
        height={350}
      />
    </div>
  );
}
