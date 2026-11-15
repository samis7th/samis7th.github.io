import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import { LINKS, useLang } from '../i18n';

function Social({ className }: { className: string }) {
  return (
    <div className={className}>
      <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
      <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      <a href={LINKS.email} aria-label="E-mail"><EmailIcon/></a>
    </div>
  );
}

function Main() {
  const { t } = useLang();
  const goProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={LINKS.avatar} alt="Samuel Trevisan" />
        </div>
        <div className="content">
          <Social className="social_icons" />
          <h1>Samuel Trevisan</h1>
          <p>{t.hero.role}</p>
          <p className="tagline">{t.hero.tagline}</p>
          <button className="hero-cta" onClick={goProjects}>{t.hero.cta}</button>
          <Social className="mobile_social_icons" />
        </div>
      </div>
    </div>
  );
}

export default Main;
