function EmailMe() {
  return (
    <div className="flex items-center justify-center mt-8 text-primary hover:text-darker-primary transition 150 ease-out">
      <span className="text-xl">&#x2197;</span>
      <a
        href="mailto:molemilesedi@gmail.com"
        // target="_blank"
        className="ml-2"
      >
        Email me
      </a>
    </div>
  );
}

export default EmailMe;
