import Image from "next/image";
import CecyLogo from "./UI/AcsterLogo";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Fonts } from "./UI/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3">
      <div className="flex h-20 w-full shrink-0 items-end rounded-lg bg-emerald-300 p-3 md:h-52">
        <CecyLogo />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          className={`flex flex-col justify-center rounded-lg bg-slate-50 p-10 ${Fonts.lusitana.className}`}
        >
          <Image
            src="/dashboard.png"
            alt="dashboard icon"
            width={40}
            height={40}
          ></Image>
          <p className="mt-2 text-2xl font-bold md:text-3xl">
            Bem vindo(a) a AcsterCo.
          </p>
          <p className="mt-2 w-[16ch] text-2xl md:text-3xl">
            Este é um projeto dashboard utilizando Next & TypeScript.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 flex w-fit gap-2 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-lg font-bold text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 md:text-xl"
          >
            Entrar
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/hero-mobile.png"
            alt="Cecy main photo"
            className="block md:hidden"
            width={460}
            height={520}
          ></Image>
          <Image
            src="/hero-desktop.png"
            alt="Cecy main photo"
            className="hidden md:block"
            width={1000}
            height={760}
          ></Image>
        </div>
      </div>
    </main>
  );
}
