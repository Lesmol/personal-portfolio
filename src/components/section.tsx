import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-4 border-t border-line">
      <div className={`mx-auto max-w-content px-5 py-14 md:px-8 md:py-22 ${className}`}>
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2 className="font-display text-[32px] font-bold tracking-[-0.02em] md:text-[40px]">
        {title}
      </h2>
      {children}
    </div>
  );
}
