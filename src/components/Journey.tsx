
const journeyItems = [
  {
    period: '2026 — Present',
    title: 'Deepening CS fundamentals',
    description: 'Focused on DSA, DBMS, operating systems, computer networks, OOP, APIs, and practical backend development while preparing for internships and placements.'
  },
  {
    period: '2026',
    title: 'Research & major project',
    description: 'Worked on reinforcement-learning-based carbon-aware cooling with a digital twin, including PPO training, reward design, simulation, and research-paper work.'
  },
  {
    period: '2025 — 2026',
    title: 'Project-driven development',
    description: 'Built and explored applications across Flutter, Flask/FastAPI, MySQL, Firebase, PyTorch, APIs, and algorithmic problem solving.'
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-20">
      <div className="mb-12">
        <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-3 block">03 / Journey</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Learning in public.</h2>
      </div>

      <div className="bg-surface rounded-[20px] p-8 md:p-12 border border-border shadow-custom">
        <div className="flex flex-col gap-12 relative before:absolute before:inset-y-0 before:left-[7px] md:before:left-[11px] before:w-[2px] before:bg-border before:z-0">
          {journeyItems.map((item, index) => (
            <div key={index} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex items-center gap-6 md:w-[200px] shrink-0">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent border-4 border-surface shadow-sm shrink-0"></div>
                <span className="text-sm font-bold text-muted uppercase tracking-wider">{item.period}</span>
              </div>
              
              <div className="flex flex-col gap-3 md:-mt-1 ml-10 md:ml-0">
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted text-base leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
