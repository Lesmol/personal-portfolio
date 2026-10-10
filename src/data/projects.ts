export interface Project {
  tag: string;
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    tag: "MICROSERVICES · JAVA",
    name: "Customer Statements",
    description:
      "Upload, store and retrieve customer account statements. An API gateway fronts three Spring Boot services, authenticates every request against Dex (OIDC), stores files in S3 and caches pre-signed download URLs in Redis.",
    stack: ["Spring Boot", "PostgreSQL", "Redis", "S3", "Docker"],
    githubUrl: "https://github.com/Lesmol/customer-statements_springboot",
  },
  {
    tag: "SERVERLESS · AWS",
    name: "Statement Analysis",
    description:
      "Bank statement upload and analysis. A Spring Modulith on Lambda with Cognito auth and Aurora, Textract for PDF extraction and Claude for insights, wired through SNS/SQS and provisioned across two regions with Terraform.",
    stack: ["Spring Modulith", "Lambda", "Textract", "Terraform", "React"],
    githubUrl: "https://github.com/Lesmol/statement-analysis_springboot",
  },
  {
    tag: "SERVERLESS · PYTHON · RUST",
    name: "Market Financials",
    description:
      "A market data platform on AWS Lambda: a containerised Python function serving financial statements and a Rust authoriser validating API keys against DynamoDB, deployed with Terraform and GitHub Actions.",
    stack: ["Python", "Rust", "DynamoDB", "Terraform", "GitHub Actions"],
    githubUrl: "https://github.com/Lesmol/market-financials_lambda",
  },
  {
    tag: "SPRING BOOT · AWS SES",
    name: "Email API",
    description:
      "Template-driven market update emails rendered with Thymeleaf and sent through SES, running as a containerised Lambda.",
    stack: ["Spring Boot", "Thymeleaf", "SES", "Lambda"],
    githubUrl: "https://github.com/Lesmol/email-api_springboot",
  },
];
