import { Boxes, Factory } from "lucide-react";

const offerings = [
  {
    icon: Boxes,
    title: "Plastic Injection Moulding Machines",
    description:
      "We deal in a wide tonnage range, typically from 100 Ton to 1000+ Ton, covering everything from small precision components to large industrial parts. These machines are ideal for packaging, automotive parts, household products, electronics housings, and a broad range of plastic manufacturing applications.",
  },
  {
    icon: Factory,
    title: "Aluminum Die Casting Machines",
    description:
      "Our die casting machines cover a range of shot weights to suit different production needs, from compact components to heavier castings. They are well suited for automotive parts, hardware, electrical fittings, and precision aluminum components where strength and consistency matter.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
            What We Do
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Two core categories, sourced and inspected to keep your production
            running.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {offerings.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <Icon className="text-red-500" size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
