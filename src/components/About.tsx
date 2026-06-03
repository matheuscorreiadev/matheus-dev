"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { basePath } from "@/src/lib/basePath";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="gradient absolute inset-0 rounded-full opacity-30 blur-3xl" />

            <Image
              src={`${basePath}/images/profile-picture.png`}
              alt="Matheus Correia"
              width={420}
              height={420}
              priority
              className="relative z-10 rounded-xl border border-white/10 object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Sobre mim
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            Construindo produtos digitais com base técnica e clareza de negócio
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Sou Analista e Desenvolvedor de Sistemas com foco em
            desenvolvimento Full Stack. Tenho experiência na construção de
            aplicações web modernas utilizando React, Next.js, Node.js e bancos
            de dados relacionais.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Meu objetivo é desenvolver soluções que entreguem valor real para
            empresas e usuários, combinando performance, organização de código e
            interfaces fáceis de usar.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="glass rounded-lg p-6">
              <h3 className="text-3xl font-black text-white">Full Stack</h3>
              <p className="mt-2 text-zinc-400">
                Front-end, APIs e bancos de dados.
              </p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-3xl font-black text-white">Produto</h3>
              <p className="mt-2 text-zinc-400">
                Soluções úteis, responsivas e escaláveis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
