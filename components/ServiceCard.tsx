type ServiceCardProps = {
  title: string;
  description: string;
  category?: string;
};

export function ServiceCard({ title, description, category }: ServiceCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      {category ? <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-600">{category}</p> : null}
      <h3 className="mt-3 text-xl font-black text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
