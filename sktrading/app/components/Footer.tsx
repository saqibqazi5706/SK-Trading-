import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              SK <span className="text-amber-500">TRADING</span>
            </h3>
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
              <li><Link href="/" className="hover:text-amber-500">Home</Link></li>
              <li><Link href="/machines/injection-moulding" className="hover:text-amber-500">Machines</Link></li>
              <li><Link href="/about" className="hover:text-amber-500">About</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-500" />
                +91 00000 00000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-500" />
                info@sktrading.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-amber-500" />
                123 Industrial Area, Your City, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SK Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
