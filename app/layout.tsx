import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://versuscrm.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Versus CRM | Site imobiliário e CRM para corretores",
  description:
    "Tenha seu próprio site imobiliário com sua marca e organize leads, imóveis e oportunidades em um CRM para corretores. Conheça o Versus CRM.",
  keywords: [
    "CRM imobiliário",
    "site para corretor de imóveis",
    "CRM para corretores",
    "site imobiliário",
    "gestão de leads imobiliários",
    "sistema para imobiliária",
    "marketing imobiliário",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Versus CRM",
    title: "Versus CRM | Seu site imobiliário + CRM",
    description:
      "Sua marca na internet e seus contatos organizados em uma plataforma para corretores.",
    images: ["/site/img/vitrine-site.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Versus CRM | Site imobiliário e CRM",
    description:
      "Seu site imobiliário com sua marca e CRM para organizar oportunidades.",
    images: ["/site/img/vitrine-site.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <nav aria-label="Páginas do Versus CRM" style={{ background: "#041925", color: "#f7f4ee", borderTop: "1px solid #203746", padding: "18px 5vw", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 24px", fontSize: 13 }}>
          <Link href="/" style={{ color: "inherit" }}>Início</Link>
          <Link href="/site-imobiliario-para-corretores" style={{ color: "inherit" }}>Site imobiliário</Link>
          <Link href="/crm-imobiliario" style={{ color: "inherit" }}>CRM imobiliário</Link>
          <Link href="/funcionalidades" style={{ color: "inherit" }}>Funcionalidades</Link>
          <Link href="/para-corretores" style={{ color: "inherit" }}>Para corretores</Link>
          <Link href="/planos" style={{ color: "inherit" }}>Planos</Link>
          <Link href="/sobre" style={{ color: "inherit" }}>Sobre</Link>
        </nav>
      </body>
    </html>
  );
}
