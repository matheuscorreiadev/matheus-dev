"use client";

import { motion } from "framer-motion";
import { Download, FolderKanban } from "lucide-react";

// Verifica se está rodando no ambiente de produção do Vercel
const isVercel = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL;
const isProd = process.env.NODE_ENV === 'production';

// Se for Vercel, não usa subpasta. Se for outra produção (GitHub Pages), usa '/matheus-dev'
const basePath = isVercel ? '' : (isProd ? '/matheus-dev' : '');

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
            className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 font-mono"
          >
            console.log("Hello, World! 🚀");
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
              href={`${basePath}/curriculo.pdf`}
              download="Curriculo_Matheus_Correia.pdf"
              target="_blank"
              rel="noopener noreferrer"
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

          <div className="space-y-4 pt-6 font-mono text-sm text-zinc-300 select-none whitespace-pre-wrap break-words overflow-hidden">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span> = {"{"}
            </p>
            
            <p className="pl-5">
              <span className="text-cyan-400">name</span>:{" "}
              <span className="text-emerald-300">&quot;Matheus Correia&quot;</span>,
            </p>

            <p className="pl-5">
              <span className="text-cyan-400">role</span>:{" "}
              <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
            </p>

            <p className="pl-5 flex flex-wrap gap-x-1">
              <span className="text-cyan-400">stack</span>: [
              <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
              <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
              <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
              <span className="text-emerald-300">&quot;MySQL&quot;</span>
              ],
            </p>

            <p className="pl-5 flex flex-wrap gap-x-1">
              <span className="text-cyan-400">focus</span>: [
              <span className="text-emerald-300">&quot;Clean Code&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Scalability&quot;</span>,{" "}
              <span className="text-emerald-300">&quot;Performance&quot;</span>
              ],
            </p>

            <p className="pl-5">
              <span className="text-cyan-400">openToWork</span>:{" "}
              <span className="text-amber-400">true</span>
            </p>

            <p>{"}"};</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}