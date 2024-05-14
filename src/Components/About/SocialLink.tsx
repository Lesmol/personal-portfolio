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
      rel="noopener noreferrer"
      className="flex px-4 py-3 items-center bg-primary rounded-md md:hover:bg-text-darker-primary transition ease-linear 15"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        className={props.className}
        viewBox="0 0 16 16"
      >
        <path d={props.d} />
      </svg>
    </a>
  );
}

export default SocialLink;
