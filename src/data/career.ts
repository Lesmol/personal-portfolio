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
      "BB Digital App Product team. Building out new product features across the back end and front end of the BB Banking App.",
    current: true,
  },
  {
    dates: "Nov 2024 - Sep 2026",
    title: "Support Specialist · Capitec Business Bank",
    detail:
      "Where I learned the codebase: resolved escalated client issues, shipped production fixes, worked on a front-end redesign in React and ran releases for the Business Banking app.",
    current: false,
  },
];
