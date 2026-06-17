import { Accessory } from "@/lib/sanity/accessories";
import AccessoryCard from "./AccessoryCard";

export default function AccessoryGrid({
  accessories,
}: {
  accessories: Accessory[];
}) {
  if (accessories.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
        No accessories found in this category right now.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {accessories.map((accessory) => (
        <AccessoryCard key={accessory._id} accessory={accessory} />
      ))}
    </div>
  );
}
