import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata = pageMetadata(
  "Tax Consulting Services",
  "Explore GST registration, GST return filing, income tax filing, TDS filing, company incorporation, LLP registration, startup registration, MSME registration, trademark registration, and accounting services.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="container">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            End-to-end tax, registration, and compliance services
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Build, operate, and grow your business with expert filing, advisory, and compliance support.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Professional services for every stage of business"
            description="Choose the service you need today, or speak with us to build a monthly compliance plan."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            align="left"
            eyebrow="Need Help Choosing?"
            title="Get the right compliance path before you file"
            description="Tell us your business type, current filings, and deadlines. We will recommend the right next step."
          />
          <LeadForm title="Request Service Guidance" />
        </div>
      </section>
    </>
  );
}
