// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://jes4code.github.io",  // ← AÑADE: tu usuario GitHub
  base: "/",  // ← AÑADE: "/" si repo principal; "/portfolio" si sub-repo
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
