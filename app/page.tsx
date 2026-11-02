const features = [
  { n: "01", title: "Seus imóveis organizados", text: "Cadastre, gerencie e atualize sua carteira sem planilhas espalhadas." },
  { n: "02", title: "Leads no seu controle", text: "Acompanhe oportunidades, contatos e negociações em um fluxo simples." },
  { n: "03", title: "Seu site imobiliário", text: "Apresente seus imóveis com um site profissional conectado à sua operação." },
  { n: "04", title: "Tudo em um só lugar", text: "Clientes, imóveis e rotina comercial reunidos em uma plataforma." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#"><span className="brand-mark">V</span> versus<span className="brand-light">crm</span></a>
        <div className="nav-links"><a href="#recursos">Recursos</a><a href="#planos">Planos</a><a className="login" href="#entrar">Entrar ↗</a></div>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> CRM feito para o mercado imobiliário</div>
          <h1>Seu negócio imobiliário.<br/><em>Do seu jeito.</em></h1>
          <p className="lead">Menos planilhas. Mais negócios. Tenha seus imóveis, clientes e oportunidades organizados em uma plataforma criada para quem vive o mercado imobiliário.</p>
          <div className="hero-actions"><a className="button primary" href="#planos">Quero conhecer o Versus <span>↗</span></a><a className="text-link" href="#recursos">Descubra como funciona ↓</a></div>
          <div className="trust"><div className="avatars"><span>V</span><span>+</span><span>✓</span></div><span>Feito para corretores que querem crescer</span></div>
        </div>
        <div className="hero-visual" aria-label="Prévia ilustrativa do painel Versus CRM">
          <div className="visual-glow"/>
          <div className="dash-window">
            <div className="dash-top"><div className="mini-brand"><b>V</b> versus<span>crm</span></div><div className="dash-user"><span className="user-dot">C</span> Meu escritório <span>⌄</span></div></div>
            <div className="dash-body"><aside><div className="side-active">▦　 Visão geral</div><div>⌂　 Imóveis</div><div>♧　 Contatos</div><div>↗　 Oportunidades</div><div>⚙　 Configurações</div><div className="side-bottom">VERSUS CRM</div></aside>
              <div className="dash-content"><div className="dash-heading"><div><small>SEGUNDA-FEIRA, 02 DE NOVEMBRO</small><h3>Bom dia! 👋</h3><p>Veja o resumo do seu negócio.</p></div><button>＋ Novo imóvel</button></div>
              <div className="stats"><div><small>Imóveis ativos</small><strong>24</strong><span className="positive">↗ Sua carteira</span></div><div><small>Novos contatos</small><strong>18</strong><span className="positive">↗ Este mês</span></div><div><small>Oportunidades</small><strong>07</strong><span className="neutral">Em andamento</span></div></div>
              <div className="chart-card"><div className="chart-title">Visão das oportunidades <span>Últimos 30 dias⌄</span></div><div className="bars"><i style={{height:"34%"}}/><i style={{height:"48%"}}/><i style={{height:"40%"}}/><i style={{height:"64%"}}/><i style={{height:"53%"}}/><i style={{height:"76%"}}/><i style={{height:"61%"}}/><i style={{height:"92%"}}/><i style={{height:"70%"}}/><i style={{height:"100%"}}/><i style={{height:"81%"}}/><i style={{height:"88%"}}/></div><div className="chart-labels"><span>05 out</span><span>12 out</span><span>19 out</span><span>26 out</span></div></div>
              <div className="bottom-card"><span>◷　Atividades recentes</span><div><b className="activity-dot"/> Novo lead recebido <small>há 12 min</small></div><div><b className="activity-dot purple"/> Imóvel atualizado <small>há 35 min</small></div></div>
            </div></div>
          </div>
          <div className="floating-tag tag-one">✦　Tudo conectado</div><div className="floating-tag tag-two">↗　Sua próxima venda começa aqui</div>
        </div>
      </section>

      <section className="ticker"><div>IMÓVEIS <b>✳</b> CLIENTES <b>✳</b> OPORTUNIDADES <b>✳</b> SEU SITE <b>✳</b> SEU NEGÓCIO <b>✳</b> IMÓVEIS <b>✳</b> CLIENTES <b>✳</b></div></section>

      <section className="features wrap" id="recursos">
        <div className="section-kicker">A ferramenta certa muda o jogo</div><div className="section-head"><h2>Você cuida dos negócios.<br/><em>A gente cuida da organização.</em></h2><p>Uma rotina mais leve e profissional, do primeiro contato até a próxima chave entregue.</p></div>
        <div className="feature-grid">{features.map((f)=><article className="feature" key={f.n}><span className="feature-n">{f.n}</span><div className="feature-icon">{["⌂","↗","▤","✳"][Number(f.n)-1]}</div><h3>{f.title}</h3><p>{f.text}</p><a href="#planos">Saiba mais <span>↗</span></a></article>)}</div>
      </section>

      <section className="pricing" id="planos"><div className="wrap pricing-inner"><div><div className="section-kicker light-kicker">Simples para começar. Completo para crescer.</div><h2>Seu próximo capítulo<br/>começa <em>com o Versus.</em></h2><p>Profissionalize sua operação sem complicar sua rotina.</p></div><div className="price-card"><span className="plan-label">VERSUS CRM · PLANO PROFISSIONAL</span><div className="price">R$ 100<span>/ mês</span></div><ul><li>✓ Gestão de até 100 imóveis</li><li>✓ CRM para contatos e oportunidades</li><li>✓ Site profissional integrado</li><li>✓ Até 35 fotos por imóvel</li></ul><a className="button dark-button" href="#entrar">Quero começar <span>↗</span></a><small>Sem complicação. Cancele quando quiser.</small></div></div></section>

      <section className="closing wrap" id="entrar"><div className="closing-mark">V</div><h2>Seu mercado. Sua marca.<br/><em>Seu próximo nível.</em></h2><a className="button primary" href="mailto:contato@versuscrm.com.br?subject=Quero%20conhecer%20o%20Versus%20CRM">Fale com a gente <span>↗</span></a></section>
      <footer className="footer wrap"><a className="brand" href="#"><span className="brand-mark">V</span> versus<span className="brand-light">crm</span></a><span>© 2026 Versus CRM. Feito para quem faz acontecer.</span><a href="#top">Voltar ao topo ↑</a></footer>
    </main>
  );
}
