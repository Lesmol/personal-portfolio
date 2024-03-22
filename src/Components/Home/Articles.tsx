import ArticleItem from "./ArticleItem";


function Articles() {
  return (
    <div className="mt-8">
      <h3 className="text-primary text-xl">Articles</h3>
      <ArticleItem
        title="Provisioning Azure resources with terraform within GitHub Actions"
        link="https://www.linkedin.com/pulse/my-experience-provisioning-azure-resources-using-terraform-molemi-li7ff/?trackingId=%2FMLQ%2BpTYSWCWLwLM4l0wXA%3D%3D"
        date="21 Mar 2024"
      />
    </div>
  );
}

export default Articles;
