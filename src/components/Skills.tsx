const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MySQL",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "API Rest",
  "Express",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-14">
          Tecnologias
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass rounded-2xl p-6 text-center font-semibold hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}