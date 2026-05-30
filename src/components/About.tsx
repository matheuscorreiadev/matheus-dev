"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-16
        items-center
      ">

        {/* FOTO */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="
              absolute
              inset-0
              blur-3xl
              opacity-40
              gradient
              rounded-full
            " />

            {/* Imagem */}

            <Image
              src="/images/perfil.png"
              alt="Matheus Correia"
              width={420}
              height={420}
              priority
              className="
                relative
                z-10
                rounded-3xl
                object-cover
                border
                border-zinc-800
                shadow-2xl
              "
            />

          </div>
        </motion.div>

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="
            text-violet-400
            font-semibold
            uppercase
            tracking-widest
          ">
            Sobre mim
          </span>

          <h2 className="
            text-4xl
            md:text-5xl
            font-black
            mt-4
            leading-tight
          ">
            Desenvolvedor focado em
            experiências modernas
            e produtos digitais
          </h2>

          <p className="
            mt-8
            text-zinc-500
            text-lg
            leading-relaxed
          ">
            Sou Matheus Correia, desenvolvedor Full Stack
            apaixonado por tecnologia, interfaces modernas
            e criação de aplicações escaláveis.

            Atualmente desenvolvo projetos SaaS,
            dashboards inteligentes, landing pages premium
            e sistemas modernos utilizando tecnologias
            como React, Next.js, TypeScript,
            Node.js e Tailwind CSS.
          </p>

          <p className="
            mt-6
            text-zinc-500
            text-lg
            leading-relaxed
          ">
            Meu foco é unir design moderno,
            performance e experiência do usuário
            para criar produtos profissionais
            que realmente geram impacto.
          </p>

          {/* CARDS */}

          <div className="
            grid
            grid-cols-2
            gap-6
            mt-10
          ">

            <div className="
              glass
              rounded-2xl
              p-6
            ">
              <h3 className="text-3xl font-black">
                10+
              </h3>

              <p className="text-zinc-500 mt-2">
                Projetos desenvolvidos
              </p>
            </div>

            <div className="
              glass
              rounded-2xl
              p-6
            ">
              <h3 className="text-3xl font-black">
                Full Stack
              </h3>

              <p className="text-zinc-500 mt-2">
                Desenvolvimento moderno
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}