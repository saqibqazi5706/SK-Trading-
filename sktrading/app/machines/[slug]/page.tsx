import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getMachineBySlug,
  getAllMachineSlugs,
  categoryShortLabels,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import BackButton from "@/app/components/BackButton";

export async function generateStaticParams() {
  const slugs = await getAllMachineSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function MachineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const machine = await getMachineBySlug(slug);

  if (!machine) {
    notFound();
  }

  const firstImage = machine.images?.[0];
  const imageSrc = firstImage
    ? urlFor(firstImage).width(800).height(800).fit("crop").url()
    : "/placeholder-machine.svg";

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BackButton fallbackHref="/machines" />

        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
          <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-full sm:min-h-[20rem]">
            <Image
              src={imageSrc}
              alt={machine.name}
              fill
              className="object-cover"
              priority
            />
            <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
              {categoryShortLabels[machine.category]}
            </span>
          </div>

          <div className="flex flex-col">
            {(machine.brand || machine.origin) && (
              <span className="inline-block w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                {[machine.brand, machine.origin].filter(Boolean).join(" · ")}
              </span>
            )}
            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              {machine.name}
            </h1>
            {machine.description && (
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {machine.description}
              </p>
            )}

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {machine.year && (
                <div>
                  <dt className="text-slate-500">Year</dt>
                  <dd className="font-semibold text-slate-900">{machine.year}</dd>
                </div>
              )}
              {machine.condition && (
                <div>
                  <dt className="text-slate-500">Condition</dt>
                  <dd className="font-semibold text-slate-900">
                    {machine.condition}
                  </dd>
                </div>
              )}
              {machine.brand && (
                <div>
                  <dt className="text-slate-500">Brand</dt>
                  <dd className="font-semibold text-slate-900">{machine.brand}</dd>
                </div>
              )}
              {machine.origin && (
                <div>
                  <dt className="text-slate-500">Origin</dt>
                  <dd className="font-semibold text-slate-900">
                    {machine.origin}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-slate-500">Price</dt>
                <dd className="font-semibold text-slate-900">
                  {machine.price
                    ? `Rs ${machine.price.toLocaleString()}`
                    : "Contact for Price"}
                </dd>
              </div>
            </dl>

            {machine.specs && machine.specs.length > 0 && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Specifications
                </h2>
                <dl className="mt-2 divide-y divide-slate-100 border-t border-slate-100 text-sm">
                  {machine.specs.map((spec) => (
                    <div
                      key={`${spec.label}-${spec.value}`}
                      className="flex justify-between py-2"
                    >
                      <dt className="text-slate-500">{spec.label}</dt>
                      <dd className="font-medium text-slate-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <button className="mt-8 w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto sm:self-start sm:px-8">
              Inquire About This Machine
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
