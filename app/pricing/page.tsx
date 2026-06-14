import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { pricingPlans } from "@/lib/site";

export const metadata = pageMetadata(
  "Pricing for Tax & Compliance Services",
  "Compare affordable GST, income tax, accounting, company registration, LLP registration, ROC compliance, and business consulting packages.",
  "/pricing"
);

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="container text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">Pricing</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Clear packages for tax and compliance support
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Start with a focused service package and upgrade as your filing and advisory needs grow.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Service Packages"
            title="Pick a plan that matches your compliance needs"
            description="Final scope and government fees may vary by service, business type, and documentation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-lg border p-7 shadow-sm ${
                  plan.featured
                    ? "border-gold-500 bg-navy-950 text-white shadow-premium"
                    : "border-slate-200 bg-white text-navy-950"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-gold-500 px-3 py-1 text-xs font-black text-navy-950">
                    Popular
                  </span>
                ) : null}
                <h2 className="text-2xl font-black">{plan.name}</h2>
                <p className={`mt-3 text-sm leading-6 ${plan.featured ? "text-slate-200" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`pb-1 text-sm font-semibold ${plan.featured ? "text-gold-300" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-7 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className={plan.featured ? "text-gold-300" : "text-gold-600"}>+</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">
                  Get Started
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
