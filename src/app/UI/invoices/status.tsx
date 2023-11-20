import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { $Enums } from "@prisma/client";
import clsx from "clsx";

export default function InvoiceStatus({
  status,
}: {
  status: $Enums.InvoiceStatus;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "PENDING",
          "bg-green-500 text-white": status === "PAID",
        },
      )}
    >
      {status === "PENDING" ? (
        <>
          Pendente
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "PAID" ? (
        <>
          Pago
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
