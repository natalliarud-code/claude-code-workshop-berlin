import { projects } from "../content";

export function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8 border-l-2 border-accent pl-3">
        {projects.heading}
      </h2>
      <ul className="space-y-4">
        {projects.items.map((p, i) => (
          <li
            key={i}
            className="group rounded-2xl border border-ink/8 bg-white p-6 hover:shadow-sm hover:border-ink/15 transition-all"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium group-hover:text-accent transition">
                {p.title}
              </h3>
              <span className="text-sm text-ink/50 shrink-0">{p.year}</span>
            </div>
            <p className="mt-3 text-ink/75 leading-relaxed">{p.summary}</p>
            {p.link && (
              <a
                href={p.link.href}
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                {p.link.label} →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
