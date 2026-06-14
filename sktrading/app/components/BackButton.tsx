"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ fallbackHref }: { fallbackHref: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
      className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-amber-600"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}
