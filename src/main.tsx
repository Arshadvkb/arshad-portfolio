import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from 'react-ga4'

// Get the GA ID from the .env file
const gaId = import.meta.env.VITE_GA_ID;

// Initialize Google Analytics
if (gaId) {
  ReactGA.initialize(gaId);
}

createRoot(document.getElementById("root")!).render(<App />);
