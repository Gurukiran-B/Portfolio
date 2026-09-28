
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mb-12">
        <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-3 block">01 / About</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Curious by default.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface rounded-[20px] p-8 md:p-10 border border-border shadow-custom flex flex-col gap-6">
          <p className="text-muted text-base md:text-lg leading-relaxed">
            I’m pursuing a B.E. in Computer Science and Engineering at HKBK College of Engineering, affiliated with VTU, Bengaluru. My interests sit at the intersection of software engineering and applied problem solving.
          </p>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            I like understanding how systems work underneath the interface—APIs, databases, algorithms, model pipelines, and the trade-offs that make a product reliable. My current focus is strengthening DSA and core CS while building projects that are substantial enough to teach me something new.
          </p>
        </div>

        <div className="bg-surface rounded-[20px] p-8 md:p-10 border border-border shadow-custom grid grid-cols-2 gap-y-10 gap-x-6">
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-primary">2027</span>
            <span className="text-sm font-medium text-muted">Expected graduation</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-primary">8.17</span>
            <span className="text-sm font-medium text-muted">Current CGPA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-primary">6+</span>
            <span className="text-sm font-medium text-muted">Project directions</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-primary">∞</span>
            <span className="text-sm font-medium text-muted">Things to learn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
