import { Section } from "@/components/section";
import { career } from "@/data/career";

function Career() {
  return (
    <Section id="career" className="flex flex-wrap gap-6 md:gap-12">
      <div className="flex flex-[1_1_280px] flex-col gap-4">
        <h2 className="font-display text-[32px] font-bold tracking-[-0.02em] md:text-[40px]">
          Career
        </h2>
        <p className="max-w-[34ch] text-soft">From support to back-end engineering at Capitec.</p>
      </div>
      <ol className="flex flex-[2_1_520px] flex-col">
        {career.map((entry, index) => (
          <li key={entry.dates} className="relative flex gap-4.5 pb-8 last:pb-0 md:gap-6">
            {index < career.length - 1 ? (
              // Connects this dot (8px down, 12px tall) to the next entry's dot.
              <span
                aria-hidden="true"
                className="absolute top-5 -bottom-2 left-[5.5px] w-px bg-line-strong"
              />
            ) : null}
            <span
              aria-hidden="true"
              className={`mt-2 size-3 shrink-0 rounded-full ${
                entry.current ? "bg-accent" : "border-2 border-[#5A606C]"
              }`}
            />
            <div className="flex flex-col gap-1">
              <span
                className={`font-mono text-[13px] ${entry.current ? "text-accent" : "text-muted"}`}
              >
                {entry.dates}
              </span>
              <span className="font-display text-[21px] leading-tight font-medium md:text-2xl">
                {entry.title}
              </span>
              <span className="text-base text-soft">{entry.detail}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Career;
