export default function ProjectCard({ title, description, link, image, tags = [], achievement }) {
  return (
    <div className="project-card">
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="project-card-overlay" />
        {tags.length > 0 && (
          <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(6,182,212,0.15)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#06b6d4',
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
        )}
      </div>
      <div style={{ padding: '20px 22px' }}>
        <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{description}</p>
        {achievement && (
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: '#06b6d4',
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              padding: '4px 10px',
              borderRadius: 6,
              marginBottom: 14,
              display: 'inline-block',
            }}
          >
            ✦ {achievement}
          </div>
        )}
        {link && link !== '#' && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: 12 }}
          >
            View Project ↗
          </a>
        )}
      </div>
    </div>
  );
}
