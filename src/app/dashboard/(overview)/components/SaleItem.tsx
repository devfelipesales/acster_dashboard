import Image from "next/image";
import React from "react";

export default function InvoiceItem({
  src,
  alt,
  name,
  email,
  value,
}: {
  src: string;
  alt: string;
  name: string;
  email: string;
  value: string;
}) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Image
            className="h-8 w-8 rounded-full"
            src={src}
            alt={alt}
            width={60}
            height={60}
          />
        </div>
        <div className="ms-4 min-w-0 flex-1">
          <p className="truncate text-base font-bold text-gray-900">{name}</p>
          <p className="truncate text-sm text-gray-500 ">{email}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {value}
        </div>
      </div>
    </li>
  );
}
