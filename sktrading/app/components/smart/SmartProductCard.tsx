import Image from "next/image";
import { SmartProduct } from "@/lib/sanity/smartProducts";
import { urlFor } from "@/lib/sanity/image";

export default function SmartProductCard({
  product,
}: {
  product: SmartProduct;
}) {
  const firstImage = product.images?.[0];
  const imageSrc = firstImage
    ? urlFor(firstImage).width(600).height(400).fit("crop").url()
    : "/placeholder-machine.svg";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full">
        <Image src={imageSrc} alt={product.name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
        {product.description && (
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        )}

        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Available Sizes
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-700"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {product.specs && product.specs.length > 0 && (
          <dl className="mt-3 space-y-1 text-xs text-slate-600">
            {product.specs.map((spec) => (
              <div key={`${spec.label}-${spec.value}`} className="flex justify-between gap-2">
                <dt className="text-slate-500">{spec.label}</dt>
                <dd className="font-medium text-slate-900">{spec.value}</dd>
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
