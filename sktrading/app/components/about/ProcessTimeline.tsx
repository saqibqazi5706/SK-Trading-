import { Search, ClipboardCheck, Ship, MessageSquareQuote, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Sourcing",
    description:
      "We identify quality machines from trusted suppliers in China and Japan.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection",
    description:
      "Each machine is checked for performance, condition, and reliability.",
  },
  {
    icon: Ship,
    title: "Import",
    description:
      "We handle the import and logistics to bring the machine to Pakistan.",
  },
  {
    icon: MessageSquareQuote,
    title: "Inquiry & Quote",
    description:
      "You reach out, and we provide details and a transparent quotation.",
  },
  {
    icon: Truck,
    title: "Delivery & Support",
    description:
      "We deliver the machine and provide ongoing after-sales support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            A simple, transparent process from sourcing to support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              {/* connector line (desktop only) */}
              {index < steps.length - 1 && (
                <span className="absolute left-1/2 top-7 hidden h-0.5 w-full bg-slate-200 md:block" />
              )}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white">
                <Icon size={24} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-slate-900 dark:text-slate-50">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-50">
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
