import { faqs } from "@/lib/site";

export function FAQAccordion() {
  return (
    <div className="mx-auto mt-10 grid max-w-3xl gap-4">
      {faqs.map((item) => (
        <details key={item.question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-navy-950">
            {item.question}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
