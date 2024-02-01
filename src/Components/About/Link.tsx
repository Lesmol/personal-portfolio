type LinkProps = {
  imagePath: string;
  alt: string;
  link: string;
  title: string;
};

function Link(props: LinkProps) {
  return (
    <a target="_blank" href={props.link} className="flex items-end mb-2 hover:text-primary transition 15 ease-out">
      <img
        src={props.imagePath}
        alt={props.alt}
        className="w-[35px] h-[35px] object-cover rounded-md"
      />
      <p className="ml-2 underline text-lg">{props.title}</p>
    </a>
  );
}

export default Link;
