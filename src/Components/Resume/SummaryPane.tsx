type SummaryPaneProps = {
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

function SummaryPane(props: SummaryPaneProps) {
  return (
    <div className="mt-3 mx-auto justify-between w-full max-w-[570px] items-center flex">
      <div className="flex space-x-3 w-96 items-center">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="rounded-full w-12"
        />
        <div className="">
          <h1 className="font-bold">{props.title}</h1>
          <p className="text-primary font-light">{props.description}</p>
        </div>
      </div>
      <p className="text-primary block font-mono font-medium">
        {props.duration}
      </p>
    </div>
  );
}

export default SummaryPane;
