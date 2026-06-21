type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-brand-gold">{eyebrow}</p> : null}
      <h2 className="serif-title ornament-line text-3xl font-bold text-brand-brown-dark md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-[17px] leading-8 text-text-secondary">{description}</p> : null}
    </div>
  );
}
