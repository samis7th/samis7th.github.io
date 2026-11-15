import React from "react";
import '../assets/styles/Sections.scss';
import { useLang } from '../i18n';

function About() {
  const { t } = useLang();
  return (
    <div id="about" className="section">
      <h1>{t.about.title}</h1>
      <div className="about-text">
        {t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}

export default About;
