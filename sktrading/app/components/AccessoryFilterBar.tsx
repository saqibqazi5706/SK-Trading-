import Link from "next/link";
import { Filter } from "lucide-react";
import { accessoryCategories } from "@/lib/sanity/accessories";

const tabClass = (active: boolean) =>
  `rounded-full px-4 py-1.5 text-sm font-medium transition ${
    active
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-600 hover:bg-slate-100"
  }`;

// activeSlug is "all" for the main accessories page, or a category slug
export default function AccessoryFilterBar({
  activeSlug,
}: {
  activeSlug: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
        <Filter size={16} />
        Filter:
      </span>
      <Link href="/accessories" className={tabClass(activeSlug === "all")}>
        All
      </Link>
      {accessoryCategories.map((c) => (
        <Link
          key={c.slug}
          href={`/accessories/category/${c.slug}`}
          className={tabClass(activeSlug === c.slug)}
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}
