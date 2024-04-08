import ArticleItem from "./ArticleItem";

function Articles() {
  return (
    <div className="mt-12">
      <h3 className="text-primary text-xl mb-4">Articles</h3>
      <ArticleItem
        title="Provisioning Azure resources with terraform within GitHub Actions"
        link="https://www.linkedin.com/pulse/my-experience-provisioning-azure-resources-using-terraform-molemi-li7ff/?trackingId=%2FMLQ%2BpTYSWCWLwLM4l0wXA%3D%3D"
      />
      <ArticleItem
        title="What we did wrong in this project: PHP, Tailwind, Git & GitHub"
        link="https://www.linkedin.com/pulse/what-we-did-wrong-project-php-tailwind-git-github-lesedi-molemi-u3pgf/?trackingId=mjMULJOQSauumFJuQBEADw%3D%3D"
      />
    </div>
  );
}

export default Articles;
