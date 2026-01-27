import Image from "next/image";

interface BlogHeadingProps {
    imgUrl: string;
    alt: string;
    title: string;
    summary: string;
}

function blogHeading(props: BlogHeadingProps) {
  return (
    <section className="mt-8">
        <Image
          src={props.imgUrl}
          alt={props.alt}
          width={1200}
          height={630}
          className="w-full h-auto"
        />
        <h1 className="mt-5 text-white text-3xl md:text-4xl">{props.title}</h1>
        <p className="mt-1 text-custom-light-grey">{props.summary}</p>
        <hr className="mt-4 border-neutral-800" />
    </section>
  );
}

export default blogHeading