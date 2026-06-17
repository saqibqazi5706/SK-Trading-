import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import ContactCTA from "@/app/components/ContactCTA";

const MAPS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=31.58603118569452,74.41868451822218";

export const metadata: Metadata = {
  title: "Contact Us | SK Trading",
  description:
    "Get in touch with SK Trading for quality used and brand new industrial machinery. Call, email, or message us on WhatsApp.",
};

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+92 300 4079337"],
    href: "tel:+923004079337",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@sktrading.com"],
    href: "mailto:info@sktrading.com",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["SK Trading, Rajba Rd,", "Sharif Garden, Lahore, Pakistan"],
    href: MAPS_LINK,
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
            Contact Us
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Have a question about a machine or need a quote? We&apos;re here to
            help — reach out through any of the options below.
          </p>
        </div>
      </section>

      {/* Contact detail cards */}
      <section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map(({ icon: Icon, title, lines, href }) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                    <Icon className="text-red-500" size={24} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-50">
                    {title}
                  </h3>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </>
              );

              return (
                <div
                  key={title}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition hover:shadow-md"
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block hover:text-red-600"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp + form */}
      <ContactCTA />

      {/* Map */}
      <section className="bg-slate-50 dark:bg-slate-950 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">Find Us</h2>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-red-500 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-50 transition hover:bg-red-400"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <iframe
              title="SK Trading location"
              src="https://www.google.com/maps?q=31.58603118569452,74.41868451822218&z=17&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
