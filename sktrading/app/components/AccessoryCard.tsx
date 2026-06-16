import Image from "next/image";
import Link from "next/link";
import { Accessory } from "@/lib/sanity/accessories";
import { urlFor } from "@/lib/sanity/image";

export default function AccessoryCard({ accessory }: { accessory: Accessory }) {
  const firstImage = accessory.images?.[0];
  const imageSrc = firstImage
    ? urlFor(firstImage).width(600).height(400).fit("crop").url()
    : "/placeholder-machine.svg";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/accessories/${accessory.slug}`} className="flex flex-1 flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={accessory.name}
            fill
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
            {accessory.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          {(accessory.brand || accessory.origin) && (
            <span className="inline-block w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
              {[accessory.brand, accessory.origin].filter(Boolean).join(" · ")}
            </span>
          )}
          <h3 className="mt-2 text-sm font-semibold text-slate-900 hover:text-amber-600">
            {accessory.name}
          </h3>
          {accessory.description && (
            <p className="mt-1 line-clamp-3 text-xs leading-5 text-slate-500">
              {accessory.description}
            </p>
          )}
          {accessory.condition && (
            <div className="mt-3 text-xs text-slate-600">
              Condition: {accessory.condition}
            </div>
          )}
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
