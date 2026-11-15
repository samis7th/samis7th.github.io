import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faBullhorn, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { useLang } from '../i18n';

const ICONS = [faNodeJs, faRobot, faBullhorn, faServer];

function Expertise() {
  const { t } = useLang();
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{t.expertise.title}</h1>
        <div className="skills-grid">
          {t.expertise.items.map((item, i) => (
            <div className="skill" key={item.title}>
              <FontAwesomeIcon icon={ICONS[i]} size="3x"/>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="flex-chips">
                <span className="chip-title">{t.expertise.stackLabel}</span>
                {item.chips.map((label) => <Chip key={label} className='chip' label={label} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
