"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import TaskLogo from "./TaskLogo";
import ThemeToggle from "../ThemeToggle";

// In-page anchors (the Task site is a single page)
const navLinks = [
  { label: "Models", href: "#models" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function TaskHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-red-950 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/task" onClick={() => setOpen(false)}>
          <TaskLogo className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-red-500">
              {link.label}
            </a>
          ))}
          <Link
            href="/"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-red-500"
          >
            <ArrowLeft size={14} />
            SK Trading
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-red-900 px-4 py-4 md:hidden">
          <nav className="flex flex-col text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 hover:text-red-500"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/"
              className="flex items-center gap-1 py-2 text-slate-400 hover:text-red-500"
              onClick={() => setOpen(false)}
            >
              <ArrowLeft size={14} />
              Back to SK Trading
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
