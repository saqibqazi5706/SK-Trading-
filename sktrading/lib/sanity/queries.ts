import { type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type MachineCategory =
  | "Plastic Injection Moulding Machine"
  | "Aluminum Die Casting Machine";

export interface MachineSpec {
  label: string;
  value: string;
}

export interface Machine {
  _id: string;
  name: string;
  slug: string;
  category: MachineCategory;
  brand?: string;
  origin?: string;
  year?: number;
  condition?: string;
  price?: number;
  description?: string;
  images?: SanityImageSource[];
  specs?: MachineSpec[];
  featured?: boolean;
}

// Short labels used for filter buttons / badges
export const categoryShortLabels: Record<MachineCategory, string> = {
  "Plastic Injection Moulding Machine": "Injection Moulding",
  "Aluminum Die Casting Machine": "Die Casting",
};

// Map the URL slugs used by the category pages to the stored category value
export const categoryBySlug: Record<string, MachineCategory> = {
  "injection-moulding": "Plastic Injection Moulding Machine",
  "die-casting": "Aluminum Die Casting Machine",
};

const machineFields = `
  _id,
  name,
  "slug": slug.current,
  category,
  brand,
  origin,
  year,
  condition,
  price,
  description,
  images,
  specs,
  featured
`;

// Revalidate at most every 30s so newly added machines appear without a rebuild
const fetchOptions = { next: { revalidate: 30 } } as const;

export async function getAllMachines(): Promise<Machine[]> {
  return client.fetch(
    `*[_type == "machine"] | order(_createdAt desc){${machineFields}}`,
    {},
    fetchOptions
  );
}

export async function getMachinesByCategory(
  category: MachineCategory
): Promise<Machine[]> {
  return client.fetch(
    `*[_type == "machine" && category == $category] | order(_createdAt desc){${machineFields}}`,
    { category },
    fetchOptions
  );
}

export async function getFeaturedMachines(): Promise<Machine[]> {
  const featured = await client.fetch<Machine[]>(
    `*[_type == "machine" && featured == true] | order(_createdAt desc)[0...4]{${machineFields}}`,
    {},
    fetchOptions
  );

  if (featured.length > 0) {
    return featured;
  }

  // Fall back to the most recent machines if none are marked featured
  return client.fetch(
    `*[_type == "machine"] | order(_createdAt desc)[0...4]{${machineFields}}`,
    {},
    fetchOptions
  );
}

export async function getMachineBySlug(slug: string): Promise<Machine | null> {
  return client.fetch(
    `*[_type == "machine" && slug.current == $slug][0]{${machineFields}}`,
    { slug },
    fetchOptions
  );
}

export async function getAllMachineSlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "machine" && defined(slug.current)].slug.current`,
    {},
    fetchOptions
  );
}
