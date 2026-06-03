"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#journey", label: "Jornada" },
  { href: "#services", label: "Serviços" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="glass fixed top-0 z-50 w-full border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-2xl font-black text-transparent"
          >
            Matheus.dev
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}

          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen(!open)}
              className="rounded-lg border border-white/15 p-2 transition hover:border-cyan-300/60"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} items={navItems} />
    </>
  );
}
