"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function RadioStatus() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleChange = (status: string) => {
    params.set("page", "1");
    if (status) {
      params.set("status", status);
    } else {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="font-semibold">Status:</div>
      <div className="mb-5 flex">
        <div className="me-4 flex items-center">
          <div className="me-4 flex items-center">
            <input
              checked={
                !searchParams.get("status")?.toString() ||
                searchParams.get("status")?.toString() === "ALL"
              }
              id="all"
              type="radio"
              value=""
              name="status"
              onChange={(e) => handleChange(e.currentTarget.value)}
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="all"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Todos
            </label>
          </div>
          <input
            id="pending"
            checked={searchParams.get("status")?.toString() === "PENDING"}
            type="radio"
            value="PENDING"
            name="status"
            onChange={(e) => handleChange(e.currentTarget.value)}
            className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="pending"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Pendente
          </label>
        </div>
        <div className="me-4 flex items-center">
          <input
            id="paid"
            checked={searchParams.get("status")?.toString() === "PAID"}
            type="radio"
            value="PAID"
            name="status"
            onChange={(e) => handleChange(e.currentTarget.value)}
            className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="paid"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Pago
          </label>
        </div>
      </div>
    </>
  );
}
