import type { Metadata } from "next";
import "./globals.css";
import { Fonts } from "./UI/fonts";
import { AuthProvider } from "./providers/auth";

export const metadata: Metadata = {
  title: "Acster",
  description: "Acster Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${Fonts.nunito.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
