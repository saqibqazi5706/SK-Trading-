import { Phone, MessageCircle, User } from "lucide-react";
import { ContactPerson, formatPhone } from "@/lib/contacts";

export default function ContactPeople({
  people,
  title = "Talk to Our Team",
  subtitle = "Reach the right person directly by call or WhatsApp.",
  variant = "light",
}: {
  people: ContactPerson[];
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  const accent = variant === "dark" ? "text-sky-400" : "text-red-500";
  const accentBg = variant === "dark" ? "bg-sky-500/10" : "bg-red-500/10";
  const headingColor = variant === "dark" ? "text-white" : "text-slate-900 dark:text-slate-50";
  const subColor = variant === "dark" ? "text-slate-300" : "text-slate-600 dark:text-slate-300";
  const cardClass =
    variant === "dark"
      ? "border-slate-800 bg-slate-900"
      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900";
  const nameColor = variant === "dark" ? "text-white" : "text-slate-900 dark:text-slate-50";

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className={`text-2xl font-bold sm:text-3xl ${headingColor}`}>
          {title}
        </h2>
        <p className={`mt-2 ${subColor}`}>{subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => {
          const wa = person.whatsapp || person.phone;
          return (
            <div
              key={`${person.name}-${person.phone}`}
              className={`rounded-lg border p-6 shadow-sm ${cardClass}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${accentBg}`}
                >
                  <User className={accent} size={22} />
                </div>
                <div>
                  <h3 className={`text-base font-semibold ${nameColor}`}>
                    {person.name}
                  </h3>
                  {person.role && (
                    <p className={`text-xs ${subColor}`}>{person.role}</p>
                  )}
                </div>
              </div>

              <p className={`mt-4 text-sm ${subColor}`}>
                {formatPhone(person.phone)}
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href={`tel:+${person.phone}`}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  <Phone size={15} />
                  Call
                </a>
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
