type ImageProps = {
  src: string;
  alt: string;
  hidden?: boolean;
};

function Images(props: ImageProps) {
  return (
    <img
      src={props.src}
      alt=""
      className={`w-[45%] h-[25%] object-cover rounded-3xl md:w-[200px] md:h-[250px] ${
        !props.hidden ? "" : "hidden md:block"
      }`}
    />
  );
}

export default Images;
