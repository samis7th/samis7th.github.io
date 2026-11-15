import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "pt" | "en";

export const LINKS = {
  github: "https://github.com/samis7th",
  linkedin: "https://www.linkedin.com/in/samuel-trevisan",
  email: "mailto:samuelltrevisan@gmail.com",
  emailText: "samuelltrevisan@gmail.com",
  avatar: "https://github.com/samis7th.png",
};

const content = {
  pt: {
    nav: [["Sobre", "about"], ["Especialidades", "expertise"], ["Experiência", "history"], ["Projetos", "projects"], ["Contato", "contact"]],
    menu: "Menu",
    langLabel: "EN",
    langAria: "Switch to English",
    themeAria: "Alternar tema claro/escuro",
    hero: {
      role: "Engenheiro de Software · Automação & IA",
      tagline: "Construo sistemas que saem da minha máquina e resolvem problemas reais, todos os dias, em produção.",
      cta: "Ver projetos",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Oi, eu sou o Samuel 👋 Sou estudante de Engenharia de Software na Unilins e gosto do momento em que algo que eu construí sai da minha máquina e começa a resolver um problema real para pessoas reais.",
        "Minha trajetória começou no suporte de TI. Na Prefeitura de Lins passei mais de um ano e meio resolvendo chamados, cuidando da rede e configurando computadores com Windows e Linux. Hoje sou Analista de Suporte (N1) na Penso Tecnologia, trabalhando com firewall, VPN e monitoramento de infraestrutura. Foi ali que aprendi a pensar no sistema inteiro, do cabo até o usuário.",
        "Me apaixonei por automação no estágio na HM Soluções. Criei fluxos no N8N que tiravam trabalho repetitivo das pessoas: conversas integradas ao WhatsApp que reduziram o tempo de resposta ao cliente e planilhas do Google alimentadas por API, sem ninguém copiando e colando. Ali percebi que queria construir coisas que mudam a forma como uma equipe trabalha.",
        "Na FLS Consultoria fui muito além e saí dos fluxos para sistemas completos. Projetei, construí e mantenho a automação de leads da empresa em Node.js: uma API de captação, um assistente de pré-atendimento no WhatsApp e um painel administrativo, todos em produção e integrados a 12 serviços, como CRM, Meta Ads, Hotmart, Calendly e Google Agenda. Também faço a gestão do tráfego pago, então vejo os dois lados: o anúncio que traz o lead e o sistema que transforma esse lead em reunião ou venda.",
        "Uso IA como par de programação, mas sem abrir mão da engenharia. Cada mudança passa por testes automatizados (são mais de 400 nos sistemas da FLS), revisão de segurança e cuidado com a LGPD, porque sistema em produção não pode quebrar quando o cliente está do outro lado.",
        "Fora do trabalho, sigo construindo: o FitProgress, uma plataforma de treinos com FastAPI, React e Supabase rodando na AWS, e o Olho do Bairro, um projeto em equipe da faculdade com Spring Boot e React. Também estudo AWS, segurança da informação, Docker e sistemas distribuídos, quase sempre com uma playlist tocando no Spotify 🎧.",
        "Busco oportunidades onde eu possa unir desenvolvimento, automação e IA para gerar resultado de verdade para o negócio.",
      ],
    },
    impact: {
      title: "Impacto em produção",
      subtitle: "Resultados reais dos sistemas que construí na FLS Consultoria.",
      stats: [
        ["412", "inscritos alcançados numa única campanha automática no WhatsApp"],
        ["0", "leads perdidos durante uma queda do CRM, graças à fila com reenvio"],
        ["10s → 0s", "tempo de confirmação do formulário: de 10–15 s para instantâneo"],
        ["12", "serviços integrados: CRM, Meta, Hotmart, WhatsApp, Calendly e mais"],
        ["408", "testes automatizados garantindo que nada quebra em produção"],
        ["3", "sistemas em produção usados pela equipe todos os dias"],
      ],
    },
    expertise: {
      title: "Especialidades",
      stackLabel: "Stack:",
      items: [
        {
          title: "Backend & Integrações",
          text: "APIs REST em Node.js e Express com MySQL. Entrega assíncrona por fila persistida (resposta 202 e reprocessamento com backoff), webhooks idempotentes com chave única por evento, autenticação por segredo comparado em tempo constante, rate limit por IP, CORS restrito e registro de consentimento (LGPD). Integrações via GraphQL (Monday.com), REST e OAuth.",
          chips: ["Node.js", "Express", "JavaScript", "TypeScript", "MySQL", "REST", "GraphQL", "Webhooks", "Python", "FastAPI", "Java", "Spring Boot", "React"],
        },
        {
          title: "Automação & IA",
          text: "Automação de processos com N8N e com backends próprios orquestrando APIs de mensageria (ManyChat/WhatsApp), agenda (Calendly, Google Calendar), e-mail transacional (Brevo) e alertas (Telegram Bot API). Agendador de tarefas persistido com trava contra execução duplicada. Desenvolvimento assistido por IA (Claude Code, orquestração de agentes, prompt engineering) validado por mais de 400 testes com node:test.",
          chips: ["Claude Code", "Prompt Engineering", "N8N", "ManyChat", "WhatsApp", "OpenAI", "Calendly API", "Google APIs", "Brevo", "Telegram Bot"],
        },
        {
          title: "Tráfego pago & Rastreamento",
          text: "Gestão de campanhas em Meta Ads e ChatGPT Ads. Rastreamento server-side com Meta Conversions API (dados com hash SHA-256 e deduplicação com o Pixel por event_id), UTMs e parâmetros de origem propagados até o CRM, e atribuição de vendas via webhook da Hotmart com o parâmetro sck.",
          chips: ["Meta Ads", "Conversions API", "Pixel", "ChatGPT Ads", "UTMs", "Hotmart", "Monday CRM"],
        },
        {
          title: "Infraestrutura & Suporte",
          text: "Redes (cabeamento, roteadores, switches), firewall e VPN, instalação e configuração de Windows e Linux e monitoramento de infraestrutura. Deploy de aplicações Node.js atrás de proxy reverso com HTTPS, containers com Docker/Docker Compose e estudos em AWS (EC2) e segurança da informação.",
          chips: ["Linux", "Docker", "AWS", "Firewall", "VPN", "Git", "Hostinger", "Jira"],
        },
      ],
    },
    history: {
      title: "Experiência",
      items: [
        {
          role: "Desenvolvedor de Automação & Software · Gestor de Tráfego Pago",
          company: "FLS Consultoria",
          date: "out 2026 – atual",
          bullets: [
            "Construí e mantenho 3 sistemas Node.js em produção: API de captação de leads, assistente de pré-atendimento no WhatsApp e painel administrativo da equipe",
            "Integrei 12 serviços, entre eles Monday.com CRM, Meta Conversions API, Hotmart, ManyChat/WhatsApp, Calendly e Google Agenda",
            "Gestão de tráfego pago em Meta Ads e ChatGPT Ads, com rastreamento de conversões do anúncio até cada lead e venda",
            "Resultados: nenhum lead perdido durante uma queda do CRM, confirmação instantânea do formulário e uma campanha alcançando 412 inscritos automaticamente",
          ],
        },
        {
          role: "Analista de Suporte de TI (N1)",
          company: "Penso Tecnologia",
          date: "set 2026 – atual",
          bullets: [
            "Triagem e resolução de chamados dentro do SLA, garantindo a continuidade da operação",
            "Configuração e manutenção de firewalls e VPNs, garantindo a segurança e a estabilidade da rede corporativa",
            "Instalação, configuração e manutenção de sistemas operacionais e estações de trabalho",
            "Monitoramento proativo da infraestrutura de TI, identificando e resolvendo problemas técnicos",
          ],
        },
        {
          role: "Estagiário de Desenvolvimento",
          company: "HM Soluções",
          date: "out 2025 – mai 2026",
          bullets: [
            "Automações em N8N para eliminar tarefas repetitivas e otimizar a comunicação com clientes",
            "Fluxos integrados ao WhatsApp, reduzindo o tempo de resposta e aumentando a eficiência operacional",
            "Integração com Google Sheets via API para centralizar e organizar dados automaticamente",
            "Atuação também como técnico de TI e apoio de logística, dando suporte à infraestrutura e às rotinas operacionais",
          ],
        },
        {
          role: "Técnico de Suporte de TI (Estágio)",
          company: "Prefeitura de Lins",
          date: "mar 2024 – set 2025",
          bullets: [
            "Atendimento de chamados de suporte presencial e remoto",
            "Manutenção da infraestrutura de rede, incluindo cabeamento, roteadores e switches",
            "Instalação e configuração de sistemas operacionais Windows e Linux",
            "Controle de inventário de TI, documentação e suporte aos usuários internos",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Sistemas em produção numa empresa real, além de projetos pessoais e acadêmicos.",
      codeLabel: "Ver código",
      moreLabel: "Mais projetos no GitHub →",
      items: [
        {
          name: "Lead Capture API",
          url: "https://github.com/samis7th/lead-capture-api",
          badge: "Em produção",
          text: "Recebe os formulários das landing pages, grava no CRM (Monday.com), envia conversões para a Meta (Conversions API) e processa vendas da Hotmart via webhook. Responde na hora e nunca perde um lead, mesmo com o CRM fora do ar.",
          tags: ["Node.js", "Express", "MySQL", "Meta CAPI", "Hotmart", "61 testes"],
        },
        {
          name: "WhatsApp Assistant",
          url: "https://github.com/samis7th/whatsapp-assistant",
          badge: "Em produção",
          text: "Assistente de pré-atendimento no WhatsApp: qualifica leads por faturamento, agenda reuniões (Calendly + Google Agenda), manda lembretes por WhatsApp e e-mail e roda um sorteio semanal de mentorias.",
          tags: ["Node.js", "ManyChat", "Calendly", "Google Calendar", "Brevo", "306 testes"],
        },
        {
          name: "Admin Dashboard",
          url: "https://github.com/samis7th/admin-dashboard",
          badge: "Em produção",
          text: "Painel da equipe com leads em tempo real, gráficos, reuniões, gestão do sorteio e a saúde de cada integração. Login seguro (scrypt, sessão HMAC, CSP) e modo demonstração.",
          tags: ["Node.js", "JavaScript puro", "Gráficos SVG", "Segurança", "41 testes"],
        },
        {
          name: "FitProgress",
          url: "https://github.com/samis7th/Fitprogress",
          badge: "Projeto pessoal",
          text: "Plataforma full stack de academia: planejamento semanal, execução de treinos, recordes pessoais calculados automaticamente, metas de carga, evolução de peso e registro de refeições. Autenticação e banco no Supabase com RLS, Docker e deploy na AWS.",
          tags: ["Python", "FastAPI", "React", "Supabase", "Docker", "AWS EC2"],
        },
        {
          name: "Olho do Bairro",
          url: "https://github.com/Kurzgesagttt/OlhoVivo",
          badge: "Projeto em equipe · Unilins",
          text: "Plataforma comunitária para registrar e acompanhar ocorrências urbanas: moradores publicam, votam e comentam num feed do bairro, e supervisores atualizam o status pelo painel. Projeto extensionista de Sistemas Distribuídos.",
          tags: ["Java 21", "Spring Boot", "JWT", "React", "TypeScript", "PostgreSQL", "Docker"],
        },
      ],
    },
    contact: {
      title: "Vamos conversar",
      text: "Tem um processo que poderia ser automatizado ou uma vaga em que eu possa ajudar? Me chama!",
      email: "E-mail",
    },
    footer: "Feito por Samuel Trevisan · Template por",
  },
  en: {
    nav: [["About", "about"], ["Expertise", "expertise"], ["Experience", "history"], ["Projects", "projects"], ["Contact", "contact"]],
    menu: "Menu",
    langLabel: "PT",
    langAria: "Mudar para português",
    themeAria: "Toggle light/dark theme",
    hero: {
      role: "Software Engineer · Automation & AI",
      tagline: "I build systems that leave my machine and solve real problems, every day, in production.",
      cta: "See projects",
    },
    about: {
      title: "About me",
      paragraphs: [
        "Hey, I'm Samuel 👋 I'm a Software Engineering student at Unilins, and I like the moment when something I built leaves my machine and starts solving a real problem for real people.",
        "My path started in IT support. At the city of Lins I spent over a year and a half closing tickets, maintaining the network and setting up Windows and Linux machines. Today I'm an IT Support Analyst (N1) at Penso Tecnologia, working with firewalls, VPNs and infrastructure monitoring. That's where I learned to think about the whole system, from the cable to the user.",
        "I got hooked on automation during my internship at HM Solucoes. I built N8N flows that took repetitive work off people's plates: WhatsApp-integrated conversations that cut client response time, and Google Sheets fed by APIs, with no one copying and pasting. That's when I realized I wanted to build things that change how a team works.",
        "At FLS Consultoria I took it much further, going from flows to full systems. I designed, built and maintain the company's lead automation stack in Node.js: a lead capture API, a WhatsApp pre-sales assistant and an admin dashboard, all in production and integrated with 12 services such as the CRM, Meta Ads, Hotmart, Calendly and Google Calendar. I also manage the company's paid traffic, so I see both sides: the ad that brings the lead and the system that turns it into a meeting or a sale.",
        "I build with AI as a pair programmer, but I keep the engineering solid. Every change goes through automated tests (over 400 across the FLS systems), security review and LGPD compliance, because a production system can't break when there's a customer on the other side.",
        "Outside work I keep building: FitProgress, a workout platform with FastAPI, React and Supabase running on AWS, and Olho do Bairro, a university team project with Spring Boot and React. I'm also studying AWS, information security, Docker and distributed systems, usually with a playlist on Spotify 🎧.",
        "I'm looking for opportunities where I can combine software development, automation and AI to deliver real business results.",
      ],
    },
    impact: {
      title: "Impact in production",
      subtitle: "Real results from the systems I built at FLS Consultoria.",
      stats: [
        ["412", "subscribers reached in a single automated WhatsApp campaign"],
        ["0", "leads lost during a CRM outage, thanks to a retry queue"],
        ["10s → 0s", "form confirmation time: from 10–15 s to instant"],
        ["12", "integrated services: CRM, Meta, Hotmart, WhatsApp, Calendly and more"],
        ["408", "automated tests making sure nothing breaks in production"],
        ["3", "production systems the team uses every day"],
      ],
    },
    expertise: {
      title: "Expertise",
      stackLabel: "Stack:",
      items: [
        {
          title: "Backend & Integrations",
          text: "REST APIs in Node.js and Express with MySQL. Asynchronous delivery through a persisted queue (202 response and retries with backoff), idempotent webhooks with a unique key per event, secret authentication with constant-time comparison, per-IP rate limiting, strict CORS and consent logging (LGPD). Integrations via GraphQL (Monday.com), REST and OAuth.",
          chips: ["Node.js", "Express", "JavaScript", "TypeScript", "MySQL", "REST", "GraphQL", "Webhooks", "Python", "FastAPI", "Java", "Spring Boot", "React"],
        },
        {
          title: "Automation & AI",
          text: "Process automation with N8N and with custom backends orchestrating messaging (ManyChat/WhatsApp), scheduling (Calendly, Google Calendar), transactional e-mail (Brevo) and alerting (Telegram Bot API) APIs. Persisted task scheduler with locking against duplicate runs. AI-assisted development (Claude Code, agent orchestration, prompt engineering) validated by 400+ tests with node:test.",
          chips: ["Claude Code", "Prompt Engineering", "N8N", "ManyChat", "WhatsApp", "OpenAI", "Calendly API", "Google APIs", "Brevo", "Telegram Bot"],
        },
        {
          title: "Paid Traffic & Tracking",
          text: "Campaign management on Meta Ads and ChatGPT Ads. Server-side tracking with the Meta Conversions API (SHA-256 hashed data and Pixel deduplication via event_id), UTMs and origin parameters propagated to the CRM, and sales attribution through Hotmart webhooks using the sck parameter.",
          chips: ["Meta Ads", "Conversions API", "Pixel", "ChatGPT Ads", "UTMs", "Hotmart", "Monday CRM"],
        },
        {
          title: "Infrastructure & Support",
          text: "Networking (cabling, routers, switches), firewall and VPN, Windows and Linux installation and configuration, and infrastructure monitoring. Deployment of Node.js apps behind a reverse proxy with HTTPS, containers with Docker/Docker Compose, and ongoing studies in AWS (EC2) and information security.",
          chips: ["Linux", "Docker", "AWS", "Firewall", "VPN", "Git", "Hostinger", "Jira"],
        },
      ],
    },
    history: {
      title: "Experience",
      items: [
        {
          role: "Automation & Software Developer · Paid Traffic Manager",
          company: "FLS Consultoria",
          date: "Oct 2026 – present",
          bullets: [
            "Built and maintain 3 Node.js systems in production: a lead capture API, a WhatsApp pre-sales assistant and the team's admin dashboard",
            "Integrated 12 services, including Monday.com CRM, Meta Conversions API, Hotmart, ManyChat/WhatsApp, Calendly and Google Calendar",
            "Manage paid traffic on Meta Ads and ChatGPT Ads, with conversion tracking from the ad to each lead and sale",
            "Results: zero leads lost during a CRM outage, instant form confirmation and a campaign reaching 412 subscribers automatically",
          ],
        },
        {
          role: "IT Support Analyst (N1)",
          company: "Penso Tecnologia",
          date: "Sep 2026 – present",
          bullets: [
            "Handle ticket triage and resolution within SLA, ensuring operational continuity",
            "Configure and maintain firewalls and VPNs, ensuring corporate network security and stability",
            "Install, configure and maintain operating systems and workstations",
            "Proactively monitor IT infrastructure, identifying and resolving technical issues",
          ],
        },
        {
          role: "Development Intern",
          company: "HM Solucoes",
          date: "Oct 2025 – May 2026",
          bullets: [
            "Built N8N automations to eliminate repetitive tasks and optimize client communication",
            "Developed WhatsApp-integrated flows reducing response time and increasing operational efficiency",
            "Integrated Google Sheets via API for automated data centralization and organization",
            "Also acted as IT Technician and logistics assistant, supporting infrastructure and operational routines",
          ],
        },
        {
          role: "IT Support Technician (Intern)",
          company: "Prefeitura de Lins",
          date: "Mar 2024 – Sep 2025",
          bullets: [
            "Provided on-site and remote technical support",
            "Maintained network infrastructure including cabling, routers and switches",
            "Installed and configured Windows and Linux operating systems",
            "Managed IT inventory, documentation and internal user support",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Systems running in production at a real company, plus personal and academic projects.",
      codeLabel: "View code",
      moreLabel: "More projects on GitHub →",
      items: [
        {
          name: "Lead Capture API",
          url: "https://github.com/samis7th/lead-capture-api",
          badge: "In production",
          text: "Receives landing page forms, saves leads to the CRM (Monday.com), sends conversions to Meta (Conversions API) and processes Hotmart sales via webhook. Answers instantly and never loses a lead, even when the CRM is down.",
          tags: ["Node.js", "Express", "MySQL", "Meta CAPI", "Hotmart", "61 tests"],
        },
        {
          name: "WhatsApp Assistant",
          url: "https://github.com/samis7th/whatsapp-assistant",
          badge: "In production",
          text: "WhatsApp pre-sales assistant: qualifies leads by revenue, books meetings (Calendly + Google Calendar), sends WhatsApp and e-mail reminders and runs a weekly mentoring raffle.",
          tags: ["Node.js", "ManyChat", "Calendly", "Google Calendar", "Brevo", "306 tests"],
        },
        {
          name: "Admin Dashboard",
          url: "https://github.com/samis7th/admin-dashboard",
          badge: "In production",
          text: "Team dashboard with real-time leads, charts, meetings, raffle management and the health of every integration. Secure login (scrypt, HMAC sessions, CSP) and demo mode.",
          tags: ["Node.js", "Vanilla JS", "SVG charts", "Security", "41 tests"],
        },
        {
          name: "FitProgress",
          url: "https://github.com/samis7th/Fitprogress",
          badge: "Personal project",
          text: "Full stack gym platform: weekly planning, workout logging, automatically calculated personal records, load goals, body weight tracking and meal logging. Supabase auth and database with RLS, Docker and AWS deployment.",
          tags: ["Python", "FastAPI", "React", "Supabase", "Docker", "AWS EC2"],
        },
        {
          name: "Olho do Bairro",
          url: "https://github.com/Kurzgesagttt/OlhoVivo",
          badge: "Team project · Unilins",
          text: "Community platform to report and track urban issues: residents post, vote and comment in a neighborhood feed, and supervisors update the status from an admin panel. Extension project for the Distributed Systems course.",
          tags: ["Java 21", "Spring Boot", "JWT", "React", "TypeScript", "PostgreSQL", "Docker"],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "Got a process that could be automated or a role where I can help? Reach out!",
      email: "E-mail",
    },
    footer: "Built by Samuel Trevisan · Template by",
  },
};

export type Content = typeof content.pt;

const LangContext = createContext<{ lang: Lang; t: Content; toggle: () => void }>({
  lang: "pt",
  t: content.pt,
  toggle: () => {},
});

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  return <LangContext.Provider value={{ lang, t: content[lang] as Content, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
