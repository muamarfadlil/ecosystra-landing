import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecosystra | QHSE Training, Management System & Digitalization",
  description:
    "Ecosystem Nusantara (Ecosystra) — Your end-to-end partner in safety, compliance, and operational digitalization. QHSE Training & Certification, Management System Consulting, and Expert Digital Platform.",
  keywords: [
    "QHSE training", "HSE certification", "management system consulting",
    "ISO consultant Indonesia", "digitalisasi operasional", "K3 pelatihan",
    "sistem manajemen keselamatan", "Ecosystra", "Ecosystem Nusantara",
  ],
  authors: [{ name: "Ecosystem Nusantara" }],
  openGraph: {
    title: "Ecosystra | QHSE Training, Consulting & Digitalization",
    description: "Your end-to-end partner in safety, compliance, and operational digitalization.",
    url: "https://ecosystra.com",
    siteName: "Ecosystra",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Prevent flash of wrong theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
