import type { Metadata } from "next";
import SeoPage from "../../components/SeoPage";

export const metadata: Metadata = {
  title: "Sistema para corretor de imóveis | Versus CRM",
  description: "Conheça uma solução para corretor de imóveis que reúne site próprio, vitrine de imóveis e organização de leads em um CRM imobiliário.",
  alternates: { canonical: "https://www.versuscrm.com.br/para-corretores" },
};

export default function Page() {
  return <SeoPage eyebrow="Tecnologia para corretores" title="Mais presença digital e organização para o corretor de imóveis" intro="O trabalho do corretor envolve divulgar imóveis, responder interessados e acompanhar negociações. O Versus CRM reúne um site imobiliário próprio e recursos de organização para apoiar essas atividades." sections={[
    { title: "Construa sua presença profissional", body: "Apresente sua marca, sua experiência e os imóveis com os quais trabalha em um endereço próprio na internet." },
    { title: "Dê visibilidade à sua carteira", body: "Disponibilize os imóveis em uma vitrine organizada e facilite a navegação de quem procura uma oportunidade." },
    { title: "Não perca o contexto do atendimento", body: "Centralize os contatos recebidos e acompanhe as oportunidades para saber com quem precisa falar e qual é o próximo passo." },
    { title: "Tenha uma operação mais integrada", body: "A proposta do Versus CRM é conectar o site público à gestão comercial, reduzindo a distância entre receber um interessado e dar continuidade ao atendimento." }
  ]} />;
}
