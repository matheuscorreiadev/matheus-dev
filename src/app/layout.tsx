import type { Metadata } from "next";

import "./globals.css";

import Providers from "@/src/components/Providers";

export const metadata: Metadata = {
  title: "Matheus Correia | Desenvolvedor Full Stack",
  description:
    "Portfólio de Matheus Correia, Desenvolvedor Full Stack com foco em React, Next.js, Node.js e bancos de dados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
