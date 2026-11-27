
"use client";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Brain,
  BookOpen,
  Settings,
  Bell,
  Search,
  Menu,
  ChevronRight,
  Activity,
  Sparkles,
  X,
  Plus,
  ArrowUpRight,
  Trash2,
  UserRound,
  Pencil,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import EducatorsModule from "./EducatorsModule";

const menuItems = [
  { name: "Visão Geral", icon: LayoutDashboard },
  { name: "Estudantes", icon: Users },
  { name: "Educadores", icon: GraduationCap },
  { name: "TEIA Intelligence", icon: Brain },
  { name: "Aprendizagem", icon: BookOpen },
  { name: "Configurações", icon: Settings },
];

type Student = {
  id: number;
  name: string;
  age: string;
  className: string;
  institution: string;
  notes: string;
};

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Visão Geral");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function renderContent() {
    switch (activeMenu) {
      case "Estudantes":
        return <StudentModule />;

      case "Educadores":
        return <EducatorsModule />;

      case "TEIA Intelligence":
        return (
          <ModulePage
            icon={GraduationCap}
            title="Educadores"
            description="Conecte profissionais e fortaleça práticas pedagógicas inclusivas."
            tag="GESTÃO DE EDUCADORES"
            action="Adicionar educador"
          >
            <ModuleCard title="Equipe pedagógica" description="Visualize e organize os educadores da plataforma." />
            <ModuleCard title="Colaboração" description="Promova colaboração entre profissionais da educação." />
            <ModuleCard title="Atuação pedagógica" description="Organize informações e práticas pedagógicas." />
          </ModulePage>
        );

      case "TEIA Intelligence":
        return (
          <ModulePage
            icon={Brain}
            title="TEIA Intelligence"
            description="Inteligência artificial aplicada à compreensão de barreiras e possibilidades de aprendizagem."
            tag="INTELIGÊNCIA PEDAGÓGICA"
            action="Iniciar análise"
          >
            <ModuleCard title="Análise pedagógica" description="Explore possibilidades de análise de contextos de aprendizagem." />
            <ModuleCard title="Adaptação inteligente" description="Conheça alternativas para tornar conteúdos mais acessíveis." />
            <ModuleCard title="Recomendações" description="Apoio à tomada de decisão pedagógica, com revisão humana." />
          </ModulePage>
        );

      case "Aprendizagem":
        return (
          <ModulePage
            icon={BookOpen}
            title="Aprendizagem"
            description="Organize experiências, atividades e possibilidades de aprendizagem."
            tag="EXPERIÊNCIAS DE APRENDIZAGEM"
            action="Criar atividade"
          >
            <ModuleCard title="Atividades" description="Organize atividades educacionais acessíveis." />
            <ModuleCard title="Trilhas de aprendizagem" description="Estruture percursos de aprendizagem flexíveis." />
            <ModuleCard title="Adaptações" description="Explore diferentes formas de apresentar conteúdos." />
          </ModulePage>
        );

      case "Configurações":
        return (
          <ModulePage
            icon={Settings}
            title="Configurações"
            description="Organize as preferências e informações gerais da plataforma."
            tag="ADMINISTRAÇÃO"
          >
            <ModuleCard title="Perfil da plataforma" description="Informações gerais e identidade da TEIA." />
            <ModuleCard title="Preferências" description="Personalização das preferências de uso." />
            <ModuleCard title="Acessibilidade" description="Opções para uma experiência mais acessível." />
          </ModulePage>
        );

      default:
        return <Overview onNavigate={setActiveMenu} />;
    }
  }

  return (
    <main className="teia-dashboard">
      <aside className={`teia-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="teia-brand">
          <div className="teia-brand-symbol"><span>t</span></div>
          <div className="teia-brand-text">
            <strong>TEIA</strong>
            <span>PLATAFORMA INTELIGENTE</span>
          </div>
          <button className="teia-close-sidebar" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="teia-sidebar-label">MENU PRINCIPAL</div>

        <nav className="teia-navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.name;

            return (
              <button
                key={item.name}
                className={`teia-nav-item ${isActive ? "active" : ""}`}
                onClick={() => {
                  setActiveMenu(item.name);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.name}</span>
                {isActive && <ChevronRight size={16} />}
              </button>
            );
          })}
        </nav>

        <div className="teia-sidebar-bottom">
          <div className="teia-sidebar-card">
            <div className="teia-sidebar-card-icon"><Sparkles size={18} /></div>
            <strong>O futuro da educação é inclusivo.</strong>
            <p>Tecnologia, inteligência e humanidade conectadas para transformar a aprendizagem.</p>
          </div>

          <div className="teia-user-profile">
            <div className="teia-avatar">T</div>
            <div className="teia-user-info">
              <strong>Administrador TEIA</strong>
              <span>Gestor da plataforma</span>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="teia-sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <section className="teia-main-content">
        <header className="teia-topbar">
          <div className="teia-topbar-left">
            <button className="teia-menu-button" onClick={() => setSidebarOpen(true)}>
              <Menu size={21} />
            </button>
            <div className="teia-breadcrumb">
              <span>TEIA</span>
              <ChevronRight size={15} />
              <strong>{activeMenu}</strong>
            </div>
          </div>

          <div className="teia-topbar-actions">
            <div className="teia-search">
              <Search size={17} />
              <input placeholder="Pesquisar na plataforma..." />
            </div>
            <button className="teia-notification-button">
              <Bell size={19} />
              <span className="teia-notification-dot" />
            </button>
          </div>
        </header>

        <div className="teia-dashboard-content">
          {renderContent()}

          <footer className="teia-dashboard-footer">
            <span>TEIA © 2026 — Inteligência a serviço da inclusão.</span>
            <span>Construindo possibilidades, conectando futuros.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   MÓDULO ESTUDANTES
===================================================== */

function StudentModule() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [institution, setInstitution] = useState("");
  const [notes, setNotes] = useState("");

  // Carrega os estudantes salvos no navegador
  useEffect(() => {
  const savedStudents = localStorage.getItem("teia_students");

  if (savedStudents) {
    try {
      setStudents(JSON.parse(savedStudents));
    } catch {
      setStudents([]);
    }
  }

  setLoaded(true);
}, []);

  // Salva automaticamente sempre que a lista mudar
  useEffect(() => {
  if (!loaded) return;

  localStorage.setItem("teia_students", JSON.stringify(students));
}, [students, loaded]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!name.trim()) return;

  if (editingStudent) {
    // Atualiza o estudante existente, preservando seu ID
    setStudents((previous) =>
      previous.map((student) =>
        student.id === editingStudent.id
          ? {
              ...student,
              name: name.trim(),
              age,
              className: className.trim(),
              institution: institution.trim(),
              notes: notes.trim(),
            }
          : student
      )
    );
  } else {
    // Cria um novo estudante
    const newStudent: Student = {
      id: Date.now(),
      name: name.trim(),
      age,
      className: className.trim(),
      institution: institution.trim(),
      notes: notes.trim(),
    };

    setStudents((previous) => [newStudent, ...previous]);
  }

  // Limpa o formulário após salvar
  setName("");
  setAge("");
  setClassName("");
  setInstitution("");
  setNotes("");
  setEditingStudent(null);
  setFormOpen(false);
}

  function editStudent(student: Student) {
  setEditingStudent(student);

  setName(student.name);
  setAge(student.age);
  setClassName(student.className);
  setInstitution(student.institution);
  setNotes(student.notes);

  setFormOpen(true);
}

  function deleteStudent(id: number) {
    const confirmed = window.confirm("Deseja realmente excluir este estudante?");

    if (!confirmed) return;

    setStudents((previous) => previous.filter((student) => student.id !== id));
  }

  const filteredStudents = students.filter((student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: "12px",
    border: "1px solid #e7e2f0",
    background: "#fff",
    color: "#211c3a",
    outline: "none",
    fontSize: "14px",
  };

  const labelStyle: CSSProperties = {
    display: "block",
    marginBottom: "8px",
    fontSize: "12px",
    fontWeight: 700,
    color: "#625d76",
  };

  return (
    <div className="teia-module-page">

      {/* CABEÇALHO */}
      <div className="teia-module-welcome">
        <div className="teia-module-icon"><Users size={26} /></div>

        <span className="teia-eyebrow">GESTÃO EDUCACIONAL</span>

        <h1>Estudantes</h1>

        <p>
          Gerencie estudantes e acompanhe suas diferentes necessidades de aprendizagem.
        </p>

        <button
          className="teia-module-action"
          onClick={() => setFormOpen(true)}
        >
          <Plus size={17} /> Adicionar estudante
        </button>
      </div>

      {/* INDICADORES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "18px",
        margin: "28px 0"
      }}>
        <div className="teia-module-card">
          <div className="teia-module-card-top">
            <div className="teia-module-card-symbol"><Users size={19} /></div>
          </div>
          <span style={{ color: "#77738c", fontSize: "13px" }}>Total de estudantes</span>
          <h2 style={{ fontSize: "32px", margin: "12px 0" }}>{students.length}</h2>
          <p>Estudantes cadastrados</p>
        </div>

        <div className="teia-module-card">
          <div className="teia-module-card-top">
            <div className="teia-module-card-symbol"><Sparkles size={19} /></div>
          </div>
          <span style={{ color: "#77738c", fontSize: "13px" }}>Gestão educacional</span>
          <h2 style={{ fontSize: "24px", margin: "12px 0" }}>TEIA</h2>
          <p>Perfis organizados em um só lugar</p>
        </div>
      </div>

      {/* BUSCA E LISTAGEM */}
      <div className="teia-module-section-title">
        <div>
          <h2>Estudantes cadastrados</h2>
          <p>Consulte e gerencie os estudantes da plataforma.</p>
        </div>
      </div>

      <div style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        margin: "22px 0",
        padding: "5px",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#fff",
          border: "1px solid #e7e2f0",
          padding: "0 15px",
          borderRadius: "12px",
          flex: 1,
        }}>
          <Search size={18} color="#8a83a0" />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar estudante pelo nome..."
            style={{
              border: "none",
              outline: "none",
              padding: "13px 0",
              width: "100%",
              background: "transparent",
              color: "#211c3a",
            }}
          />
        </div>
      </div>

      {/* ESTADO VAZIO */}
      {filteredStudents.length === 0 && (
        <div style={{
          background: "#fff",
          border: "1px solid #ece7f5",
          borderRadius: "22px",
          padding: "50px 25px",
          textAlign: "center",
        }}>
          <div style={{
            width: "65px",
            height: "65px",
            borderRadius: "20px",
            background: "#eee8ff",
            display: "grid",
            placeItems: "center",
            color: "#7957d5",
            margin: "0 auto 20px",
          }}>
            <UserRound size={28} />
          </div>

          <h3 style={{ color: "#211c3a", marginBottom: "10px" }}>
            {searchTerm ? "Nenhum estudante encontrado" : "Nenhum estudante cadastrado"}
          </h3>

          <p style={{ color: "#77738c", fontSize: "14px", lineHeight: 1.7 }}>
            {searchTerm
              ? "Tente pesquisar utilizando outro nome."
              : "Comece adicionando o primeiro estudante à plataforma TEIA."}
          </p>

          {!searchTerm && (
            <button
              className="teia-module-action"
              onClick={() => setFormOpen(true)}
              style={{ marginTop: "18px" }}
            >
              <Plus size={17} /> Cadastrar primeiro estudante
            </button>
          )}
        </div>
      )}

      {/* LISTA DE ESTUDANTES */}
      {filteredStudents.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
        }}>
          {filteredStudents.map((student) => (
            <article
              key={student.id}
              className="teia-module-card"
              style={{ padding: "24px" }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "20px",
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "15px",
                  display: "grid",
                  placeItems: "center",
                  color: "#7957d5",
                  background: "#eee8ff",
                  fontWeight: 700,
                  fontSize: "17px",
                }}>
                  {student.name.charAt(0).toUpperCase()}
                </div>

                <div style={{ display: "flex", gap: "8px" }}></div>
                <button
                  onClick={() => editStudent(student)}
                  title="Editar estudante"
                  style={{
                    border: "none",
                    background: "#f3f0fa",
                    color: "#7957d5",
                    borderRadius: "10px",
                     padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Pencil size={17} />
                </button>

                <button
                    onClick={() => deleteStudent(student.id)}
                    title="Excluir estudante"
                    style={{
                    border: "none",
                    background: "#fff1f2",
                    color: "#d1495b",
                    borderRadius: "10px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Trash2 size={17} />
                </button>
              </div>

              <h3 style={{ margin: "0 0 15px", color: "#211c3a", fontSize: "18px" }}>
                {student.name}
              </h3>

              <div style={{ display: "grid", gap: "9px", fontSize: "13px", color: "#77738c" }}>
                {student.age && <div><strong>Idade:</strong> {student.age} anos</div>}
                {student.className && <div><strong>Turma:</strong> {student.className}</div>}
                {student.institution && <div><strong>Instituição:</strong> {student.institution}</div>}
              </div>

              {student.notes && (
                <div style={{
                  marginTop: "16px",
                  padding: "12px",
                  borderRadius: "12px",
                  background: "#f7f5fc",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: "#77738c",
                }}>
                  {student.notes}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {/* FORMULÁRIO DE CADASTRO */}
      {formOpen && (
        <div
          onClick={() => setFormOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(25, 19, 45, 0.58)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "560px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 30px 80px rgba(20,10,50,.25)",
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "25px",
            }}>
              <div>
                <span className="teia-eyebrow">NOVO REGISTRO</span>
                <h2 style={{ margin: "10px 0 0", color: "#211c3a" }}>
                  Cadastrar estudante
                </h2>
              </div>

              <button
                onClick={() => setFormOpen(false)}
                style={{
                  border: "none",
                  background: "#f3f0fa",
                  borderRadius: "10px",
                  padding: "9px",
                  cursor: "pointer",
                  color: "#625d76",
                }}
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
              <div>
                <label style={labelStyle}>Nome completo *</label>
                <input
                  autoFocus
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Digite o nome completo"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Idade</label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  placeholder="Idade do estudante"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Turma</label>
                <input
                  value={className}
                  onChange={(event) => setClassName(event.target.value)}
                  placeholder="Ex.: 5º ano A"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Instituição de ensino</label>
                <input
                  value={institution}
                  onChange={(event) => setInstitution(event.target.value)}
                  placeholder="Nome da escola ou instituição"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Observações</label>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Informações adicionais relevantes..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "5px",
                flexWrap: "wrap",
              }}>
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  style={{
                    padding: "13px 18px",
                    borderRadius: "12px",
                    border: "1px solid #e7e2f0",
                    background: "#fff",
                    color: "#625d76",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="teia-module-action"
                  style={{ margin: 0 }}
                >
                  <Plus size={17} /> Salvar estudante
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   VISÃO GERAL
===================================================== */

function Overview({ onNavigate }: { onNavigate: (menu: string) => void }) {
  return (
    <>
      <div className="teia-welcome">
        <div>
          <span className="teia-eyebrow"><Sparkles size={14} /> INTELIGÊNCIA QUE TRANSFORMA</span>
          <h1>Bem-vindo à <span>TEIA.</span></h1>
          <p>Conectando pessoas, inteligência e possibilidades para uma educação mais inclusiva.</p>
        </div>
        <div className="teia-welcome-decoration">
          <div className="teia-orbit teia-orbit-one" />
          <div className="teia-orbit teia-orbit-two" />
          <div className="teia-orbit teia-orbit-three" />
          <div className="teia-orbit-center"><Brain size={34} /></div>
        </div>
      </div>

      <div className="teia-section-heading">
        <div><h2>Visão geral</h2><p>Acompanhe os indicadores da sua plataforma.</p></div>
        <span className="teia-live-indicator"><span /> Painel em tempo real</span>
      </div>

      <div className="teia-metrics-grid">
        <Metric icon={Users} color="blue" tag="Comunidade" value="128" title="Estudantes cadastrados" growth="+12%" />
        <Metric icon={GraduationCap} color="purple" tag="Equipe" value="24" title="Educadores ativos" growth="+4" />
        <Metric icon={BookOpen} color="aqua" tag="Aprendizagem" value="86%" title="Engajamento educacional" growth="+8,4%" />
        <Metric icon={Activity} color="orange" tag="Inteligência" value="342" title="Análises realizadas pela TEIA" growth="+23%" />
      </div>

      <div className="teia-bottom-grid">
        <div className="teia-panel teia-activity-panel">
          <div className="teia-panel-header">
            <div><h2>Atividade recente</h2><p>Últimas movimentações na plataforma</p></div>
            <button className="teia-text-button">Ver tudo</button>
          </div>
          <div className="teia-activity-list">
            <ActivityItem icon={Users} color="blue" title="Novo estudante cadastrado" text="Um estudante foi adicionado à plataforma." time="Há 15 min" />
            <ActivityItem icon={Brain} color="purple" title="Análise TEIA Intelligence concluída" text="Uma nova análise educacional foi gerada." time="Há 42 min" />
            <ActivityItem icon={BookOpen} color="aqua" title="Plano de aprendizagem atualizado" text="Uma trilha de aprendizagem foi modificada." time="Há 1 h" />
            <ActivityItem icon={GraduationCap} color="orange" title="Educador integrado à equipe" text="Um novo educador está na plataforma." time="Há 3 h" />
          </div>
        </div>

        <div className="teia-panel teia-intelligence-panel">
          <div className="teia-intelligence-glow" />
          <div className="teia-intelligence-content">
            <div className="teia-intelligence-icon"><Brain size={24} /></div>
            <span className="teia-eyebrow">INTELIGÊNCIA ARTIFICIAL</span>
            <h2>Conheça o potencial de cada estudante.</h2>
            <p>A TEIA Intelligence transforma dados em insights para apoiar decisões educacionais mais humanas, personalizadas e inclusivas.</p>
            <button className="teia-intelligence-button" onClick={() => onNavigate("TEIA Intelligence")}>
              Explorar inteligência <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* =====================================================
   COMPONENTES GERAIS
===================================================== */

function Metric({ icon: Icon, color, tag, value, title, growth }: any) {
  return (
    <div className="teia-metric-card">
      <div className="teia-metric-top">
        <div className={`teia-metric-icon ${color}`}><Icon size={20} /></div>
        <span className="teia-metric-tag">{tag}</span>
      </div>
      <h3>{value}</h3>
      <p>{title}</p>
      <div className="teia-metric-footer">
        <span className="teia-metric-positive">{growth}</span>
        <span>indicador ilustrativo</span>
      </div>
    </div>
  );
}

function ActivityItem({ icon: Icon, color, title, text, time }: any) {
  return (
    <div className="teia-activity-item">
      <div className={`teia-activity-icon ${color}`}><Icon size={17} /></div>
      <div className="teia-activity-description"><strong>{title}</strong><span>{text}</span></div>
      <time>{time}</time>
    </div>
  );
}

function ModulePage({ icon: Icon, title, description, tag, action, children }: any) {
  return (
    <div className="teia-module-page">
      <div className="teia-module-welcome">
        <div className="teia-module-icon"><Icon size={26} /></div>
        <span className="teia-eyebrow">{tag}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {action && <button className="teia-module-action"><Plus size={17} /> {action}</button>}
      </div>

      <div className="teia-module-section-title">
        <div><h2>Explore {title}</h2><p>Conheça as possibilidades deste módulo.</p></div>
      </div>

      <div className="teia-module-grid">{children}</div>
    </div>
  );
}

function ModuleCard({ title, description }: any) {
  return (
    <article className="teia-module-card">
      <div className="teia-module-card-top">
        <div className="teia-module-card-symbol"><Sparkles size={19} /></div>
        <ArrowUpRight size={18} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
