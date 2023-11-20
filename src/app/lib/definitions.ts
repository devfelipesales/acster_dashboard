import { $Enums } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface IChart {
  monthIndex: number;
  month: string;
  receita: number;
}
export interface ITableCustomers {
  name: string;
  email: string;
  imageUrl: string;
  totalPaid: number;
  totalPeding: number;
  countInvoices: number;
}

export interface ITableInvoices {
  id: string;
  customerId: string;
  amount: Decimal;
  status: $Enums.InvoiceStatus;
  date: Date;
  updatedAt: Date;
  customer: {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
  };
}
