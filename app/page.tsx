"use client";
import { useEffect, useRef, useState } from "react";

/* ─── Utility: observe element entering viewport ─── */
function useInView(threshold = 0.15) {
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

/* ─── ICONS (inline SVG, no external dep) ─── */
const Shield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const Award = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const Monitor = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const Phone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 17.5v-.58z"/>
  </svg>
);
const Mail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const X = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ─── LOGO SVG (replicating the brand icon) ─── */
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

/* ─── DATA ─── */
const services = [
  {
    icon: <Shield />,
    title: "QHSE Training & Certification",
    short: "Pelatihan & Sertifikasi",
    desc: "Program pelatihan K3, ISO, dan HSE bersertifikat nasional & internasional untuk SDM yang kompeten dan berdaya saing.",
    items: ["K3 Umum & Khusus (Kemnaker)", "ISO 9001 / 14001 / 45001 / 22000", "NEBOSH & IOSH International", "Fire Safety & Emergency Response"],
    color: "from-forest-700 to-forest-900",
    accent: "#2d7a30",
  },
  {
    icon: <Award />,
    title: "Management System Consulting",
    short: "Konsultan Sistem Manajemen",
    desc: "Pendampingan implementasi dan sertifikasi sistem manajemen mutu, K3, dan lingkungan sesuai standar internasional.",
    items: ["Gap Analysis & Needs Assessment", "Implementasi ISO & SNI", "Persiapan Audit & Sertifikasi", "Pemeliharaan Sistem Berkelanjutan"],
    color: "from-emerald-700 to-forest-800",
    accent: "#c9a84c",
  },
  {
    icon: <Monitor />,
    title: "Expert Digitalization Platform",
    short: "Platform Digital Ekspert",
    desc: "Solusi web & mobile app khusus untuk pengelolaan data QHSE, pelaporan insiden, dan monitoring kinerja secara real-time.",
    items: ["HSE Management Information System", "Incident & Hazard Reporting App", "Audit & Inspection Digital Tools", "Custom Enterprise Dashboard"],
    color: "from-teal-700 to-forest-900",
    accent: "#5aae5d",
  },
];

const stats = [
  { num: "500+", label: "Peserta Terlatih" },
  { num: "80+", label: "Klien Puas" },
  { num: "15+", label: "Instruktur Berpengalaman" },
  { num: "10+", label: "Tahun Berpengalaman" },
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
  { label: "Layanan", href: "#layanan" },
  { label: "Mengapa Kami", href: "#mengapa" },
  { label: "Tentang", href: "#tentang" },
  { label: "Klien", href: "#klien" },
  { label: "Kontak", href: "#kontak" },
];

/* ─── COMPONENTS ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(14,46,16,0.10)" : "none",
        padding: scrolled ? "0.7rem 0" : "1.2rem 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <LogoIcon size={36} />
          <div>
            <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--forest-dark)", lineHeight: 1.1 }}>
              Eco System
            </div>
            <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase" }}>
              Nusantara
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="link-underline"
              style={{ textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, color: "var(--forest-deep)", transition: "color 0.2s" }}>
              {l.label}
            </a>
          ))}
          <a href="#kontak" className="btn-primary" style={{ textDecoration: "none", padding: "0.6rem 1.4rem", fontSize: "0.85rem", borderRadius: 4 }}>
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        {/* Mobile menu btn */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--forest-dark)", display: "none" }}
          className="mobile-menu-btn">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(245,240,232,0.98)", backdropFilter: "blur(20px)", padding: "1rem 2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ textDecoration: "none", fontSize: "1rem", fontWeight: 500, color: "var(--forest-dark)", padding: "0.5rem 0", borderBottom: "1px solid rgba(14,46,16,0.08)" }}>
              {l.label}
            </a>
          ))}
          <a href="#kontak" className="btn-primary" style={{ textDecoration: "none", textAlign: "center", marginTop: "0.5rem" }}>
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

function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #f5f0e8 0%, #eae4d5 40%, #dff0df 100%)",
      }} />
      <div className="hero-mesh" style={{ position: "absolute", inset: 0 }} />

      {/* Decorative circle */}
      <div style={{
        position: "absolute", right: "-8%", top: "5%",
        width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,48,0.08) 0%, rgba(201,168,76,0.05) 50%, transparent 70%)",
        border: "1px solid rgba(45,122,48,0.12)",
      }} className="animate-rotate-slow" />
      <div style={{
        position: "absolute", right: "2%", top: "15%",
        width: "38vw", height: "38vw", maxWidth: 480, maxHeight: 480,
        borderRadius: "50%",
        border: "1px dashed rgba(201,168,76,0.25)",
      }} />

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8rem 2rem 4rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Label */}
          <div className="animate-fade-up opacity-0" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "rgba(45,122,48,0.1)", border: "1px solid rgba(45,122,48,0.2)",
            borderRadius: 100, padding: "0.4rem 1rem", marginBottom: "1.8rem",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--forest-mid)" }} className="animate-scale-pulse" />
            <span className="section-label" style={{ color: "var(--forest-mid)" }}>ecosystra.com</span>
          </div>

          {/* Headline */}
          <h1 className="font-display animate-fade-up opacity-0 delay-100"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.15, color: "var(--forest-deep)", marginBottom: "0.5rem" }}>
            Sistem Keselamatan
          </h1>
          <h1 className="font-display animate-fade-up opacity-0 delay-200"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            <span className="text-gradient">& Kepatuhan</span> yang Terdigitalisasi
          </h1>

          {/* Slogan */}
          <p className="animate-fade-up opacity-0 delay-300"
            style={{ fontSize: "1.1rem", color: "var(--forest-dark)", fontStyle: "italic", marginBottom: "1.2rem", fontWeight: 300, lineHeight: 1.6 }}>
            "Your end-to-end partner in safety, compliance, and operational digitalization."
          </p>

          {/* Description */}
          <p className="animate-fade-up opacity-0 delay-400"
            style={{ fontSize: "0.975rem", color: "#3a5c3c", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 560 }}>
            Ecosystem Nusantara menghadirkan solusi terpadu: <strong>Pelatihan & Sertifikasi QHSE</strong>,
            <strong> Konsultasi Sistem Manajemen</strong>, dan <strong>Platform Digital</strong> untuk ekspert
            — dalam satu ekosistem yang saling terintegrasi.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 delay-500" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#layanan" className="btn-primary" style={{ textDecoration: "none" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Jelajahi Layanan <ArrowRight />
              </span>
            </a>
            <a href="#kontak" className="btn-outline" style={{ textDecoration: "none" }}>
              Konsultasi Gratis
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up opacity-0 delay-600"
            style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", flexWrap: "wrap", paddingTop: "2rem", borderTop: "1px solid rgba(14,46,16,0.1)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--forest-mid)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.75rem", color: "#5a7a5c", marginTop: "0.3rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
        opacity: 0.5,
      }} className="animate-float">
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--forest-dark)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--forest-mid), transparent)" }} />
      </div>
    </section>
  );
}

function Services() {
  const { ref, inView } = useInView();
  return (
    <section id="layanan" ref={ref} style={{ padding: "6rem 0", background: "var(--cream-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--forest-light), var(--gold), var(--forest-mid))" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}
          className={inView ? "animate-fade-up" : "opacity-0"}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Layanan Kami</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "1rem" }}>
            Tiga Pilar Ekosistem Kami
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, margin: "0 auto 1.2rem" }} />
          <p style={{ color: "#5a7a5c", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Solusi terintegrasi yang dirancang untuk membangun budaya keselamatan dan kepatuhan di organisasi Anda — dari SDM hingga sistem digital.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {services.map((svc, i) => (
            <div key={i} className={`card-hover ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: `${0.15 * i}s`,
                background: "white",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(14,46,16,0.08)",
              }}>
              {/* Top accent bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${svc.accent}, var(--gold))` }} />
              <div style={{ padding: "2rem" }}>
                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 12,
                  background: `${svc.accent}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: svc.accent, marginBottom: "1.2rem",
                }}>
                  {svc.icon}
                </div>
                <div className="section-label" style={{ color: svc.accent, marginBottom: "0.5rem" }}>{svc.short}</div>
                <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "0.8rem", lineHeight: 1.3 }}>
                  {svc.title}
                </h3>
                <p style={{ color: "#5a7a5c", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.4rem" }}>{svc.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {svc.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <span style={{ color: svc.accent, flexShrink: 0, marginTop: 2 }}><CheckCircle /></span>
                      <span style={{ fontSize: "0.82rem", color: "#4a6e4c" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "1.6rem" }}>
                  <a href="#kontak" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    color: svc.accent, textDecoration: "none", fontSize: "0.85rem", fontWeight: 600,
                    transition: "gap 0.2s",
                  }}>
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

function WhyUs() {
  const { ref, inView } = useInView();
  return (
    <section id="mengapa" ref={ref} style={{ padding: "6rem 0", background: "var(--forest-deep)", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{
        position: "absolute", left: "-15%", bottom: "-20%",
        width: "60vw", height: "60vw", borderRadius: "50%",
        border: "1px dashed rgba(201,168,76,0.15)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: "-10%", top: "-15%",
        width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,48,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left */}
          <div className={inView ? "animate-fade-up" : "opacity-0"}>
            <div className="section-label" style={{ color: "var(--gold)", marginBottom: "1rem" }}>Mengapa Ecosystra</div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: "white", marginBottom: "1.2rem", lineHeight: 1.2 }}>
              Satu Ekosistem, Solusi Menyeluruh
            </h2>
            <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, marginBottom: "1.4rem" }} />
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
              Kami bukan sekadar penyedia pelatihan biasa. Ecosystra hadir sebagai mitra strategis jangka panjang yang memahami tantangan operasional dari berbagai sektor industri di Indonesia dan internasional.
            </p>
            <a href="#kontak" className="btn-primary" style={{ textDecoration: "none" }}>
              <span>Mulai Perjalanan Bersama Kami</span>
            </a>
          </div>

          {/* Right: checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {whyUs.map((item, i) => (
              <div key={i}
                className={`glass ${inView ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${0.1 * i}s`,
                  borderRadius: 10, padding: "1rem 1.2rem",
                  display: "flex", alignItems: "flex-start", gap: "1rem",
                }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}><CheckCircle /></span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #mengapa > div > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView();
  return (
    <section id="tentang" ref={ref} style={{ padding: "6rem 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Visual side */}
          <div className={inView ? "animate-fade-up" : "opacity-0"} style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, var(--forest-deep) 0%, var(--forest-mid) 60%, var(--gold) 100%)",
              borderRadius: 16, padding: "3rem", position: "relative", overflow: "hidden", minHeight: 380,
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
            }}>
              {/* Pattern overlay */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.07) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(201,168,76,0.1) 0%, transparent 50%)",
              }} />
              {/* Floating logo */}
              <div className="animate-float" style={{ position: "absolute", top: "2rem", right: "2rem", opacity: 0.25 }}>
                <LogoIcon size={100} />
              </div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div className="font-display" style={{ fontSize: "2.5rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>
                  Ecosystem
                </div>
                <div className="font-display" style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--gold-light)", marginBottom: "1.5rem" }}>
                  Nusantara
                </div>
                <div style={{ height: 2, width: 80, background: "rgba(255,255,255,0.3)", borderRadius: 1, marginBottom: "1rem" }} />
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  Beroperasi dari jantung Nusantara, melayani seluruh Indonesia dan Asia Tenggara.
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className={`${inView ? "animate-fade-up" : "opacity-0"} delay-200`}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Tentang Kami</div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "1.2rem", lineHeight: 1.3 }}>
              Membangun Keselamatan sebagai Budaya, Bukan Sekadar Kewajiban
            </h2>
            <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, marginBottom: "1.4rem" }} />
            <p style={{ color: "#4a6e4c", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.2rem" }}>
              Ecosystem Nusantara (Ecosystra) lahir dari keyakinan bahwa keselamatan dan kepatuhan bukan hambatan, melainkan fondasi pertumbuhan berkelanjutan. Kami hadir sebagai jembatan antara standar global dengan konteks lokal industri Indonesia.
            </p>
            <p style={{ color: "#4a6e4c", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
              Dengan pendekatan ekosistem yang terintegrasi — menggabungkan pelatihan, konsultasi, dan teknologi — kami memastikan bahwa transformasi keselamatan di organisasi Anda berlangsung secara menyeluruh, terukur, dan berkelanjutan.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[["QHSE", "Training & Certification"], ["Management", "System Consulting"], ["Digital", "Platform Expert"]].map(([title, sub], i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div className="font-display" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--forest-mid)" }}>{title}</div>
                  <div style={{ fontSize: "0.7rem", color: "#7a9a7c", fontWeight: 500 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tentang > div > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

function Clients() {
  const { ref, inView } = useInView();
  return (
    <section id="klien" ref={ref} style={{ padding: "5rem 0", background: "var(--cream-dark)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }} className={inView ? "animate-fade-up" : "opacity-0"}>
          <div className="section-label" style={{ marginBottom: "0.8rem" }}>Dipercaya Oleh</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 700, color: "var(--forest-deep)" }}>
            Klien & Mitra Kami
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, margin: "1rem auto" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {clients.map((c, i) => (
            <div key={i}
              className={`card-hover ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: `${0.07 * i}s`,
                background: "white", borderRadius: 10,
                padding: "1rem 1.8rem",
                border: "1px solid rgba(14,46,16,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
              <span className="font-display" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--forest-dark)", letterSpacing: "0.03em" }}>{c}</span>
            </div>
          ))}
          <div className={`card-hover ${inView ? "animate-fade-up" : "opacity-0"}`}
            style={{
              animationDelay: "0.6s",
              background: "linear-gradient(135deg, var(--forest-mid), var(--forest-dark))",
              borderRadius: 10, padding: "1rem 1.8rem",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>+ Banyak Lagi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    // In production, integrate with email service / backend API
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  }

  return (
    <section id="kontak" ref={ref} style={{ padding: "6rem 0", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", right: "-10%", bottom: "-20%",
        width: "50vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,48,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className={inView ? "animate-fade-up" : "opacity-0"}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Hubungi Kami</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "1rem" }}>
            Mulai Perjalanan Transformasi Anda
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,var(--gold),var(--forest-light))", borderRadius: 2, margin: "0 auto 1.2rem" }} />
          <p style={{ color: "#5a7a5c", fontSize: "0.95rem", maxWidth: 500, margin: "0 auto" }}>
            Konsultasi awal gratis. Tim kami siap membantu mengidentifikasi kebutuhan organisasi Anda.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "start" }}>
          {/* Info */}
          <div className={inView ? "animate-fade-up" : "opacity-0"} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { icon: <Phone />, label: "Telepon / WhatsApp", val: "+62 812-3456-7890" },
              { icon: <Mail />, label: "Email", val: "info@ecosystra.com" },
              { icon: <MapPin />, label: "Alamat", val: "Jakarta & Bandung, Indonesia" },
            ].map(({ icon, label, val }, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "1rem",
                background: "white", borderRadius: 10, padding: "1.2rem",
                border: "1px solid rgba(14,46,16,0.08)",
              }}>
                <div style={{ color: "var(--forest-mid)", flexShrink: 0, marginTop: 2 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--forest-deep)", fontWeight: 500 }}>{val}</div>
                </div>
              </div>
            ))}

            {/* WA Button */}
            <a href="https://wa.me/6281234567890?text=Halo%20Ecosystra%2C%20saya%20ingin%20konsultasi%20gratis"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                background: "#25D366", color: "white", textDecoration: "none",
                borderRadius: 8, padding: "0.9rem", fontWeight: 600, fontSize: "0.9rem",
                transition: "opacity 0.2s",
              }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className={`${inView ? "animate-fade-up" : "opacity-0"} delay-200`}
            style={{ background: "white", borderRadius: 16, padding: "2.5rem", border: "1px solid rgba(14,46,16,0.08)", boxShadow: "0 8px 40px rgba(14,46,16,0.06)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 className="font-display" style={{ fontSize: "1.4rem", color: "var(--forest-dark)", marginBottom: "0.5rem" }}>Pesan Terkirim!</h3>
                <p style={{ color: "#5a7a5c", fontSize: "0.9rem" }}>Tim kami akan menghubungi Anda dalam 1×24 jam.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--forest-deep)", marginBottom: "0.5rem" }}>
                  Kirim Pesan
                </h3>
                {[
                  { key: "name", placeholder: "Nama Lengkap *", type: "text" },
                  { key: "email", placeholder: "Email *", type: "email" },
                  { key: "company", placeholder: "Perusahaan / Instansi", type: "text" },
                ].map(({ key, placeholder, type }) => (
                  <input key={key} type={type} placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={{
                      width: "100%", padding: "0.85rem 1rem", borderRadius: 8,
                      border: "1.5px solid rgba(14,46,16,0.12)", fontSize: "0.9rem",
                      color: "var(--forest-deep)", background: "var(--cream)",
                      outline: "none", transition: "border-color 0.2s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--forest-mid)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(14,46,16,0.12)")}
                  />
                ))}
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{
                    width: "100%", padding: "0.85rem 1rem", borderRadius: 8,
                    border: "1.5px solid rgba(14,46,16,0.12)", fontSize: "0.9rem",
                    color: form.service ? "var(--forest-deep)" : "#9aaa9a",
                    background: "var(--cream)", outline: "none", fontFamily: "inherit",
                    appearance: "none",
                  }}>
                  <option value="">Pilih Layanan yang Diminati</option>
                  <option>QHSE Training & Certification</option>
                  <option>Management System Consulting</option>
                  <option>Expert Digitalization Platform</option>
                  <option>Kombinasi Layanan</option>
                </select>
                <textarea rows={4} placeholder="Ceritakan kebutuhan organisasi Anda..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%", padding: "0.85rem 1rem", borderRadius: 8,
                    border: "1.5px solid rgba(14,46,16,0.12)", fontSize: "0.9rem",
                    color: "var(--forest-deep)", background: "var(--cream)",
                    outline: "none", resize: "vertical", fontFamily: "inherit",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--forest-mid)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(14,46,16,0.12)")}
                />
                <button onClick={handleSubmit} className="btn-primary" style={{ width: "100%", fontSize: "0.95rem" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    Kirim Pesan <ArrowRight />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #kontak > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--forest-deep)", color: "rgba(255,255,255,0.7)", padding: "4rem 0 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <LogoIcon size={36} />
              <div>
                <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "white" }}>Eco System Nusantara</div>
                <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase" }}>ecosystra.com</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 320, color: "rgba(255,255,255,0.55)" }}>
              Your end-to-end partner in safety, compliance, and operational digitalization.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Navigasi</div>
            {navLinks.map((l) => (
              <div key={l.label} style={{ marginBottom: "0.5rem" }}>
                <a href={l.href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>{l.label}</a>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Layanan</div>
            {["QHSE Training", "Management Consulting", "Digital Platform", "Sertifikasi ISO"].map((s) => (
              <div key={s} style={{ marginBottom: "0.5rem" }}>
                <a href="#layanan" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>{s}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontSize: "0.8rem" }}>© 2025 Ecosystem Nusantara. Hak cipta dilindungi.</span>
          <span style={{ fontSize: "0.8rem" }}>
            <a href="https://ecosystra.com" style={{ color: "var(--gold)", textDecoration: "none" }}>ecosystra.com</a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

/* ─── MAIN PAGE ─── */
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
