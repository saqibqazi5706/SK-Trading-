import AccessoryFilterBar from "@/app/components/AccessoryFilterBar";
import AccessoryGrid from "@/app/components/AccessoryGrid";
import { getAllAccessories } from "@/lib/sanity/accessories";

export default async function AllAccessoriesPage() {
  const accessories = await getAllAccessories();

  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
            Accessories
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Browse our range of machine accessories and spare parts.
          </p>
        </div>
        <AccessoryFilterBar activeSlug="all" />
        <AccessoryGrid accessories={accessories} />
      </div>
    </main>
  );
}
