import github from "../../assets/Image/Github.png";

type ProjectInfoProps = {
  title: string;
  stack: string;
  description: string;
};

function ProjectInfo(props: ProjectInfoProps) {
  return (
    <div className="mb-8">
      <div className="space-x-2 ml-6 mt-3 items-center md:justify-between md:flex">
        <div className="flex items-center">
          <img src={github} alt="Github logo" />
          <p className="ml-2 font-medium md:text-lg">{props.title}</p>
        </div>
        <p className="text-primary">{props.stack}</p>
      </div>

      <p className="ml-10 mt-2 md:mt-3">{props.description}</p>
      <br className="text-primary" />
    </div>
  );
}

export default ProjectInfo;
