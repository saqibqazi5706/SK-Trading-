import { machines } from "@/lib/machines";
import MachineCard from "./MachineCard";

export default function FeaturedMachines() {
  const featured = machines.slice(0, 4);

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
          {featured.map((machine) => (
            <div key={machine.id} className="min-w-[260px] flex-shrink-0 sm:min-w-0">
              <div className="h-full">
                <MachineCard machine={machine} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
