import { Machine } from "@/lib/sanity/queries";
import MachineCard from "./MachineCard";

export default function MachineGrid({ machines }: { machines: Machine[] }) {
  if (machines.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-slate-500">
        No machines found in this category right now.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {machines.map((machine) => (
        <MachineCard key={machine._id} machine={machine} />
      ))}
    </div>
  );
}
