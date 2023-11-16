import type { Metadata } from "next";
import "./globals.css";
import { Fonts } from "./UI/fonts";

export const metadata: Metadata = {
  title: "Cecy",
  description: "Cecy Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${Fonts.nunito.className} box-border p-4 antialiased`}>
        {children}
      </body>
    </html>
  );
}
