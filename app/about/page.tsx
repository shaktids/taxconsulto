import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About TaxConsulto.com",
  "Learn about TaxConsulto.com, our mission, vision, and expert team helping Indian businesses stay compliant.",
  "/about"
);

const team = [
  { name: "CA Advisory Team", role: "GST, income tax, and audit-aligned compliance guidance" },
  { name: "Registration Desk", role: "Company, LLP, MSME, startup, and trademark filing coordination" },
  { name: "Accounting Team", role: "Bookkeeping, reconciliations, ledgers, and monthly reporting" }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="container">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">About Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            A compliance partner built for modern Indian businesses
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            TaxConsulto.com brings tax filing, business registration, accounting, and compliance advisory into one professional service experience.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Company Story"
              title="Built to make compliance predictable"
              description="We started TaxConsulto.com to help entrepreneurs, professionals, and SMEs avoid last-minute filing stress. Our process focuses on clear document lists, expert review, timely communication, and dependable delivery."
            />
          </div>
          <div className="grid gap-5">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-navy-950">Mission</h2>
              <p className="mt-3 leading-7 text-slate-600">
                To simplify tax and compliance for businesses through accurate filings, proactive guidance, and responsive support.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-navy-950">Vision</h2>
              <p className="mt-3 leading-7 text-slate-600">
                To become India&apos;s trusted digital-first consulting partner for GST, tax, registration, and business compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeader eyebrow="Team" title="Specialists for every compliance need" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-navy-950 text-xl font-black text-gold-300">
                  TC
                </div>
                <h2 className="mt-5 text-xl font-black text-navy-950">{member.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            align="left"
            eyebrow="Work With Us"
            title="Let our team review your compliance needs"
            description="A quick consultation can help identify deadlines, filings, registrations, and documentation gaps."
          />
          <LeadForm />
        </div>
      </section>
    </>
  );
}
