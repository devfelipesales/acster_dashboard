"use server";

import { redirect } from "next/navigation";
import { prismaClient } from "./prisma";
import { InvoiceStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createInvoice(formData: FormData) {
  const customerId = formData.get("customerId");
  const amount = formData.get("amount");
  const status = formData.get("status");

  if (customerId && amount && status) {
    const amountNumber = +amount;

    try {
      await prismaClient.invoice.create({
        data: {
          customerId: customerId as string,
          status: status as InvoiceStatus,
          amount: amountNumber,
        },
      });
    } catch (error) {
      return {
        message: "Erro no Banco de Dados: Falha ao criar a fatura",
      };
    }
  } else {
    console.log("Favor Preencher todos os campos");
    return {
      message: "Favor Preencher todos os campos",
    };
  }

  console.log("Fatura Criada com sucesso");
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(id: string, formData: FormData) {
  const customerId = formData.get("customerId");
  const amount = formData.get("amount");
  const status = formData.get("status");

  if (customerId && amount && status) {
    const amountNumber = +amount;

    try {
      await prismaClient.invoice.update({
        where: {
          id: id,
        },
        data: {
          customerId: customerId as string,
          status: status as InvoiceStatus,
          amount: amountNumber,
        },
      });
    } catch (error) {
      return {
        message: "Erro no Banco de Dados: Falha ao atualizar a fatura",
      };
    }
  } else {
    console.log("Favor Preencher todos os campos");
    return {
      message: "Favor Preencher todos os campos",
    };
  }

  console.log("Fatura Atualizada com sucesso");
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function DeleteInvoice(id: string, formData: FormData) {
  try {
    await prismaClient.invoice.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log("Favor Preencher todos os campos");
    return {
      message: "Erro no Banco de dados: Falha ao deletar a fatura",
    };
  }

  console.log(`Fatura ${id} deletada com sucesso`);
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
