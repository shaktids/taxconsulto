type LeadFormProps = {
  title?: string;
  compact?: boolean;
};

export function LeadForm({ title = "Book a Free Consultation", compact = false }: LeadFormProps) {
  return (
    <form className={`rounded-lg border border-slate-200 bg-white p-5 shadow-premium ${compact ? "" : "md:p-7"}`}>
      <h2 className="text-2xl font-black text-navy-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Share your details and our compliance expert will get back to you shortly.
      </p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Full Name
          <input className="focus-ring rounded-md border border-slate-300 px-4 py-3" name="name" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Phone Number
          <input className="focus-ring rounded-md border border-slate-300 px-4 py-3" name="phone" placeholder="+91 7790005009" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Service Required
          <select className="focus-ring rounded-md border border-slate-300 px-4 py-3" name="service" defaultValue="GST Filing">
            <option>GST Filing</option>
            <option>Income Tax Filing</option>
            <option>Company Registration</option>
            <option>LLP Registration</option>
            <option>Trademark Registration</option>
            <option>Accounting Services</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Message
          <textarea className="focus-ring min-h-28 rounded-md border border-slate-300 px-4 py-3" name="message" placeholder="Tell us what you need help with" />
        </label>
      </div>
      <button className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-gold-500 px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-gold-300" type="submit">
        Submit Enquiry
      </button>
    </form>
  );
}
