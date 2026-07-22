// @ts-check
import { defineConfig } from 'astro/config';

// Konfigurasi Astro.
// site: nanti ganti dengan URL Netlify final (mis. https://sanjaya-hidroponik.netlify.app)
// supaya meta Open Graph & sitemap benar saat dibagikan di WhatsApp/Instagram.
export default defineConfig({
  site: 'https://sanjaya-hidroponik.netlify.app',
  build: {
    format: 'directory',
  },
});
