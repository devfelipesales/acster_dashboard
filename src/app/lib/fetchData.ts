import { prismaClient } from "./prisma";
import { ITableCustomers } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { InvoiceStatus } from "@prisma/client";

const ITEMS_PER_PAGE = 6;

export async function fetchInvoices() {
  noStore();
  return await prismaClient.invoice.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function fetchLatestInvoices() {
  noStore();
  return prismaClient.invoice.findMany({
    take: 6,
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      customer: true,
    },
  });
}

export async function fetchFilteredInvoices(
  query: string,
  status: string,
  currentPage: number,
) {
  noStore();
  let skip = 0;
  if (currentPage > 1) {
    skip = (currentPage - 1) * ITEMS_PER_PAGE;
  }

  if (!status) {
    return await prismaClient.invoice.findMany({
      skip: skip,
      take: ITEMS_PER_PAGE,
      where: {
        customer: {
          name: {
            contains: query,
            mode: "insensitive",
          },
          email: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        customer: true,
      },
    });
  } else {
    const l_status = status as InvoiceStatus;
    return await prismaClient.invoice.findMany({
      skip: skip,
      take: ITEMS_PER_PAGE,
      where: {
        status: l_status,
        customer: {
          name: {
            contains: query,
            mode: "insensitive",
          },
          email: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        customer: true,
      },
    });
  }
}

export async function fetchInvoicePages(query: string, status: string) {
  noStore();
  let count = 0;
  if (!status) {
    count = await prismaClient.invoice.count({
      where: {
        customer: {
          name: {
            contains: query,
            mode: "insensitive",
          },
          email: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  } else {
    const l_status = status as InvoiceStatus;
    count = await prismaClient.invoice.count({
      where: {
        status: l_status,
        customer: {
          name: {
            contains: query,
            mode: "insensitive",
          },
          email: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  return totalPages;
}

export async function fetchCardData() {
  noStore();

  const [paidGroupBy, pendingGroupBy, customersCount, invoicesCount] =
    await Promise.all([
      prismaClient.invoice.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          status: "PAID",
        },
      }),
      prismaClient.invoice.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          status: "PENDING",
        },
      }),
      prismaClient.customers.aggregate({
        _count: {
          id: true,
        },
      }),
      prismaClient.invoice.aggregate({
        _count: {
          id: true,
        },
      }),
    ]);

  return {
    paidGroupBy,
    pendingGroupBy,
    customersCount,
    invoicesCount,
  };
}

export async function fetchTableCustomers(query: string) {
  noStore();
  const customers = await prismaClient.customers.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
      email: {
        contains: query,
        mode: "insensitive",
      },
    },
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
  noStore();
  return await prismaClient.invoice.findUnique({
    where: {
      id: id,
    },
  });
}
