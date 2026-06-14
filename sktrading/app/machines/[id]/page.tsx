import Image from "next/image";
import { notFound } from "next/navigation";
import { machines, categoryLabels } from "@/lib/machines";
import BackButton from "@/app/components/BackButton";

export function generateStaticParams() {
  return machines.map((machine) => ({ id: machine.id }));
}

export default async function MachineDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const machine = machines.find((m) => m.id === id);

  if (!machine) {
    notFound();
  }

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BackButton fallbackHref="/machines" />

        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
          <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-full">
            <Image
              src={machine.image}
              alt={machine.name}
              fill
              className="object-cover"
              priority
            />
            <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
              {categoryLabels[machine.category]}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="inline-block w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
              {machine.brand} &middot; {machine.origin}
            </span>
            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              {machine.name}
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {machine.description}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-slate-500">Tonnage</dt>
                <dd className="font-semibold text-slate-900">{machine.tonnage}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Year</dt>
                <dd className="font-semibold text-slate-900">{machine.year}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Condition</dt>
                <dd className="font-semibold text-slate-900">{machine.condition}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Brand</dt>
                <dd className="font-semibold text-slate-900">{machine.brand}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Origin</dt>
                <dd className="font-semibold text-slate-900">{machine.origin}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Price</dt>
                <dd className="font-semibold text-slate-900">{machine.price}</dd>
              </div>
            </dl>

            <button className="mt-8 w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto sm:self-start sm:px-8">
              Inquire About This Machine
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
