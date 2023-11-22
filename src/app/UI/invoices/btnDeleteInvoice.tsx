"use client";

import { DeleteInvoice } from "@/app/lib/actions";
import { CheckIcon, ClockIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Image from "next/image";
import InvoiceStatus from "./status";

type CardDelete = {
  id: string;
  name: string;
  imageUrl: string;
  status: "PENDING" | "PAID";
  amount: string;
  date: string;
};

export default function BtnDelete({
  id,
  name,
  imageUrl,
  status,
  amount,
  date,
}: CardDelete) {
  const [openModal, setOpenModal] = useState(false);
  const invoiceId: string = id;
  const deleteInvoiceWithId = DeleteInvoice.bind(null, invoiceId);

  return (
    <>
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={() => setOpenModal(true)}
      >
        <TrashIcon className="w-5" />
      </button>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="flex w-full justify-center pb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-semibold ">Exclusão de Fatura</h3>
            <p className="mb-5 font-normal text-gray-600 ">
              Tem certeza que deseja deletar essa fatura de forma permanente?
            </p>

            <div className="flex items-center justify-between border p-4">
              <div className="">
                <div className="flex items-center gap-3">
                  <Image
                    src={imageUrl}
                    className="h-7 w-7 rounded-full"
                    alt={`${name} imagem perfil`}
                    width={28}
                    height={28}
                  />
                  <div className="flex flex-col text-sm">
                    <p>{name}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col place-items-end gap-2">
                {status === "PAID" && (
                  <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-xs">
                    <CheckIcon className="w-3 text-white" />
                  </span>
                )}
                {status === "PENDING" && (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs">
                    <ClockIcon className="w-3 text-gray-500" />
                  </span>
                )}
                <p className="text-xs font-medium ">{amount}</p>
                <p className="text-xs">{date}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-5">
              <form id="formDeleteInvoice" action={deleteInvoiceWithId}>
                <Button
                  type="submit"
                  color="failure"
                  // onClick={() => setOpenModal(false)}
                >
                  {"Sim, deletar"}
                </Button>
              </form>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Não, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
