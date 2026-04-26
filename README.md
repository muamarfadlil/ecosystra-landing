# Ecosystra Landing Page

Landing page profesional untuk **Ecosystem Nusantara** ([ecosystra.com](https://ecosystra.com))  
Built with **Next.js 14** + **TypeScript** + **Tailwind CSS**

---

## 🚀 Cara Setup & Deploy ke Vercel via GitHub

### LANGKAH 1: Persiapan Lokal

```bash
# 1. Clone atau buat folder proyek
mkdir ecosystra-landing && cd ecosystra-landing

# 2. Install dependencies
npm install

# 3. Jalankan di local (development)
npm run dev
# Buka http://localhost:3000
```

### LANGKAH 2: Upload ke GitHub

```bash
# 1. Inisialisasi Git (jika belum)
git init

# 2. Tambahkan semua file
git add .

# 3. Commit pertama
git commit -m "feat: initial landing page Ecosystra"

# 4. Buat repository baru di GitHub:
#    - Buka https://github.com/new
#    - Nama repo: ecosystra-landing
#    - Visibility: Public atau Private (bebas)
#    - Jangan centang "Add README" (sudah ada)

# 5. Hubungkan ke GitHub
git remote add origin https://github.com/USERNAME/ecosystra-landing.git

# 6. Push ke GitHub
git branch -M main
git push -u origin main
```

### LANGKAH 3: Deploy ke Vercel

**Cara A — Via Dashboard Vercel (Lebih Mudah):**

1. Buka [vercel.com](https://vercel.com) → Login dengan akun GitHub
2. Klik **"Add New Project"**
3. Pilih repository **ecosystra-landing**
4. Klik **"Import"**
5. Vercel otomatis mendeteksi Next.js — biarkan setting default
6. Klik **"Deploy"** → Tunggu ~1-2 menit
7. ✅ Website live! URL: `https://ecosystra-landing.vercel.app`

**Cara B — Via Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy dari folder proyek
vercel

# Untuk production deploy
vercel --prod
```

### LANGKAH 4: Custom Domain (ecosystra.com)

1. Di Vercel dashboard → pilih project → **Settings** → **Domains**
2. Klik **"Add"** → Ketik `ecosystra.com` → Klik **"Add"**
3. Vercel akan tampilkan DNS records yang perlu ditambahkan
4. Di registrar domain Anda (Niagahoster, Domainesia, GoDaddy, dll):
   - Tambahkan **A Record**: `@` → `76.76.21.21`
   - Tambahkan **CNAME**: `www` → `cname.vercel-dns.com`
5. Tunggu propagasi DNS 5-30 menit
6. ✅ Domain aktif dengan HTTPS otomatis!

---

## 📁 Struktur Proyek

```
ecosystra-landing/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout + SEO metadata
│   └── page.tsx           # Halaman utama (semua section)
├── public/                # Static assets (logo, images)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## ✏️ Cara Kustomisasi

### Ganti Konten Teks
Edit file `app/page.tsx`:
- **Stats** → cari array `const stats`
- **Services** → cari array `const services`
- **Why Us** → cari array `const whyUs`
- **Clients** → cari array `const clients`
- **Kontak** → edit section `Contact()`

### Ganti Nomor WhatsApp
Di `page.tsx`, cari:
```
https://wa.me/6281234567890
```
Ganti dengan nomor WA bisnis Anda.

### Tambah Logo PNG
1. Letakkan file logo di `public/logo.png`
2. Di `page.tsx`, ganti komponen `<LogoIcon />` dengan:
```tsx
import Image from "next/image";
<Image src="/logo.png" width={40} height={40} alt="Ecosystra" />
```

### Ganti Warna Brand
Di `app/globals.css`, edit CSS variables:
```css
:root {
  --forest-mid: #2d7a30;   /* warna utama hijau */
  --gold: #c9a84c;          /* warna emas aksen */
  --cream: #f5f0e8;         /* warna latar belakang */
}
```

---

## 🔧 Environment Variables (Opsional)

Untuk integrasi form dengan email/backend, buat `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://ecosystra.com
RESEND_API_KEY=re_xxxx          # jika pakai Resend untuk email
NEXT_PUBLIC_WA_NUMBER=6281234567890
```

Di Vercel: **Settings** → **Environment Variables** → tambahkan variable yang sama.

---

## 📊 Auto-Deploy

Setelah terhubung ke Vercel, setiap kali Anda `git push`:
```bash
git add .
git commit -m "update: perbarui konten halaman"
git push
```
Vercel akan otomatis **build & deploy** dalam ~1 menit. 🎉

---

## 📞 Butuh Bantuan?

- Dokumentasi Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Dokumentasi Vercel: [vercel.com/docs](https://vercel.com/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

