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
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 " />
            <h3 className="mb-5 text-lg font-normal text-gray-500 ">
              Tem certeza que deseja deletar essa fatura ?
            </h3>

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
