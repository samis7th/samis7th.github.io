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
    nav: [["Sobre", "about"], ["Impacto", "impact"], ["Especialidades", "expertise"], ["Experiência", "history"], ["Projetos", "projects"], ["Contato", "contact"]],
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
        "Oi, eu sou o Samuel 👋 Sou estudante de Engenharia de Software e gosto do momento em que algo que eu construí sai da minha máquina e começa a resolver um problema real para pessoas reais.",
        "Me apaixonei por automação no estágio na HM Soluções, criando fluxos no N8N que tiravam trabalho repetitivo das pessoas: conversas integradas ao WhatsApp que reduziram o tempo de resposta ao cliente e planilhas do Google que se organizavam sozinhas. Ali percebi que queria construir coisas que mudam a forma como uma equipe trabalha.",
        "Na FLS Consultoria fui muito além: saí dos fluxos para sistemas completos. Projetei, construí e mantenho a automação de leads da empresa em Node.js — uma API de captação, um assistente no WhatsApp e um painel administrativo que rodam em produção todos os dias. Também faço a gestão do tráfego pago, então vejo os dois lados: o anúncio que traz o lead e o sistema que transforma esse lead em reunião ou venda.",
        "Uso IA como par de programação, mas sem abrir mão da engenharia: testes, segurança e integrações bem feitas. Minha base em suporte de TI (hoje sou analista na Penso Tecnologia) me dá uma noção de infraestrutura que levo para tudo que construo.",
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
          text: "APIs em Node.js e Express que conectam landing pages, CRM, pagamentos, agendas e mensageria — com filas, webhooks idempotentes, rate limit e LGPD.",
          chips: ["Node.js", "Express", "JavaScript", "TypeScript", "MySQL", "REST", "GraphQL", "Webhooks", "Java", "Python"],
        },
        {
          title: "Automação & IA",
          text: "Automatizo o trabalho repetitivo de equipes, de fluxos no N8N a assistentes de WhatsApp completos. Construo com IA (Claude Code, orquestração de agentes) e valido tudo com testes.",
          chips: ["Claude Code", "Prompt Engineering", "N8N", "ManyChat", "WhatsApp", "OpenAI", "Calendly API", "Google APIs", "Brevo", "Telegram Bot"],
        },
        {
          title: "Tráfego pago & Rastreamento",
          text: "Gerencio campanhas de Meta Ads e ChatGPT Ads e ligo o anúncio à venda: conversões pelo servidor (Conversions API) e origem de cada lead e compra registrada no CRM.",
          chips: ["Meta Ads", "Conversions API", "Pixel", "ChatGPT Ads", "UTMs", "Hotmart", "Monday CRM"],
        },
        {
          title: "Infraestrutura & Suporte",
          text: "Base sólida em redes, firewall/VPN, sistemas operacionais e monitoramento — e estudos em cloud e segurança para levar sistemas do cabo à nuvem.",
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
          text: "Projetei e mantenho 3 sistemas em produção (API de leads, assistente de WhatsApp e painel), integrados a 12 serviços. Gestão de campanhas de Meta Ads e ChatGPT Ads com rastreamento de conversões ponta a ponta.",
        },
        {
          role: "Analista de Suporte de TI (N1)",
          company: "Penso Tecnologia",
          date: "set 2026 – atual",
          text: "Triagem e resolução de chamados dentro do SLA, firewall e VPN, sistemas operacionais e monitoramento da infraestrutura.",
        },
        {
          role: "Estagiário de Desenvolvimento",
          company: "HM Soluções",
          date: "out 2025 – mai 2026",
          text: "Automações em N8N para eliminar tarefas repetitivas, fluxos integrados ao WhatsApp e integração com Google Sheets via API.",
        },
        {
          role: "Técnico de Suporte de TI (Estágio)",
          company: "Prefeitura de Lins",
          date: "mar 2024 – set 2025",
          text: "Mais de 100 chamados resolvidos, manutenção de rede (cabeamento, roteadores, switches) e configuração de Windows e Linux.",
        },
      ],
    },
    projects: {
      title: "Projetos em produção",
      subtitle: "Usados todos os dias por uma empresa real. O código foi anonimizado para publicação.",
      codeLabel: "Ver código",
      moreLabel: "Mais projetos no GitHub →",
      items: [
        {
          name: "Lead Capture API",
          repo: "lead-capture-api",
          text: "Recebe os formulários das landing pages, grava no CRM (Monday.com), envia conversões para a Meta (Conversions API) e processa vendas da Hotmart via webhook. Responde na hora e nunca perde um lead, mesmo com o CRM fora do ar.",
          tags: ["Node.js", "Express", "MySQL", "Meta CAPI", "Hotmart", "61 testes"],
        },
        {
          name: "WhatsApp Assistant",
          repo: "whatsapp-assistant",
          text: "Assistente de pré-atendimento no WhatsApp: qualifica leads por faturamento, agenda reuniões (Calendly + Google Agenda), manda lembretes por WhatsApp e e-mail e roda um sorteio semanal de mentorias.",
          tags: ["Node.js", "ManyChat", "Calendly", "Google Calendar", "Brevo", "306 testes"],
        },
        {
          name: "Admin Dashboard",
          repo: "admin-dashboard",
          text: "Painel da equipe com leads em tempo real, gráficos, reuniões, gestão do sorteio e a saúde de cada integração. Login seguro (scrypt, sessão HMAC, CSP) e modo demonstração.",
          tags: ["Node.js", "JavaScript puro", "SVG charts", "Segurança", "41 testes"],
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
    nav: [["About", "about"], ["Impact", "impact"], ["Expertise", "expertise"], ["Experience", "history"], ["Projects", "projects"], ["Contact", "contact"]],
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
        "Hey, I'm Samuel 👋 I'm a Software Engineering student, and I like the moment when something I built leaves my machine and starts solving a real problem for real people.",
        "I got hooked on automation during my internship at HM Solucoes, building N8N flows that took repetitive work off people's plates: WhatsApp-integrated conversations that cut client response time, and Google Sheets pipelines that kept data organized on their own. That's when I realized I wanted to build things that change how a team works.",
        "At FLS Consultoria I took it much further, going from flows to full systems. I designed, built and maintain the company's lead automation stack in Node.js — a lead capture API, a WhatsApp assistant and an admin dashboard running in production every day. I also manage the company's paid traffic, so I see both sides: the ad that brings the lead and the system that turns it into a meeting or a sale.",
        "I build with AI as a pair programmer, but I keep the engineering solid: tests, security and clean integrations. My IT support background (today I'm an analyst at Penso Tecnologia) gives me a feel for infrastructure that I carry into everything I build.",
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
          text: "Node.js and Express APIs connecting landing pages, CRM, payments, calendars and messaging — with queues, idempotent webhooks, rate limiting and LGPD compliance.",
          chips: ["Node.js", "Express", "JavaScript", "TypeScript", "MySQL", "REST", "GraphQL", "Webhooks", "Java", "Python"],
        },
        {
          title: "Automation & AI",
          text: "I automate repetitive team work, from N8N flows to full WhatsApp assistants. I build with AI (Claude Code, agent orchestration) and validate everything with tests.",
          chips: ["Claude Code", "Prompt Engineering", "N8N", "ManyChat", "WhatsApp", "OpenAI", "Calendly API", "Google APIs", "Brevo", "Telegram Bot"],
        },
        {
          title: "Paid Traffic & Tracking",
          text: "I manage Meta Ads and ChatGPT Ads campaigns and connect ads to sales: server-side conversions (Conversions API) and the origin of every lead and purchase recorded in the CRM.",
          chips: ["Meta Ads", "Conversions API", "Pixel", "ChatGPT Ads", "UTMs", "Hotmart", "Monday CRM"],
        },
        {
          title: "Infrastructure & Support",
          text: "Solid foundation in networking, firewall/VPN, operating systems and monitoring — plus cloud and security studies to take systems from the cable to the cloud.",
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
          text: "Designed and maintain 3 production systems (lead API, WhatsApp assistant and dashboard) integrated with 12 services. Manage Meta Ads and ChatGPT Ads campaigns with end-to-end conversion tracking.",
        },
        {
          role: "IT Support Analyst (N1)",
          company: "Penso Tecnologia",
          date: "Sep 2026 – present",
          text: "Ticket triage and resolution within SLA, firewall and VPN, operating systems and infrastructure monitoring.",
        },
        {
          role: "Development Intern",
          company: "HM Solucoes",
          date: "Oct 2025 – May 2026",
          text: "N8N automations to eliminate repetitive tasks, WhatsApp-integrated flows and Google Sheets integration via API.",
        },
        {
          role: "IT Support Technician (Intern)",
          company: "Prefeitura de Lins",
          date: "Mar 2024 – Sep 2025",
          text: "100+ tickets resolved, network maintenance (cabling, routers, switches) and Windows and Linux setup.",
        },
      ],
    },
    projects: {
      title: "Production projects",
      subtitle: "Used every day by a real company. The code was anonymized for publication.",
      codeLabel: "View code",
      moreLabel: "More projects on GitHub →",
      items: [
        {
          name: "Lead Capture API",
          repo: "lead-capture-api",
          text: "Receives landing page forms, saves leads to the CRM (Monday.com), sends conversions to Meta (Conversions API) and processes Hotmart sales via webhook. Answers instantly and never loses a lead, even when the CRM is down.",
          tags: ["Node.js", "Express", "MySQL", "Meta CAPI", "Hotmart", "61 tests"],
        },
        {
          name: "WhatsApp Assistant",
          repo: "whatsapp-assistant",
          text: "WhatsApp pre-sales assistant: qualifies leads by revenue, books meetings (Calendly + Google Calendar), sends WhatsApp and e-mail reminders and runs a weekly mentoring raffle.",
          tags: ["Node.js", "ManyChat", "Calendly", "Google Calendar", "Brevo", "306 tests"],
        },
        {
          name: "Admin Dashboard",
          repo: "admin-dashboard",
          text: "Team dashboard with real-time leads, charts, meetings, raffle management and the health of every integration. Secure login (scrypt, HMAC sessions, CSP) and demo mode.",
          tags: ["Node.js", "Vanilla JS", "SVG charts", "Security", "41 tests"],
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
