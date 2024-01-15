# Introduction
***
This is the frontend repository for my cloud resume challenge.  The project challenges the participants to create a website running on a serverless cloud infrastructure and building a CI/CD pipeline. I used React as the framework to create it, initially in JavaScript - I later migrated it to TypeScript for better usability - and continuously deployed to an Azure App Service. The backend is to be run on an Azure Function that is called in the frontend to get & update the user count value in CosmosDB.

# CI Pipline
***
On each push to the main branch GitHub Actions is fired and the workflow at /.github/workflows/azure-static-web-app... is executed. The second workflow - run-test.yaml - is executed on each push to any branch that is not the main branch, this way you don't have to manually change the workflow every time you create a new branch. The run-test.yaml workflow runs the test and builds the project to ensure that we address any issues before we even create a PR to the main branch.

# Future Improvements
***
Like any project, there is always something to improve:
* Add earlier mentioned Azure Function for the counter feature
* Revamp the UI to be more colourful
* Add a "Blogs" page
* Minor UX upgrades like modal views and better animations