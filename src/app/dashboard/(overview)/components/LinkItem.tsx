"use client";

type heroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkItem({
  icon,
  href,
  text,
}: {
  icon: heroIcon;
  href: string;
  text: string;
}) {
  const pathname = usePathname();
  const LinkIcon = icon;
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center justify-center gap-3 rounded-lg bg-slate-50 p-3 font-semibold hover:bg-teal-100 hover:text-emerald-700 md:justify-normal",
        {
          "bg-teal-100  text-emerald-700": pathname === href,
        },
      )}
    >
      <LinkIcon className="w-6" />
      <p className="xs:block hidden">{text}</p>
    </Link>
  );
}
