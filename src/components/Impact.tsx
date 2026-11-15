import React from "react";
import '../assets/styles/Sections.scss';
import { useLang } from '../i18n';

function Impact() {
  const { t } = useLang();
  return (
    <div id="impact" className="section">
      <h1>{t.impact.title}</h1>
      <p className="section-subtitle">{t.impact.subtitle}</p>
      <div className="stats-grid">
        {t.impact.stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Impact;
