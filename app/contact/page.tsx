import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact TaxConsulto.com",
  "Contact TaxConsulto.com for GST filing, income tax filing, company registration, LLP registration, accounting, ROC compliance, and business consulting.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="container">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">Contact Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Speak with a tax and compliance expert
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Send an enquiry, call us, or connect instantly on WhatsApp for fast guidance.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader align="left" eyebrow="Contact Details" title="We are ready to help" />
            <div className="mt-8 grid gap-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-black text-navy-950">Phone</h2>
                <p className="mt-2 text-slate-600">+91 {siteConfig.phone}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-black text-navy-950">Email</h2>
                <p className="mt-2 text-slate-600">{siteConfig.email}</p>
              </div>
              <a
                className="focus-ring rounded-lg bg-[#1fa855] p-5 font-black text-white shadow-premium transition hover:bg-[#168a45]"
                href={`https://wa.me/${siteConfig.whatsapp}`}
              >
                WhatsApp Now
              </a>
            </div>
          </div>
          <LeadForm title="Send Your Enquiry" />
        </div>
      </section>
    </>
  );
}
