import { type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export interface SmartProductSpec {
  label: string;
  value: string;
}

export interface SmartProduct {
  _id: string;
  name: string;
  slug: string;
  group?: string;
  description?: string;
  sizes?: string[];
  images?: SanityImageSource[];
  specs?: SmartProductSpec[];
  order?: number;
  featured?: boolean;
}

const smartProductFields = `
  _id,
  name,
  "slug": slug.current,
  group,
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

export async function getSmartProductBySlug(
  slug: string
): Promise<SmartProduct | null> {
  return client.fetch(
    `*[_type == "smartProduct" && slug.current == $slug][0]{${smartProductFields}}`,
    { slug },
    fetchOptions
  );
}
