import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import { useLang } from '../i18n';

function Timeline() {
  const { t } = useLang();
  return (
    <div id="history">
      <div className="items-container">
        <h1>{t.history.title}</h1>
        <VerticalTimeline>
          {t.history.items.map((item, i) => (
            <VerticalTimelineElement
              key={item.company}
              className="vertical-timeline-element--work"
              contentStyle={i === 0 ? { background: 'white', color: 'rgb(39, 40, 34)' } : undefined}
              contentArrowStyle={i === 0 ? { borderRight: '7px solid white' } : undefined}
              date={item.date}
              iconStyle={{ background: '#5000ca', color: 'white' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
              <p>{item.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
