import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://StephenC808.github.io',
  base: '/front-end-project',
  integrations: [svelte()]
});