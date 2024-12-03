import SummaryPane from "./SummaryPane";

function Education() {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-2xl text-primary">Education</h1>
      <SummaryPane
        title="CTU Training Solutions"
        duration="2022 - 2024"
        description="IT Systems Development"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaExBAvnjZmhhYtsn9kGSPN2V6KGsthlF6Q&s"
        imageAlt="CTU Training Solutions Logo"
        institutionUrl="https://ctutraining.ac.za/"
      />
    </div>
  );
}

export default Education;
