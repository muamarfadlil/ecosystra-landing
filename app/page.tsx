"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Icons ── */
const Shield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const Award = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const MonitorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const Phone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 17.5v-.58z"/>
  </svg>
);
const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Logo ── */
const LogoIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4b96a"/>
        <stop offset="50%" stopColor="#5aae5d"/>
        <stop offset="100%" stopColor="#1d5e20"/>
      </linearGradient>
    </defs>
    <path d="M50 8 C28 8 15 28 15 48 C15 62 22 72 35 80 C42 84 50 85 50 85 C50 85 58 84 65 80 C78 72 85 62 85 48 C85 28 72 8 50 8Z" fill="url(#lg1)" opacity="0.15"/>
    <path d="M30 55 Q25 45 35 35 Q45 25 55 30 Q70 20 72 38 Q78 30 70 22 Q55 10 40 18 Q22 28 22 50 Q22 65 35 73 Q48 82 62 75 Q72 68 72 55 Q65 62 55 62 Q42 60 30 55Z" fill="url(#lg1)"/>
    <path d="M35 58 Q42 65 55 62 Q65 60 70 52 Q60 58 48 55 Q38 52 35 42 Q30 48 35 58Z" fill="url(#lg1)" opacity="0.7"/>
    <path d="M25 52 Q30 62 42 66 Q38 70 30 65 Q22 60 22 50 Z" fill="url(#lg1)" opacity="0.5"/>
  </svg>
);

/* ── Data ── */
const services = [
  {
    icon: <Shield />,
    title: "QHSE Training & Certification",
    short: "Pelatihan & Sertifikasi",
    num: "01",
    desc: "Program pelatihan K3, ISO, dan HSE bersertifikat nasional & internasional untuk SDM yang kompeten dan berdaya saing.",
    items: ["K3 Umum & Khusus (Kemnaker)", "ISO 9001 / 14001 / 45001 / 22000", "NEBOSH & IOSH International", "Fire Safety & Emergency Response"],
    accent: "#2d7a30",
  },
  {
    icon: <Award />,
    title: "Management System Consulting",
    short: "Konsultan Sistem Manajemen",
    num: "02",
    desc: "Pendampingan implementasi dan sertifikasi sistem manajemen mutu, K3, dan lingkungan sesuai standar internasional.",
    items: ["Gap Analysis & Needs Assessment", "Implementasi ISO & SNI", "Persiapan Audit & Sertifikasi", "Pemeliharaan Sistem Berkelanjutan"],
    accent: "#c9a84c",
  },
  {
    icon: <MonitorIcon />,
    title: "Expert Digitalization Platform",
    short: "Platform Digital Ekspert",
    num: "03",
    desc: "Solusi web & mobile app khusus untuk pengelolaan data QHSE, pelaporan insiden, dan monitoring kinerja secara real-time.",
    items: ["HSE Management Information System", "Incident & Hazard Reporting App", "Audit & Inspection Digital Tools", "Custom Enterprise Dashboard"],
    accent: "#5aae5d",
  },
];

const stats = [
  { num: "500+", label: "Peserta Terlatih" },
  { num: "80+",  label: "Klien Puas" },
  { num: "15+",  label: "Instruktur Berpengalaman" },
  { num: "10+",  label: "Tahun Berpengalaman" },
];

const whyUs = [
  "Tim instruktur & konsultan bersertifikat internasional",
  "Pendekatan holistik: pelatihan, konsultasi, dan teknologi dalam satu ekosistem",
  "Pengalaman lintas sektor: migas, konstruksi, manufaktur, pertambangan",
  "Platform digital proprietary untuk efisiensi operasional",
  "Layanan purna jual dan dukungan berkelanjutan pasca-implementasi",
  "Jaringan mitra nasional & internasional yang luas",
];

const clients = ["Pertamina", "PLN", "Waskita", "Hutama Karya", "Vale Indonesia", "Freeport", "Semen Indonesia", "Bukit Asam"];

const navLinks = [
  { label: "Layanan",   href: "#layanan"  },
  { label: "Mengapa Kami", href: "#mengapa" },
  { label: "Tentang",   href: "#tentang"  },
  { label: "Klien",     href: "#klien"    },
  { label: "Kontak",    href: "#kontak"   },
];

/* ── Navbar ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
      background: scrolled ? "rgba(245,240,232,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      boxShadow: scrolled ? "0 2px 40px rgba(14,46,16,0.1), 0 1px 0 rgba(14,46,16,0.06)" : "none",
      padding: scrolled ? "0.65rem 0" : "1.2rem 0",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <LogoIcon size={36} />
          <div>
            <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--forest-dark)", lineHeight: 1.1 }}>
              Eco System
            </div>
            <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>
              Nusantara
            </div>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="link-underline"
              style={{ textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, color: "var(--forest-deep)", transition: "color 0.25s" }}>
              {l.label}
            </a>
          ))}
          <a href="#kontak" className="btn-primary" style={{ padding: "0.55rem 1.3rem", fontSize: "0.83rem", borderRadius: 5 }}>
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--forest-dark)", display: "none", padding: "0.25rem", borderRadius: 6, transition: "background 0.2s" }}
          className="mobile-menu-btn">
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div style={{
          background: "rgba(245,240,232,0.97)", backdropFilter: "blur(24px)",
          padding: "1.2rem 2rem 1.8rem",
          display: "flex", flexDirection: "column", gap: "0.2rem",
          borderTop: "1px solid rgba(14,46,16,0.07)",
          boxShadow: "0 20px 40px rgba(14,46,16,0.1)",
        }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{
                textDecoration: "none", fontSize: "1rem", fontWeight: 500,
                color: "var(--forest-dark)", padding: "0.75rem 0",
                borderBottom: "1px solid rgba(14,46,16,0.07)",
                transition: "color 0.2s, padding-left 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--forest-mid)"; e.currentTarget.style.paddingLeft = "8px"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--forest-dark)"; e.currentTarget.style.paddingLeft = "0"; }}>
              {l.label}
            </a>
          ))}
          <a href="#kontak" className="btn-primary" style={{ textAlign: "center", marginTop: "1rem" }}>
            <span>Konsultasi Gratis</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Backgrounds */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #f5f0e8 0%, #eae4d5 40%, #dff0df 100%)" }} />
      <div className="hero-mesh" style={{ position: "absolute", inset: 0 }} />
      <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      {/* Rotating rings */}
      <div style={{
        position: "absolute", right: "-6%", top: "8%",
        width: "52vw", height: "52vw", maxWidth: 680, maxHeight: 680,
        borderRadius: "50%",
        border: "1px solid rgba(45,122,48,0.12)",
        background: "radial-gradient(circle, rgba(45,122,48,0.06) 0%, transparent 65%)",
      }} className="animate-rotate-slow" />
      <div style={{
        position: "absolute", right: "3%", top: "18%",
        width: "36vw", height: "36vw", maxWidth: 460, maxHeight: 460,
        borderRadius: "50%", border: "1px dashed rgba(201,168,76,0.22)",
      }} className="animate-rotate-ccw" />
      <div style={{
        position: "absolute", right: "9%", top: "24%",
        width: "20vw", height: "20vw", maxWidth: 260, maxHeight: 260,
        borderRadius: "50%", border: "1px solid rgba(90,174,93,0.15)",
      }} className="animate-rotate-slow" />

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8rem 2rem 4rem", position: "relative", zIndex: 2, width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up opacity-0" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              background: "rgba(45,122,48,0.09)", border: "1px solid rgba(45,122,48,0.2)",
              borderRadius: 100, padding: "0.4rem 1rem", marginBottom: "1.8rem",
              backdropFilter: "blur(8px)",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--forest-mid)", display: "inline-block" }} className="animate-scale-pulse glow-dot" />
              <span className="section-label" style={{ color: "var(--forest-mid)" }}>ecosystra.com</span>
            </div>

            {/* Headline */}
            <h1 className="font-display animate-fade-up opacity-0 delay-100"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 700, lineHeight: 1.13, color: "var(--forest-deep)", marginBottom: "0.4rem" }}>
              Sistem Keselamatan
            </h1>
            <h1 className="font-display animate-fade-up opacity-0 delay-200"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 700, lineHeight: 1.13, marginBottom: "1.5rem" }}>
              <span className="text-gradient">&amp; Kepatuhan</span>{" "}yang Terdigitalisasi
            </h1>

            <p className="animate-fade-up opacity-0 delay-300"
              style={{ fontSize: "1.05rem", color: "var(--forest-dark)", fontStyle: "italic", marginBottom: "1rem", fontWeight: 300, lineHeight: 1.6 }}>
              "Your end-to-end partner in safety, compliance, and operational digitalization."
            </p>

            <p className="animate-fade-up opacity-0 delay-400"
              style={{ fontSize: "0.95rem", color: "#3a5c3c", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: 520 }}>
              Ecosystem Nusantara menghadirkan solusi terpadu:{" "}
              <strong>Pelatihan &amp; Sertifikasi QHSE</strong>,{" "}
              <strong>Konsultasi Sistem Manajemen</strong>, dan{" "}
              <strong>Platform Digital</strong> untuk ekspert — dalam satu ekosistem yang saling terintegrasi.
            </p>

            {/* CTA */}
            <div className="animate-fade-up opacity-0 delay-500" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#layanan" className="btn-primary">
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Jelajahi Layanan <ArrowRight />
                </span>
              </a>
              <a href="#kontak" className="btn-outline">Konsultasi Gratis</a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up opacity-0 delay-600"
              style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap", paddingTop: "2rem", borderTop: "1px solid rgba(14,46,16,0.1)" }}>
              {stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <div className="font-display stat-num" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--forest-mid)", lineHeight: 1, transition: "color 0.3s ease" }}>{s.num}</div>
                  <div style={{ fontSize: "0.73rem", color: "#5a7a5c", marginTop: "0.3rem", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <div className="hero-visual animate-float-slow" style={{ position: "relative" }}>
            {/* Main card */}
            <div style={{
              background: "linear-gradient(145deg, rgba(14,46,16,0.97) 0%, rgba(29,94,32,0.94) 50%, rgba(45,122,48,0.9) 100%)",
              borderRadius: 20,
              padding: "2.5rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 50px 100px rgba(14,46,16,0.35), 0 20px 40px rgba(14,46,16,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Glow overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(90,174,93,0.1) 0%, transparent 50%)",
                pointerEvents: "none",
              }} />
              {/* Watermark logo */}
              <div style={{ position: "absolute", right: "-25px", top: "-25px", opacity: 0.06, pointerEvents: "none" }}>
                <LogoIcon size={200} />
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="section-label" style={{ color: "var(--gold)", marginBottom: "1.5rem" }}>
                  Ekosistem Terintegrasi
                </div>

                {services.map((svc, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "0.9rem 0",
                    borderBottom: i < services.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: `${svc.accent}22`,
                      border: `1px solid ${svc.accent}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: svc.accent === "#c9a84c" ? "var(--gold-light)" : svc.accent,
                      flexShrink: 0,
                    }}>
                      {svc.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.92)", lineHeight: 1.2 }}>{svc.short}</div>
                      <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.42)", marginTop: "0.15rem" }}>{svc.items[0]}</div>
                    </div>
                    <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.2)" }}><ArrowRight /></div>
                  </div>
                ))}

                <div style={{
                  marginTop: "1.5rem", paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", gap: "2rem",
                }}>
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <div className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1 }}>{s.num}</div>
                      <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", marginTop: "0.25rem" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge bottom-left */}
            <div style={{
              position: "absolute", bottom: "-16px", left: "-16px",
              background: "white",
              borderRadius: 12, padding: "0.7rem 1rem",
              boxShadow: "0 20px 40px rgba(14,46,16,0.18), 0 4px 8px rgba(14,46,16,0.08)",
              display: "flex", alignItems: "center", gap: "0.6rem",
              border: "1px solid rgba(14,46,16,0.07)",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--forest-light)", display: "inline-block", flexShrink: 0 }} className="animate-scale-pulse" />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--forest-deep)", whiteSpace: "nowrap" }}>Konsultasi Gratis Tersedia</span>
            </div>

            {/* Floating badge top-right */}
            <div style={{
              position: "absolute", top: "-16px", right: "-8px",
              background: "linear-gradient(135deg, var(--gold), #a87d28)",
              borderRadius: 10, padding: "0.5rem 0.9rem",
              boxShadow: "0 10px 30px rgba(201,168,76,0.4)",
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "white", letterSpacing: "0.05em" }}>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: 0.45,
      }} className="animate-float">
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--forest-dark)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--forest-mid), transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Services ── */
function Services() {
  const { ref, inView } = useInView();
  return (
    <section id="layanan" ref={ref} style={{ padding: "7rem 0", background: "var(--cream-dark)", position: "relative", overflow: "hidden" }}>
      <div className="section-top-bar" />
      {/* Decorative */}
      <div style={{
        position: "absolute", right: "-8%", bottom: "-15%",
        width: "40vw", height: "40vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,48,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}
          className={inView ? "animate-fade-up" : "opacity-0"}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Layanan Kami</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "1rem" }}>
            Tiga Pilar Ekosistem Kami
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, margin: "0 auto 1.2rem" }} />
          <p style={{ color: "#5a7a5c", maxWidth: 540, margin: "0 auto", lineHeight: 1.75, fontSize: "0.95rem" }}>
            Solusi terintegrasi yang dirancang untuk membangun budaya keselamatan dan kepatuhan di organisasi Anda — dari SDM hingga sistem digital.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
          {services.map((svc, i) => (
            <div key={i} className={`card-premium ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 * i}s`, position: "relative" }}>
              {/* Top accent */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${svc.accent}, var(--gold))` }} />
              {/* Number badge */}
              <div className="num-badge">{svc.num}</div>
              <div style={{ padding: "2rem 2rem 2.2rem" }}>
                {/* Icon */}
                <div className="icon-box" style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `${svc.accent}14`,
                  border: `1.5px solid ${svc.accent}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: svc.accent, marginBottom: "1.3rem",
                }}>
                  {svc.icon}
                </div>
                <div className="section-label" style={{ color: svc.accent, marginBottom: "0.5rem" }}>{svc.short}</div>
                <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "0.8rem", lineHeight: 1.3 }}>
                  {svc.title}
                </h3>
                <p style={{ color: "#5a7a5c", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.4rem" }}>{svc.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {svc.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                      <span style={{ color: svc.accent, flexShrink: 0, marginTop: 1 }}><CheckCircle /></span>
                      <span style={{ fontSize: "0.82rem", color: "#4a6e4c", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "1.8rem", paddingTop: "1.4rem", borderTop: `1px solid ${svc.accent}18` }}>
                  <a href="#kontak" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.45rem",
                    color: svc.accent, textDecoration: "none", fontSize: "0.83rem", fontWeight: 700,
                    letterSpacing: "0.04em",
                    transition: "gap 0.25s ease",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.75rem"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.45rem"; }}>
                    Pelajari lebih lanjut <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Us ── */
function WhyUs() {
  const { ref, inView } = useInView();
  return (
    <section id="mengapa" ref={ref} style={{ padding: "7rem 0", background: "var(--forest-deep)", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{
        position: "absolute", left: "-12%", bottom: "-18%",
        width: "55vw", height: "55vw", borderRadius: "50%",
        border: "1px dashed rgba(201,168,76,0.14)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: "-8%", top: "-12%",
        width: "38vw", height: "38vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,48,0.14) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        <div className="whyus-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left */}
          <div className={inView ? "animate-slide-left" : "opacity-0"}>
            <div className="section-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>Mengapa Ecosystra</div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: "white", marginBottom: "1.2rem", lineHeight: 1.2 }}>
              Satu Ekosistem,{" "}<span style={{ color: "var(--gold-light)" }}>Solusi Menyeluruh</span>
            </h2>
            <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, marginBottom: "1.4rem" }} />
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "2.5rem" }}>
              Kami bukan sekadar penyedia pelatihan biasa. Ecosystra hadir sebagai mitra strategis jangka panjang yang memahami tantangan operasional dari berbagai sektor industri di Indonesia dan internasional.
            </p>

            {/* Metric cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
              {stats.slice(2).map((s, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12, padding: "1.2rem",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <div className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: "0.3rem" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#kontak" className="btn-primary">
              <span>Mulai Perjalanan Bersama Kami</span>
            </a>
          </div>

          {/* Right: checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {whyUs.map((item, i) => (
              <div key={i}
                className={`glass ${inView ? "animate-slide-right" : "opacity-0"}`}
                style={{
                  animationDelay: `${0.08 * i}s`,
                  borderRadius: 12, padding: "1rem 1.2rem",
                  display: "flex", alignItems: "flex-start", gap: "1rem",
                  borderLeft: "3px solid rgba(201,168,76,0.35)",
                }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }}><CheckCircle /></span>
                <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.875rem", lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .whyus-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ── About ── */
function About() {
  const { ref, inView } = useInView();
  return (
    <section id="tentang" ref={ref} style={{ padding: "7rem 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Visual */}
          <div className={inView ? "animate-slide-left" : "opacity-0"} style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(140deg, var(--forest-deep) 0%, var(--forest-mid) 55%, var(--gold) 100%)",
              borderRadius: 20, padding: "3rem", position: "relative", overflow: "hidden", minHeight: 400,
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
              boxShadow: "0 50px 100px rgba(14,46,16,0.25), 0 20px 40px rgba(14,46,16,0.12)",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.07) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,168,76,0.1) 0%, transparent 50%)",
              }} />
              <div className="animate-float-slow" style={{ position: "absolute", top: "1.5rem", right: "1.5rem", opacity: 0.15, pointerEvents: "none" }}>
                <LogoIcon size={120} />
              </div>
              {/* Stats badge */}
              <div style={{
                position: "absolute", top: "2rem", left: "2rem",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12, padding: "0.75rem 1rem",
              }}>
                <div className="font-display" style={{ fontSize: "1.6rem", fontWeight: 700, color: "white" }}>10+</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }}>Tahun Berpengalaman</div>
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <div className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, color: "white", marginBottom: "0.3rem" }}>Ecosystem</div>
                <div className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--gold-light)", marginBottom: "1.5rem" }}>Nusantara</div>
                <div style={{ height: 2, width: 80, background: "rgba(255,255,255,0.25)", borderRadius: 1, marginBottom: "1rem" }} />
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.75 }}>
                  Beroperasi dari jantung Nusantara, melayani seluruh Indonesia dan Asia Tenggara.
                </p>
              </div>
            </div>

            {/* Floating card */}
            <div style={{
              position: "absolute", bottom: "-20px", right: "-16px",
              background: "white", borderRadius: 14, padding: "1rem 1.2rem",
              boxShadow: "0 20px 40px rgba(14,46,16,0.15)",
              border: "1px solid rgba(14,46,16,0.06)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(45,122,48,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--forest-mid)" }}>
                <Shield />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--forest-deep)" }}>QHSE Certified</div>
                <div style={{ fontSize: "0.65rem", color: "#7a9a7c" }}>ISO 45001 Ready</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={inView ? "animate-slide-right" : "opacity-0"} style={{ animationDelay: "0.15s" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Tentang Kami</div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "1.2rem", lineHeight: 1.3 }}>
              Membangun Keselamatan sebagai{" "}
              <span style={{ color: "var(--forest-mid)" }}>Budaya</span>, Bukan Sekadar Kewajiban
            </h2>
            <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, marginBottom: "1.5rem" }} />
            <p style={{ color: "#4a6e4c", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "1.2rem" }}>
              Ecosystem Nusantara (Ecosystra) lahir dari keyakinan bahwa keselamatan dan kepatuhan bukan hambatan, melainkan fondasi pertumbuhan berkelanjutan. Kami hadir sebagai jembatan antara standar global dengan konteks lokal industri Indonesia.
            </p>
            <p style={{ color: "#4a6e4c", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "2.5rem" }}>
              Dengan pendekatan ekosistem yang terintegrasi — menggabungkan pelatihan, konsultasi, dan teknologi — kami memastikan bahwa transformasi keselamatan di organisasi Anda berlangsung secara menyeluruh, terukur, dan berkelanjutan.
            </p>

            <div style={{ display: "flex", gap: "0", border: "1px solid rgba(14,46,16,0.1)", borderRadius: 12, overflow: "hidden" }}>
              {[
                { title: "QHSE", sub: "Training & Cert.", accent: "var(--forest-mid)" },
                { title: "Management", sub: "System Consulting", accent: "var(--gold)" },
                { title: "Digital", sub: "Platform Expert", accent: "var(--forest-light)" },
              ].map(({ title, sub, accent }, i) => (
                <div key={i} style={{
                  flex: 1, textAlign: "center", padding: "1.2rem 0.5rem",
                  borderRight: i < 2 ? "1px solid rgba(14,46,16,0.08)" : "none",
                  transition: "background 0.3s ease",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(14,46,16,0.03)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <div className="font-display" style={{ fontSize: "0.95rem", fontWeight: 700, color: accent }}>{title}</div>
                  <div style={{ fontSize: "0.65rem", color: "#7a9a7c", fontWeight: 500, marginTop: "0.2rem" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Clients (scrolling ticker) ── */
function Clients() {
  const { ref, inView } = useInView();
  const doubled = [...clients, "+ Banyak Lagi", ...clients, "+ Banyak Lagi"];

  return (
    <section id="klien" ref={ref} style={{ padding: "5.5rem 0", background: "var(--cream-dark)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", marginBottom: "3rem" }}>
        <div style={{ textAlign: "center" }} className={inView ? "animate-fade-up" : "opacity-0"}>
          <div className="section-label" style={{ marginBottom: "0.8rem" }}>Dipercaya Oleh</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 700, color: "var(--forest-deep)" }}>
            Klien &amp; Mitra Kami
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, margin: "1rem auto 0" }} />
        </div>
      </div>

      <div className={`ticker-wrap ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <div className="ticker-track" style={{ gap: "1rem", padding: "0.25rem 0.5rem" }}>
          {doubled.map((c, i) => (
            <div key={i}
              style={{
                background: c === "+ Banyak Lagi"
                  ? "linear-gradient(135deg, var(--forest-mid), var(--forest-dark))"
                  : "white",
                borderRadius: 10,
                padding: "0.9rem 1.8rem",
                border: c === "+ Banyak Lagi" ? "none" : "1px solid rgba(14,46,16,0.08)",
                flexShrink: 0,
                boxShadow: "var(--shadow-sm)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}>
              <span className="font-display" style={{
                fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em",
                color: c === "+ Banyak Lagi" ? "rgba(255,255,255,0.85)" : "var(--forest-dark)",
                whiteSpace: "nowrap",
              }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  }

  return (
    <section id="kontak" ref={ref} style={{ padding: "7rem 0", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", right: "-8%", bottom: "-20%",
        width: "45vw", height: "45vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,48,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: "-5%", top: "10%",
        width: "25vw", height: "25vw", borderRadius: "50%",
        border: "1px dashed rgba(201,168,76,0.18)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className={inView ? "animate-fade-up" : "opacity-0"}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Hubungi Kami</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "1rem" }}>
            Mulai Perjalanan Transformasi Anda
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, margin: "0 auto 1.2rem" }} />
          <p style={{ color: "#5a7a5c", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Konsultasi awal gratis. Tim kami siap membantu mengidentifikasi kebutuhan organisasi Anda.
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2.5rem", alignItems: "start" }}>
          {/* Info */}
          <div className={inView ? "animate-slide-left" : "opacity-0"} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {[
              { icon: <Phone />, label: "Telepon / WhatsApp", val: "+62 812-3456-7890", color: "var(--forest-mid)" },
              { icon: <Mail />,  label: "Email",              val: "info@ecosystra.com", color: "var(--gold)" },
              { icon: <MapPin />, label: "Alamat",            val: "Jakarta & Bandung, Indonesia", color: "var(--forest-light)" },
            ].map(({ icon, label, val, color }, i) => (
              <div key={i} className="contact-card" style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem 1.3rem" }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: `${color}14`, border: `1.5px solid ${color}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: color, flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--forest-deep)", fontWeight: 600 }}>{val}</div>
                </div>
              </div>
            ))}

            <a href="https://wa.me/6281234567890?text=Halo%20Ecosystra%2C%20saya%20ingin%20konsultasi%20gratis"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "white", textDecoration: "none",
                borderRadius: 10, padding: "0.95rem", fontWeight: 700, fontSize: "0.9rem",
                boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 32px rgba(37,211,102,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(37,211,102,0.3)"; }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className={inView ? "animate-slide-right" : "opacity-0"} style={{ animationDelay: "0.15s" }}>
            <div style={{
              background: "white", borderRadius: 18, padding: "2.5rem",
              border: "1px solid rgba(14,46,16,0.07)",
              boxShadow: "0 20px 60px rgba(14,46,16,0.08), 0 4px 12px rgba(14,46,16,0.05)",
            }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div className="animate-bounce-in" style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✅</div>
                  <h3 className="font-display" style={{ fontSize: "1.4rem", color: "var(--forest-dark)", marginBottom: "0.5rem" }}>Pesan Terkirim!</h3>
                  <p style={{ color: "#5a7a5c", fontSize: "0.9rem", lineHeight: 1.6 }}>Tim kami akan menghubungi Anda dalam 1×24 jam.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "0.5rem" }}>
                    Kirim Pesan
                  </h3>
                  {[
                    { key: "name",    placeholder: "Nama Lengkap *",           type: "text"  },
                    { key: "email",   placeholder: "Email *",                  type: "email" },
                    { key: "company", placeholder: "Perusahaan / Instansi",    type: "text"  },
                  ].map(({ key, placeholder, type }) => (
                    <input key={key} type={type} placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="input-field"
                    />
                  ))}
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="input-field"
                    style={{ color: form.service ? "var(--forest-deep)" : "#9aaa9a", appearance: "none", cursor: "pointer" }}>
                    <option value="">Pilih Layanan yang Diminati</option>
                    <option>QHSE Training &amp; Certification</option>
                    <option>Management System Consulting</option>
                    <option>Expert Digitalization Platform</option>
                    <option>Kombinasi Layanan</option>
                  </select>
                  <textarea rows={4} placeholder="Ceritakan kebutuhan organisasi Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field"
                    style={{ resize: "vertical" }}
                  />
                  <button onClick={handleSubmit} className="btn-primary" style={{ width: "100%", fontSize: "0.95rem", marginTop: "0.4rem" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      Kirim Pesan <ArrowRight />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer style={{ background: "var(--forest-deep)", color: "rgba(255,255,255,0.65)", padding: "4.5rem 0 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />
      {/* Top gradient bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--forest-light), var(--gold), var(--forest-mid))" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
              <LogoIcon size={38} />
              <div>
                <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "white" }}>Eco System Nusantara</div>
                <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>ecosystra.com</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 300, color: "rgba(255,255,255,0.48)", marginBottom: "1.5rem" }}>
              Your end-to-end partner in safety, compliance, and operational digitalization.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { title: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { title: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
                { title: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map(({ title, path }) => (
                <a key={title} href="#" title={title} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(201,168,76,0.2)";
                    el.style.borderColor = "rgba(201,168,76,0.4)";
                    el.style.color = "var(--gold-light)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.07)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.transform = "translateY(0)";
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem" }}>Navigasi</div>
            {navLinks.map((l) => (
              <div key={l.label} style={{ marginBottom: "0.55rem" }}>
                <a href={l.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.875rem", transition: "all 0.25s ease", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--gold-light)"; el.style.paddingLeft = "6px"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(255,255,255,0.5)"; el.style.paddingLeft = "0"; }}>
                  {l.label}
                </a>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem" }}>Layanan</div>
            {["QHSE Training", "Management Consulting", "Digital Platform", "Sertifikasi ISO"].map((s) => (
              <div key={s} style={{ marginBottom: "0.55rem" }}>
                <a href="#layanan" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.875rem", transition: "all 0.25s ease" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--gold-light)"; el.style.paddingLeft = "6px"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(255,255,255,0.5)"; el.style.paddingLeft = "0"; }}>
                  {s}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.38)" }}>© 2025 Ecosystem Nusantara. Hak cipta dilindungi.</span>
          <span style={{ fontSize: "0.8rem" }}>
            <a href="https://ecosystra.com" style={{ color: "var(--gold)", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
              ecosystra.com
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}

/* ── Page ── */
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
