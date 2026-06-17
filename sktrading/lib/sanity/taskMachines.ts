import { type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export interface TaskMachineSpec {
  label: string;
  value: string;
}

export interface TaskMachine {
  _id: string;
  name: string;
  slug: string;
  tonnage?: string;
  description?: string;
  sizes?: string[];
  images?: SanityImageSource[];
  specs?: TaskMachineSpec[];
  order?: number;
  featured?: boolean;
}

const taskMachineFields = `
  _id,
  name,
  "slug": slug.current,
  tonnage,
  description,
  sizes,
  images,
  specs,
  order,
  featured
`;

const fetchOptions = { next: { revalidate: 30 } } as const;

export async function getAllTaskMachines(): Promise<TaskMachine[]> {
  return client.fetch(
    `*[_type == "taskMachine"] | order(coalesce(order, 9999) asc, name asc){${taskMachineFields}}`,
    {},
    fetchOptions
  );
}

export async function getTaskMachineBySlug(
  slug: string
): Promise<TaskMachine | null> {
  return client.fetch(
    `*[_type == "taskMachine" && slug.current == $slug][0]{${taskMachineFields}}`,
    { slug },
    fetchOptions
  );
}
