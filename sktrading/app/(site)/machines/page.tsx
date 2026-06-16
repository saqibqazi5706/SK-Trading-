import MachinesExplorer from "@/app/components/MachinesExplorer";
import { getAllMachines } from "@/lib/sanity/queries";

export default async function AllMachinesPage() {
  const machines = await getAllMachines();

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            All Machines
          </h1>
          <p className="mt-2 text-slate-600">
            Browse our full inventory of used industrial machines.
          </p>
        </div>
        <MachinesExplorer machines={machines} />
      </div>
    </main>
  );
}
