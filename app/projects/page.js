import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../projectData';

export default function Projects() {
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '64px 24px' }}>
        <span className="chip" style={{ marginBottom: 24, display: 'inline-flex' }}>{'// Projects'}</span>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}
        >
          Featured Work
        </h1>
        <p style={{ color: 'var(--text-2)', fontSize: 17, lineHeight: 1.7, maxWidth: 560, marginBottom: 56 }}>
          Selected projects showcasing backend architecture, cloud systems, and full-stack engineering.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {projectData.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              link={p.link}
              image={p.image}
              tags={p.tags}
              achievement={p.achievement}
            />
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <Link href="/" style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
