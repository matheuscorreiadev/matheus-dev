import { AtSign, Code, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="glass mx-auto max-w-5xl rounded-xl p-8 text-center md:p-14">
        <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Contato
        </span>

        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
          Vamos construir algo útil juntos
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Estou disponível para oportunidades, projetos e conversas sobre
          desenvolvimento Full Stack.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:matheuscorreiacode@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-100"
          >
            <Mail size={18} />
            Entrar em contato
          </a>

          <a
            href="https://github.com/matheuscorreiadev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60"
          >
            <Code size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/matheuscorreiacode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-300/60"
          >
            <AtSign size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
