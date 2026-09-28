import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-start">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-secondary border border-border text-sm font-medium text-muted mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Computer Science Engineering Student · Bengaluru
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 max-w-4xl leading-[1.1]">
        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">useful software</span> for real problems.
      </h1>
      
      <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
        I’m Gurukiran B, a Computer Science Engineering student who enjoys turning ideas into practical applications across mobile development, backend systems, algorithms, and machine learning.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        <a 
          href="#projects" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-[24px] font-medium hover:opacity-90 transition-opacity hover:-translate-y-0.5 transform duration-200"
        >
          Explore my work <ArrowUpRight size={18} />
        </a>
        <a 
          href="mailto:gurukiranbhaskara2004@gmail.com" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-primary rounded-[24px] font-medium hover:bg-surface-secondary transition-colors hover:-translate-y-0.5 transform duration-200"
        >
          Email me
        </a>
        <a 
          href="https://www.linkedin.com/in/gurukiran-b-79bb17309/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-primary rounded-[24px] font-medium hover:bg-surface-secondary transition-colors hover:-translate-y-0.5 transform duration-200"
        >
          LinkedIn <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
