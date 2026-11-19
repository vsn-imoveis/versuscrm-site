import type { Metadata } from "next";
import SeoPage from "../../components/SeoPage";

export const metadata: Metadata = {
  title: "Planos do Versus CRM | Consulte a solução para sua operação",
  description: "Veja como conhecer os planos do Versus CRM para corretores e pequenas imobiliárias. Solicite uma apresentação e consulte as condições atuais.",
  alternates: { canonical: "https://www.versuscrm.com.br/planos" },
};

export default function Page() {
  return <SeoPage eyebrow="Planos e contratação" title="Uma solução para profissionalizar sua operação imobiliária" intro="O Versus CRM combina site imobiliário próprio e ferramentas para organizar contatos e imóveis. Fale com nossa equipe para conhecer as condições comerciais disponíveis e entender qual configuração atende à sua operação." sections={[
    { title: "Para corretores independentes", body: "Tenha uma presença digital com sua identidade e uma estrutura para organizar os contatos que chegam pelos seus canais." },
    { title: "Para pequenas imobiliárias", body: "Conheça a proposta de uma plataforma que reúne apresentação de imóveis e organização comercial em um só ambiente." },
    { title: "Entenda o que está incluído", body: "Na demonstração, nossa equipe pode apresentar o site público, o cadastro de imóveis, a captação de leads e o painel de gestão." },
    { title: "Consulte as condições atuais", body: "Valores, limites e recursos comerciais podem variar conforme a oferta vigente. Solicite uma apresentação para receber as informações atualizadas antes de contratar." }
  ]} />;
}
