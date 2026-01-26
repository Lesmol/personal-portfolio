interface BlogHeadingProps {
    imgUrl: string;
    alt: string;
    title: string;
    summary: string;
}

function blogHeading(props: BlogHeadingProps) {
  return (
    <section className="mt-8">
        <img src={props.imgUrl} alt={props.alt} className="w-full" />
        <h1 className="mt-5 text-white text-3xl md:text-4xl">{props.title}</h1>
        <p className="mt-1 text-custom-light-grey">{props.summary}</p>
        <hr className="mt-4 border-neutral-800" />
    </section>
  );
}

export default blogHeading