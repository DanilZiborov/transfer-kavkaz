import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://danilziborov.github.io',
  base: '/transfer-kavkaz/',
  trailingSlash: 'always',
  output: 'static',
  server: { host: '127.0.0.1' },
});
