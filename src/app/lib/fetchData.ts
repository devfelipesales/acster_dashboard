import { prismaClient } from "./prisma";

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
