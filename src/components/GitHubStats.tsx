import { Activity, Braces, GitCommit } from "lucide-react";

const githubUser = "matheuscorreiadev";

export default function GitHubStats() {
  return (
    <section id="github" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            GitHub dinâmico
          </span>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Repositórios, commits e linguagens
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-lg p-5">
            <div className="mb-4 flex items-center gap-3 text-white">
              <Activity size={20} className="text-cyan-300" />
              <h3 className="font-bold">Repositórios</h3>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${githubUser}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=67e8f9&text_color=d4d4d8&icon_color=a78bfa&locale=pt-br`}
              alt="Estatísticas do GitHub de Matheus Correia"
              className="min-h-44 w-full rounded-lg object-contain"
            />
          </div>

          <div className="glass rounded-lg p-5">
            <div className="mb-4 flex items-center gap-3 text-white">
              <GitCommit size={20} className="text-cyan-300" />
              <h3 className="font-bold">Commits</h3>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://streak-stats.demolab.com?user=${githubUser}&theme=tokyonight&hide_border=true&background=00000000&ring=67e8f9&fire=a78bfa&currStreakLabel=67e8f9&sideLabels=d4d4d8&dates=a1a1aa&locale=pt_BR`}
              alt="Sequência de commits no GitHub"
              className="min-h-44 w-full rounded-lg object-contain"
            />
          </div>

          <div className="glass rounded-lg p-5">
            <div className="mb-4 flex items-center gap-3 text-white">
              <Braces size={20} className="text-cyan-300" />
              <h3 className="font-bold">Linguagens</h3>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=67e8f9&text_color=d4d4d8&locale=pt-br`}
              alt="Linguagens mais usadas no GitHub"
              className="min-h-44 w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
