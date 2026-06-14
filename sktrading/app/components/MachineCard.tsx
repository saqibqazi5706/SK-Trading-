import Image from "next/image";
import Link from "next/link";
import { Machine, categoryLabels } from "@/lib/machines";

export default function MachineCard({ machine }: { machine: Machine }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/machines/${machine.id}`} className="flex flex-1 flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={machine.image}
            alt={machine.name}
            fill
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
            {categoryLabels[machine.category]}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <span className="inline-block w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
            {machine.brand} &middot; {machine.origin}
          </span>
          <h3 className="mt-2 text-sm font-semibold text-slate-900 hover:text-amber-600">
            {machine.name}
          </h3>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {machine.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
            <span>Tonnage: {machine.tonnage}</span>
            <span>Year: {machine.year}</span>
            <span>Condition: {machine.condition}</span>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Inquire
        </button>
      </div>
    </div>
  );
}
