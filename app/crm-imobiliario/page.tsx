import type { Metadata } from "next";
import SeoPage from "../../components/SeoPage";

export const metadata: Metadata = {
  title: "CRM imobiliário para corretores e imobiliárias | Versus CRM",
  description: "Organize leads, acompanhe oportunidades e mantenha os imóveis em um só lugar com um CRM imobiliário conectado ao seu site.",
  alternates: { canonical: "https://www.versuscrm.com.br/crm-imobiliario" },
};

export default function Page() {
  return <SeoPage eyebrow="Gestão comercial imobiliária" title="CRM imobiliário para organizar leads e oportunidades" intro="Um CRM imobiliário centraliza informações de clientes e oportunidades para que o corretor acompanhe cada atendimento com mais clareza. O Versus CRM reúne essa organização com um site imobiliário próprio." sections={[
    { title: "Centralize os contatos", body: "Reúna os leads recebidos pelos canais do site em um ambiente de gestão, evitando que cada oportunidade fique perdida em conversas ou anotações separadas." },
    { title: "Acompanhe cada oportunidade", body: "Mantenha o contexto dos atendimentos e visualize os próximos passos de cada negociação. Um processo organizado facilita a continuidade do relacionamento com o cliente." },
    { title: "Organize sua carteira de imóveis", body: "Mantenha os dados dos imóveis cadastrados e utilize essas informações na operação e na apresentação do seu portfólio no site." },
    { title: "Site e gestão na mesma solução", body: "O site apresenta sua marca e recebe interessados; o CRM apoia a organização do atendimento. A proposta é aproximar divulgação e operação comercial." }
  ]} />;
}
