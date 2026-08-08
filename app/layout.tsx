import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEKAZ — Jerónimo Gregorini",
  description:
    "Portfolio de TEKAZ / Jerónimo Gregorini: tattoos, murales, ilustraciones y obras gráficas.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
