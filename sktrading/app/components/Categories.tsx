import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Plastic Injection Moulding Machines",
    description:
      "A wide range of used injection moulding machines from trusted Japanese and Chinese brands, suitable for various tonnage and industry requirements.",
    href: "/machines/injection-moulding",
    cta: "View Machines",
  },
  {
    title: "Aluminum Die Casting Machines",
    description:
      "Reliable used die casting machines imported from Japan, ideal for automotive, hardware, and component manufacturing applications.",
    href: "/machines/die-casting",
    cta: "View Machines",
  },
  {
    title: "Accessories & Spare Parts",
    description:
      "Crushers, mixers, auto loaders, hopper dryers, air compressors and more — quality accessories to support your production line.",
    href: "/accessories",
    cta: "View Accessories",
  },
  {
    title: "Task",
    description:
      "Brand new Plastic Injection Moulding Machines manufactured under our own brand, Task, and imported directly to Pakistan.",
    href: "/task",
    cta: "Explore Task",
  },
  {
    title: "Smart Automation",
    description:
      "Our automation company supplying brand new PLC systems, servo energy saving systems, lubrication pumps and more.",
    href: "/smart-automation",
    cta: "Visit Smart Automation",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
            What We Offer
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Machines, accessories, and automation solutions — all under one roof.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src="/placeholder-machine.svg"
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {cat.description}
                </p>
                <Link
                  href={cat.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  {cat.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
