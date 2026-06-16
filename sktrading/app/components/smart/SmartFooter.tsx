import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import SmartLogo from "./SmartLogo";

export default function SmartFooter() {
  return (
    <footer className="bg-black text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <SmartLogo className="text-lg text-white" />
            <p className="mt-3 text-sm text-slate-400">
              Brand new automation products — PLC systems, servo energy saving
              systems, and more. A company by SK Trading.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#products" className="hover:text-sky-400">Products</a></li>
              <li><a href="#about" className="hover:text-sky-400">About</a></li>
              <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
              <li><Link href="/" className="hover:text-sky-400">SK Trading</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-sky-400" />
                +92 300 4079337
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-sky-400" />
                info@smartautomation.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-sky-400" />
                Sharif Garden, Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Smart Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
