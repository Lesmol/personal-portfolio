# Introduction

This is the frontend repository for my cloud resume challenge submission. The project challenges the participants to create a website running on a serverless cloud infrastructure and build a CI/CD pipeline. I used React as the frontend framework to create it, initially in JavaScript - I later migrated it to TypeScript for better usability -, and automated the deployment process to my Azure App Service.

# CI Pipeline

On each push to the main branch GitHub Actions is fired and the workflow at /.github/workflows/azure-static-web-app... is executed. The second workflow - run-test.yaml - is executed on each push to any branch that is not the main branch, this way you don't have to manually change the workflow every time you create a new branch. The run-test.yaml workflow runs the test and builds the project to ensure that I identiy and address any issues before creating a PR to the main branch.

# Future Improvements

Like any project, there is always something to improve:

- Add a "Blogs" page
- Continuos minor UI/UX upgrades
- Migrating to Next.js
- Adding modal features to my Menu pane

---

[lvmolemi.com](https://lvmolemi.com/)

[![My Skills](https://skillicons.dev/icons?i=react,vite,vitest,ts,tailwind,azure,githubactions,git&perline=4)](https://skillicons.dev)
