"use client";
import Link from 'next/link';

const year = new Date().getFullYear();

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/nischayjain4948', icon: 'devicon-github-plain' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nischay-jain-799998213', icon: 'devicon-linkedin-plain' },
  { label: 'Twitter', href: 'https://x.com/Nischay_jn', icon: 'devicon-twitter-plain' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(6, 10, 16, 0.95)',
        borderTop: '1px solid var(--border)',
        paddingTop: 48,
        paddingBottom: 32,
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 32,
            paddingBottom: 40,
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 15,
                  color: '#fff',
                  letterSpacing: '-1px',
                }}
              >
                NJ
              </div>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: 'var(--text-1)',
                }}
              >
                Nischay Jain
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>
              Senior Backend & Cloud Engineer at Accenture.
              Building scalable, cloud-native systems that power enterprise applications.
            </p>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-2)',
                    fontSize: 18,
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--cyan)';
                    e.currentTarget.style.borderColor = 'var(--cyan-border)';
                    e.currentTarget.style.background = 'var(--cyan-dim)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-2)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-3)',
                marginBottom: 16,
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerLinks.map(({ label, href }) => (
                <a key={label} href={href} className="footer-link">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-3)',
                marginBottom: 16,
              }}
            >
              Get In Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:nischayjain4948@gmail.com" className="footer-link">nischayjain4948@gmail.com</a>
              <a href="tel:+919983513299" className="footer-link">+91 9983513299</a>
              <span style={{ color: 'var(--text-2)', fontSize: 14 }}>Jaipur, Rajasthan, India</span>
            </div>
            <div style={{ marginTop: 20 }}>
              <a
                href="/Nischay_Jain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: '8px 16px', fontSize: 13 }}
              >
                Download Resume ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            paddingTop: 24,
          }}
        >
          <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
            © {year} Nischay Jain. All rights reserved.
          </span>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: 'var(--text-3)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Built with{' '}
            <span style={{ color: '#06b6d4' }}>Next.js</span>
            {' '}·{' '}
            <span style={{ color: 'var(--cyan)' }}>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
