import { Mail, MapPin, MessageCircle, Navigation, Factory, ShieldCheck, Ship, Headphones } from "lucide-react";
import { getAllTaskMachines } from "@/lib/sanity/taskMachines";
import TaskLogo from "@/app/components/task/TaskLogo";
import TaskMachineCard from "@/app/components/task/TaskMachineCard";

const MAPS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=31.58603118569452,74.41868451822218";

const highlights = [
  { icon: Factory, title: "Our Own Brand", text: "Task machines built to our specifications." },
  { icon: ShieldCheck, title: "Brand New", text: "Every machine is brand new with warranty." },
  { icon: Ship, title: "Imported by SK Trading", text: "Manufactured in China, imported to Pakistan." },
  { icon: Headphones, title: "After-Sales Support", text: "Backed by SK Trading's service & expertise." },
];

export default async function TaskHome() {
  const machines = await getAllTaskMachines();

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <TaskLogo className="h-20" />
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Brand New Injection Moulding Machines
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Task is SK Trading&apos;s own brand of brand new Plastic Injection
            Moulding Machines — manufactured to our specifications in China and
            imported to Pakistan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#models"
              className="rounded-md bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500"
            >
              View Models
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white dark:bg-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                  <Icon className="text-red-600" size={28} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">About Task</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Task is the in-house machine brand of SK Trading. We get brand new
            Plastic Injection Moulding Machines manufactured in China under our
            own name and import them to Pakistan — giving manufacturers access to
            dependable, brand new machines at competitive prices, backed by the
            trust and after-sales support of SK Trading.
          </p>
        </div>
      </section>

      {/* Models */}
      <section id="models" className="scroll-mt-20 bg-white dark:bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
              Our Models
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Brand new Task injection moulding machines, available in a range of
              tonnages.
            </p>
          </div>

          {machines.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 text-center text-sm text-slate-400">
              Models coming soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {machines.map((machine) => (
                <TaskMachineCard key={machine._id} machine={machine} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>
              <p className="mt-3 text-slate-300">
                Interested in a Task machine? Reach out and our team at SK Trading
                will help you choose the right model and tonnage.
              </p>
              <a
                href="https://wa.me/923004079337"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-red-500" />
                  <a href="mailto:info@sktrading.com" className="hover:text-red-500">
                    info@sktrading.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-red-500" />
                  SK Trading, Rajba Rd, Sharif Garden, Lahore, Pakistan
                </li>
              </ul>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg border border-slate-800 shadow-sm">
                <iframe
                  title="Task / SK Trading location"
                  src="https://www.google.com/maps?q=31.58603118569452,74.41868451822218&z=17&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
