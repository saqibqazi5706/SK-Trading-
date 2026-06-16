import { type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type SmartProductCategory =
  | "PLC"
  | "Servo Energy Saving System"
  | "Cards for PLC System"
  | "Lubrication Pump"
  | "Mould Clamps";

export interface SmartProductSpec {
  label: string;
  value: string;
}

export interface SmartProduct {
  _id: string;
  name: string;
  slug: string;
  category: SmartProductCategory;
  description?: string;
  sizes?: string[];
  images?: SanityImageSource[];
  specs?: SmartProductSpec[];
  order?: number;
  featured?: boolean;
}

// Drives the Studio subsections and the website product sections
export const smartProductCategories: {
  label: SmartProductCategory;
  slug: string;
}[] = [
  { label: "PLC", slug: "plc" },
  { label: "Servo Energy Saving System", slug: "servo-energy-saving-system" },
  { label: "Cards for PLC System", slug: "cards-for-plc-system" },
  { label: "Lubrication Pump", slug: "lubrication-pump" },
  { label: "Mould Clamps", slug: "mould-clamps" },
];

export const smartProductCategoryBySlug: Record<string, SmartProductCategory> =
  Object.fromEntries(smartProductCategories.map((c) => [c.slug, c.label]));

const smartProductFields = `
  _id,
  name,
  "slug": slug.current,
  category,
  description,
  sizes,
  images,
  specs,
  order,
  featured
`;

const fetchOptions = { next: { revalidate: 30 } } as const;

export async function getAllSmartProducts(): Promise<SmartProduct[]> {
  return client.fetch(
    `*[_type == "smartProduct"] | order(coalesce(order, 9999) asc, name asc){${smartProductFields}}`,
    {},
    fetchOptions
  );
}

export async function getSmartProductsByCategory(
  category: SmartProductCategory
): Promise<SmartProduct[]> {
  return client.fetch(
    `*[_type == "smartProduct" && category == $category] | order(coalesce(order, 9999) asc, name asc){${smartProductFields}}`,
    { category },
    fetchOptions
  );
}

export async function getSmartProductBySlug(
  slug: string
): Promise<SmartProduct | null> {
  return client.fetch(
    `*[_type == "smartProduct" && slug.current == $slug][0]{${smartProductFields}}`,
    { slug },
    fetchOptions
  );
}
