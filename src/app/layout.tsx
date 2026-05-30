import type { Metadata } from "next";

import "./globals.css";

import Providers from "@/src/components/Providers";

export const metadata: Metadata = {
  title: "Matheus Correia | Full Stack Developer",
  description:
    "Portfólio moderno de Matheus Correia - Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}