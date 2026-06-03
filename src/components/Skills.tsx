import {
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  Database,
  Lightbulb,
  MessageCircle,
  RefreshCw,
  Server,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const hardSkillGroups: {
  title: string;
  icon: LucideIcon;
  skills: string[];
}[] = [
  {
    title: "Front-end",
    icon: Code,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-end",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Figma"],
  },
  {
    title: "Deploy & Cloud",
    icon: Cloud,
    skills: ["Vercel", "Railway", "Render"],
  },
];

const softSkills = [
  { title: "Comunicação", icon: MessageCircle },
  { title: "Trabalho em equipe", icon: Users },
  { title: "Resolução de problemas", icon: Lightbulb },
  { title: "Aprendizado contínuo", icon: BookOpen },
  { title: "Organização", icon: CheckCircle },
  { title: "Adaptabilidade", icon: RefreshCw },
  { title: "Pensamento analítico", icon: Brain },
  { title: "Gestão de tempo", icon: Clock },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Competências
          </span>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Hard Skills
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Tecnologias organizadas por área para mostrar como cada parte do
            stack se conecta na construção de aplicações completas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {hardSkillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div key={group.title} className="glass rounded-lg p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-bold text-white">{group.title}</h3>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <CheckCircle size={15} className="text-emerald-300" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Soft Skills
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {softSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="glass flex items-center gap-3 rounded-lg p-5"
                >
                  <span className="rounded-lg bg-violet-400/10 p-2 text-violet-300">
                    <Icon size={18} />
                  </span>
                  <span className="font-semibold text-zinc-100">
                    {skill.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
