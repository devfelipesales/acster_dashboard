"use server";

import { redirect } from "next/navigation";
import { prismaClient } from "./prisma";
import { InvoiceStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const InvoiceSchema = z.object({
  customerId: z.string({
    invalid_type_error: "Favor selecionar um cliente",
  }),
  amount: z.coerce.number().gt(0, {
    message: "Favor inserir um valor maior que R$ 0",
  }),
  status: z.enum(["PAID", "PENDING"], {
    invalid_type_error: "Favor selecionar o Status",
  }),
});

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validateFields = InvoiceSchema.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Falha ao criar a fatura. Favor preencher todos os campos.",
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validateFields.data;

  const amountNumber = +amount;

  try {
    await prismaClient.invoice.create({
      data: {
        customerId: customerId,
        status: status,
        amount: amountNumber,
      },
    });
  } catch (error) {
    return {
      message: "Erro no Banco de Dados: Falha ao criar a fatura",
    };
  }

  console.log("Fatura Criada com sucesso");
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

// Apenas outro exemplo demonstrando que é possível criar outros campos no retorno
export type StateUpdateInvoice = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
  error?: boolean;
};

export async function updateInvoice(
  id: string,
  prevState: StateUpdateInvoice,
  formData: FormData,
) {
  let returnData: StateUpdateInvoice = {
    errors: {},
    message: null,
    error: false,
  };
  // Validate form using Zod
  const validateFields = InvoiceSchema.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  if (!validateFields.success) {
    returnData = {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Falha ao editar a fatura. Favor preencher todos os campos.",
      error: true,
    };

    return returnData;
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validateFields.data;
  const amountNumber = +amount;

  try {
    await prismaClient.invoice.update({
      where: {
        id: id,
      },
      data: {
        customerId: customerId,
        status: status,
        amount: amountNumber,
      },
    });

    console.log("Fatura Atualizada com sucesso");
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  } catch (error) {
    // return {
    //   message: "Erro no Banco de Dados: Falha ao atualizar a fatura",
    // };
    returnData.error = true;
    returnData.message = "Erro no Banco de Dados: Falha ao atualizar a fatura";
    return returnData;
  }
}

export async function DeleteInvoice(id: string, formData: FormData) {
  try {
    await prismaClient.invoice.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return {
      message: "Erro no Banco de dados: Falha ao deletar a fatura",
    };
  }

  console.log(`Fatura ${id} deletada com sucesso`);
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
