import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    define: {
      'import.meta.env.VITE_PUBLIC_POSTHOG_KEY': JSON.stringify(env.VITE_PUBLIC_POSTHOG_KEY),
      'import.meta.env.VITE_PUBLIC_POSTHOG_HOST': JSON.stringify(env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'),
    },
  };
});
