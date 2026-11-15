import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';
import { LINKS, useLang } from '../i18n';

function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div>
        <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      </div>
      <p>{t.footer} <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;
