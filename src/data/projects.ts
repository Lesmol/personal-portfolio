export interface Language {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  languages: Language[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "market-financials-auth-rust_lambda",
    description: "Authentication and authorization logic for the Market Financials platform, implemented as an AWS Lambda function.",
    languages: [
      { name: "Rust", color: "#eead51ff" },
      { name: "AWS", color: "#FF9900" },
      { name: "Github Actions", color: "#063997ff" }
    ],
    githubUrl: "https://github.com/Lesmol/market-financials-auth-rust_lambda"
  },
  {
    name: "market-financials_lambda",
    description: "Core business logic for processing market financial data, built as a serverless AWS Lambda function.",
    languages: [
      { name: "Python", color: "#3572A5" },
      { name: "Docker", color: "#334e55ff" },
      { name: "AWS", color: "#FF9900" },
      { name: "Github Actions", color: "#063997ff" }
    ],
    githubUrl: "https://github.com/Lesmol/market-financials_lambda"
  },
  {
    name: "market-financials-lambda_terraform",
    description: "Infrastructure as Code (IaC) using Terraform to deploy and manage Market Financials Lambda functions and related AWS resources.",
    languages: [
      { name: "Terraform", color: "#7B42BC" },
      { name: "Github Actions", color: "#063997ff" }
    ],
    githubUrl: "https://github.com/Lesmol/market-financials-lambda_terraform"
  },
  {
    name: "market-cli_java",
    description: "A command-line interface tool for interacting with market data and financial services directly from the terminal.",
    languages: [
      { name: "Java", color: "#473520ff" }
    ],
    githubUrl: "https://github.com/Lesmol/market-cli"
  },
  {
    name: "personal-portfolio_legacy",
    description: "The previous version of my personal portfolio website, maintained for historical reference.",
    languages: [
      { name: "React", color: "#61DAFB" },
      { name: "Typescript", color: "#007ACC" },
      { name: "Tailwind", color: "#38B2AC" }
    ],
    githubUrl: "https://github.com/Lesmol/personal-portfolio_legacy"
  }
];
