"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileMenu({
  open,
  setOpen,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="
            fixed
            top-0
            right-0
            w-full
            h-screen
            bg-black/90
            backdrop-blur-xl
            z-40
            flex
            items-center
            justify-center
          "
        >
          <nav className="flex flex-col gap-10 text-center">

            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="text-3xl font-bold hover:text-violet-400 transition"
            >
              Home
            </Link>

            <Link
  href="#about"
  onClick={() => setOpen(false)}
  className="text-3xl font-bold hover:text-violet-400 transition"
>
  Sobre
</Link>

            <Link
              href="#skills"
              onClick={() => setOpen(false)}
              className="text-3xl font-bold hover:text-violet-400 transition"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-3xl font-bold hover:text-violet-400 transition"
            >
              Projetos
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-3xl font-bold hover:text-violet-400 transition"
            >
              Contato
            </Link>

          </nav>
        </motion.div>
      )}

    </AnimatePresence>
  );
}