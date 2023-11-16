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
      <LinkItem href="/dashboard" text="Home" icon={HomeIcon} />
      <LinkItem href="/invoices" text="Faturas" icon={DocumentDuplicateIcon} />
      <LinkItem href="/customers" text="Clientes" icon={UserGroupIcon} />
    </>
  );
}
