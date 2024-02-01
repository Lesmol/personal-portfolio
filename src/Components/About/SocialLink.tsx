type SocialLinkProps = {
  className: string;
  d: string;
  title: string;
  href: string;
};

function SocialLink(props: SocialLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex px-2 py-1 items-center border border-darker-primary w-[100%] max-w-[460px] rounded-md mb-3 hover:bg-text-darker-primary transition ease-linear 15"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={props.className}
        viewBox="0 0 16 16"
      >
        <path d={props.d} />
      </svg>
      <p className="ml-4 text-lg">{props.title}</p>
    </a>
  );
}

export default SocialLink;
