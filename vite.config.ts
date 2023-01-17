import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(env => {
  const isDevelopment = env.mode === 'development';

  return {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/main.scss";',
        },
      },
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
  };
});
