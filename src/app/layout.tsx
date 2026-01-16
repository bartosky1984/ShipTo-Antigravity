import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShipBridge International | Envía lo que quieras, a donde quieras. Por menos.",
  description: "Conecta con miles de transportistas calificados y ahorra hasta un 75% en costos de envío.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
