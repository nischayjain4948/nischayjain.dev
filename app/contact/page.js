"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
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
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '64px 24px' }}>
        <span className="chip" style={{ marginBottom: 24, display: 'inline-flex' }}>{'// Contact'}</span>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}
        >
          Let&apos;s build something{' '}
          <span className="gradient-text">remarkable.</span>
        </h1>
        <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>
          Open to senior engineering roles, cloud consulting, and freelance projects. Response within 24 hours.
        </p>

        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          {[
            { icon: '✉', label: 'Email', value: 'nischayjain4948@gmail.com', href: 'mailto:nischayjain4948@gmail.com', color: '#06b6d4' },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nischay-jain-799998213', href: 'https://linkedin.com/in/nischay-jain-799998213', color: '#3b82f6' },
            { icon: '📍', label: 'Location', value: 'Jaipur, Rajasthan, India', href: null, color: '#8b5cf6' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
              }}
            >
              <div style={{ fontSize: 22, width: 40, textAlign: 'center' }}>{item.icon}</div>
              <div>
                <div className="font-mono" style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: item.color, fontSize: 14, textDecoration: 'none', fontWeight: 500 }}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-1)', fontSize: 14, fontWeight: 500 }}>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Send a Message</h2>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
              <div style={{ color: 'var(--green)', fontWeight: 600, fontSize: 16 }}>Message sent! I&apos;ll reply within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>Name</label>
                <input className="form-input" type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>Email</label>
                <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <label className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>Message</label>
                <textarea className="form-input" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/" style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
