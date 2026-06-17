import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import SkLogo from "./SkLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <SkLogo className="h-12" />
            <p className="mt-2 text-sm text-slate-400">
              Trusted supplier of used Plastic Injection Moulding & Aluminum
              Die Casting Machines, imported from China and Japan.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-500">Home</Link></li>
              <li><Link href="/machines" className="hover:text-red-500">Machines</Link></li>
              <li><Link href="/accessories" className="hover:text-red-500">Accessories</Link></li>
              <li><Link href="/about" className="hover:text-red-500">About</Link></li>
              <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-500" />
                +92 300 4079337
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-500" />
                info@sktrading.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-red-500" />
                 SK Trading, Rajba Rd, Sharif Garden Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} SK Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
