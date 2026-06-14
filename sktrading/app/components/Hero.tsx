import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-500">
            SK Trading
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Trusted Source for Quality Used Plastic Injection Moulding &amp; Die Casting Machines
          </h1>
          <p className="mt-6 text-base text-slate-300 sm:text-lg">
            We import and supply well-maintained, pre-owned industrial machinery directly
            from <span className="font-semibold text-white">China</span> and{" "}
            <span className="font-semibold text-white">Japan</span> — helping manufacturers
            scale up production at the right price.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/machines/injection-moulding"
              className="rounded-md bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              View Machines
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-amber-500 hover:text-amber-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
