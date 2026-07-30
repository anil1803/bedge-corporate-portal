import Link from "next/link";
import { company } from "@/lib/brochure-data";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex flex-col leading-none" aria-label={company.name}>
      <span className="text-3xl font-light tracking-[0.08em] text-bedge-blue sm:text-4xl">
        B<span className="text-slate-400">-</span>
        <span className="relative text-slate-600">
          EDGE
          <span className="absolute -top-1 left-2 h-1 w-8 rounded-full bg-slate-500" />
          <span className="absolute -bottom-1 right-1 h-1 w-7 rounded-full bg-slate-500" />
        </span>
      </span>
      <span className="mt-2 text-[0.65rem] font-semibold tracking-[0.26em] text-bedge-deep sm:text-xs">
        BUSINESS CONSULTANTS LLP
      </span>
    </Link>
  );
}
