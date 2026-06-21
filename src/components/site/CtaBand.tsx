import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./Layout";

export function CtaBand({
  title = "Ready for a sparkling clean home?",
  subtitle = "Get a free no-obligation quote in under 60 seconds.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand-navy py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 rounded-xl bg-brand-green px-7 py-4 font-bold text-white shadow-xl shadow-brand-green/20 transition-all hover:bg-brand-green-dark"
          >
            <Phone className="size-5" /> Call {PHONE_DISPLAY}
          </a>
          <Link
            to="/contact"
            className="rounded-xl border-2 border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition-all hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
