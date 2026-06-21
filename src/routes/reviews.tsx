import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | MCR Pure Manchester Cleaners" },
      { name: "description", content: "Read real reviews from MCR Pure customers across Manchester. Punctual, professional, spotless cleaning." },
      { property: "og:title", content: "Customer Reviews | MCR Pure" },
      { property: "og:description", content: "What Manchester customers say about MCR Pure." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sarah J.", area: "Didsbury", date: "March 2026", quote: "Absolutely spotless every single time. Anya and her team are punctual, friendly and incredibly thorough — the most thorough deep clean I've had in 10 years living here." },
  { name: "James R.", area: "Salford Quays", date: "February 2026", quote: "Best cleaning company in Manchester. We've used MCR Pure for our office for two years now and they've never missed a session. Highly professional." },
  { name: "Priya K.", area: "Chorlton", date: "February 2026", quote: "End-of-tenancy clean was flawless. Got our full deposit back without a single dispute from the landlord. Worth every penny." },
  { name: "Mark D.", area: "Northern Quarter", date: "January 2026", quote: "Booked a same-day clean before a viewing — they were at the flat within 3 hours and it looked like a show home. Lifesavers." },
  { name: "Emily T.", area: "Altrincham", date: "January 2026", quote: "Reliable, punctual and genuinely lovely people. I've recommended MCR Pure to all my neighbours and friends in the area." },
  { name: "Daniel O.", area: "Ancoats", date: "December 2025", quote: "Carpet cleaning brought our living room back to life. Stains I thought were permanent — completely gone. Very impressed with the equipment they use." },
];

function ReviewsPage() {
  return (
    <Layout>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Reviews</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
            Loved by Manchester
          </h1>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-0.5 text-brand-green">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-brand-navy">4.9 / 5 from 320+ reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name + r.date} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6">
                <div className="mb-3 flex gap-0.5 text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="grow text-base leading-relaxed text-slate-700">"{r.quote}"</p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-sm">
                  <p className="font-bold text-brand-navy">{r.name}</p>
                  <p className="text-slate-500">{r.area} • {r.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Join 2,000+ happy customers" subtitle="Get your free quote today." />
    </Layout>
  );
}
