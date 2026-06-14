import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { blogPosts, faqs, homeServices, siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Expert GST, Income Tax & Business Compliance Services",
  "TaxConsulto.com helps businesses and professionals with GST filing, income tax returns, registrations, accounting, ROC compliance, and business consulting."
);

const choosePoints = [
  "Dedicated tax and compliance experts",
  "Transparent pricing and document checklists",
  "Fast turnaround for filings and registrations",
  "Compliance reminders for important due dates",
  "WhatsApp-first support for quick updates",
  "Trusted advisory for startups and growing businesses"
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <section className="bg-navy-950 text-white">
        <div className="container grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">{siteConfig.tagline}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Expert GST, Income Tax & Business Compliance Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Helping businesses and professionals stay compliant with hassle-free tax and registration solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Book Free Consultation</ButtonLink>
              <ButtonLink href={`https://wa.me/${siteConfig.whatsapp}`} variant="light">
                WhatsApp Now
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-premium">
            <div className="rounded-md bg-navy-50 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-gold-600">Compliance Dashboard</p>
              <div className="mt-5 grid gap-4">
                {["GST return due", "ITR review", "ROC filing", "Trademark status"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-md bg-white p-4 shadow-sm">
                    <span className="font-bold">{item}</span>
                    <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-black text-navy-900">
                      {index === 0 ? "Today" : "On Track"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Everything your business needs to stay compliant"
            description="From registration to recurring filings, TaxConsulto gives you expert support without the usual paperwork stress."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Why Choose TaxConsulto"
            title="Premium compliance guidance with practical business sense"
            description="We combine tax accuracy, responsive communication, and process discipline so founders, professionals, and SMEs can focus on growth."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {choosePoints.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-100 text-sm font-black text-navy-950">OK</span>
                <p className="mt-4 font-bold text-navy-950">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader eyebrow="Testimonials" title="Trusted by businesses and professionals" />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeader eyebrow="Tax Insights" title="Latest compliance guides" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Common tax and compliance questions" />
          <FAQAccordion />
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Get Started"
            title="Talk to a tax expert before your next deadline"
            description="Send your enquiry for GST, income tax, registration, accounting, ROC, or consulting support."
          />
          <LeadForm />
        </div>
      </section>
    </>
  );
}
