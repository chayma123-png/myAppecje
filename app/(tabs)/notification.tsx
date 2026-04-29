
const COLORS = {
  red: "#c8102e",
  dark: "#1a1a2e",
  gray: "#f7f7f7",
  border: "#e0e0e0",
};

/* ── Icons ────────────────────────────────────────────────── */
const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.dark} strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.dark} strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowRight = ({ color = "white" }) => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckCircle = ({ color = "#28a745" }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={color} />
    <polyline points="9 12 11 14 15 10" stroke="white" strokeWidth="2" />
  </svg>
);

const LOGO_B64 = "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";

/* ── Logo ──────────────────────────────────────────────────── */
const Logo = () => (
  <img
    src={`data:image/jpeg;base64,${LOGO_B64}`}
    alt="Jenet'Com Junior Entreprise"
    style={{ height: 36, width: "auto", objectFit: "contain" }}
  />
);

/* ── TopBar ────────────────────────────────────────────────── */
const TopBar = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px 8px", background: "#fff" }}>
    <Logo />
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <BellIcon />
      <MenuIcon />
    </div>
  </div>
);

/* ── SearchBar ─────────────────────────────────────────────── */
const SearchBar = () => (
  <div style={{ margin: "4px 12px 10px", background: "#f1f1f1", borderRadius: 20, display: "flex", alignItems: "center", gap: 6, padding: "6px 12px" }}>
    <SearchIcon />
    <span style={{ fontSize: 10, color: "#aaa" }}>chercher...</span>
  </div>
);

/* ── TaskCard ──────────────────────────────────────────────── */
const TaskCard = ({ tasks }) => (
  <div style={{ margin: "4px 10px", background: COLORS.gray, borderRadius: 12, padding: "8px 10px" }}>
    {tasks.map((t, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: i < tasks.length - 1 ? 6 : 0 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: t.color || COLORS.red, flexShrink: 0 }} />
        <span style={{ fontSize: 9, color: "#444", flex: 1, marginLeft: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.label}</span>
        <div style={{ width: 16, height: 16, background: t.btnColor || COLORS.dark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <ArrowRight />
        </div>
      </div>
    ))}
  </div>
);

/* ── Bottom Navigation ─────────────────────────────────────── */
const BottomNav = ({ active = 0 }) => {
  const icons = [
    <svg key="cal" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    <svg key="task" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
    <svg key="home" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    <svg key="gear" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>,
    <svg key="user" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  ];
  return (
    <div style={{ background: COLORS.red, borderRadius: 20, margin: "6px 10px 10px", display: "flex", justifyContent: "space-around", padding: "8px 4px" }}>
      {icons.map((icon, i) => (
        <div key={i} style={{ color: "white", opacity: i === active ? 1 : 0.7, cursor: "pointer" }}>{icon}</div>
      ))}
    </div>
  );
};

/* ── Events Section ────────────────────────────────────────── */
const EventsSection = () => (
  <div style={{ padding: "8px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>
      <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.dark }}>Événements</div>
      <div style={{ fontSize: 9, color: "#888" }}>1 événement</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span style={{ fontSize: 9, color: COLORS.red, fontWeight: 700 }}>voir plus</span>
      <ArrowRight color={COLORS.red} />
    </div>
  </div>
);

/* ── Popup Buttons ─────────────────────────────────────────── */
const PopupButtons = ({ cancelLabel = "Plus tard", confirmLabel = "Voir la tâche" }) => (
  <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
    <div style={{ flex: 1, border: "1px solid #ccc", background: "#fff", borderRadius: 20, fontSize: 8.5, fontWeight: 700, color: "#555", padding: "5px 2px", textAlign: "center", cursor: "pointer" }}>
      {cancelLabel}
    </div>
    <div style={{ flex: 1, background: COLORS.red, borderRadius: 20, fontSize: 8.5, fontWeight: 700, color: "#fff", padding: "5px 2px", textAlign: "center", cursor: "pointer" }}>
      {confirmLabel}
    </div>
  </div>
);

/* ── Overlay wrapper ───────────────────────────────────────── */
const Overlay = ({ children }) => (
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.18)", zIndex: 10, display: "flex", alignItems: "flex-start", paddingTop: 70, justifyContent: "center" }}>
    <div style={{ background: "#fff", borderRadius: 14, margin: "0 10px", padding: 12, width: 210, boxShadow: "0 4px 20px rgba(0,0,0,.18)" }}>
      {children}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   POPUP 1 – Mise à jour
═══════════════════════════════════════════════════════════ */
const UpdatePopup = () => (
  <Overlay>
    <div style={{ textAlign: "center", fontSize: 28, marginBottom: 6 }}>🤖</div>
    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.dark, textAlign: "center", marginBottom: 3 }}>Mise à jour disponible !</div>
    <div style={{ fontSize: 9, color: "#666", textAlign: "center", marginBottom: 8 }}>
      Une nouvelle version est prête à être installée. Découvrez les nouveautés et améliorations.
    </div>
    <div style={{ fontSize: 8.5, fontWeight: 700, color: COLORS.dark, marginBottom: 4 }}>Nouveautés :</div>
    {[
      { color: "#1a6fd4", label: "Nouveau design et expérience améliorée" },
      { color: "#28a745", label: "Performances optimisées" },
      { color: "#fd7e14", label: "Corrections de bugs et stabilité" },
    ].map((item, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
        <CheckCircle color={item.color} />
        <span style={{ fontSize: 8.5, color: "#444" }}>{item.label}</span>
      </div>
    ))}
    <PopupButtons cancelLabel="Plus tard" confirmLabel="Mettre à jour" />
  </Overlay>
);

/* ═══════════════════════════════════════════════════════════
   POPUP 2 – Deadline
═══════════════════════════════════════════════════════════ */
const DeadlinePopup = () => (
  <Overlay>
    <div style={{ textAlign: "center", fontSize: 28, marginBottom: 6 }}>⏰</div>
    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.dark, textAlign: "center", marginBottom: 3 }}>Date limite imminente !</div>
    <div style={{ fontSize: 9, color: "#666", textAlign: "center", marginBottom: 8 }}>
      Une tâche importante approche sa date limite.
    </div>
    <div style={{ background: "#f7f7f7", borderRadius: 8, padding: "5px 7px", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
      <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid #ccc", flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: 9, fontWeight: 700, color: COLORS.dark }}>Rapport final à soumettre</div>
        <div style={{ fontSize: 8, color: "#888" }}>Échéance : 24 avril 2024</div>
      </div>
    </div>
    <PopupButtons cancelLabel="Me le rappeler plus tard" confirmLabel="Voir la tâche" />
  </Overlay>
);

/* ═══════════════════════════════════════════════════════════
   POPUP 3 – Nouvelle tâche
═══════════════════════════════════════════════════════════ */
const NewTaskPopup = () => (
  <Overlay>
    <div style={{ textAlign: "center", fontSize: 28, marginBottom: 4 }}>✨</div>
    <div style={{ marginBottom: 3 }}>
      <span style={{ background: "#28a745", color: "#fff", fontSize: 7, fontWeight: 700, borderRadius: 4, padding: "2px 5px" }}>NOUVEAU</span>
    </div>
    <div style={{ fontSize: 11, fontWeight: 800, color: COLORS.dark, textAlign: "center", marginBottom: 3 }}>Nouvelle tâche assignée !</div>
    <div style={{ fontSize: 9, color: "#666", textAlign: "center", marginBottom: 8 }}>
      Une nouvelle tâche vous a été attribuée.
    </div>
    <div style={{ background: "#f0f9f0", borderRadius: 8, padding: "5px 7px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
        <CheckCircle color="#28a745" />
        <div style={{ fontSize: 8.5, fontWeight: 700, color: COLORS.dark }}>Préparer la présentation Q2</div>
      </div>
      <div style={{ fontSize: 7.5, color: "#888" }}>Assignée par : Mme Dupont</div>
      <div style={{ fontSize: 7.5, color: "#888", marginTop: 1 }}>Échéance : 15 mai 2024</div>
    </div>
    <PopupButtons cancelLabel="Plus tard" confirmLabel="Voir la tâche" />
  </Overlay>
);

/* ═══════════════════════════════════════════════════════════
   PHONE SHELL
═══════════════════════════════════════════════════════════ */
const Phone = ({ label, popup, tasks }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    <div style={{ fontSize: 12, color: "#666", fontWeight: 600, letterSpacing: 0.5 }}>{label}</div>
    <div style={{
      width: 240,
      borderRadius: 28,
      background: "#fff",
      border: `1.5px solid ${COLORS.border}`,
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(0,0,0,.12)",
      position: "relative",
      fontFamily: "'Nunito', 'Segoe UI', sans-serif",
    }}>
      <TopBar />
      <SearchBar />
      <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.dark, padding: "4px 14px 10px" }}>
        Bonjour Foulen !
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 14px" }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: COLORS.dark }}>Mes tâches prioritaires</span>
        <UsersIcon />
      </div>
      <TaskCard tasks={tasks} />
      {popup}
      <EventsSection />
      <BottomNav active={2} />
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════ */
export default function JenetComNotifications() {
  const sharedTasks = [
    { label: "Développer le module rapport", color: COLORS.red },
    { label: "Finaliser la maquette UI", color: "#888", btnColor: "#aaa" },
  ];

  const screens = [
    {
      label: "Notification mise à jour",
      popup: <UpdatePopup />,
      tasks: sharedTasks,
    },
    {
      label: "Notification deadline",
      popup: <DeadlinePopup />,
      tasks: [sharedTasks[0]],
    },
    {
      label: "Notification nouvelle tâche",
      popup: <NewTaskPopup />,
      tasks: [sharedTasks[0]],
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#4a9fa5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    }}>
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
        {screens.map((s, i) => (
          <Phone key={i} label={s.label} popup={s.popup} tasks={s.tasks} />
        ))}
      </div>
    </div>
  );
}
