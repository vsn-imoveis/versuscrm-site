import type { Metadata } from "next";
import SeoPage from "../../components/SeoPage";

export const metadata: Metadata = {
  title: "Site imobiliário para corretores | Versus CRM",
  description: "Tenha um site imobiliário profissional com sua marca, apresentação, imóveis e canais de contato. Conheça o site para corretores do Versus CRM.",
  alternates: { canonical: "https://www.versuscrm.com.br/site-imobiliario-para-corretores" },
};

export default function Page() {
  return <SeoPage eyebrow="Site imobiliário profissional" title="Seu próprio site imobiliário, com a sua marca e seus imóveis" intro="Um site para corretor de imóveis ajuda a apresentar seu trabalho, reunir seus imóveis e oferecer ao cliente um caminho direto para falar com você. Com o Versus CRM, o site faz parte de uma solução integrada à gestão dos contatos." sections={[
    { title: "Sua marca em primeiro plano", body: "Apresente seu nome, sua identidade visual, sua atuação e sua forma de atender. O site deixa de ser apenas uma lista de anúncios e passa a apresentar também o profissional por trás do atendimento." },
    { title: "Vitrine de imóveis", body: "Organize os imóveis cadastrados e apresente as informações em uma vitrine própria, com navegação pensada para quem procura comprar ou alugar." },
    { title: "Contato sem desvio", body: "Facilite o primeiro contato por canais como WhatsApp e formulários. Os interessados podem chegar diretamente até você, sem depender exclusivamente dos portais imobiliários." },
    { title: "Site conectado à rotina comercial", body: "Ao integrar o site ao CRM, a divulgação e o acompanhamento dos interessados ficam mais próximos. Isso ajuda a reduzir controles espalhados e retrabalho." }
  ]} />;
}
