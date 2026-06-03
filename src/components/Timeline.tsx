"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Início dos estudos em desenvolvimento web",
    description:
      "Primeiro contato com HTML, CSS, JavaScript e fundamentos de interfaces responsivas.",
  },
  {
    year: "2025",
    title: "Primeiros projetos Full Stack",
    description:
      "Construção de aplicações integrando front-end, APIs, autenticação e bancos de dados.",
  },
  {
    year: "2026",
    title: "Aplicações com Next.js, Node.js e Prisma",
    description:
      "Evolução para projetos mais completos, com foco em performance, organização e experiência do usuário.",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Experiência / Jornada
          </span>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Minha Jornada
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-8">
          {journey.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-cyan-300" />
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                {item.year}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
