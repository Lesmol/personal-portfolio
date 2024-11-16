import SummaryPane from "../Resume/SummaryPane";

function Experience() {
  return (
    <div className="mt-10 max-w-screen sm">
      <h1 className="text-xl">Work</h1>
      <p className="text-primary text-sm mb-8">
        Here are some of the places I've worked
      </p>
      <div className="space-y-6 mt-3">
        <SummaryPane
          title="Support Specialist"
          duration="2024 - Present"
          description="Capitec"
          imageUrl="https://asset.brandfetch.io/id-nzL804J/idlF4F-KCx.jpeg"
          imageAlt="Capitec Logo"
        />
        <SummaryPane
          title="Events Operations Assistant & Digital Coordinator"
          duration="2020 - 2024"
          description="Le Beaut and Events"
          imageUrl="https://lebeautstorage.blob.core.windows.net/lebeaut/images/lb-logo.png"
          imageAlt="Le Beaut And Events Logo"
        />
      </div>
    </div>
  );
}

export default Experience;
