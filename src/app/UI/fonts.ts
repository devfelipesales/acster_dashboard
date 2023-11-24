import { Nunito, Lusitana } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Fonts = {
  nunito,
  lusitana,
};
