import { experience } from "../content";

export function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8 border-l-2 border-accent pl-3">
        {experience.heading}
      </h2>
      <ol className="space-y-4">
        {experience.roles.map((role, i) => (
          <li
            key={i}
            className="group rounded-2xl border border-ink/8 bg-white p-6 hover:shadow-sm hover:border-ink/15 transition-all"
          >
            <div className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8">
              <p className="text-sm text-ink/60 font-medium pt-1">{role.period}</p>
              <div>
                <h3 className="font-medium text-lg">
                  {role.title}{" "}
                  <span className="text-accent font-normal">· {role.company}</span>
                </h3>
                <p className="mt-2 text-ink/75 leading-relaxed">{role.summary}</p>
                {"link" in role && role.link && (
                  <a
                    href={role.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    {role.link.label} →
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
