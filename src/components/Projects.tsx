import { projects } from "@/src/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-14">
          Projetos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-3xl p-8 hover:-translate-y-2 transition"
            >
              <div className="h-52 rounded-2xl gradient mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-500">
                {project.description}
              </p>

              <div className="flex gap-4 mt-8">
                <button className="px-4 py-2 rounded-lg gradient text-white">
                  Demo
                </button>

                <button className="px-4 py-2 rounded-lg border">
                  GitHub
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}