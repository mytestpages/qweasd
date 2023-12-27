import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mytestpages.github.io",
  base: "/qweasd",
  integrations: [tailwind()],
  redirects: {
    "/": "/qweasd/articles/1",
    "/articles": "/qweasd/articles/1",
  },
});
