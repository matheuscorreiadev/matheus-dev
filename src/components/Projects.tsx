import { projects } from "@/src/data/projects";
import { Code, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Projetos em destaque
          </span>

          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Soluções com foco em problemas reais
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass group flex min-h-full flex-col rounded-lg p-7 transition hover:-translate-y-2 hover:border-cyan-300/40"
            >
              <div className="relative mb-6 flex h-48 items-end overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.20),rgba(99,102,241,0.18),rgba(15,23,42,0.7))] p-5">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                  />
                ) : null}
                <span className="relative z-10 rounded-md bg-black/40 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  Full Stack
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="font-semibold text-zinc-300">{project.problem}</p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6">
                <span className="text-sm font-bold text-white">
                  Tecnologias utilizadas:
                </span>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.technologies.join(" • ")}
                </p>
              </div>

              <div className="mt-auto flex gap-3 pt-8">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-cyan-100"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300/60"
                >
                  <Code size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
