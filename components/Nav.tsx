import { hero } from "../content";

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 w-full backdrop-blur-sm bg-paper/80 border-b border-ink/5">
      <div className="mx-auto max-w-3xl px-6 flex items-center justify-between py-4">
        <span className="font-semibold text-sm tracking-tight">{hero.name}</span>
        <ul className="flex gap-6 text-sm text-ink/55">
          <li><a href="#about" className="hover:text-ink transition">About</a></li>
          <li><a href="#experience" className="hover:text-ink transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-ink transition">Work</a></li>
          <li><a href="#contact" className="hover:text-ink transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
