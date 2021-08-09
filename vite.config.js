import { resolve } from 'path/posix';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // ...
  ],
  resolve: {
      alias: {
          '@': resolve('src')
      }
  }
})