import github from "../../assets/SVG/github-mark-white.svg";

type ProjectInfoProps = {
  title: string;
  link: string;
  stack: string;
  description: string;
};

function ProjectInfo(props: ProjectInfoProps) {
  return (
    <div className="mb-8">
      <div className="space-x-2 ml-6 mt-3 items-center md:justify-between md:flex">
        <a href={props.link} target="_blank" className="flex items-center">
          <img src={github} alt="Github logo" className="w-9"/>
          <p className="ml-2 font-medium md:text-lg">{props.title}</p>
        </a>
        <p className="text-primary">{props.stack}</p>
      </div>

      <p className="ml-10 mt-2 md:mt-3">{props.description}</p>
      <br className="text-primary" />
    </div>
  );
}

export default ProjectInfo;
