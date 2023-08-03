import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import starlight from '@astrojs/starlight';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [
    starlight({
      title: 'My delightful docs site',
    }),
  ],
});
