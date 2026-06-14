export type MachineCategory = "injection-moulding" | "die-casting";

export interface Machine {
  id: string;
  name: string;
  category: MachineCategory;
  brand: string;
  origin: string;
  year: number;
  tonnage: string;
  condition: string;
  price: string;
  image: string;
  description: string;
}

export const categoryLabels: Record<MachineCategory, string> = {
  "injection-moulding": "Injection Moulding",
  "die-casting": "Die Casting",
};

export const machines: Machine[] = [
  {
    id: "im-250-toshiba",
    name: "Used Injection Moulding Machine - 250 Ton",
    category: "injection-moulding",
    brand: "Toshiba",
    origin: "Japan",
    year: 2014,
    tonnage: "250 Ton",
    condition: "Good",
    price: "Contact for Price",
    image: "/machines/machine-1.jpg.png",
    description:
      "Servo motor driven, well-maintained 250 ton injection moulding machine, tested and ready for production.",
  },
  {
    id: "im-350-haitian",
    name: "Used Injection Moulding Machine - 350 Ton",
    category: "injection-moulding",
    brand: "Haitian",
    origin: "China",
    year: 2016,
    tonnage: "350 Ton",
    condition: "Excellent",
    price: "Contact for Price",
    image: "/machines/machine-2.jpg.png",
    description:
      "Twin platen design, low energy consumption, suitable for medium to large plastic components.",
  },
  {
    id: "im-450-niigata",
    name: "Used Injection Moulding Machine - 450 Ton",
    category: "injection-moulding",
    brand: "Niigata",
    origin: "Japan",
    year: 2012,
    tonnage: "450 Ton",
    condition: "Good",
    price: "Contact for Price",
    image: "/machines/machine-3.jpg.png",
    description:
      "Hydraulic system fully serviced, ready to ship, ideal for industrial-grade plastic moulding.",
  },
  {
    id: "im-650-task",
    name: "Brand New Injection Moulding Machine - 650 Ton",
    category: "injection-moulding",
    brand: "Task",
    origin: "China (Own Brand)",
    year: 2024,
    tonnage: "650 Ton",
    condition: "Brand New",
    price: "Contact for Price",
    image: "/placeholder-machine.svg",
    description:
      "Manufactured under our own brand Task and imported directly to Pakistan, with full manufacturer warranty.",
  },
  {
    id: "dc-280-toyo",
    name: "Aluminum Die Casting Machine - 280 Ton",
    category: "die-casting",
    brand: "Toyo",
    origin: "Japan",
    year: 2013,
    tonnage: "280 Ton",
    condition: "Good",
    price: "Contact for Price",
    image: "/machines/machine-1.jpg.png",
    description:
      "Cold chamber die casting machine, tested under load, suitable for automotive and hardware parts.",
  },
  {
    id: "dc-350-ube",
    name: "Aluminum Die Casting Machine - 350 Ton",
    category: "die-casting",
    brand: "UBE",
    origin: "Japan",
    year: 2011,
    tonnage: "350 Ton",
    condition: "Fair",
    price: "Contact for Price",
    image: "/machines/machine-2.jpg.png",
    description:
      "Reliable cold chamber machine with proven track record, suitable for high-volume die casting.",
  },
  {
    id: "dc-450-toshiba",
    name: "Aluminum Die Casting Machine - 450 Ton",
    category: "die-casting",
    brand: "Toshiba",
    origin: "Japan",
    year: 2015,
    tonnage: "450 Ton",
    condition: "Excellent",
    price: "Contact for Price",
    image: "/machines/machine-3.jpg.png",
    description:
      "High-tonnage die casting machine, recently overhauled, ideal for larger aluminum components.",
  },
  {
    id: "dc-180-toyo",
    name: "Aluminum Die Casting Machine - 180 Ton",
    category: "die-casting",
    brand: "Toyo",
    origin: "Japan",
    year: 2010,
    tonnage: "180 Ton",
    condition: "Good",
    price: "Contact for Price",
    image: "/placeholder-machine.svg",
    description:
      "Compact die casting machine suitable for small to medium aluminum parts, fully inspected.",
  },
];
