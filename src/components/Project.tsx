import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Project.scss';
import { LINKS, useLang } from '../i18n';

function Project() {
  const { t } = useLang();
  return (
    <div className="projects-container" id="projects">
      <h1>{t.projects.title}</h1>
      <p className="section-subtitle">{t.projects.subtitle}</p>
      <div className="projects-grid">
        {t.projects.items.map((item) => (
          <div className="project project-card" key={item.url}>
            <span className={`project-badge${item.badge.match(/produ/i) ? ' live' : ''}`}>{item.badge}</span>
            <a href={item.url} target="_blank" rel="noreferrer"><h2>{item.name}</h2></a>
            <p>{item.text}</p>
            <div className="project-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="project-link" href={item.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} /> {t.projects.codeLabel} →
            </a>
          </div>
        ))}
        <a className="project more-card" href={`${LINKS.github}?tab=repositories`} target="_blank" rel="noreferrer">
          <span>{t.projects.moreLabel}</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
