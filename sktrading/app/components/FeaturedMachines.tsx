import { getFeaturedMachines } from "@/lib/sanity/queries";
import MachineCard from "./MachineCard";

export default async function FeaturedMachines() {
  const featured = await getFeaturedMachines();

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
            Featured Machines
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            A few examples from our current stock.
          </p>
        </div>
        <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {featured.map((machine) => (
            <div key={machine._id} className="min-w-[260px] flex-shrink-0 sm:min-w-0">
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
