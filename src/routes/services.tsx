import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, Sparkles, Hammer, Truck, Sofa, Stairs, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning Services in Manchester | MCR Pure" },
      { name: "description", content: "Apartment, house, office, deep, end-of-tenancy, post-construction, carpet & staircase cleaning across Manchester. Free quotes." },
      { property: "og:title", content: "Cleaning Services in Manchester | MCR Pure" },
      { property: "og:description", content: "Full range of professional cleaning services for homes and businesses in Manchester." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, name: "Apartment Cleaning", desc: "Regular or one-off cleans for flats and apartments across central Manchester." },
  { icon: Home, name: "House Cleaning", desc: "Weekly, fortnightly or monthly recurring cleaning for busy families." },
  { icon: Building2, name: "Office Cleaning", desc: "Daily, weekly and bespoke commercial contracts for Manchester businesses." },
  { icon: Sparkles, name: "Deep Cleaning", desc: "Intensive top-to-bottom cleans — appliances, grout, behind furniture." },
  { icon: Hammer, name: "Post-Construction", desc: "Builders' clean to remove dust, debris and protective film after renovations." },
  { icon: Truck, name: "Move-In / Move-Out", desc: "End-of-tenancy cleaning with deposit-back guarantee." },
  { icon: Sofa, name: "Sofa & Carpet Cleaning", desc: "Professional hot-water extraction for upholstery, rugs and carpets." },
  { icon: Stairs, name: "Staircase & Communal Areas", desc: "Recurring cleaning for blocks of flats, HMOs and commercial buildings." },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Our Services</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
            Cleaning services for every Manchester space
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            From a quick studio refresh to full post-construction cleans — our trained Manchester teams handle it all.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.name}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-blue"
                >
                  Get a quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-100 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
              Every clean comes with...
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Insured, DBS-checked staff",
                "Professional-grade equipment",
                "Eco-friendly, non-toxic products",
                "Transparent flat-rate pricing",
                "Flexible scheduling (evenings & weekends)",
                "100% satisfaction re-clean guarantee",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-green" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Need a custom service?" subtitle="Call us and we'll tailor a cleaning plan to your needs." />
    </Layout>
  );
}
