"use client";

import { useEffect, useState } from "react";

export default function WhatsAppLead() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Conhecer o Versus CRM");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const openFromCta = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      const label = anchor?.textContent?.trim().toLocaleLowerCase("pt-BR");
      if (label && ["quero o meu", "solicitar demonstração", "falar no whatsapp"].includes(label)) {
        event.preventDefault();
        setOpen(true);
        document.body.style.overflow = "hidden";
      }
    };
    document.addEventListener("click", openFromCta);
    return () => document.removeEventListener("click", openFromCta);
  }, []);

  function openModal() {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "";
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");

    const message = `Olá! Meu nome é ${name}. Meu WhatsApp é ${phone}. Meu e-mail é ${email}. Tenho interesse em: ${interest}. Quero saber mais sobre o Versus CRM.`;
    const whatsappUrl = `https://wa.me/5511974116234?text=${encodeURIComponent(message)}`;

    try {
      const response = await fetch("https://versuscrm.vercel.app/api/public-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          interest,
          sourceUrl: window.location.href,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error || "Não foi possível registrar seus dados. Tente novamente.");
      }
      // Abre o WhatsApp somente depois de confirmar que o lead foi salvo no CRM.
      window.location.href = whatsappUrl;
      closeModal();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao registrar. Tente novamente.");
      setSubmitting(false);
    }
  }

  return (
    <>
      <a href="#" onClick={e=>{e.preventDefault();openModal()}} aria-label="Fale conosco pelo WhatsApp" title="Fale conosco pelo WhatsApp" style={{position:"fixed",right:22,bottom:22,zIndex:1000,width:60,height:60,borderRadius:"50%",background:"#25D366",boxShadow:"0 5px 22px #0006",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none"}}>
        <svg viewBox="0 0 448 512" width="34" height="34" fill="white" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111.1L0 480l118.7-31.2c32.7 17.9 69.5 27.3 105.2 27.3h.1c122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157zM224 438.1c-32.9 0-65.2-8.9-93.5-25.7l-6.7-4-70.4 18.5 18.8-68.6-4.4-7.1c-18.6-29.6-28.4-63.8-28.4-97.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.7 19.2 130.6 54.1s54.1 81.3 54.1 130.6c0 101.8-82.8 184.6-184.7 184.6zm101.3-138.2c-5.5-2.8-32.7-16.1-37.8-17.9-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 17.9-17.6 21.6c-3.2 3.7-6.5 4.2-12 1.4s-23.2-8.5-44.2-27.2c-16.3-14.5-27.3-32.4-30.5-37.9s-.3-8.5 2.4-11.3c2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.2s19.9 53.6 22.6 57.3c2.8 3.7 39.1 59.7 94.8 83.7 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.7-13.4 37.3-26.4 4.6-13 4.6-24.1 3.2-26.4-1.4-2.3-5.1-3.7-10.6-6.5z"/></svg>
      </a>
      {open && <div className="versus-lead-overlay" onClick={closeModal} style={{position:"fixed",inset:0,zIndex:1001,background:"rgba(2,8,23,.78)",backdropFilter:"blur(5px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
        <div role="dialog" aria-modal="true" aria-labelledby="versus-lead-title" onClick={e=>e.stopPropagation()} style={{width:"min(100%,480px)",background:"#0b1830",border:"1px solid #263858",borderRadius:20,overflow:"hidden",color:"#f2f4f8",fontFamily:"'Plus Jakarta Sans',Arial,sans-serif",boxShadow:"0 24px 70px #0008"}}>
          <div style={{padding:"26px 26px 20px",borderBottom:"1px solid #1d2c4a",position:"relative"}}>
            <button type="button" onClick={closeModal} aria-label="Fechar" style={{position:"absolute",right:18,top:14,background:"transparent",border:0,color:"#a3afc4",fontSize:28,cursor:"pointer"}}>×</button>
            <div style={{fontSize:11,letterSpacing:".16em",fontWeight:800,color:"#f3cf7a",marginBottom:8}}>VERSUS CRM</div>
            <h2 id="versus-lead-title" style={{fontSize:24,fontWeight:800,margin:"0 28px 8px 0",lineHeight:1.2}}>Vamos conversar?</h2>
            <p style={{fontSize:14,color:"#a3afc4",margin:0}}>Deixe seus dados para continuar o atendimento pelo WhatsApp.</p>
          </div>
          <form onSubmit={submit} style={{padding:26}}>
            <label style={{display:"block",fontSize:13,fontWeight:700,marginBottom:7}}>Nome completo</label>
            <input name="nome" required autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="Como podemos te chamar?" style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"#f2f4f8",marginBottom:18,fontSize:15,outlineColor:"#e0b04f"}}/>
            <label style={{display:"block",fontSize:13,fontWeight:700,marginBottom:7}}>Seu WhatsApp</label>
            <input name="whatsapp" required type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(11) 99999-9999" style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"#f2f4f8",marginBottom:18,fontSize:15}}/>
            <label style={{display:"block",fontSize:13,fontWeight:700,marginBottom:7}}>Seu e-mail</label>
            <input name="email" required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value.trim())} placeholder="voce@exemplo.com" style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"#f2f4f8",marginBottom:18,fontSize:15}}/>
            <label style={{display:"block",fontSize:13,fontWeight:700,marginBottom:7}}>O que você procura?</label>
            <select value={interest} onChange={e=>setInterest(e.target.value)} style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"#f2f4f8",marginBottom:22,fontSize:15}}>
              <option>Conhecer o Versus CRM</option><option>Ter meu site imobiliário</option><option>Site + CRM</option><option>Agendar uma demonstração</option>
            </select>
            {error && <p role="alert" style={{fontSize:13,color:"#ff9b9b",margin:"0 0 14px",textAlign:"center"}}>{error}</p>}
            <button type="submit" disabled={submitting} style={{width:"100%",padding:15,border:0,borderRadius:999,background:submitting?"#8a7849":"linear-gradient(135deg,#f3cf7a,#e0b04f)",color:"#1a1405",fontSize:15,fontWeight:800,cursor:submitting?"wait":"pointer",opacity:submitting?0.75:1}}>{submitting?"Registrando seus dados...":"Continuar para o WhatsApp"}</button>
            <p style={{fontSize:11,color:"#78869e",textAlign:"center",margin:"12px 0 0"}}>Seus dados serão usados para dar continuidade ao atendimento.</p>
          </form>
        </div>
      </div>}
    </>
  );
}
