import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-red-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Looking for a specific machine?
        </h2>
        <p className="mt-3 text-slate-300">
          Get in touch with us and we&apos;ll help you find the right machine
          for your production needs.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-red-500 px-8 py-3 text-sm font-semibold text-slate-900 dark:text-slate-50 transition hover:bg-red-400"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
