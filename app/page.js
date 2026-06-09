"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { projectData } from './projectData';

/* ─── Scroll Reveal Hook ─────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Typewriter ─────────────────────────────────────────── */
function Typewriter({ texts, speed = 90 }) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = texts[idx];
    const delay = deleting ? 45 : speed;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = target.slice(0, display.length + 1);
        setDisplay(next);
        if (next === target) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = target.slice(0, display.length - 1);
        setDisplay(next);
        if (next === '') {
          setDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [display, deleting, idx, texts, speed]);

  return <span className="gradient-text-cyan cursor">{display}</span>;
}

/* ─── Animated Counter ───────────────────────────────────── */
function Counter({ end, suffix = '', duration = 2200 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Skill Bar ──────────────────────────────────────────── */
function SkillBar({ level }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && ref.current) ref.current.classList.add('animate'); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="skill-bar-track" style={{ marginTop: 6 }}>
      <div ref={ref} className="skill-bar-fill" style={{ width: `${level}%` }} />
    </div>
  );
}

/* ─── Section Wrapper ────────────────────────────────────── */
function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

/* ─── Section Header ─────────────────────────────────────── */
function SectionHeader({ chip, title, subtitle, center = false }) {
  const align = center ? 'text-center items-center' : '';
  return (
    <div className={`flex flex-col gap-4 mb-16 ${align}`}>
      <span className="chip reveal">{chip}</span>
      <h2
        className="font-display reveal delay-100"
        style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text-1)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="reveal delay-200" style={{ color: 'var(--text-2)', maxWidth: 560, fontSize: 16, lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   01 · HERO
═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ paddingTop: 80 }}
    >
      {/* Gradient orbs */}
      <div className="orb orb-1" style={{ top: '10%', right: '5%' }} />
      <div className="orb orb-2" style={{ bottom: '15%', left: '3%' }} />

      {/* Decorative code brackets */}
      <div
        className="font-display absolute select-none pointer-events-none"
        style={{
          fontSize: 'clamp(120px, 22vw, 280px)',
          color: 'rgba(6, 182, 212, 0.04)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          lineHeight: 1,
          userSelect: 'none',
          fontWeight: 800,
          whiteSpace: 'nowrap',
        }}
      >
        {'{ }'}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Availability badge */}
        <div
          className="badge-available"
          style={{ animation: 'slide-up 0.6s ease 0.1s both' }}
        >
          <span className="badge-dot" />
          Available for Freelance · Open to Roles
        </div>

        {/* Profile photo */}
        <div style={{ animation: 'slide-up 0.6s ease 0.2s both' }}>
          <div className="profile-ring" style={{ width: 108, height: 108 }}>
            <div className="profile-ring-inner">
              <img
                src="/nischay.jpeg"
                alt="Nischay Jain"
                style={{ width: 94, height: 94, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div style={{ animation: 'slide-up 0.6s ease 0.3s both' }}>
          <h1
            className="font-display gradient-text"
            style={{ fontSize: 'clamp(42px, 9vw, 88px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px' }}
          >
            Nischay Jain
          </h1>
        </div>

        {/* Typewriter role */}
        <div
          className="font-mono"
          style={{ fontSize: 'clamp(15px, 3vw, 22px)', animation: 'slide-up 0.6s ease 0.4s both', minHeight: 36 }}
        >
          <Typewriter
            texts={[
              'Backend Engineer',
              'Cloud Architect',
              'Node.js Specialist',
              'Serverless Developer',
              'API Craftsman',
            ]}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            color: 'var(--text-2)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.7,
            maxWidth: 560,
            animation: 'slide-up 0.6s ease 0.5s both',
          }}
        >
          Building scalable cloud-native applications that power enterprise systems
          at Accenture — currently serving thousands of users.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 justify-center"
          style={{ animation: 'slide-up 0.6s ease 0.6s both' }}
        >
          <a href="#projects" className="btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
            View Projects
          </a>
          <a href="/Nischay_Jain_Resume.pdf" target="_blank" className="btn-ghost">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" /></svg>
            Download CV
          </a>
          <a href="#contact" className="btn-ghost">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Contact Me
          </a>
        </div>

        {/* Social icons */}
        <div
          className="flex items-center gap-5"
          style={{ animation: 'slide-up 0.6s ease 0.7s both' }}
        >
          {[
            {
              href: 'https://linkedin.com/in/nischay-jain-799998213',
              icon: 'devicon-linkedin-plain',
              label: 'LinkedIn',
            },
            {
              href: 'https://github.com/nischayjain4948',
              icon: 'devicon-github-plain',
              label: 'GitHub',
            },
            {
              href: 'mailto:nischayjain4948@gmail.com',
              label: 'Email',
              svg: (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
            },
            {
              href: 'https://x.com/Nischay_jn',
              icon: 'devicon-twitter-plain',
              label: 'Twitter',
            },
          ].map(({ href, icon, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              style={{
                color: 'var(--text-2)',
                fontSize: 22,
                transition: 'color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {svg || <i className={icon} />}
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          style={{ animation: 'float 3s ease-in-out infinite, fade-in 1s ease 1.2s both', color: 'var(--text-3)', marginTop: 16 }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   02 · TRUST BAR
═══════════════════════════════════════════════════════════ */
function TrustBar() {
  const items = [
    { value: '4+', label: 'Years Experience' },
    { value: 'Accenture', label: 'Current Employer' },
    { value: 'AWS · Azure', label: 'Cloud Platforms' },
    { value: 'Node.js', label: 'Core Expertise' },
    { value: '3', label: 'Companies Served' },
  ];

  return (
    <div
      className="glass"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6"
      >
        {items.map(({ value, label }) => (
          <div key={label} className="text-center px-4">
            <div
              className="font-display"
              style={{ fontSize: 18, fontWeight: 700, color: 'var(--cyan)', letterSpacing: '-0.5px' }}
            >
              {value}
            </div>
            <div
              className="font-mono"
              style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   03 · ABOUT
═══════════════════════════════════════════════════════════ */
function AboutSection() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Story */}
        <div className="flex flex-col gap-6">
          <span className="chip reveal">{'// 01 — About'}</span>
          <h2
            className="font-display reveal delay-100"
            style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.1 }}
          >
            Engineering systems that{' '}
            <span className="gradient-text">scale with ambition.</span>
          </h2>
          <div className="flex flex-col gap-4" style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.8 }}>
            <p className="reveal delay-200">
              I&apos;m Nischay Jain — a <strong style={{ color: 'var(--text-1)' }}>Senior Backend & Cloud Engineer</strong>{' '}
              based in Jaipur, India. Currently at Accenture, I architect enterprise-grade serverless
              systems on Azure for mission-critical healthcare infrastructure used by the UK government.
            </p>
            <p className="reveal delay-300">
              My journey began building voice broadcasting engines and CRM integrations. Today I design
              distributed microservices, event-driven architectures, and cloud-native pipelines that
              process millions of events reliably — with zero-downtime deployments as a baseline expectation.
            </p>
            <p className="reveal delay-400">
              I believe great backend engineering is invisible: the system just works, scales silently,
              and recovers gracefully. That philosophy drives every API, every function, every schema I write.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 reveal delay-500">
            {['Jaipur, India', 'Open to Remote', 'Full-Time · Freelance'].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: Terminal card */}
        <div className="reveal-right delay-200">
          <div
            className="glass-card"
            style={{ padding: '0', borderRadius: 16, overflow: 'hidden', fontFamily: "'JetBrains Mono', monospace" }}
          >
            {/* Terminal header */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid var(--border)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
              <span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 8 }}>nischay.profile.json</span>
            </div>
            {/* Terminal body */}
            <div style={{ padding: '20px 24px', fontSize: 13, lineHeight: 2 }}>
              {[
                ['name', '"Nischay Jain"'],
                ['role', '"Senior Backend Engineer"'],
                ['company', '"Accenture"'],
                ['location', '"Jaipur, India"'],
                ['experience', '"4+ Years"'],
                ['speciality', '"Cloud Native & Distributed Systems"'],
                ['status', '"Available for Opportunities"'],
              ].map(([key, value], i) => (
                <div key={key} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--cyan)' }}>&quot;{key}&quot;</span>
                  <span style={{ color: 'var(--text-3)' }}>:</span>
                  <span style={{ color: '#a5f3a8' }}>{value}</span>
                  {i < 6 && <span style={{ color: 'var(--text-3)' }}>,</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   04 · EXPERIENCE
═══════════════════════════════════════════════════════════ */
const experiences = [
  {
    company: 'Accenture',
    role: 'Custom Software Senior Analyst',
    period: '2024 – Present',
    location: 'Jaipur, India',
    project: 'Canadian Tier – Multi-Banner E-Commerce Platform',
    color: '#f59e0b',
    badge: 'Currently Active',
    description:
      'Own the Core Digital Services (CDS) orchestration layer for a large-scale Canadian retail platform serving multiple banners (East & West). The CDS layer sits between frontend apps and backend/third-party services, handling data transformation, routing, and service aggregation.',
    achievements: [
      'Own the CDS orchestration layer bridging frontend and backend across East & West retail banners',
      'Integrated Hybris (commerce engine) and Gigya (identity/auth) with AKS-hosted microservices',
      'Work with AKS, Service Bus, APIM, Azure Functions, Blob Storage, and Cosmos DB daily',
      'Lead production incident management — log analysis, cross-service tracing, and hotfix deployment',
    ],
    tags: ['Node.js', 'TypeScript', 'AKS', 'Azure Service Bus', 'APIM', 'Cosmos DB', 'Hybris', 'Gigya', 'CI/CD'],
  },
  {
    company: 'Accenture',
    role: 'Custom Software Senior Analyst',
    period: '2023 – Present',
    location: 'Jaipur, India',
    project: 'MHRA — UK Government Healthcare Platform',
    color: '#a259ff',
    description:
      'Architected serverless microservices on Azure for the Medicines and Healthcare products Regulatory Agency (MHRA). Built event-driven pipelines with Azure Service Bus processing critical healthcare data at enterprise scale.',
    achievements: [
      'Designed Azure Function Apps handling 100K+ daily healthcare transactions',
      'Implemented Service Bus message routing with dead-letter handling',
      'Built Blob Storage pipeline for regulatory document processing',
      'Achieved 99.9% SLA on all mission-critical microservices',
    ],
    tags: ['Azure Functions', 'Service Bus', 'Blob Storage', 'Azure SQL', 'Microservices', 'JavaScript', 'Serverless'],
  },
  {
    company: 'Dotsquares',
    role: 'Associate Programmer',
    period: '2022 – 2023',
    location: 'Jaipur, India',
    project: 'PintoGraph CRM Platform',
    color: '#06b6d4',
    description:
      'Built a multi-CRM integration platform connecting HubSpot, Zoho, and Vantage CRM. Developed real-time webhook processing, automated lead scoring, and a MERN stack dashboard for sales pipeline visibility.',
    achievements: [
      'Integrated 3 enterprise CRM systems with bi-directional data sync',
      'Engineered webhook event processing handling 50K+ daily events',
      'Reduced lead response time by 40% via automated routing rules',
      'Delivered full-stack Next.js dashboard for real-time pipeline analytics',
    ],
    tags: ['Node.js', 'Express', 'Next.js', 'MongoDB', 'HubSpot API', 'Zoho API', 'REST'],
  },
  {
    company: 'Sarv.com',
    role: 'Junior Software Engineer',
    period: '2020 – 2022',
    location: 'Jaipur, India',
    project: 'Voice Broadcasting & Webinar Systems',
    color: '#f59e0b',
    description:
      'Built the core voice broadcasting engine managing thousands of concurrent outbound calls. Implemented real-time analytics with Elasticsearch and a webinar registration system with MongoDB persistence.',
    achievements: [
      'Engineered voice engine handling 10K+ concurrent calls',
      'Built Elasticsearch analytics with sub-200ms query response',
      'Designed Redis caching layer reducing DB load by 60%',
      'Delivered webinar registration system supporting 5K+ attendees',
    ],
    tags: ['Node.js', 'MongoDB', 'Elasticsearch', 'Redis', 'REST API', 'WebSockets'],
  },
];

function ExperienceSection() {
  return (
    <Section id="experience" className="bg-dots" style={{ background: 'rgba(10, 15, 26, 0.4)' }}>
      <SectionHeader
        chip="// 02 — Experience"
        title="Career Journey"
        subtitle="From building voice engines to architecting enterprise cloud systems — four years of shipping systems that matter."
      />
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        <div className="timeline-track" />
        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`reveal delay-${(i + 1) * 100}`} style={{ position: 'relative' }}>
              <div className="timeline-dot" />
              <div className="glass-card" style={{ padding: '28px 32px', marginLeft: 16 }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span
                        className="font-display"
                        style={{ fontSize: 20, fontWeight: 700, color: exp.color }}
                      >
                        {exp.company}
                      </span>
                      <span
                        className="font-mono"
                        style={{ fontSize: 10, color: exp.color, background: `${exp.color}18`, border: `1px solid ${exp.color}35`, padding: '2px 10px', borderRadius: 100 }}
                      >
                        {exp.period}
                      </span>
                      {exp.badge && (
                        <span
                          className="font-mono"
                          style={{ fontSize: 10, color: 'var(--green)', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', padding: '2px 10px', borderRadius: 100 }}
                        >
                          ● {exp.badge}
                        </span>
                      )}
                    </div>
                    <div style={{ color: 'var(--text-1)', fontWeight: 600, fontSize: 15 }}>{exp.role}</div>
                    <div style={{ color: 'var(--text-3)', fontSize: 13, marginTop: 2 }}>{exp.project}</div>
                  </div>
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, color: 'var(--text-3)' }}
                  >
                    📍 {exp.location}
                  </span>
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {exp.achievements.map((a) => (
                    <li key={a} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--text-2)' }}>
                      <span style={{ color: 'var(--cyan)', marginTop: 2, flexShrink: 0 }}>▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   05 · SKILLS
═══════════════════════════════════════════════════════════ */
const skillCategories = [
  {
    title: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 92 },
      { name: 'Express.js', icon: 'devicon-express-original', level: 90 },
      { name: 'REST APIs', icon: null, level: 94 },
      { name: 'Microservices', icon: null, level: 85 },
    ],
  },
  {
    title: 'Cloud',
    color: '#3b82f6',
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored', level: 80 },
      { name: 'Azure', icon: 'devicon-azure-plain colored', level: 88 },
      { name: 'Serverless', icon: null, level: 86 },
      { name: 'Docker', icon: 'devicon-docker-plain colored', level: 78 },
    ],
  },
  {
    title: 'Databases',
    color: '#8b5cf6',
    skills: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 88 },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', level: 82 },
      { name: 'Redis', icon: 'devicon-redis-plain colored', level: 80 },
      { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain colored', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    color: '#f59e0b',
    skills: [
      { name: 'Next.js', icon: 'devicon-nextjs-original', level: 82 },
      { name: 'React', icon: 'devicon-react-plain colored', level: 80 },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 85 },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    color: '#10b981',
    skills: [
      { name: 'GitHub Actions', icon: 'devicon-github-plain', level: 82 },
      { name: 'Git', icon: 'devicon-git-plain colored', level: 92 },
      { name: 'CI/CD', icon: null, level: 80 },
      { name: 'Azure DevOps', icon: 'devicon-azure-plain colored', level: 78 },
    ],
  },
  {
    title: 'Architecture',
    color: '#f43f5e',
    skills: [
      { name: 'Event-Driven', icon: null, level: 85 },
      { name: 'Distributed Sys.', icon: null, level: 82 },
      { name: 'Cloud Native', icon: null, level: 88 },
      { name: 'System Design', icon: null, level: 80 },
    ],
  },
];

function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader
        chip="// 03 — Skills"
        title="Technical Expertise"
        subtitle="A decade's worth of tools, refined over four years of production systems."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, ci) => (
          <div key={cat.title} className={`glass-card reveal delay-${(ci % 3 + 1) * 100}`} style={{ padding: '24px' }}>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 6, height: 28, borderRadius: 3, background: cat.color }} />
              <span className="font-display" style={{ fontSize: 16, fontWeight: 700, color: cat.color }}>
                {cat.title}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {cat.skills.map((sk) => (
                <div key={sk.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-1)' }}>
                      {sk.icon && <i className={sk.icon} style={{ fontSize: 16 }} />}
                      {!sk.icon && (
                        <span style={{ width: 16, height: 16, borderRadius: 4, background: `${cat.color}30`, border: `1px solid ${cat.color}40`, display: 'inline-block' }} />
                      )}
                      {sk.name}
                    </div>
                    <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{sk.level}%</span>
                  </div>
                  <SkillBar level={sk.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   06 · FEATURED PROJECTS
═══════════════════════════════════════════════════════════ */
function ProjectsSection() {
  return (
    <Section id="projects" style={{ background: 'rgba(10, 15, 26, 0.5)' }}>
      <SectionHeader
        chip="// 04 — Projects"
        title="Featured Work"
        subtitle="Selected projects that demonstrate backend architecture, scalability, and real-world impact."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((p, i) => (
          <div key={p.title} className={`project-card reveal delay-${(i + 1) * 100}`}>
            <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
              <img
                src={p.image}
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="project-card-overlay" />
              <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(6,182,212,0.15)',
                        border: '1px solid rgba(6,182,212,0.3)',
                        color: 'var(--cyan)',
                        fontSize: 10,
                        padding: '2px 8px',
                        borderRadius: 4,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: '20px 22px' }}>
              <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>
                {p.description}
              </p>
              {p.achievement && (
                <div
                  className="font-mono"
                  style={{ fontSize: 11, color: 'var(--cyan)', background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)', padding: '4px 10px', borderRadius: 6, marginBottom: 14, display: 'inline-block' }}
                >
                  ✦ {p.achievement}
                </div>
              )}
              <div className="flex gap-3">
                {p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: 12 }}>
                    Live Demo ↗
                  </a>
                )}
                {p.github !== '#' && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '8px 16px', fontSize: 12 }}>
                    <i className="devicon-github-plain" style={{ fontSize: 14 }} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   07 · ENTERPRISE PROJECTS
═══════════════════════════════════════════════════════════ */
function EnterpriseSection() {
  const mhraArchNodes = [
    { label: 'Client\nRequest', color: '#94a3b8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.25)' },
    { label: 'Azure API\nManagement', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.25)' },
    { label: 'Azure\nFunctions', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)' },
    { label: 'Service\nBus', color: '#a259ff', bg: 'rgba(162,89,255,0.1)', border: 'rgba(162,89,255,0.25)' },
  ];
  const mhraStorageNodes = [
    { label: 'Blob\nStorage', icon: '☁', color: '#3b82f6' },
    { label: 'Azure\nSQL', icon: '🗄', color: '#10b981' },
  ];

  const canadianArchNodes = [
    { label: 'Frontend\nApps', color: '#94a3b8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.25)' },
    { label: 'Azure\nAPIm', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.25)' },
    { label: 'CDS\nLayer', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)' },
    { label: 'AKS\nPods', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
  ];
  const canadianStorageNodes = [
    { label: 'Cosmos\nDB', icon: '🌐', color: '#a259ff' },
    { label: 'Blob\nStorage', icon: '☁', color: '#3b82f6' },
  ];

  return (
    <Section id="enterprise">
      <SectionHeader
        chip="// 05 — Enterprise"
        title={<>Enterprise Work at <span className="gradient-text">Accenture</span></>}
        subtitle="Two active large-scale engagements — a UK government healthcare platform and a Canadian multi-banner e-commerce platform."
      />

      {/* ── Project 1: MHRA ── */}
      <div className="glass-card reveal" style={{ padding: '32px', marginBottom: 24 }}>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#a259ff' }}>MHRA</span>
          <span className="font-mono" style={{ fontSize: 10, color: '#a259ff', background: 'rgba(162,89,255,0.12)', border: '1px solid rgba(162,89,255,0.3)', padding: '2px 10px', borderRadius: 100 }}>UK Gov Healthcare</span>
          <span className="font-mono" style={{ fontSize: 10, color: 'var(--text-3)', marginLeft: 'auto' }}>Accenture · 2023–Present</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            {[
              { title: 'Serverless Architecture', desc: 'Azure Function Apps triggered by HTTP, Service Bus messages, and timer schedules — infinitely scalable with zero infrastructure management.', icon: '⚡', color: '#06b6d4' },
              { title: 'Event-Driven Pipelines', desc: 'Azure Service Bus orchestrating reliable, ordered message delivery between microservices with dead-letter handling and automatic retry policies.', icon: '🔄', color: '#a259ff' },
              { title: 'Enterprise Data Layer', desc: 'Azure SQL + Blob Storage for structured regulatory data and document archival — ACID compliant, geo-redundant, meeting strict UK healthcare compliance.', icon: '🗄', color: '#3b82f6' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: 14, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--cyan)', marginBottom: 16, letterSpacing: '0.1em' }}>$ architecture — mhra-platform</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'nowrap', overflowX: 'auto' }}>
              {mhraArchNodes.map((node, i) => (
                <div key={node.label} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="arch-node" style={{ background: node.bg, border: `1px solid ${node.border}`, color: node.color, minWidth: 72, fontSize: 10, whiteSpace: 'pre-line', fontFamily: "'JetBrains Mono', monospace" }}>{node.label}</div>
                  {i < mhraArchNodes.length - 1 && <div style={{ color: 'var(--cyan)', padding: '0 3px', fontSize: 14 }}>→</div>}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 16, paddingRight: 20 }}><div style={{ color: 'var(--text-3)', fontSize: 16 }}>↙↘</div></div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
              {mhraStorageNodes.map((node) => (
                <div key={node.label} className="arch-node" style={{ background: `${node.color}18`, border: `1px solid ${node.color}35`, color: node.color, minWidth: 80, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, whiteSpace: 'pre-line', gap: 4 }}>
                  <span style={{ fontSize: 18 }}>{node.icon}</span>{node.label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              {['99.9% SLA', 'Geo-Redundant', 'HIPAA Compliant', 'Auto-Scale', 'Zero-Downtime'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Project 2: Canadian Tier ── */}
      <div className="glass-card reveal delay-200" style={{ padding: '32px' }}>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#f59e0b' }}>Canadian Tier</span>
          <span className="font-mono" style={{ fontSize: 10, color: '#f59e0b', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', padding: '2px 10px', borderRadius: 100 }}>Multi-Banner E-Commerce</span>
          <span className="font-mono" style={{ fontSize: 10, color: 'var(--green)', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', padding: '2px 10px', borderRadius: 100 }}>● Currently Active</span>
          <span className="font-mono" style={{ fontSize: 10, color: 'var(--text-3)', marginLeft: 'auto' }}>Accenture · 2024–Present</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            {[
              { title: 'CDS Orchestration Layer', desc: 'Own the Core Digital Services layer bridging frontend apps and backend/third-party services — handling data transformation, routing, and service aggregation across East & West banners.', icon: '🔗', color: '#f59e0b' },
              { title: 'Azure Cloud-Native Stack', desc: 'Full suite: AKS, Service Bus, APIM, Azure Functions, Blob Storage, and Cosmos DB powering a highly available, scalable commerce platform.', icon: '☁', color: '#06b6d4' },
              { title: 'Third-Party Integrations', desc: 'Hybris (commerce engine) and Gigya (identity/auth) integrated and maintained for reliable data exchange. Production incident management with cross-microservice tracing and hotfix deployment.', icon: '🔌', color: '#a259ff' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: 14, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: 11, color: '#f59e0b', marginBottom: 16, letterSpacing: '0.1em' }}>$ architecture — canadian-tier</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'nowrap', overflowX: 'auto' }}>
              {canadianArchNodes.map((node, i) => (
                <div key={node.label} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="arch-node" style={{ background: node.bg, border: `1px solid ${node.border}`, color: node.color, minWidth: 72, fontSize: 10, whiteSpace: 'pre-line', fontFamily: "'JetBrains Mono', monospace" }}>{node.label}</div>
                  {i < canadianArchNodes.length - 1 && <div style={{ color: '#f59e0b', padding: '0 3px', fontSize: 14 }}>→</div>}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 16, paddingRight: 20 }}><div style={{ color: 'var(--text-3)', fontSize: 16 }}>↙↘</div></div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
              {canadianStorageNodes.map((node) => (
                <div key={node.label} className="arch-node" style={{ background: `${node.color}18`, border: `1px solid ${node.color}35`, color: node.color, minWidth: 80, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, whiteSpace: 'pre-line', gap: 4 }}>
                  <span style={{ fontSize: 18 }}>{node.icon}</span>{node.label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              {['Multi-Banner', 'AKS', 'Hybris', 'Gigya', 'CI/CD', 'TypeScript'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   08 · SERVICES
═══════════════════════════════════════════════════════════ */
const services = [
  {
    icon: '⚙',
    title: 'Backend Development',
    desc: 'Scalable Node.js APIs and microservices built for high-throughput production environments. Clean architecture, tested, documented.',
    color: '#06b6d4',
  },
  {
    icon: '🔗',
    title: 'API Design & Integration',
    desc: 'RESTful and event-driven APIs with robust auth, rate limiting, versioning, and third-party CRM/payment integrations.',
    color: '#3b82f6',
  },
  {
    icon: '☁',
    title: 'Cloud Migration',
    desc: 'Lift-and-shift to AWS/Azure with IaC, cost optimization, and zero-downtime migration strategies for complex workloads.',
    color: '#8b5cf6',
  },
  {
    icon: '⚡',
    title: 'Serverless Architecture',
    desc: 'Event-triggered, auto-scaling serverless systems using Azure Functions / AWS Lambda with DLQ, retry, and observability.',
    color: '#f59e0b',
  },
  {
    icon: '🗄',
    title: 'Database Architecture',
    desc: 'Schema design, indexing strategy, and query optimization for MongoDB, PostgreSQL, MSSQL, Redis, and Elasticsearch.',
    color: '#10b981',
  },
  {
    icon: '🏗',
    title: 'System Design Consulting',
    desc: 'High-level architecture reviews, scalability audits, and distributed systems design for startups and scaleups.',
    color: '#f43f5e',
  },
];

function ServicesSection() {
  return (
    <Section id="services" style={{ background: 'rgba(10, 15, 26, 0.5)' }}>
      <SectionHeader
        chip="// 06 — Services"
        title="What I Build"
        subtitle="Engineering services for startups, agencies, and enterprises who need backend systems that just work."
        center
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <div key={svc.title} className={`service-card reveal delay-${(i % 3 + 1) * 100}`} style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${svc.color}18`,
                border: `1px solid ${svc.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                marginBottom: 16,
              }}
            >
              {svc.icon}
            </div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>
              {svc.title}
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.7 }}>{svc.desc}</p>
            <div style={{ marginTop: 16, color: svc.color, fontSize: 13, fontWeight: 600 }}>
              Learn more →
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   09 · ACHIEVEMENTS
═══════════════════════════════════════════════════════════ */
function AchievementsSection() {
  const metrics = [
    { end: 4, suffix: '+', label: 'Years of Experience', sub: 'Production systems in financial, healthcare & SaaS' },
    { end: 3, suffix: '', label: 'Enterprise Clients', sub: 'Accenture · Dotsquares · Sarv.com' },
    { end: 20, suffix: '+', label: 'Technologies Mastered', sub: 'From DB engines to cloud-native tooling' },
    { end: 99, suffix: '.9%', label: 'SLA Target', sub: 'On mission-critical microservices at MHRA' },
  ];

  return (
    <Section id="achievements">
      <SectionHeader chip="// 07 — Achievements" title="By the Numbers" center />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, i) => (
          <div key={m.label} className={`metric-card reveal delay-${(i + 1) * 100}`}>
            <div className="metric-number">
              <Counter end={m.end} suffix={m.suffix} />
            </div>
            <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)', marginTop: 8 }}>
              {m.label}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4, lineHeight: 1.5 }}>{m.sub}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   10 · CERTIFICATIONS
═══════════════════════════════════════════════════════════ */
function CertificationsSection() {
  const certs = [
    {
      title: 'Artificial Intelligence',
      issuer: 'Certified Program',
      icon: '🤖',
      color: '#8b5cf6',
      desc: 'Foundations of AI, ML models, and practical applications in production systems.',
    },
    {
      title: 'Full Stack Development',
      issuer: 'Certified Program',
      icon: '🧩',
      color: '#06b6d4',
      desc: 'End-to-end development with modern JS frameworks, REST APIs, and cloud deployment.',
    },
    {
      title: 'Python in Data Science',
      issuer: 'Certified Program',
      icon: '📊',
      color: '#3b82f6',
      desc: 'Data analysis, visualization, and statistical modeling with Pandas, NumPy, and Matplotlib.',
    },
  ];

  return (
    <Section id="certifications" style={{ background: 'rgba(10, 15, 26, 0.5)' }}>
      <SectionHeader
        chip="// 08 — Certifications"
        title="Learning Never Stops"
        center
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {certs.map((cert, i) => (
          <div key={cert.title} className={`cert-card reveal delay-${(i + 1) * 100}`}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: `${cert.color}18`,
                border: `1px solid ${cert.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                marginBottom: 16,
              }}
            >
              {cert.icon}
            </div>
            <h3 className="font-display" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-1)', marginBottom: 4 }}>
              {cert.title}
            </h3>
            <div className="font-mono" style={{ fontSize: 11, color: cert.color, marginBottom: 10 }}>{cert.issuer}</div>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>{cert.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   11 · CONTACT
═══════════════════════════════════════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:nischayjain4948@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact">
      <SectionHeader
        chip="// 09 — Contact"
        title={<>Let&apos;s build something <span className="gradient-text">remarkable.</span></>}
        subtitle="Whether you're scaling a startup, migrating to the cloud, or building the next enterprise platform — let's talk."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact info */}
        <div className="flex flex-col gap-6 reveal-left">
          {[
            {
              icon: '✉',
              label: 'Email',
              value: 'nischayjain4948@gmail.com',
              href: 'mailto:nischayjain4948@gmail.com',
              color: '#06b6d4',
            },
            {
              icon: '💼',
              label: 'LinkedIn',
              value: 'linkedin.com/in/nischay-jain-799998213',
              href: 'https://linkedin.com/in/nischay-jain-799998213',
              color: '#3b82f6',
            },
            {
              icon: '📍',
              label: 'Location',
              value: 'Jaipur, Rajasthan, India',
              href: null,
              color: '#8b5cf6',
            },
            {
              icon: '📞',
              label: 'Phone',
              value: '+91 9983513299',
              href: 'tel:+919983513299',
              color: '#10b981',
            },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}25`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    style={{ color: item.color, fontSize: 14, textDecoration: 'none', fontWeight: 500, transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-1)', fontSize: 14, fontWeight: 500 }}>{item.value}</span>
                )}
              </div>
            </div>
          ))}

          <div className="glass-card" style={{ padding: '20px', marginTop: 8 }}>
            <div className="flex items-center gap-3">
              <div className="badge-dot" />
              <span style={{ color: 'var(--green)', fontSize: 14, fontWeight: 600 }}>Available for opportunities</span>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, marginTop: 8 }}>
              Open to senior backend engineering roles, cloud architecture consulting, and freelance projects globally.
              Response time: within 24 hours.
            </p>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="glass-card reveal-right" style={{ padding: '32px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <div className="font-display" style={{ fontSize: 20, fontWeight: 700, color: 'var(--green)', marginBottom: 8 }}>Message Sent!</div>
              <div style={{ color: 'var(--text-2)', fontSize: 14 }}>Opening your email client. I&apos;ll get back to you within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  Your Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  Email Address
                </label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Tell me about your project, timeline, and what you need..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════ */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EnterpriseSection />
      <ServicesSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
