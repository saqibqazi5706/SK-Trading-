import MachineGrid from "../../components/MachineGrid";
import { machines } from "@/lib/machines";

export default function InjectionMouldingPage() {
  const filtered = machines.filter(
    (machine) => machine.category === "injection-moulding"
  );

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Plastic Injection Moulding Machines
          </h1>
          <p className="mt-2 text-slate-600">
            Quality used and brand new injection moulding machines imported
            from China and Japan.
          </p>
        </div>
        <MachineGrid machines={filtered} />
      </div>
    </main>
  );
}
