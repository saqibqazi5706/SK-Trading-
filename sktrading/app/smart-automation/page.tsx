import { Mail, MapPin, MessageCircle, Cpu, Zap, Gauge, Wrench } from "lucide-react";
import {
  getAllSmartProducts,
  smartProductCategories,
} from "@/lib/sanity/smartProducts";
import SmartLogo from "@/app/components/smart/SmartLogo";
import SmartProductCard from "@/app/components/smart/SmartProductCard";
import ContactPeople from "@/app/components/ContactPeople";
import { smartContacts } from "@/lib/contacts";

const highlights = [
  { icon: Cpu, title: "PLC Systems", text: "Programmable logic controllers and PLC cards." },
  { icon: Zap, title: "Energy Saving", text: "Complete servo energy saving systems & components." },
  { icon: Gauge, title: "Brand New", text: "All products are brand new with available sizes." },
  { icon: Wrench, title: "Support", text: "Backed by SK Trading's service & expertise." },
];

export default async function SmartAutomationHome() {
  const products = await getAllSmartProducts();

  // Group products by category, preserving the defined category order.
  // All categories are shown (even empty ones) so the structure is visible.
  const grouped = smartProductCategories.map((cat) => ({
    category: cat.label,
    items: products.filter((p) => p.category === cat.label),
  }));

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <SmartLogo className="justify-center text-2xl sm:text-3xl" />
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Brand New Automation Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            PLC systems, complete servo energy saving systems, lubrication pumps,
            mould clamps and more — supplied brand new in a range of sizes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-md bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10">
                  <Icon className="text-sky-500" size={28} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">About Us</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Smart Automation is a company by SK Trading, focused exclusively on
            brand new automation products for the plastic and industrial
            machinery sector. From PLC systems and energy-saving servo solutions
            to lubrication pumps and mould clamps, we supply reliable components
            in a range of sizes — backed by the trust, service, and technical
            expertise of SK Trading.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            {/* Placeholder copy — replace with your final About text. */}
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Products
            </h2>
            <p className="mt-2 text-slate-600">
              Brand new automation products, available in multiple sizes.
            </p>
          </div>

          <div className="space-y-12">
            {grouped.map((group) => (
              <div key={group.category}>
                <h3 className="mb-5 border-l-4 border-sky-500 pl-3 text-lg font-bold text-slate-900">
                  {group.category}
                </h3>
                {group.items.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-400">
                    Products coming soon.
                  </p>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {group.items.map((product) => (
                      <SmartProductCard key={product._id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>
              <p className="mt-3 text-slate-300">
                Interested in any of our automation products? Reach out and we&apos;ll
                help you find the right solution and size.
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

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sky-400" />
                <a href="mailto:info@smartautomation.com" className="hover:text-sky-400">
                  info@smartautomation.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-sky-400" />
                Sharif Garden, Lahore, Pakistan
              </li>
            </ul>
          </div>

          <div className="mt-12 lg:col-span-2">
            <ContactPeople
              people={smartContacts}
              title="Our Contacts"
              subtitle="Reach our team directly by call or WhatsApp."
              variant="dark"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
