import type { Metadata } from "next";
import "./globals.css";
import { Fonts } from "./UI/fonts";
import { AuthProvider } from "./providers/auth";

export const metadata: Metadata = {
  title: {
    template: "%s | Acster Dashboard",
    default: "Acster Dashboard",
  },
  description: "Acster Dashboard com Next e TypeScript",
  metadataBase: new URL("https://acster-dashboard.vercel.app/"),
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
