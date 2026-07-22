# Proyek Website — PT Sanjaya Mirai Hidroponik

> File ini adalah brief lengkap untuk Claude Code. Baca seluruhnya sebelum mulai.
> Cukup jalankan: **"Bangun website sesuai CLAUDE.md ini."**

## 1. Tujuan

Membuat **website profil + promosi** untuk PT Sanjaya Mirai Hidroponik (usaha agribisnis
hidroponik di Kediri). Website ini bagian dari kegiatan PKL mahasiswa (Rendika, konsentrasi
Manajemen Pemasaran) — masuk aspek **Promotion** dalam bauran pemasaran.

Fungsi utama website:
- Memperkenalkan perusahaan & produknya (melon dan sayuran hidroponik).
- Menampilkan produk + harga.
- Memudahkan calon pembeli memesan (via WhatsApp) dan tahu lokasi.
- Menaikkan citra profesional perusahaan.

## 2. Prinsip Penting (jangan dilanggar)

1. **Mobile-first.** Mayoritas pengguna Indonesia buka lewat HP. Desain harus rapi di layar kecil dulu.
2. **Sederhana & cepat.** Website statis, ringan, tanpa framework berat. Boleh plain HTML/CSS/JS,
   atau **Astro** (disarankan bila ingin rapi + mudah tambah CMS). Jangan pakai React/Next kecuali perlu.
3. **Bisa diedit oleh non-teknis nantinya.** Lihat bagian CMS di bawah — ini syarat wajib.
4. **Gratis dulu.** Hosting Netlify (gratis), subdomain `.netlify.app`. Jangan pakai layanan berbayar.

## 3. Kepemilikan & Alur Edit (WAJIB dipahami)

- **Sekarang:** yang mengedit adalah Rendika (mahasiswa PKL).
- **Nanti:** website diserahkan **penuh** ke pemilik perusahaan (Mas Shandi, non-teknis) — dia harus
  bisa mengedit sendiri (ganti teks, foto, harga) **tanpa menyentuh kode**.
- Karena itu **wajib pasang CMS berbasis Git**: **Decap CMS** atau **Sveltia CMS** (gratis).
  - Beri halaman `/admin` tempat pemilik login (via email) dan mengedit konten lewat form.
  - Konten yang bisa diedit lewat CMS: daftar produk (nama, foto, harga, deskripsi, status stok),
    teks "Tentang", teks hero/tagline, nomor WhatsApp, alamat, jam buka, link Instagram, link QRIS/foto QRIS.
- Semua akun (GitHub, Netlify, domain) idealnya dibuat pakai **email Mas Shandi sejak awal**,
  supaya kepemilikan otomatis miliknya (tidak perlu proses transfer). Buat README yang menjelaskan ini.

## 4. Data Perusahaan (sudah pasti)

- **Nama:** PT Sanjaya Mirai Hidroponik
- **Tagline:** "Future of Sustainable Harvest"
- **Bidang:** Agribisnis / budidaya & penjualan produk hidroponik (melon & sayuran)
- **Alamat:** Jl. Suparjan Mangun Wijaya No.145 B, Bujel, Kec. Mojoroto, Kota Kediri, Jawa Timur 64113
- **Telp/WhatsApp:** 0813-3922-0499
- **Direktur:** Shandi Bangun Purwantoro, A.Md.
- **Logo:** file `logo-sanjaya.png` (lingkaran transparan) & `logo-sanjaya-original.jpeg` — ada di folder ini.
- **Warna brand:** hijau (ambil dari logo — hijau limau ke hijau tua, gradien). Aksen putih & abu gelap.
- **Instagram:** [MINTA KE MAS SHANDI — isi username IG]

## 5. Data yang MASIH HARUS DIMINTA ke Mas Shandi (tandai sebagai placeholder di website)

Buat konten dummy/placeholder yang jelas untuk hal-hal ini, supaya gampang diganti nanti:
- Foto produk (melon, selada, sayuran lain) — sementara pakai placeholder.
- Daftar produk lengkap + harga per item/kg.
- Foto kebun/greenhouse untuk hero & galeri.
- Jam operasional / hari buka.
- Username Instagram & link.
- Gambar/kode QRIS untuk pembayaran.
- Titik lokasi Google Maps (embed) — sementara pakai alamat di atas.

## 6. Struktur Halaman (satu halaman panjang / one-page, dengan navigasi anchor)

1. **Hero** — logo, nama PT, tagline "Future of Sustainable Harvest", tombol "Pesan via WhatsApp",
   latar foto greenhouse.
2. **Tentang** — deskripsi singkat perusahaan: budidaya hidroponik higienis, bebas pestisida,
   nutrisi terkontrol (fertigasi). (Teks awal boleh kamu tulis, tandai agar mudah diedit via CMS.)
3. **Produk** — grid kartu produk (foto, nama, harga, deskripsi singkat, tombol "Pesan"). Ambil dari CMS.
4. **Keunggulan** — poin singkat: segar, bebas pestisida, panen terjadwal, bisa antar/ambil di tempat.
5. **Cara Pesan** — langkah pesan via WhatsApp + info pembayaran (transfer/QRIS di lokasi).
6. **Lokasi & Kontak** — alamat, embed Google Maps, WhatsApp, Instagram, jam buka.
7. **Footer** — logo, copyright, link IG.

## 7. Fungsi Teknis

- Tombol WhatsApp: link `https://wa.me/6281339220499?text=...` dengan pesan default
  ("Halo, saya ingin memesan produk hidroponik ..."). Tombol "Pesan" per produk boleh menyertakan nama produk di teks.
- Google Maps: embed iframe berdasarkan alamat.
- SEO dasar: title, meta description, Open Graph (biar rapi saat dibagikan di WA/IG), favicon dari logo.
- Responsif penuh (HP, tablet, desktop).

## 8. Deliverable yang diharapkan

1. Kode website (siap `git init` / push ke GitHub).
2. Konfigurasi **Decap/Sveltia CMS** + folder konten (mis. `/content/produk/*.md`) yang sudah terisi 2–3 contoh produk.
3. File **`README.md`** berbahasa Indonesia sederhana yang menjelaskan:
   - Cara deploy ke Netlify (langkah demi langkah, untuk pemula).
   - Cara Mas Shandi mengedit konten lewat `/admin` (dengan bahasa awam).
   - Cara membuat akun atas nama Mas Shandi.
4. `netlify.toml` bila perlu, siap deploy.

## 9. Konteks PKL (untuk diketahui, tidak masuk ke website)

Pengerjaan website ini didokumentasikan sebagai kegiatan PKL (Promotion): koordinasi dengan pemilik,
proses pembuatan, dan hasil akhirnya jadi bahan logbook + Bab IV laporan (analisis strategi promosi digital).
