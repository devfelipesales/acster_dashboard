"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import React from "react";
import { IChart } from "../lib/definitions";

export default function Chart({ dataChart }: { dataChart: IChart[] }) {
  // console.log(dataChart);

  if (!dataChart) return null;

  return (
    <ResponsiveContainer width="99%" height={400}>
      <BarChart
        width={600}
        // height={400}
        data={dataChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="receita" fill="#93c5fd" />
      </BarChart>
    </ResponsiveContainer>
  );
}
