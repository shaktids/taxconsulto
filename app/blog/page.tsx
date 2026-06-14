import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site";

export const metadata = pageMetadata(
  "Tax & Compliance Blog",
  "SEO-friendly GST, income tax, business registration, compliance, and startup guides from TaxConsulto.com.",
  "/blog"
);

const categories = ["GST", "Income Tax", "Business Registration", "Compliance", "Startup Guides"];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="container text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">Blog</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Tax guides for smarter business decisions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Practical explainers for GST, income tax, company registration, compliance, and startup basics.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader eyebrow="Categories" title="Explore compliance topics" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-navy-900">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
