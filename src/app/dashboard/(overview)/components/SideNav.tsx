import AcsterLogo from "@/app/UI/AcsterLogo";
import React from "react";
import NavLinks from "./NavLinks";
import SignOutButton from "@/app/UI/SignOutButton";

export default function SideNav() {
  return (
    <div className="h-full w-full pb-3 pl-3 pr-3 pt-3 md:max-w-[15rem] md:pr-0">
      <div className="flex h-full flex-col gap-2 ">
        <div className="flex h-20 w-full shrink-0 items-end rounded-lg bg-emerald-300 p-3 md:h-52">
          <AcsterLogo />
        </div>
        <div className="flex h-full grow flex-row  place-items-start gap-2 md:flex-col md:place-items-stretch">
          <NavLinks />
          {/* OBS: Manter o último item do menu na parte de baixo da tela:  */}
          {/* Pode-se criar uma div fazia para preencher o espaço entre os items de cima e o item que ficará em baixo */}
          {/* Ou utilizar margin-top:auto no último item */}
          {/* <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div> */}
          {/* <form action="" className="md:mt-auto">
            <button className="flex w-full grow items-center justify-center gap-3 rounded-lg bg-slate-50 p-3 font-semibold hover:bg-teal-100 hover:text-emerald-700 md:justify-normal">
              <PowerIcon className="w-6" />
              <p className="hidden md:block">Sair</p>
            </button>
          </form> */}
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
