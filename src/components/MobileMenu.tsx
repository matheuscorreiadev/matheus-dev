"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  items: {
    href: string;
    label: string;
  }[];
}

export default function MobileMenu({ open, setOpen, items }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-black/90 backdrop-blur-xl"
        >
          <nav className="flex flex-col gap-8 text-center">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-white transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
