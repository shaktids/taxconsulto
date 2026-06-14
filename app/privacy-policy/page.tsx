import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Privacy policy for TaxConsulto.com enquiries and consulting services.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-600">Policy</p>
        <h1 className="mt-3 text-4xl font-black text-navy-950">Privacy Policy</h1>
        <div className="mt-6 space-y-5 leading-7 text-slate-600">
          <p>
            TaxConsulto.com collects enquiry details such as name, phone number, email, service requirement, and message content to respond to service requests.
          </p>
          <p>
            We use submitted information only for consultation, service delivery, compliance coordination, and client communication. We do not sell personal information.
          </p>
          <p>
            Clients are responsible for sharing accurate documents and information required for filings, registrations, and advisory work.
          </p>
        </div>
      </div>
    </section>
  );
}
