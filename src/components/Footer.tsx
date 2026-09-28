
const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-[1120px] mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-medium">
          © 2026 Gurukiran B.
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/gurukiran-b-79bb17309/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:gurukiranbhaskara2004@gmail.com" 
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            Email
          </a>
          <a 
            href="#top" 
            onClick={scrollToTop}
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
