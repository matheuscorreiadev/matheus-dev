import { Code, Database, Layout, Monitor, Plug } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Front-end",
    description: "Interfaces modernas, responsivas e focadas em performance.",
    icon: Monitor,
  },
  {
    title: "Criação de APIs REST",
    description: "Back-ends organizados para conectar sistemas e produtos.",
    icon: Plug,
  },
  {
    title: "Integração com Banco de Dados",
    description: "Modelagem e conexão com MySQL, PostgreSQL e Prisma ORM.",
    icon: Database,
  },
  {
    title: "Landing Pages",
    description: "Páginas rápidas, profissionais e orientadas à conversão.",
    icon: Layout,
  },
  {
    title: "Sistemas Web",
    description: "Aplicações completas para operações, dashboards e gestão.",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Serviços
          </span>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Como posso ajudar
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="glass rounded-lg p-6">
                <span className="mb-5 inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
