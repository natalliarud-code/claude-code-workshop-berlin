import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-4 border-l-2 border-accent pl-3">
        {contact.heading}
      </h2>
      <div className="mt-6 rounded-2xl bg-accent/5 border border-accent/10 p-8">
        <p className="text-lg text-ink/80 leading-relaxed max-w-xl">
          {contact.body}
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-6 inline-block px-6 py-3 bg-ink text-paper rounded-full font-medium text-sm hover:opacity-90 transition"
        >
          {contact.email}
        </a>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/60">
          {contact.socials.map((s, i) => (
            <li key={i}>
              <a
                href={s.href}
                className="hover:text-accent transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
