import { notFound } from "next/navigation";
import AccessoryFilterBar from "../../../components/AccessoryFilterBar";
import AccessoryGrid from "../../../components/AccessoryGrid";
import {
  getAccessoriesByCategory,
  accessoryCategories,
  accessoryCategoryBySlug,
} from "@/lib/sanity/accessories";

export function generateStaticParams() {
  return accessoryCategories.map((c) => ({ slug: c.slug }));
}

export default async function AccessoryCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = accessoryCategoryBySlug[slug];

  if (!category) {
    notFound();
  }

  const accessories = await getAccessoriesByCategory(category);

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {category}
          </h1>
          <p className="mt-2 text-slate-600">
            Browse our range of {category.toLowerCase()}.
          </p>
        </div>
        <AccessoryFilterBar activeSlug={slug} />
        <AccessoryGrid accessories={accessories} />
      </div>
    </main>
  );
}
