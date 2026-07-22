import { defineCollection, z } from 'astro:content';

// Koleksi Produk — setiap file .md di src/content/produk/ menjadi satu kartu produk.
// Bisa diedit lewat CMS di /admin tanpa menyentuh kode.
const produk = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    kategori: z.enum(['Melon', 'Salad', 'Sayuran']),
    harga: z.string(),
    gambar: z.string(),
    deskripsi: z.string(),
    badge: z.string().optional().default(''),
    tersedia: z.boolean().default(true),
    urutan: z.number().default(99),
  }),
});

export const collections = { produk };
