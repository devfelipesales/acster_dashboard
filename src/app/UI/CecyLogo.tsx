import React from "react";
import SVGLogo from "./SVGLogo";
import { Fonts } from "./fonts";

export default function CecyLogo() {
  return (
    <div className="flex items-center gap-1">
      <SVGLogo />
      <p
        className={`text-4xl font-bold text-white ${Fonts.lusitana.className}`}
      >
        GlobalCecy
      </p>
    </div>
  );
}
