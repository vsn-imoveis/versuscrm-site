import type { Metadata } from "next";
import SeoPage from "../../components/SeoPage";

export const metadata: Metadata = {
  title: "Sobre o Versus CRM | Tecnologia para o mercado imobiliário",
  description: "Conheça o Versus CRM, uma plataforma que aproxima site imobiliário, divulgação de imóveis e gestão de leads para corretores e pequenas imobiliárias.",
  alternates: { canonical: "https://www.versuscrm.com.br/sobre" },
};

export default function Page() {
  return <SeoPage eyebrow="Sobre a plataforma" title="Tecnologia para aproximar sua marca dos seus clientes" intro="O Versus CRM é uma solução digital voltada a corretores de imóveis independentes e pequenas imobiliárias. Sua proposta é reunir presença digital e organização comercial em uma plataforma." sections={[
    { title: "Por que o Versus existe", body: "A divulgação de imóveis e o atendimento aos interessados muitas vezes ficam espalhados por diferentes canais. O Versus CRM busca aproximar essas etapas em uma experiência integrada." },
    { title: "Para quem foi pensado", body: "A plataforma é direcionada a profissionais do mercado imobiliário que desejam ter um site com identidade própria e organizar melhor os contatos e imóveis da operação." },
    { title: "O que reúne", body: "Site imobiliário, vitrine de imóveis, captação de interessados e painel para apoiar a organização dos leads e da carteira." },
    { title: "Nosso objetivo", body: "Oferecer ferramentas digitais que ajudem o profissional a fortalecer sua presença online e conduzir o relacionamento com clientes de maneira mais organizada." }
  ]} />;
}
