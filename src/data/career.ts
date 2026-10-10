export interface CareerEntry {
  dates: string;
  title: string;
  detail: string;
  current: boolean;
}

export const career: CareerEntry[] = [
  {
    dates: "Oct 2026 — Present",
    title: "Software Engineer: Back-End · Capitec Bank",
    detail:
      "BB Digital App Product team. Delivered the self-service Credit Card in the BB App and helped build BRAYE.",
    current: true,
  },
  {
    dates: "Nov 2024 — Sep 2026",
    title: "Support Specialist (Tier 3) · Capitec Business Bank",
    detail: "Tier 3 support on the Business Banking app.",
    current: false,
  },
];
