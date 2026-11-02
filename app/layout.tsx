import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Versus CRM | Seu negócio imobiliário em outro nível",
  description: "A plataforma completa para corretores e pequenas imobiliárias: imóveis, leads, clientes e seu próprio site em um só lugar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
