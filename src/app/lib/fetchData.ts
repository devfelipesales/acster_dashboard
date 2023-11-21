import { prismaClient } from "./prisma";
import { ITableCustomers } from "./definitions";

export async function fetchInvoices() {
  return await prismaClient.invoice.findMany({
    orderBy: {
      date: "desc",
    },
  });
}

export async function fetchLatestInvoices() {
  return prismaClient.invoice.findMany({
    take: 6,
    orderBy: {
      date: "desc",
    },
    include: {
      customer: true,
    },
  });
}

export async function fetchFilteredInvoices() {
  return await prismaClient.invoice.findMany({
    orderBy: {
      date: "desc",
    },
    include: {
      customer: true,
    },
  });
}

export async function fetchCardData() {
  const paidGroupBy = await prismaClient.invoice.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      status: "PAID",
    },
  });

  const pendingGroupBy = await prismaClient.invoice.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      status: "PENDING",
    },
  });

  const customersCount = await prismaClient.customers.aggregate({
    _count: {
      id: true,
    },
  });

  const invoicesCount = await prismaClient.invoice.aggregate({
    _count: {
      id: true,
    },
  });

  return {
    paidGroupBy,
    pendingGroupBy,
    customersCount,
    invoicesCount,
  };
}

export async function fetchTableCustomers() {
  const customers = await prismaClient.customers.findMany({
    select: {
      name: true,
      email: true,
      imageUrl: true,
      _count: {
        select: {
          invoices: true,
        },
      },
      invoices: {
        select: {
          amount: true,
          status: true,
        },
      },
    },
  });

  const data: ITableCustomers[] = customers.map((customer) => {
    let paidAmount = 0;
    let pendingAmount = 0;
    customer.invoices.forEach((invoice) => {
      if (invoice.status === "PAID") {
        paidAmount += Number(invoice.amount);
      } else {
        pendingAmount += Number(invoice.amount);
      }
    });

    return {
      name: customer.name,
      email: customer.email,
      imageUrl: customer.imageUrl,
      totalPaid: paidAmount,
      totalPeding: pendingAmount,
      countInvoices: customer._count.invoices,
    };
  });

  return data;
}

export async function fetchCustomers() {
  return await prismaClient.customers.findMany();
}

export async function fetchInvoiceById(id: string) {
  return await prismaClient.invoice.findUnique({
    where: {
      id: id,
    },
  });
}
