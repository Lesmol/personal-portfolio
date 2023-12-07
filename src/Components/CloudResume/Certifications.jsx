import React from "react";

import AzureDeveloper from "../../assets/Image/azure_developer.png";
import AzureFundamentals from "../../assets/Image/azure_data_fundamentals.png";
import ITSpecialist_HTML_CSS from "../../assets/Image/certiport_html_css.png";
import Python from "../../assets/Image/python.png";

function Certifications() {
  return (
    <div className="mt-12">
      <h1 className="font-bold text-2xl text-primary">Certifications</h1>
      <div className="ml-8 mt-3 flex flex-wrap space-x-3">
        <a
          href="https://www.credly.com/badges/98db8c21-98c4-451f-8829-74790b9ede94/public_url"
          target="_blank"
        >
          <img
            className="w-[140px] lg:grayscale hover:grayscale-0 transition 300 ease-in-out"
            src={Python}
            alt="Python Certiport Certification"
          />
        </a>
        <a
          href="https://www.credly.com/badges/152a6284-5b81-43a2-9b2c-16297c692dbe/public_url"
          target="_blank"
        >
          <img
            className="w-[140px] lg:grayscale hover:grayscale-0 transition 300 ease-in-out"
            src={AzureFundamentals}
            alt="Azure Fundametals Certification"
          />
        </a>
        <a
          href="https://www.credly.com/badges/da58d75c-1055-4a1f-a422-2f625952d9be/public_url"
          target="_blank"
        >
          <img
            className="w-[140px] lg:grayscale hover:grayscale-0 transition 300 ease-in-out"
            src={AzureDeveloper}
            alt="Azure Developer Certification"
          />
        </a>
        <a
          href="https://www.credly.com/badges/25e831bb-1b3e-4f12-a12f-f6596ab42d50/public_url"
          target="_blank"
        >
          <img
            className="w-[140px] lg:grayscale hover:grayscale-0 transition 300 ease-in-out"
            src={ITSpecialist_HTML_CSS}
            alt="HTML & CSS IT Specialist Certification"
          />
        </a>
      </div>
    </div>
  );
}

export default Certifications;
