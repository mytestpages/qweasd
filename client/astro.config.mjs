import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mytestpages.github.io",
  base: "/news-website",
  integrations: [tailwind()],
  redirects: {
    "/": "/articles/1",
    "/articles": "/articles/1",
  },
});
