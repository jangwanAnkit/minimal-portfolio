import { PostHogProvider } from 'posthog-js/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
const options = {
  api_host: import.meta.env.REACT_APP_PUBLIC_POSTHOG_HOST,
}

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider 
      apiKey={import.meta.env.REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    ></PostHogProvider>
    <App />
  </StrictMode>
);
