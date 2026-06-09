import Link from 'next/link';

export default function About() {
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px' }}>
        <span className="chip" style={{ marginBottom: 24, display: 'inline-flex' }}>{'// About'}</span>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}
        >
          Building systems that{' '}
          <span className="gradient-text">scale with ambition.</span>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--text-2)', fontSize: 17, lineHeight: 1.85 }}>
          <p>
            I&apos;m <strong style={{ color: 'var(--text-1)' }}>Nischay Jain</strong> — a Senior Backend & Cloud Engineer
            based in Jaipur, India. With 4+ years of experience, I specialize in building scalable distributed systems,
            serverless architectures, and cloud-native microservices.
          </p>
          <p>
            Currently at <strong style={{ color: 'var(--cyan)' }}>Accenture</strong>, I architect enterprise-grade systems
            for the UK Government&apos;s Medicines and Healthcare products Regulatory Agency (MHRA) — building Azure Function Apps,
            Service Bus pipelines, and Blob Storage workflows that meet strict healthcare compliance requirements.
          </p>
          <p>
            My backend of choice is <strong style={{ color: 'var(--text-1)' }}>Node.js</strong> — lean, event-driven,
            and battle-tested for high-concurrency APIs. I pair it with MongoDB, PostgreSQL, Redis, and Elasticsearch
            depending on the data access patterns. On the cloud side, I work across AWS and Azure, preferring
            serverless-first designs for their scalability characteristics.
          </p>
          <p>
            When I&apos;m not shipping code, I&apos;m thinking about system design, distributed tracing, and the endless
            art of making things simpler while handling more load.
          </p>
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
