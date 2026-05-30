"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          w-full
          z-50
          glass
          border-b
          border-white/10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-4
            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}

          <h1
            className="
              text-2xl
              font-black
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Matheus.dev
          </h1>

          {/* DESKTOP MENU */}

          <nav
            className="
              hidden
              md:flex
              items-center
              gap-8
              font-medium
            "
          >
            <a
              href="#home"
              className="hover:text-violet-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-violet-400 transition"
            >
              Sobre
            </a>

            <a
              href="#skills"
              className="hover:text-violet-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-violet-400 transition"
            >
              Projetos
            </a>

            <a
              href="#contact"
              className="hover:text-violet-400 transition"
            >
              Contato
            </a>

            <ThemeToggle />
          </nav>

          {/* MOBILE */}

          <div
            className="
              md:hidden
              flex
              items-center
              gap-4
            "
          >
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="
                p-2
                rounded-lg
                border
                border-zinc-700
                hover:scale-105
                transition
              "
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}