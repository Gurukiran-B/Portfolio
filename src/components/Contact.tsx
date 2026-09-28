import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 flex flex-col items-center text-center">
      <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-3 block">04 / Contact</span>
      <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Let's build something useful.</h2>
      
      <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
        Open to internships, software engineering opportunities, and conversations about technology.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a 
          href="mailto:gurukiranbhaskara2004@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-[24px] font-medium text-lg hover:opacity-90 transition-opacity hover:-translate-y-0.5 transform duration-200"
        >
          Email me
        </a>
        <a 
          href="https://www.linkedin.com/in/gurukiran-b-79bb17309/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border text-primary rounded-[24px] font-medium text-lg hover:bg-surface-secondary transition-colors hover:-translate-y-0.5 transform duration-200"
        >
          LinkedIn <ArrowUpRight size={20} />
        </a>
        <a 
          href="https://github.com/Gurukiran-B" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border text-primary rounded-[24px] font-medium text-lg hover:bg-surface-secondary transition-colors hover:-translate-y-0.5 transform duration-200"
        >
          GitHub <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
