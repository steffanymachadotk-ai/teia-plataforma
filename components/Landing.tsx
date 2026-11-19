"use client";

import { useState } from "react";
import {
  ArrowRight, Sparkles, Network, GraduationCap, BookOpen,
  Building2, ShieldCheck, BrainCircuit, Menu, X, Accessibility,
  WandSparkles, ChevronDown
} from "lucide-react";

const links = [
  ["A plataforma", "#plataforma"],
  ["Como funciona", "#como-funciona"],
  ["Para quem", "#publico"],
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <nav className="nav-wrap">
        <a className="brand" href="#" aria-label="TEIA início">
          <span className="brand-mark"><Network size={21} /></span>
          <span>teia<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#acesso">Conheça a TEIA <ArrowRight size={16}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </nav>
      {menuOpen && <div className="mobile-menu">{links.map(([label, href]) => <a onClick={() => setMenuOpen(false)} href={href} key={label}>{label}</a>)}<a href="#acesso">Conheça a TEIA</a></div>}

      <section className="hero" id="inicio">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot"/> EDUCAÇÃO QUE RECONHECE DIFERENÇAS</div>
          <h1>Cada pessoa aprende de um jeito<span className="gradient-text">.</span><br/><em>A educação precisa reconhecer isso.</em></h1>
          <p className="hero-lead">Conectamos pessoas, acessibilidade e inteligência pedagógica para transformar barreiras educacionais em novas possibilidades de aprendizagem.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#plataforma">Explore a TEIA <ArrowRight size={17}/></a>
            <a className="button-quiet" href="#como-funciona"><span className="play-icon">▶</span> Descubra como funciona</a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>ED</span><span>ES</span><span>IN</span></div>
            <p><strong>Uma rede, muitas possibilidades.</strong><br/>Educadores · Estudantes · Instituições</p>
          </div>
        </div>

        <div className="visual-stage" aria-label="Ilustração tridimensional de conexões">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="glow glow-a"/><div className="glow glow-b"/>
          <div className="core">
            <div className="core-inner"><Network size={62} strokeWidth={1.15}/><span>TEIA</span></div>
          </div>
          <div className="node node-top"><GraduationCap/><span>Estudante</span></div>
          <div className="node node-right"><BookOpen/><span>Educador</span></div>
          <div className="node node-bottom"><Building2/><span>Instituição</span></div>
          <div className="node node-left"><Accessibility/><span>Acessibilidade</span></div>
          <div className="spark spark-one">✦</div><div className="spark spark-two">✧</div>
          <div className="floating-card card-ai"><span className="mini-icon"><Sparkles size={15}/></span><span><b>TEIA Intelligence</b><small>Possibilidades em conexão</small></span><i/></div>
          <div className="floating-card card-access"><ShieldCheck size={17}/><span><b>Inclusão</b><small>Em cada experiência</small></span></div>
        </div>
        <a className="scroll-cue" href="#plataforma"><span/> Role para explorar <ChevronDown size={15}/></a>
      </section>

      <section className="manifesto" id="plataforma">
        <div className="section-kicker">01 — NOSSA VISÃO</div>
        <div className="manifesto-content">
          <h2>Não existe um único caminho para aprender<span className="gradient-text">.</span></h2>
          <p>A TEIA nasce para apoiar uma educação que considera diferentes formas de perceber, compreender, comunicar e participar. Tecnologia a serviço das pessoas — não o contrário.</p>
        </div>
        <div className="manifesto-orb"><div className="orb-ring"/><div className="orb-center"><WandSparkles size={35}/></div></div>
      </section>

      <section className="features" id="como-funciona">
        <div className="section-heading">
          <div><div className="section-kicker">02 — COMO A TEIA CONECTA</div><h2>Da barreira à possibilidade.</h2></div>
          <p>Uma plataforma para apoiar decisões pedagógicas mais acessíveis, com inteligência artificial e revisão humana.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-dark"><div className="feature-icon"><BrainCircuit/></div><span className="feature-number">01 / INTELIGÊNCIA</span><h3>IA com propósito pedagógico</h3><p>Sugestões de adaptação acompanhadas de justificativas, para apoiar — nunca substituir — a decisão do educador.</p><div className="card-decoration deco-brain">✳</div></article>
          <article className="feature-card"><div className="feature-icon lilac"><Accessibility/></div><span className="feature-number">02 / ACESSIBILIDADE</span><h3>Barreiras em perspectiva</h3><p>Identificação de obstáculos e alternativas de acesso, participação e compreensão.</p><div className="card-decoration deco-access">◌</div></article>
          <article className="feature-card"><div className="feature-icon aqua"><Network/></div><span className="feature-number">03 / CONEXÃO</span><h3>Pessoas no centro</h3><p>Educadores, estudantes e instituições conectados em torno de experiências de aprendizagem mais inclusivas.</p><div className="card-decoration deco-network">⌘</div></article>
        </div>
      </section>

      <section className="audience" id="publico">
        <div className="section-kicker">03 — UMA REDE PARA TODOS</div>
        <h2>Três perspectivas.<br/><span className="gradient-text">Um propósito compartilhado.</span></h2>
        <div className="audience-grid">
          <div className="audience-card"><div className="audience-icon"><BookOpen/></div><h3>Educadores</h3><p>Planeje, adapte e revise atividades com apoio de inteligência pedagógica.</p><span>01</span></div>
          <div className="audience-card"><div className="audience-icon"><GraduationCap/></div><h3>Estudantes</h3><p>Acesse materiais em uma experiência clara, acolhedora e ajustável.</p><span>02</span></div>
          <div className="audience-card"><div className="audience-icon"><Building2/></div><h3>Instituições</h3><p>Apoie práticas de acessibilidade e fortaleça uma cultura de inclusão.</p><span>03</span></div>
        </div>
      </section>

      <section className="closing" id="acesso">
        <div className="closing-glow"/>
        <div className="closing-kicker"><Sparkles size={15}/> O FUTURO DA APRENDIZAGEM É PLURAL</div>
        <h2>Quando a educação se adapta,<br/><em>novos caminhos se abrem.</em></h2>
        <p>TEIA — Tecnologia Educacional Inclusiva e Adaptativa.</p>
        <a className="button-light" href="mailto:contato@teia.educacao">Conheça nossa proposta <ArrowRight size={17}/></a>
      </section>

      <footer><a className="brand footer-brand" href="#"><span className="brand-mark"><Network size={18}/></span><span>teia<span className="brand-dot">.</span></span></a><span>Conectando possibilidades de aprendizagem.</span><span>© 2026 TEIA</span></footer>
    </main>
  );
}