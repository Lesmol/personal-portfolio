function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-5 py-7 font-mono text-[13px] text-muted md:flex-row md:flex-wrap md:justify-between md:px-8">
        <span>© {year} Lesedi Molemi · Pretoria, South Africa</span>
        <span>Still manipulating the information to show you what I want you to see. 😉</span>
      </div>
    </footer>
  );
}

export default Footer;
