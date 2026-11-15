import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Contact.scss';
import { LINKS, useLang } from '../i18n';

function Contact() {
  const { t } = useLang();
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.text}</p>
          <div className="contact-buttons">
            <a href={LINKS.email}><EmailIcon/>{LINKS.emailText}</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/>LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer"><GitHubIcon/>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
