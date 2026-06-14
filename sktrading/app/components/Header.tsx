import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide">
          SK <span className="text-amber-500">TRADING</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/" className="hover:text-amber-500">Home</Link>
          <Link href="/machines/injection-moulding" className="hover:text-amber-500">Machines</Link>
          <Link href="/about" className="hover:text-amber-500">About</Link>
          <Link href="/contact" className="hover:text-amber-500">Contact</Link>
        </nav>
        <a
          href="tel:+910000000000"
          className="hidden items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 sm:flex"
        >
          <Phone size={16} />
          Call Us
        </a>
      </div>
    </header>
  );
}
