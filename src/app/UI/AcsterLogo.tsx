import React from "react";
import SVGLogo from "./SVGLogo";
import { Fonts } from "./fonts";
import Link from "next/link";

export default function AcsterLogo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">
        <SVGLogo />
        <p
          className={`text-4xl font-bold text-white ${Fonts.lusitana.className}`}
        >
          AcsterCo.
        </p>
      </div>
    </Link>
  );
}
