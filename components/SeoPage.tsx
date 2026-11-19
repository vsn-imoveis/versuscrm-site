import Link from "next/link";
import WhatsAppLead from "./WhatsAppLead";

type SeoPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string; bullets?: string[] }[];
  cta?: string;
};

export default function SeoPage({ eyebrow, title, intro, sections, cta = "Solicitar demonstração" }: SeoPageProps) {
  return (
    <>
      <main style={{ minHeight: "100vh", background: "#061522", color: "#f6f4ef", fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: "22px max(5vw, 20px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, borderBottom: "1px solid #203746" }}>
          <Link href="/" style={{ color: "#d5aa53", fontFamily: "Georgia,serif", fontSize: 30, textDecoration: "none" }}>VERSUS <span style={{ color: "#fff", fontFamily: "Arial,sans-serif", fontSize: 13, letterSpacing: 3 }}>CRM</span></Link>
          <nav aria-label="Navegação principal" style={{ display: "flex", flexWrap: "wrap", gap: 18, fontSize: 13 }}>
            <Link href="/site-imobiliario-para-corretores" style={{ color: "#e9e5dc" }}>Site imobiliário</Link>
            <Link href="/crm-imobiliario" style={{ color: "#e9e5dc" }}>CRM imobiliário</Link>
            <Link href="/funcionalidades" style={{ color: "#e9e5dc" }}>Funcionalidades</Link>
            <Link href="/planos" style={{ color: "#e9e5dc" }}>Planos</Link>
          </nav>
        </header>
        <section style={{ padding: "76px max(6vw, 22px) 58px", maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ color: "#d5aa53", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{eyebrow}</p>
          <h1 style={{ maxWidth: 900, fontSize: "clamp(38px,6vw,68px)", lineHeight: 1.06, letterSpacing: -2, margin: "18px 0" }}>{title}</h1>
          <p style={{ maxWidth: 760, color: "#c0cbd1", fontSize: 19, lineHeight: 1.8 }}>{intro}</p>
          <p style={{ marginTop: 30 }}><a href="#contato" style={{ display: "inline-block", background: "#d5aa53", color: "#071722", borderRadius: 30, padding: "15px 24px", fontWeight: 700, textDecoration: "none" }}>{cta}</a></p>
        </section>
        <div style={{ background: "#f7f5f0", color: "#102b38", padding: "58px max(6vw, 22px)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
            {sections.map((section, index) => (
              <article key={section.title} style={{ background: "#fff", border: "1px solid #e8e2d6", borderRadius: 15, padding: 26 }}>
                <p style={{ color: "#b28a43", fontSize: 12, fontWeight: 700 }}>0{index + 1}</p>
                <h2 style={{ fontSize: 23, lineHeight: 1.2, margin: "12px 0" }}>{section.title}</h2>
                <p style={{ color: "#596b74", lineHeight: 1.75, fontSize: 15 }}>{section.body}</p>
                {section.bullets && <ul style={{ paddingLeft: 20, color: "#596b74", lineHeight: 1.9 }}>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
              </article>
            ))}
          </div>
        </div>
        <section id="contato" style={{ maxWidth: 900, margin: "0 auto", padding: "70px 22px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 15 }}>Conheça o Versus CRM</h2>
          <p style={{ color: "#c0cbd1", lineHeight: 1.7, marginBottom: 25 }}>Converse com nossa equipe e veja como reunir seu site imobiliário e a organização dos seus contatos em uma única solução.</p>
          <a href="#contato" style={{ display: "inline-block", background: "#d5aa53", color: "#071722", borderRadius: 30, padding: "15px 24px", fontWeight: 700, textDecoration: "none" }}>{cta}</a>
        </section>
        <footer style={{ borderTop: "1px solid #203746", padding: "25px max(5vw,20px)", color: "#9eabb3", fontSize: 13, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span>© {new Date().getFullYear()} Versus CRM</span>
          <Link href="/" style={{ color: "#d5aa53" }}>Voltar à página inicial</Link>
        </footer>
      </main>
      <WhatsAppLead />
    </>
  );
}
