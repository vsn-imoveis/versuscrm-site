"use client";

import { useState } from "react";

export default function WhatsAppLead() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name} e meu telefone é ${phone}. Quero saber mais sobre o Versus CRM.`;
    window.open(`https://wa.me/5511974116234?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <button aria-label="Fale conosco pelo WhatsApp" onClick={() => setOpen(true)} style={{position:"fixed",right:22,bottom:22,zIndex:1000,width:62,height:62,borderRadius:"50%",border:0,background:"#25D366",boxShadow:"0 5px 22px #0006",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
        <svg viewBox="0 0 32 32" width="34" height="34" fill="white" aria-hidden="true"><path d="M16.02 3A12.9 12.9 0 0 0 4.9 28.66L3 29l.38-1.83A12.9 12.9 0 1 0 16.02 3Zm0 23.55a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.2.84.85-3.12-.25-.4a10.62 10.62 0 1 1 8.39 4.39Zm5.83-7.95c-.32-.16-1.88-.93-2.17-1.03-.3-.11-.5-.16-.68.16-.96.32-1.14.98-1.38 1.18-.25.21-.5.25-.93.07-.42-.2-1.55-.57-2.94-1.82-1.09-.97-1.83-2.16-2.04-2.56-.21-.4-.02-.77.18-1.04.2-.25.45-.65.6-.85.16-.3.08-.56-.04-.78-.12-.3-1.02-2.44-1.4-3.33-.36-.75-.73-.64-1.13-.66l-.97-.02c-.34 0-.9.13-1.37.65-.47.52-1.8 1.76-1.8 4.3s1.85 4.99 2.1 5.33c.25.34 3.62 5.83 8.98 7.93 1.25.49 2.23.78 2.99 1 .99.31 1.9.27 2.62.16.8-.12 2.46-1 2.8-1.96.35-.96.35-1.78.25-1.96-.1-.18-.3-.28-.62-.44Z"/></svg>
      </button>
      {open && <div onClick={() => setOpen(false)} style={{position:"fixed",inset:0,zIndex:1001,background:"#020817bb",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
        <form onClick={e=>e.stopPropagation()} onSubmit={submit} style={{width:"min(100%,420px)",background:"#0b1830",border:"1px solid #263858",borderRadius:20,padding:26,color:"#f2f4f8",fontFamily:"Arial,sans-serif",boxShadow:"0 20px 60px #0008"}}>
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar" style={{float:"right",background:"transparent",border:0,color:"#a3afc4",fontSize:25,cursor:"pointer"}}>×</button>
          <h2 style={{fontSize:23,margin:"0 0 8px"}}>Vamos conversar?</h2>
          <p style={{color:"#a3afc4",fontSize:14,margin:"0 0 20px"}}>Preencha seus dados para continuar no WhatsApp.</p>
          <label style={{display:"block",fontSize:13,marginBottom:6}}>Seu nome</label>
          <input required autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="Como podemos te chamar?" style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"white",marginBottom:16,fontSize:15}}/>
          <label style={{display:"block",fontSize:13,marginBottom:6}}>Seu telefone</label>
          <input required type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(11) 99999-9999" style={{width:"100%",padding:13,borderRadius:9,border:"1px solid #344564",background:"#050d1c",color:"white",marginBottom:20,fontSize:15}}/>
          <button type="submit" style={{width:"100%",padding:14,border:0,borderRadius:999,background:"#25D366",color:"#052b14",fontSize:15,fontWeight:800,cursor:"pointer"}}>Continuar para o WhatsApp</button>
        </form>
      </div>}
    </>
  );
}
