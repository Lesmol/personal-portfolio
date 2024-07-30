function ContactInfo() {
  return (
    <>
      <div className="flex items-center justify-center mt-8 text-primary space-x-8">
        <div className="md:hover:text-darker-primary transition 150 ease-out">
          <span className="text-xl">&#x2197;</span>
          <a
            href="https://www.linkedin.com/in/lvmolemi/"
            target="_blank"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div className="md:hover:text-darker-primary transition 150 ease-out">
          <span className="text-xl">&#x2197;</span>
          <a href="https://github.com/Lesmol" target="_blank" className="ml-2">
            GitHub
          </a>
        </div>
        <div className="md:hover:text-darker-primary transition 150 ease-out">
          <span className="text-xl">&#x2197;</span>
          <a href="mailto:molemilesedi@gmail.com" className="ml-2">
            Email
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
