import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";
import { MapPin, Users, Wrench, Leaf, Clock } from "lucide-react";
import heroImg from "@/assets/hero-cleaner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MCR Pure | Local Manchester Cleaning Company" },
      { name: "description", content: "MCR Pure is a Manchester-based cleaning company with trained staff, professional equipment and eco-friendly products. Reliable and punctual." },
      { property: "og:title", content: "About MCR Pure | Local Manchester Cleaning Company" },
      { property: "og:description", content: "Trained, vetted cleaners serving Manchester since 2012." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: MapPin, title: "Local Manchester company", desc: "Founded in Manchester in 2012. We know every postcode, every neighbourhood — and we live here too." },
  { icon: Users, title: "Trained & verified staff", desc: "Every cleaner is DBS-checked, fully insured and trained to a documented MCR Pure standard." },
  { icon: Wrench, title: "Professional equipment", desc: "Commercial-grade vacuums, steam cleaners and extraction machines for hotel-quality results." },
  { icon: Leaf, title: "Eco-friendly products", desc: "Plant-based, non-toxic supplies that are safe for children, pets and Manchester's waterways." },
  { icon: Clock, title: "Reliable & punctual", desc: "We show up on time, every time — with real-time arrival updates and a friendly uniformed team." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">About Us</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
              Manchester's friendly, family-run cleaning company
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              MCR Pure was founded in 2012 by two Mancunians fed up with unreliable, faceless cleaning
              services. Today, our trusted local team cleans more than 2,000 homes and offices across
              Greater Manchester.
            </p>
            <p className="mt-4 text-slate-600">
              We believe a great clean starts with great people — that's why every member of our team
              is trained, insured and treated like family.
            </p>
          </div>
          <div>
            <img
              src={heroImg}
              alt="MCR Pure cleaner in a Manchester home"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-100 bg-white p-7">
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                  <p.icon className="size-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Cleaning you can trust" subtitle="Join 2,000+ Manchester customers who rely on MCR Pure." />
    </Layout>
  );
}
