export default function AboutPage() {
  return (
    <section className="container fade-in" style={{ paddingTop: '1.5rem' }}>
      <h1>About This Project</h1>
      <p style={{ color: '#d7d7d7', lineHeight: 1.7 }}>
        Movie UI Showcase is a fully static Next.js App Router demo inspired by modern cinema platforms like Netflix and IMDb.
        It focuses on reusable UI components, clean navigation, and engaging interactions in a dark, theater-style interface.
      </p>
      <ul style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
        <li>Framework: Next.js (App Router)</li>
        <li>Data source: Static JSON (20+ curated movie entries)</li>
        <li>Core features: Hero banner, filters, sorting, details page, cast/reviews/similar content</li>
      </ul>
      <p style={{ color: 'var(--muted)' }}>Built for UI prototyping, component design, and front-end showcase use cases.</p>
    </section>
  );
}
