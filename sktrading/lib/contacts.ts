export interface ContactPerson {
  name: string;
  role?: string;
  // Use full international format without "+" or spaces, e.g. "923004079337"
  phone: string;
  // Optional separate WhatsApp number; falls back to phone if omitted
  whatsapp?: string;
}

// SK Trading contacts — replace with real names/numbers
export const skContacts: ContactPerson[] = [
  { name: "Contact Person 1", role: "Sales", phone: "923004079337" },
  { name: "Contact Person 2", role: "Spare Parts", phone: "923004079337" },
  { name: "Contact Person 3", role: "Imports", phone: "923004079337" },
];

// Smart Automation contacts — replace with real names/numbers
export const smartContacts: ContactPerson[] = [
  { name: "Contact Person 1", role: "Sales", phone: "923004079337" },
  { name: "Contact Person 2", role: "Technical", phone: "923004079337" },
  { name: "Contact Person 3", role: "Support", phone: "923004079337" },
];

export function formatPhone(num: string): string {
  // Display helper: "923004079337" -> "+92 300 4079337"
  if (num.startsWith("92") && num.length === 12) {
    return `+92 ${num.slice(2, 5)} ${num.slice(5)}`;
  }
  return `+${num}`;
}
