"use client";

import { useState } from "react";

export default function WhatsAppLead() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Conhecer o Versus CRM");

  function openModal() {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "";
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name}. Meu WhatsApp é ${phone}. Tenho interesse em: ${interest}. Quero saber mais sobre o Versus CRM.`;
    const url = `https://wa.me/5511974116234?text=${encodeURIComponent(message)}`;
    window.location.href = url;
    closeModal();
  }

  return (
    <>
      <a href="#" onClick={e=>{e.preventDefault();openModal()}} aria-label="Fale conosco pelo WhatsApp" title="Fale conosco pelo WhatsApp" style={{position:"fixed",right:22,bottom:22,zIndex:1000,width:60,height:60,borderRadius:"50%",background:"#25D366",boxShadow:"0 5px 22px #0006",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none"}}>
        <svg viewBox="0 0 32 32" width="34" height="34" fill="white" aria-hidden="true"><path d="M16.02 3A12.9 12.9 0 0 0 4.9 28.66L3 29l.38-1.83A12.9 12.9 0 1 0 16.02 3Zm0 23.55a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.2.84.85-3.12-.25-.4a10.62 10.62 0 1 1 8.39 4.39Zm5.83-7.95c-.32-.16-1.88-.93-2.17-1.03-.3-.11-.5-.16-.68.16-.96.32-1.14.98-1.38 1.18-.25.21-.5.25-.93.07-.42-.2-1.55-.57-2.94-1.82-1.09-.97-1.83-2.16-2.04-2.56-.21-.4-.02-.77.18-1.04.2-.25.45-.65.6-.85.16-.3.08-.56-.04-.78-.12-.3-1.02-2.44-1.4-3.33-.36-.75-.73-.64-1.13-.66l-.97-.02c-.34 0-.9.13-1.37.65-.47.52-1.8 1.76-1.8 4.3s1.85 4.99 2.1 5.33c.25.34 3.62 5.83 8.98 7.93 1.25.49 2.23.78 2.99 1 .99.31 1.9.27 2.62.16.8-.12 2.46-1 2.8-1.96.35-.96.35-1.78.25-1.96-.1-.18-.3-.28-.62-.44Z"/></svg>
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
            <label style={{display:"block",fontSize:13,fontWeight:700,marginBottom:7}}>O que você procura?</label>
            <select value={interest} onChange={e=>setInterest(e.target.value)} style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"#f2f4f8",marginBottom:22,fontSize:15}}>
              <option>Conhecer o Versus CRM</option><option>Ter meu site imobiliário</option><option>Site + CRM</option><option>Agendar uma demonstração</option>
            </select>
            <button type="submit" style={{width:"100%",padding:15,border:0,borderRadius:999,background:"linear-gradient(135deg,#f3cf7a,#e0b04f)",color:"#1a1405",fontSize:15,fontWeight:800,cursor:"pointer"}}>Continuar para o WhatsApp</button>
            <p style={{fontSize:11,color:"#78869e",textAlign:"center",margin:"12px 0 0"}}>Seus dados serão usados para dar continuidade ao atendimento.</p>
          </form>
        </div>
      </div>}
    </>
  );
}
