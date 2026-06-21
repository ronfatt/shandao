type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="bg-temple-lines py-16 text-white">
      <div className="container-page">
        {eyebrow ? <p className="mb-3 font-semibold tracking-[0.18em] text-brand-gold-light">{eyebrow}</p> : null}
        <h1 className="serif-title max-w-4xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-[18px] leading-9 text-white/78">{description}</p>
      </div>
    </section>
  );
}
