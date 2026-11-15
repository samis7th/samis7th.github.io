import React, { useState, useEffect } from "react";
import {
  Main,
  About,
  Impact,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { LangProvider } from './i18n';
import './index.scss';

function initialMode(): string {
  try {
    const saved = localStorage.getItem('mode');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {}
  return 'dark';
}

function App() {
  const [mode, setMode] = useState<string>(initialMode);

  const handleModeChange = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    try { localStorage.setItem('mode', next); } catch {}
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <LangProvider>
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Main />
          <About />
          <Impact />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </FadeIn>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
