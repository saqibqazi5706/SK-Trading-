import AccessoryFilterBar from "../components/AccessoryFilterBar";
import AccessoryGrid from "../components/AccessoryGrid";
import { getAllAccessories } from "@/lib/sanity/accessories";

export default async function AllAccessoriesPage() {
  const accessories = await getAllAccessories();

  return (
    <main className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Accessories
          </h1>
          <p className="mt-2 text-slate-600">
            Browse our range of machine accessories and spare parts.
          </p>
        </div>
        <AccessoryFilterBar activeSlug="all" />
        <AccessoryGrid accessories={accessories} />
      </div>
    </main>
  );
}
