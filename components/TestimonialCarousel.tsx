"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-navy-950 p-6 text-white shadow-premium md:p-8">
      <p className="text-xl font-semibold leading-8 text-white">{testimonial.quote}</p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-black text-gold-300">{testimonial.name}</p>
          <p className="mt-1 text-sm text-slate-300">{testimonial.role}</p>
        </div>
        <div className="flex gap-2" aria-label="Choose testimonial">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              className={`focus-ring h-3 w-8 rounded-full transition ${active === index ? "bg-gold-300" : "bg-white/30"}`}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}