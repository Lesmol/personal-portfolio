export interface CareerEntry {
  dates: string;
  title: string;
  detail: string;
  current: boolean;
}

export const career: CareerEntry[] = [
  {
    dates: "Oct 2026 - Present",
    title: "Software Engineer: Back-End · Capitec Business Bank",
    detail:
      "BB Digital App Product team. Building out new product features in BB Banking App.",
    current: true,
  },
  {
    dates: "Nov 2024 - Sep 2026",
    title: "Support Specialist · Capitec Business Bank",
    detail: "Tier 3 support on the Business Banking app.",
    current: false,
  },
];
