import MachineGrid from "@/app/components/MachineGrid";
import { getMachinesByCategory } from "@/lib/sanity/queries";

export default async function DieCastingPage() {
  const machines = await getMachinesByCategory("Aluminum Die Casting Machine");

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Aluminum Die Casting Machines
          </h1>
          <p className="mt-2 text-slate-600">
            Reliable used die casting machines imported from Japan, ready for
            automotive and hardware applications.
          </p>
        </div>
        <MachineGrid machines={machines} />
      </div>
    </main>
  );
}
