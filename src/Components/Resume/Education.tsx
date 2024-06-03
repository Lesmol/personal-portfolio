type EducationProps = {
  title: string;
  duration: string;
  description: string
};

function Education(props: EducationProps) {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-2xl text-primary">Education</h1>
      <div className="mt-3 mx-auto justify-between w-full max-w-[570px] items-center flex">
        <div className="flex px-2 space-x-3 w-64 items-center md:justify-between">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaExBAvnjZmhhYtsn9kGSPN2V6KGsthlF6Q&s"
            alt="CTU Training Solutions Logo"
            className="rounded-full w-10"
          />
          <div className="">
            <h1 className="m-0 p-0 font-bold">{props.title}</h1>
            <p className="text-primary font-light">{props.description}</p>
          </div>
        </div>
        <p className="text-primary m-0 p-0 font-mono font-medium">{props.duration}</p>
      </div>
    </div>
  );
}

export default Education;
