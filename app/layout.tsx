import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEIA — Cada pessoa aprende de um jeito",
  description: "Tecnologia educacional inclusiva e adaptativa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}