import type { Metadata } from "next";
import SeoPage from "../../components/SeoPage";

export const metadata: Metadata = {
  title: "Funcionalidades do Versus CRM | Site, leads e imóveis",
  description: "Conheça as funcionalidades do Versus CRM: site imobiliário com identidade própria, cadastro de imóveis, captação de leads e organização do atendimento.",
  alternates: { canonical: "https://www.versuscrm.com.br/funcionalidades" },
};

export default function Page() {
  return <SeoPage eyebrow="Recursos da plataforma" title="Ferramentas para divulgar imóveis e organizar seu atendimento" intro="O Versus CRM foi pensado para aproximar a presença digital do corretor da sua rotina comercial. Conheça os principais recursos apresentados pela plataforma." sections={[
    { title: "Site imobiliário personalizado", body: "Uma presença digital com sua marca, apresentação profissional, vitrine de imóveis e formas de contato para os visitantes." },
    { title: "Cadastro e apresentação de imóveis", body: "Cadastre as informações dos imóveis para organizar sua carteira e disponibilizar os anúncios no site público." },
    { title: "Captação de interessados", body: "Receba solicitações de contato pelo site e encaminhe os dados para o fluxo de atendimento comercial." },
    { title: "Organização de leads", body: "Consulte os contatos em um painel centralizado e acompanhe as oportunidades para dar continuidade ao relacionamento." },
    { title: "Experiência em dispositivos móveis", body: "O site público é preparado para navegação em celular, tablet e computador, facilitando o acesso aos imóveis em diferentes telas." },
    { title: "Estrutura para profissionais e pequenas equipes", body: "A solução atende à proposta de corretores independentes e pequenas imobiliárias que precisam apresentar seus imóveis e organizar os contatos." }
  ]} />;
}
