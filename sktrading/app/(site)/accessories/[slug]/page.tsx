import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAccessoryBySlug,
  getAllAccessorySlugs,
} from "@/lib/sanity/accessories";
import { urlFor } from "@/lib/sanity/image";
import BackButton from "@/app/components/BackButton";

export async function generateStaticParams() {
  const slugs = await getAllAccessorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function AccessoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accessory = await getAccessoryBySlug(slug);

  if (!accessory) {
    notFound();
  }

  const firstImage = accessory.images?.[0];
  const imageSrc = firstImage
    ? urlFor(firstImage).width(800).height(800).fit("crop").url()
    : "/placeholder-machine.svg";

  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BackButton fallbackHref="/accessories" />

        <div className="grid gap-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm sm:grid-cols-2 sm:p-8">
          <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-full sm:min-h-[20rem]">
            <Image
              src={imageSrc}
              alt={accessory.name}
              fill
              className="object-cover"
              priority
            />
            <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
              {accessory.category}
            </span>
          </div>

          <div className="flex flex-col">
            {(accessory.brand || accessory.origin) && (
              <span className="inline-block w-fit rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                {[accessory.brand, accessory.origin].filter(Boolean).join(" · ")}
              </span>
            )}
            <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
              {accessory.name}
            </h1>
            {accessory.description && (
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {accessory.description}
              </p>
            )}

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {accessory.condition && (
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Condition</dt>
                  <dd className="font-semibold text-slate-900 dark:text-slate-50">
                    {accessory.condition}
                  </dd>
                </div>
              )}
              {accessory.brand && (
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Brand</dt>
                  <dd className="font-semibold text-slate-900 dark:text-slate-50">
                    {accessory.brand}
                  </dd>
                </div>
              )}
              {accessory.origin && (
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Origin</dt>
                  <dd className="font-semibold text-slate-900 dark:text-slate-50">
                    {accessory.origin}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-slate-500 dark:text-slate-400">Price</dt>
                <dd className="font-semibold text-slate-900 dark:text-slate-50">
                  {accessory.price
                    ? `Rs ${accessory.price.toLocaleString()}`
                    : "Contact for Price"}
                </dd>
              </div>
            </dl>

            {accessory.specs && accessory.specs.length > 0 && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Specifications
                </h2>
                <dl className="mt-2 divide-y divide-slate-100 border-t border-slate-100 text-sm">
                  {accessory.specs.map((spec) => (
                    <div
                      key={`${spec.label}-${spec.value}`}
                      className="flex justify-between py-2"
                    >
                      <dt className="text-slate-500 dark:text-slate-400">{spec.label}</dt>
                      <dd className="font-medium text-slate-900 dark:text-slate-50">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <button className="mt-8 w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto sm:self-start sm:px-8">
              Inquire About This Accessory
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
