"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          Desenvolvedor
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-400 bg-clip-text text-transparent">
  {" "}Full Stack
</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg text-zinc-500 max-w-2xl mx-auto"
        >
          Criando experiências modernas, aplicações SaaS,
          dashboards e interfaces premium.
        </motion.p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
  className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-400 text-white font-bold"
>
  Ver Projetos
</a>

          <a
            href="https://github.com/matheuscorreiadev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}