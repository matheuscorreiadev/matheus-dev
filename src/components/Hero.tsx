"use client";

import { motion } from "framer-motion";
import { Download, FolderKanban } from "lucide-react";

const stats = [
  { value: "+15", label: "Projetos Desenvolvidos" },
  { value: "+500", label: "Horas de Estudo" },
  { value: "100%", label: "Responsivo" },
  { value: "GitHub", label: "Ativo" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
          >
            Portfolio Full Stack
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl"
          >
            Desenvolvedor{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Full Stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl"
          >
            Construo aplicações web modernas, escaláveis e focadas em
            performance utilizando React, Next.js, Node.js e MySQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-zinc-950 transition hover:-translate-y-1 hover:bg-cyan-100"
            >
              <FolderKanban size={18} />
              Ver Projetos
            </a>

            <a
              href="/curriculo.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10"
            >
              <Download size={18} />
              Baixar Currículo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-lg p-5">
                <strong className="block text-2xl font-black text-white">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-sm text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="glass relative mx-auto w-full max-w-lg rounded-xl p-6 shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>

          <div className="space-y-4 pt-6 font-mono text-sm text-zinc-300">
            <p>
              <span className="text-cyan-300">const</span> developer = {"{"}
            </p>
            <p className="pl-5">
              stack:{" "}
              <span className="text-emerald-300">
                [&quot;React&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;]
              </span>
              ,
            </p>
            <p className="pl-5">
              focus:{" "}
              <span className="text-emerald-300">
                &quot;performance e valor real&quot;
              </span>
              ,
            </p>
            <p className="pl-5">
              status: <span className="text-emerald-300">&quot;available&quot;</span>
            </p>
            <p>{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
