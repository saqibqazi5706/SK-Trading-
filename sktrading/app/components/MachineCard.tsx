import Image from "next/image";
import Link from "next/link";
import { Machine, categoryShortLabels } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export default function MachineCard({ machine }: { machine: Machine }) {
  const firstImage = machine.images?.[0];
  const imageSrc = firstImage
    ? urlFor(firstImage).width(600).height(400).fit("crop").url()
    : "/placeholder-machine.svg";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md">
      <Link href={`/machines/${machine.slug}`} className="flex flex-1 flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={machine.name}
            fill
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
            {categoryShortLabels[machine.category]}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          {(machine.brand || machine.origin) && (
            <span className="inline-block w-fit rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
              {[machine.brand, machine.origin].filter(Boolean).join(" · ")}
            </span>
          )}
          <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-50 hover:text-red-600">
            {machine.name}
          </h3>
          {machine.description && (
            <p className="mt-1 line-clamp-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {machine.description}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-300">
            {machine.year && <span>Year: {machine.year}</span>}
            {machine.condition && <span>Condition: {machine.condition}</span>}
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
