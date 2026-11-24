"use client";

import { useState } from "react";
import styles from "./Planos.module.css";

const features = ["Site imobiliário personalizado", "Cadastro inteligente de imóveis", "Gestão de imóveis", "CRM de clientes e leads", "Contato pelo WhatsApp", "SEO Pages"];
const personal = [
  { name: "Start", description: "Para o corretor que está começando a construir sua presença digital.", price: "34,90", limit: "Até 5 imóveis", team: "Somente proprietário", featured: false },
  { name: "Essencial", description: "Para quem está crescendo e precisa organizar uma carteira maior.", price: "67,00", limit: "Até 50 imóveis", team: "Proprietário + 1 corretor", featured: false },
  { name: "Pro", description: "Para o corretor que quer ampliar sua operação e ganhar escala.", price: "119,90", limit: "Até 100 imóveis", team: "Proprietário + 1 corretor", featured: true },
];
const business = [{ name: "Imobiliária", description: "Para pequenas imobiliárias que precisam organizar imóveis e equipe em um só lugar.", price: "199,90", limit: "Até 300 imóveis", team: "Até 5 corretores", featured: true }];

export default function PlanosPage() {
  const [audience, setAudience] = useState<"personal" | "business">("personal");
  const plans = audience === "personal" ? personal : business;
  return <main className={styles.page}>
    <header className={styles.header}>
      <a href="/" aria-label="Versus CRM - página inicial"><img src="/site/img/versus-logo.png" alt="Versus CRM" /></a>
      <nav><a href="/">Início</a><a href="/funcionalidades">Funcionalidades</a><a className={styles.active} href="/planos">Planos</a></nav>
      <a className={styles.headerCta} href="/#contato">Falar com a equipe</a>
    </header>
    <section className={styles.hero}>
      <span className={styles.eyebrow}>SITE IMOBILIÁRIO + CRM</span>
      <h1>O próximo passo da sua operação começa aqui.</h1>
      <p>Escolha o plano ideal para o seu momento. Todos incluem as principais ferramentas para apresentar seus imóveis e organizar seus contatos.</p>
      <div className={styles.switch} role="tablist" aria-label="Tipo de operação">
        <button type="button" role="tab" aria-selected={audience === "personal"} className={audience === "personal" ? styles.selected : ""} onClick={() => setAudience("personal")}>Corretor (Pessoal)</button>
        <button type="button" role="tab" aria-selected={audience === "business"} className={audience === "business" ? styles.selected : ""} onClick={() => setAudience("business")}>Imobiliária (Business)</button>
      </div>
    </section>
    <section className={audience === "business" ? styles.grid + " " + styles.businessGrid : styles.grid} aria-live="polite">
      {plans.map(plan => <article className={plan.featured ? styles.card + " " + styles.featured : styles.card} key={plan.name}>
        {plan.featured && <span className={styles.popular}>MAIS ESCOLHIDO</span>}
        <div className={styles.topline}><span className={styles.symbol}>{plan.name === "Start" ? "◉" : plan.name === "Essencial" ? "◎" : "▥"}</span><div><h2>{plan.name}</h2><p>{plan.description}</p></div></div>
        <div className={styles.price}><span>R$</span> {plan.price}<small>/mês</small></div>
        <div className={styles.features}>{features.map(feature => <div className={styles.feature} key={feature}><span>✓</span>{feature}</div>)}</div>
        <div className={styles.limits}><div><span>♙</span>{plan.team}</div><div><span>⌂</span>{plan.limit}</div><small>Venda, locação e lançamento contam no mesmo limite.</small></div>
        <a className={styles.cta} href="/#contato">Conhecer este plano</a>
      </article>)}
    </section>
    <section className={styles.included}>
      <div className={styles.includedHead}><span className={styles.eyebrow}>EM TODOS OS PLANOS</span><h2>O essencial para divulgar e organizar sua operação.</h2><p>Seu site e sua gestão comercial trabalhando juntos, em uma única plataforma.</p></div>
      <div className={styles.includedGrid}>
        <article><span>01</span><h3>Site com sua identidade</h3><p>Apresente sua marca, seus imóveis e seus canais de contato em um site próprio.</p></article>
        <article><span>02</span><h3>Imóveis organizados</h3><p>Cadastre e gerencie imóveis de venda, locação e lançamento dentro do limite do plano.</p></article>
        <article><span>03</span><h3>Leads centralizados</h3><p>Receba solicitações do site e acompanhe os contatos no painel do CRM.</p></article>
        <article><span>04</span><h3>Mais presença nas buscas</h3><p>Conte com a estrutura de SEO Pages disponível na plataforma.</p></article>
      </div>
    </section>
    <section className={styles.faq}>
      <h2>Como funciona o limite de imóveis?</h2><p>O limite é compartilhado entre imóveis de venda, locação e lançamento. Por exemplo: no plano Start, os cinco imóveis podem estar distribuídos entre essas modalidades.</p>
      <div className={styles.note}><strong>Precisa de uma configuração diferente?</strong><span>Converse com nossa equipe para conhecer a plataforma e avaliar o plano adequado à sua operação.</span><a href="/#contato">Solicitar apresentação ↗</a></div>
    </section>
    <footer className={styles.footer}><a href="/"><img src="/site/img/versus-logo.png" alt="Versus CRM" /></a><span>© 2026 Versus CRM. Todos os direitos reservados.</span><a href="/#contato">Fale com a equipe</a></footer>
  </main>;
}
