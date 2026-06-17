import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Plastic Injection Moulding Machines",
    description:
      "A wide range of used injection moulding machines from trusted Japanese and Chinese brands, suitable for various tonnage and industry requirements.",
    href: "/machines/injection-moulding",
  },
  {
    title: "Aluminum Die Casting Machines",
    description:
      "Reliable used die casting machines imported from Japan, ideal for automotive, hardware, and component manufacturing applications.",
    href: "/machines/die-casting",
  },
  {
    title: "Brand New Machines - Task",
    description:
      "Brand new Plastic Injection Moulding Machines manufactured under our own brand, Task, and imported directly to Pakistan.",
    href: "/task",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
            Our Machine Categories
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Browse our range of inspected, ready-to-ship industrial machines.
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
                  View Machines <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
