type BlogCardProps = {
  title: string;
  category: string;
  excerpt: string;
};

export function BlogCard({ title, category, excerpt }: BlogCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-600">{category}</p>
      <h3 className="mt-3 text-xl font-black leading-7 text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{excerpt}</p>
      <span className="mt-5 inline-block text-sm font-black text-navy-900">Read guide</span>
    </article>
  );
}
