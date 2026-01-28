import React from "react";
import SummaryPane from "../summaryPane";

function Experience() {
  return (
    <div className="mt-10 w-full">
      <h1 className="text-xl font-bold md:text-2xl">Work</h1>
      <p className="mb-4 text-sm text-primary md:text-base">
        Here are some of the places I&apos;ve worked
      </p>
      <div id="experience" className="mt-3 space-y-4">
        <SummaryPane
          title="Support Specialist"
          duration="2024 - Present"
          description="Capitec Business Bank"
          imageUrl="https://asset.brandfetch.io/id-nzL804J/idlF4F-KCx.jpeg"
          imageAlt="Capitec Logo"
          institutionUrl="https://www.capitecbank.co.za/business/"
        />
        <SummaryPane
          title="Events Operations Assistant & Digital Coordinator"
          duration="2020 - 2024"
          description="Le Beaut and Events"
          imageUrl="https://lebeautstorage.blob.core.windows.net/lebeaut/images/lb-logo.png"
          imageAlt="Le Beaut And Events Logo"
          institutionUrl="https://www.lebeautandevents.co.za/"
        />
      </div>
    </div>
  );
}

export default Experience;

