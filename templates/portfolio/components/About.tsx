import { about } from "../content";

export function About() {
  return (
    <section id="about" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-6 border-l-2 border-accent pl-3">
        {about.heading}
      </h2>
      <div className="space-y-4 text-lg text-ink/80 leading-relaxed">
        {about.paragraphs.map((p, i) => {
          const match = p.match(/^(My \w+)([\s\S]*)/);
          if (match) {
            return (
              <p key={i} className="pl-4 border-l border-ink/15 text-ink/70">
                <mark className="bg-highlight/50 text-ink not-italic px-0.5 rounded-sm">{match[1]}</mark>
                {match[2]}
              </p>
            );
          }
          return <p key={i}>{p}</p>;
        })}
      </div>
    </section>
  );
}
