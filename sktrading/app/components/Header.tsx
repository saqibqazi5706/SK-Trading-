"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown, Menu, X, Cpu } from "lucide-react";

const machineLinks = [
  {
    label: "Plastic Injection Moulding Machines",
    href: "/machines/injection-moulding",
  },
  {
    label: "Aluminum Die Casting Machines",
    href: "/machines/die-casting",
  },
];

const accessoryLinks = [
  { label: "Crusher", href: "/accessories/category/crusher" },
  { label: "Mixer", href: "/accessories/category/mixer" },
  { label: "Auto Loader", href: "/accessories/category/auto-loader" },
  { label: "Hopper Dryer", href: "/accessories/category/hopper-dryer" },
  { label: "Screw Air Compressors", href: "/accessories/category/screw-air-compressors" },
  { label: "Piston Air Compressors", href: "/accessories/category/piston-air-compressors" },
];

export default function Header() {
  const [machinesOpen, setMachinesOpen] = useState(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false);
  const [mobileAccessoriesOpen, setMobileAccessoriesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMachinesOpen(false);
        setAccessoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileMachinesOpen(false);
    setMobileAccessoriesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide" onClick={closeMobileMenu}>
          SK <span className="text-amber-500">TRADING</span>
        </Link>

        <nav ref={navRef} className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/" className="hover:text-amber-500">
            Home
          </Link>

          {/* Machines dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMachinesOpen(true)}
            onMouseLeave={() => setMachinesOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMachinesOpen(false);
            }}
          >
            <Link
              href="/machines"
              className="flex items-center gap-1 hover:text-amber-500 focus:text-amber-500 focus:outline-none"
              onFocus={() => setMachinesOpen(true)}
            >
              Machines
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  machinesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                machinesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-64 rounded-md border border-slate-700 bg-slate-800 p-2 shadow-lg">
                {machineLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-700 hover:text-amber-500"
                    onClick={() => setMachinesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Accessories dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAccessoriesOpen(true)}
            onMouseLeave={() => setAccessoriesOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setAccessoriesOpen(false);
            }}
          >
            <Link
              href="/accessories"
              className="flex items-center gap-1 hover:text-amber-500 focus:text-amber-500 focus:outline-none"
              onFocus={() => setAccessoriesOpen(true)}
            >
              Accessories
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  accessoriesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                accessoriesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-56 rounded-md border border-slate-700 bg-slate-800 p-2 shadow-lg">
                {accessoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-700 hover:text-amber-500"
                    onClick={() => setAccessoriesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-amber-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-amber-500">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/smart-automation"
            className="hidden items-center gap-2 rounded-md border border-sky-500 px-4 py-2 text-sm font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-slate-950 lg:flex"
          >
            <Cpu size={16} />
            Smart Automation
          </Link>
          <a
            href="tel:+923004079337"
            className="hidden items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 sm:flex"
          >
            <Phone size={16} />
            Call Us
          </a>
          <button
            className="p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 md:hidden">
          <nav className="flex flex-col text-sm font-medium">
            <Link href="/" className="py-2 hover:text-amber-500" onClick={closeMobileMenu}>
              Home
            </Link>

            {/* Machines (mobile accordion) */}
            <div className="flex items-center justify-between">
              <Link
                href="/machines"
                className="flex-1 py-2 hover:text-amber-500"
                onClick={closeMobileMenu}
              >
                Machines
              </Link>
              <button
                aria-label="Toggle machines submenu"
                aria-expanded={mobileMachinesOpen}
                className="p-2"
                onClick={() => setMobileMachinesOpen((open) => !open)}
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileMachinesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileMachinesOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="ml-4 flex flex-col border-l border-slate-700 pl-3">
                {machineLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-sm text-slate-300 hover:text-amber-500"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Accessories (mobile accordion) */}
            <div className="flex items-center justify-between">
              <Link
                href="/accessories"
                className="flex-1 py-2 hover:text-amber-500"
                onClick={closeMobileMenu}
              >
                Accessories
              </Link>
              <button
                aria-label="Toggle accessories submenu"
                aria-expanded={mobileAccessoriesOpen}
                className="p-2"
                onClick={() => setMobileAccessoriesOpen((open) => !open)}
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileAccessoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileAccessoriesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-4 flex flex-col border-l border-slate-700 pl-3">
                {accessoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-sm text-slate-300 hover:text-amber-500"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="py-2 hover:text-amber-500" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/contact" className="py-2 hover:text-amber-500" onClick={closeMobileMenu}>
              Contact
            </Link>
            <Link
              href="/smart-automation"
              className="mt-3 flex items-center gap-2 rounded-md border border-sky-500 px-3 py-2 font-semibold text-sky-400"
              onClick={closeMobileMenu}
            >
              <Cpu size={16} />
              Smart Automation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
