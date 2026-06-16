import { type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type AccessoryCategory =
  | "Crusher"
  | "Mixer"
  | "Auto Loader"
  | "Hopper Dryer"
  | "Screw Air Compressors"
  | "Piston Air Compressors";

export interface AccessorySpec {
  label: string;
  value: string;
}

export interface Accessory {
  _id: string;
  name: string;
  slug: string;
  category: AccessoryCategory;
  brand?: string;
  origin?: string;
  condition?: string;
  price?: number;
  description?: string;
  images?: SanityImageSource[];
  specs?: AccessorySpec[];
  featured?: boolean;
}

// Drives the navbar dropdown and the category pages
export const accessoryCategories: { label: AccessoryCategory; slug: string }[] = [
  { label: "Crusher", slug: "crusher" },
  { label: "Mixer", slug: "mixer" },
  { label: "Auto Loader", slug: "auto-loader" },
  { label: "Hopper Dryer", slug: "hopper-dryer" },
  { label: "Screw Air Compressors", slug: "screw-air-compressors" },
  { label: "Piston Air Compressors", slug: "piston-air-compressors" },
];

export const accessoryCategoryBySlug: Record<string, AccessoryCategory> =
  Object.fromEntries(accessoryCategories.map((c) => [c.slug, c.label]));

const accessoryFields = `
  _id,
  name,
  "slug": slug.current,
  category,
  brand,
  origin,
  condition,
  price,
  description,
  images,
  specs,
  featured
`;

const fetchOptions = { next: { revalidate: 30 } } as const;

export async function getAllAccessories(): Promise<Accessory[]> {
  return client.fetch(
    `*[_type == "accessory"] | order(_createdAt desc){${accessoryFields}}`,
    {},
    fetchOptions
  );
}

export async function getAccessoriesByCategory(
  category: AccessoryCategory
): Promise<Accessory[]> {
  return client.fetch(
    `*[_type == "accessory" && category == $category] | order(_createdAt desc){${accessoryFields}}`,
    { category },
    fetchOptions
  );
}

export async function getAccessoryBySlug(
  slug: string
): Promise<Accessory | null> {
  return client.fetch(
    `*[_type == "accessory" && slug.current == $slug][0]{${accessoryFields}}`,
    { slug },
    fetchOptions
  );
}

export async function getAllAccessorySlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "accessory" && defined(slug.current)].slug.current`,
    {},
    fetchOptions
  );
}
