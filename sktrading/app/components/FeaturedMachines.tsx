import Image from "next/image";

const machines = [
  {
    name: "Used Injection Moulding Machine - 250 Ton",
    origin: "Japan Make",
    detail: "Toshiba / Servo Motor / Good Condition",
  },
  {
    name: "Used Injection Moulding Machine - 350 Ton",
    origin: "China Make",
    detail: "Haitian / Twin Platen / Well Maintained",
  },
  {
    name: "Aluminum Die Casting Machine - 280 Ton",
    origin: "Japan Make",
    detail: "Toyo / Cold Chamber / Tested",
  },
  {
    name: "Used Injection Moulding Machine - 450 Ton",
    origin: "Japan Make",
    detail: "Niigata / Hydraulic / Ready to Ship",
  },
];

export default function FeaturedMachines() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Featured Machines
          </h2>
          <p className="mt-2 text-slate-600">
            A few examples from our current stock.
          </p>
        </div>
        <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {machines.map((m) => (
            <div
              key={m.name}
              className="min-w-[260px] flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:min-w-0"
            >
              <div className="relative h-40 w-full">
                <Image
                  src="/placeholder-machine.svg"
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                  {m.origin}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{m.detail}</p>
                <button className="mt-4 w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
