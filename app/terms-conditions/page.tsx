import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "Terms and conditions for using TaxConsulto.com consulting services.",
  "/terms-conditions"
);

export default function TermsConditionsPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-600">Terms</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950">Terms & Conditions</h1>
        <div className="mt-6 space-y-5 leading-7 text-slate-600">
          <p>
            TaxConsulto.com provides tax, registration, accounting, and compliance consulting based on information and documents shared by clients.
          </p>
          <p>
            Pricing may vary depending on service scope, transaction volume, urgency, government fees, and complexity. Final fees are confirmed before work begins.
          </p>
          <p>
            Timelines depend on document readiness, government portal availability, third-party approvals, and client response time.
          </p>
        </div>
      </div>
    </section>
  );
}
