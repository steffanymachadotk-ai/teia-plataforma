
"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import {
  GraduationCap,
  Plus,
  Search,
  Trash2,
  UserRound,
  X,
  Sparkles,
  Pencil,
} from "lucide-react";

type Educator = {
  id: number;
  name: string;
  role: string;
  institution: string;
  email: string;
  notes: string;
};

export default function EducatorsModule() {
  const [educators, setEducators] = useState<Educator[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("teia_educators");

    if (saved) {
      try {
        setEducators(JSON.parse(saved));
      } catch {
        setEducators([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("teia_educators", JSON.stringify(educators));
  }, [educators, loaded]);

  function resetForm() {
    setName("");
    setRole("");
    setInstitution("");
    setEmail("");
    setNotes("");
    setEditingId(null);
    setFormOpen(false);
  }

  function openNewForm() {
    setEditingId(null);
    setName("");
    setRole("");
    setInstitution("");
    setEmail("");
    setNotes("");
    setFormOpen(true);
  }

  function editEducator(educator: Educator) {
    setEditingId(educator.id);
    setName(educator.name);
    setRole(educator.role);
    setInstitution(educator.institution);
    setEmail(educator.email);
    setNotes(educator.notes);
    setFormOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) return;

    if (editingId !== null) {
      setEducators((previous) =>
        previous.map((educator) =>
          educator.id === editingId
            ? {
                ...educator,
                name: name.trim(),
                role: role.trim(),
                institution: institution.trim(),
                email: email.trim(),
                notes: notes.trim(),
              }
            : educator
        )
      );
    } else {
      const newEducator: Educator = {
        id: Date.now(),
        name: name.trim(),
        role: role.trim(),
        institution: institution.trim(),
        email: email.trim(),
        notes: notes.trim(),
      };

      setEducators((previous) => [newEducator, ...previous]);
    }

    resetForm();
  }

  function deleteEducator(id: number) {
    const confirmed = window.confirm(
      "Deseja realmente excluir este educador?"
    );

    if (!confirmed) return;

    setEducators((previous) =>
      previous.filter((educator) => educator.id !== id)
    );
  }

  const filteredEducators = educators.filter((educator) =>
    educator.name.toLowerCase().includes(search.toLowerCase())
  );

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: "12px",
    border: "1px solid #e7e2f0",
    background: "#fff",
    color: "#211c3a",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box",
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
        <div className="teia-module-icon">
          <GraduationCap size={26} />
        </div>

        <span className="teia-eyebrow">
          GESTÃO DE EDUCADORES
        </span>

        <h1>Educadores</h1>

        <p>
          Conecte profissionais e fortaleça práticas pedagógicas
          inclusivas.
        </p>

        <button
          className="teia-module-action"
          onClick={openNewForm}
        >
          <Plus size={17} /> Adicionar educador
        </button>
      </div>

      {/* INDICADORES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "18px",
          margin: "28px 0",
        }}
      >
        <div className="teia-module-card">
          <div className="teia-module-card-top">
            <div className="teia-module-card-symbol">
              <GraduationCap size={19} />
            </div>
          </div>

          <span style={{ color: "#77738c", fontSize: "13px" }}>
            Total de educadores
          </span>

          <h2 style={{ fontSize: "32px", margin: "12px 0" }}>
            {educators.length}
          </h2>

          <p>Profissionais cadastrados</p>
        </div>

        <div className="teia-module-card">
          <div className="teia-module-card-top">
            <div className="teia-module-card-symbol">
              <Sparkles size={19} />
            </div>
          </div>

          <span style={{ color: "#77738c", fontSize: "13px" }}>
            Gestão pedagógica
          </span>

          <h2 style={{ fontSize: "24px", margin: "12px 0" }}>
            TEIA
          </h2>

          <p>Equipe educacional organizada</p>
        </div>
      </div>

      {/* PESQUISA */}
      <div className="teia-module-section-title">
        <div>
          <h2>Educadores cadastrados</h2>
          <p>Consulte e gerencie os profissionais da plataforma.</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "22px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#fff",
            border: "1px solid #e7e2f0",
            padding: "0 15px",
            borderRadius: "12px",
            flex: 1,
          }}
        >
          <Search size={18} color="#8a83a0" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar educador pelo nome..."
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
      {filteredEducators.length === 0 && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ece7f5",
            borderRadius: "22px",
            padding: "50px 25px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "20px",
              background: "#eee8ff",
              display: "grid",
              placeItems: "center",
              color: "#7957d5",
              margin: "0 auto 20px",
            }}
          >
            <UserRound size={28} />
          </div>

          <h3 style={{ color: "#211c3a", marginBottom: "10px" }}>
            {search
              ? "Nenhum educador encontrado"
              : "Nenhum educador cadastrado"}
          </h3>

          <p
            style={{
              color: "#77738c",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            {search
              ? "Tente pesquisar utilizando outro nome."
              : "Comece cadastrando o primeiro educador da plataforma TEIA."}
          </p>

          {!search && (
            <button
              className="teia-module-action"
              onClick={openNewForm}
              style={{ marginTop: "18px" }}
            >
              <Plus size={17} /> Cadastrar primeiro educador
            </button>
          )}
        </div>
      )}

      {/* LISTAGEM */}
      {filteredEducators.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {filteredEducators.map((educator) => (
            <article
              key={educator.id}
              className="teia-module-card"
              style={{ padding: "24px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "15px",
                    display: "grid",
                    placeItems: "center",
                    color: "#7957d5",
                    background: "#eee8ff",
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
                >
                  {educator.name.charAt(0).toUpperCase()}
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => editEducator(educator)}
                    title="Editar educador"
                    aria-label={`Editar ${educator.name}`}
                    style={{
                      border: "none",
                      background: "#eee8ff",
                      color: "#7957d5",
                      borderRadius: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    onClick={() => deleteEducator(educator.id)}
                    title="Excluir educador"
                    aria-label={`Excluir ${educator.name}`}
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
              </div>

              <h3
                style={{
                  margin: "0 0 15px",
                  color: "#211c3a",
                  fontSize: "18px",
                }}
              >
                {educator.name}
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "9px",
                  fontSize: "13px",
                  color: "#77738c",
                }}
              >
                {educator.role && (
                  <div>
                    <strong>Função:</strong> {educator.role}
                  </div>
                )}

                {educator.institution && (
                  <div>
                    <strong>Instituição:</strong> {educator.institution}
                  </div>
                )}

                {educator.email && (
                  <div>
                    <strong>E-mail:</strong> {educator.email}
                  </div>
                )}
              </div>

              {educator.notes && (
                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    borderRadius: "12px",
                    background: "#f7f5fc",
                    fontSize: "12px",
                    lineHeight: 1.6,
                    color: "#77738c",
                  }}
                >
                  {educator.notes}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {/* FORMULÁRIO */}
      {formOpen && (
        <div
          onClick={resetForm}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "25px",
              }}
            >
              <div>
                <span className="teia-eyebrow">
                  {editingId !== null ? "EDITAR CADASTRO" : "NOVO REGISTRO"}
                </span>

                <h2 style={{ margin: "10px 0 0", color: "#211c3a" }}>
                  {editingId !== null
                    ? "Editar educador"
                    : "Cadastrar educador"}
                </h2>
              </div>

              <button
                onClick={resetForm}
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

            <form
              onSubmit={handleSubmit}
              style={{ display: "grid", gap: "18px" }}
            >
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
                <label style={labelStyle}>Cargo ou função</label>
                <input
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  placeholder="Ex.: Professor, psicopedagogo..."
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
                <label style={labelStyle}>E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="educador@email.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Observações</label>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Informações adicionais..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                  marginTop: "5px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="button"
                  onClick={resetForm}
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
                  {editingId !== null ? (
                    <>
                      <Pencil size={17} /> Salvar alterações
                    </>
                  ) : (
                    <>
                      <Plus size={17} /> Salvar educador
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
