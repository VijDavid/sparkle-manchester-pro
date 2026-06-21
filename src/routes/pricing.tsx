import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone } from "lucide-react";
import { Layout, PHONE_DISPLAY, PHONE_TEL } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cleaning Prices in Manchester | MCR Pure" },
      { name: "description", content: "Transparent cleaning prices in Manchester. Apartment from £65, house from £115, office quotes available. No hidden fees." },
      { property: "og:title", content: "Cleaning Prices in Manchester | MCR Pure" },
      { property: "og:description", content: "Transparent, honest pricing — starting from £65." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Apartment / Studio",
    price: "£65",
    sub: "from / visit",
    features: ["Up to 2 bedrooms", "Kitchen & bathroom clean", "Vacuum, mop & dust", "Eco-friendly products", "Insurance included"],
    cta: "Book Apartment Clean",
    highlight: false,
  },
  {
    name: "Family House",
    price: "£115",
    sub: "from / visit",
    features: ["Up to 4 bedrooms", "Deep kitchen clean", "All bathrooms sanitized", "Window interiors", "Re-clean guarantee"],
    cta: "Book House Clean",
    highlight: true,
  },
  {
    name: "Office / Custom",
    price: "Custom",
    sub: "tailored quote",
    features: ["Daily, weekly or monthly", "Out-of-hours scheduling", "Commercial-grade equipment", "Dedicated account manager", "Fully invoiced"],
    cta: "Request a Quote",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <Layout>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Pricing</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
            Transparent cleaning prices
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            No hidden fees. No surprises. Just professional cleaning at honest, flat prices —
            with a 100% satisfaction guarantee on every job.
          </p>
        </div>
      </section>

      <section className="bg-brand-navy py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((p) => {
              const cardClass = p.highlight
                ? "bg-brand-blue text-white shadow-2xl md:scale-105"
                : "border border-white/10 bg-white/5 text-white backdrop-blur";
              return (
                <div key={p.name} className={`relative rounded-2xl p-8 ${cardClass}`}>
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold">{p.price}</span>
                    <span className={`text-sm ${p.highlight ? "text-blue-100" : "text-slate-400"}`}>
                      {p.sub}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? "text-blue-50" : "text-slate-300"}`}>
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-bold transition-all ${
                      p.highlight
                        ? "bg-white text-brand-navy hover:shadow-lg"
                        : "border border-white/20 text-white hover:bg-white hover:text-brand-navy"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Need a custom quote?
          </h2>
          <p className="mt-4 text-slate-600">
            Every property is different. Call our Manchester team for a tailored quote in under 60 seconds.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-7 py-4 font-bold text-white shadow-xl shadow-brand-blue/25 hover:bg-brand-blue-dark"
          >
            <Phone className="size-5" /> Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
