import React from "react";
import shotApi from '../assets/images/painel-inscritos.jpg';
import shotBot from '../assets/images/painel-mentorias.jpg';
import shotPanel from '../assets/images/painel-inicio.jpg';
import '../assets/styles/Project.scss';
import { LINKS, useLang } from '../i18n';

const SHOTS = [shotApi, shotBot, shotPanel];

function Project() {
  const { t } = useLang();
  return (
    <div className="projects-container" id="projects">
      <h1>{t.projects.title}</h1>
      <p className="section-subtitle">{t.projects.subtitle}</p>
      <div className="projects-grid">
        {t.projects.items.map((item, i) => {
          const url = `${LINKS.github}/${item.repo}`;
          return (
            <div className="project" key={item.repo}>
              <a href={url} target="_blank" rel="noreferrer"><img src={SHOTS[i]} className="zoom" alt={item.name} width="100%"/></a>
              <a href={url} target="_blank" rel="noreferrer"><h2>{item.name}</h2></a>
              <p>{item.text}</p>
              <div className="project-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={url} target="_blank" rel="noreferrer">{t.projects.codeLabel} →</a>
            </div>
          );
        })}
        <a className="project more-card" href={`${LINKS.github}?tab=repositories`} target="_blank" rel="noreferrer">
          <span>{t.projects.moreLabel}</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
