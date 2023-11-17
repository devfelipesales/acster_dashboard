import CecyLogo from "@/app/UI/CecyLogo";
import React from "react";
import NavLinks from "./NavLinks";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="grid place-content-start gap-2">
      <div className="flex h-20 w-full shrink-0 items-end rounded-lg bg-emerald-300 p-3 md:h-52">
        <CecyLogo />
      </div>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-1">
        <NavLinks />
        <form action="" className="mt-0 md:mt-[100%]">
          <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-50 p-3 font-semibold hover:bg-teal-100 hover:text-emerald-700  md:justify-normal">
            <PowerIcon className="w-6" />
            <p className="hidden xs:block">Sair</p>
          </button>
        </form>
      </div>
    </div>
  );
}
