import Image from "next/image";
import { TaskMachine } from "@/lib/sanity/taskMachines";
import { urlFor } from "@/lib/sanity/image";

export default function TaskMachineCard({ machine }: { machine: TaskMachine }) {
  const firstImage = machine.images?.[0];
  const imageSrc = firstImage
    ? urlFor(firstImage).width(600).height(400).fit("crop").url()
    : "/placeholder-machine.svg";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full">
        <Image src={imageSrc} alt={machine.name} fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          Brand New
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        {machine.tonnage && (
          <span className="inline-block w-fit rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
            {machine.tonnage}
          </span>
        )}
        <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-50">
          {machine.name}
        </h3>
        {machine.description && (
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {machine.description}
          </p>
        )}

        {machine.sizes && machine.sizes.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Available Sizes
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {machine.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {machine.specs && machine.specs.length > 0 && (
          <dl className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
            {machine.specs.map((spec) => (
              <div key={`${spec.label}-${spec.value}`} className="flex justify-between gap-2">
                <dt className="text-slate-500 dark:text-slate-400">{spec.label}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-50">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <a
          href="#contact"
          className="mt-4 w-full rounded-md bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Inquire
        </a>
      </div>
    </div>
  );
}
