import ArticleItem from "./ArticleItem";

function Articles() {
  return (
    <div className="mt-12">
      <h3 className="text-xl mb-1">Latest posts</h3>
      <p className="text-primary mb-6 md:mb-4">
        I occasionally write about things I've done on my LinkedIn Articles.
        Check it out if you're interested...
      </p>
      <ArticleItem
        title="What we did wrong in this project: PHP, Tailwind, Git & GitHub"
        link="https://www.linkedin.com/pulse/what-we-did-wrong-project-php-tailwind-git-github-lesedi-molemi-u3pgf/?trackingId=mjMULJOQSauumFJuQBEADw%3D%3D"
      />
      <ArticleItem
        title="Provisioning Azure resources with terraform within GitHub Actions"
        link="https://www.linkedin.com/pulse/my-experience-provisioning-azure-resources-using-terraform-molemi-li7ff/?trackingId=%2FMLQ%2BpTYSWCWLwLM4l0wXA%3D%3D"
      />
    </div>
  );
}

export default Articles;
