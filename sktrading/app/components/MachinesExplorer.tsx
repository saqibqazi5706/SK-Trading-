"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { Machine, MachineCategory } from "@/lib/machines";
import MachineGrid from "./MachineGrid";

type FilterValue = "all" | MachineCategory;

const filters: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Injection Moulding", value: "injection-moulding" },
  { label: "Die Casting", value: "die-casting" },
];

export default function MachinesExplorer({ machines }: { machines: Machine[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredMachines =
    activeFilter === "all"
      ? machines
      : machines.filter((machine) => machine.category === activeFilter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
          <Filter size={16} />
          Filter:
        </span>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeFilter === filter.value
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <MachineGrid machines={filteredMachines} />
    </div>
  );
}
