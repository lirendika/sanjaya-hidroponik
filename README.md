# Website PT Sanjaya Mirai Hidroponik

Website profil dan promosi untuk **PT Sanjaya Mirai Hidroponik** (Kediri): menampilkan
produk melon & sayuran hidroponik, wisata petik melon, dan memudahkan pemesanan via WhatsApp.

Dibuat dengan **Astro** (ringan & cepat) plus **Decap CMS** (agar pemilik bisa mengedit
konten sendiri tanpa menyentuh kode), dan siap di-*hosting* **gratis** di **Netlify**.

> Panduan ini dibuat sesederhana mungkin untuk pemula. Ikuti langkahnya berurutan.

---

## Isi Folder (sekilas)

| Bagian | Untuk apa |
|---|---|
| `src/pages/index.astro` | Susunan halaman website |
| `src/data/site.json` | **Teks & kontak** (bisa diedit via /admin) |
| `src/content/produk/` | **Daftar produk** (bisa diedit via /admin) |
| `public/images/` | Semua foto & logo |
| `public/admin/` | Panel kelola konten (`/admin`) |
| `src/styles/global.css` | Tampilan/desain |

---

## Menjalankan di Komputer (opsional, untuk yang mau coba lokal)

Butuh **Node.js** (versi 18/20). Buka Terminal di folder ini, lalu:

```bash
npm install
npm run dev
```

Buka browser ke alamat yang muncul (biasanya `http://localhost:4321`).
Untuk membuat versi siap unggah: `npm run build` (hasilnya di folder `dist/`).

---

## Cara Menerbitkan Website ke Internet (Netlify), GRATIS

> **PENTING soal kepemilikan:** Agar website ini **100% milik Mas Shandi**, buatlah akun
> **GitHub** dan **Netlify** memakai **email Mas Shandi** sejak awal. Dengan begitu tidak
> perlu proses serah-terima rumit di kemudian hari.

### Langkah 1: Buat akun (pakai email Mas Shandi)
1. Daftar di **https://github.com** memakai email Mas Shandi.
2. Daftar di **https://netlify.com**, pilih **"Sign up with GitHub"** (agar terhubung).

### Langkah 2: Unggah kode ke GitHub
1. Di GitHub, klik **New repository**, beri nama misalnya `sanjaya-hidroponik`, lalu **Create**.
2. Ikuti petunjuk "push an existing repository", atau paling mudah gunakan tombol
   **"uploading an existing file"** lalu seret seluruh isi folder ini (kecuali folder
   `node_modules` dan `dist`).

### Langkah 3: Hubungkan ke Netlify
1. Login Netlify, klik **Add new site > Import an existing project > GitHub**.
2. Pilih repository `sanjaya-hidroponik`.
3. Netlify otomatis membaca file `netlify.toml`. Pastikan:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Klik **Deploy**. Tunggu 1 sampai 2 menit, website langsung tayang di alamat seperti
   `https://sanjaya-hidroponik.netlify.app`.
5. (Opsional) Ganti nama alamat di **Site settings > Change site name**.

### Langkah 4: Samakan alamat di kode (biar tautan share rapi)
Buka `astro.config.mjs`, ubah baris `site:` menjadi alamat Netlify final Anda, lalu simpan.

---

## Mengaktifkan Login "Kelola Konten" (agar pemilik bisa edit di /admin)

Website ini punya halaman **`/admin`** tempat konten diedit lewat form, tanpa koding.
Agar bisa login, aktifkan **Netlify Identity** dan **Git Gateway** satu kali saja:

1. Di dashboard Netlify site Anda, buka menu **Identity**, klik **Enable Identity**.
2. Masih di Identity, buka **Services > Git Gateway > Enable Git Gateway**.
3. Di bagian **Identity > Registration**, pilih **Invite only** (agar hanya orang yang
   diundang yang bisa masuk, lebih aman).
4. Klik **Invite users**, masukkan **email Mas Shandi**, lalu kirim.
5. Mas Shandi cek email, klik **Accept the invite**, lalu buat password.
6. Selesai. Login kapan saja di **`https://ALAMAT-ANDA.netlify.app/admin`**.

---

## Cara Mengedit Konten (untuk Mas Shandi, mudah)

1. Buka `https://ALAMAT-ANDA.netlify.app/admin`, lalu **Login** (email & password).
2. Ada 2 menu:
   - **Produk**: tambah/ubah/hapus produk (nama, foto, harga, deskripsi, stok).
     Klik produk untuk mengubah, atau **"New Produk"** untuk menambah.
   - **Pengaturan Situs**: ubah teks utama, **nomor WhatsApp**, alamat, jam buka,
     link Instagram, teks tentang, keunggulan, dan lainnya.
3. Untuk **ganti foto**: klik kolom gambar, lalu **Upload** foto baru dari HP/komputer.
4. Setelah selesai, klik **Publish** (atau **Save** lalu **Publish** bila memakai mode draf).
5. Website akan **otomatis diperbarui** dalam 1 sampai 2 menit. Tidak perlu menyentuh kode.

> Tips: untuk menandai produk habis, cukup matikan tombol **"Tersedia / Ada Stok?"**.

---

## Yang Masih Perlu Dilengkapi (ganti kapan saja lewat /admin)

Foto & data awal saat ini diambil sementara dari Instagram @sanjaya_hidroponik.
Sebaiknya nanti diganti atau dilengkapi:

- [ ] **Foto produk & kebun beresolusi tinggi** (melon, salad, sayuran, greenhouse).
- [ ] **Daftar harga** salad & sayuran (saat ini tertulis "Hubungi via WhatsApp").
- [ ] **Nomor WhatsApp** khusus order bila berbeda dari yang sekarang (`0813-3922-0499`).
- [ ] **Titik lokasi Google Maps** yang presisi (saat ini memakai pencarian nama).
- [ ] **Gambar/kode QRIS** untuk pembayaran (bisa ditambahkan ke bagian Cara Pesan).
- [ ] **Jam operasional pasti** & hari libur.

---

## Data Perusahaan (tersimpan di `src/data/site.json`)

- **Nama:** PT Sanjaya Mirai Hidroponik
- **Tagline:** Future of Sustainable Harvest
- **WhatsApp:** 0813-3922-0499
- **Alamat:** Jl. Suparjan Mangun Wijaya No.145 B, Bujel, Kec. Mojoroto, Kota Kediri 64113
- **Kebun/Wisata:** Timur Terminal Tamanan, Kel. Tamanan, Kec. Mojoroto, Kota Kediri
- **Instagram:** @sanjaya_hidroponik
- **Melon:** Rp 27.000/kg, varietas Sweetnet 9, Lavender, Sweet Hami
- **Salad:** Fresh Salad, Potato Salad, Salad Buah 300 mL (GoFood/GrabFood/ShopeeFood/Maxim)

---

Dibuat sebagai bagian dari kegiatan **PKL (Praktik Kerja Lapangan)**, aspek Promosi Digital.
