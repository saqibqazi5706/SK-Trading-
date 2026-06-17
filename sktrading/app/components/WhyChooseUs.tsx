import { Globe2, ShieldCheck, BadgeDollarSign, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Imported Directly from China & Japan",
    description: "Strong sourcing network ensuring direct access to quality machines.",
  },
  {
    icon: ShieldCheck,
    title: "Thoroughly Inspected Machines",
    description: "Every machine is checked for performance before it is listed.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description: "Fair, transparent pricing on all imported machinery.",
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    description: "We assist with setup guidance and support after delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Choose Us</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                <Icon className="text-red-500" size={28} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
