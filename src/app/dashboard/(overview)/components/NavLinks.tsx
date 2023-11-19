"use client";

import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import LinkItem from "./LinkItem";

export default function NavLinks() {
  return (
    <>
      <LinkItem href="/dashboard" text="Início" icon={HomeIcon} />
      <LinkItem
        href="/dashboard/invoices"
        text="Faturas"
        icon={DocumentDuplicateIcon}
      />
      <LinkItem
        href="/dashboard/customers"
        text="Clientes"
        icon={UserGroupIcon}
      />
    </>
  );
}
