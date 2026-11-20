import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    category: 'Backend · Database · Systems',
    title: 'Double-Entry Ledger',
    description: 'A correctness-focused financial ledger prototype using Python and PostgreSQL. It implements atomic double-entry transfers, idempotent retries, deterministic concurrency controls, immutable audit entries, and database-level invariants.',
    technologies: ['Python', 'PostgreSQL', 'Psycopg', 'Docker', 'Pytest'],
    github: 'https://github.com/Gurukiran-B/double-entry-ledger',
  },
  {
    number: '02',
    category: 'AI · Systems',
    title: 'Carbon-Aware Sustainable Cooling System',
    description: 'A reinforcement-learning-driven cooling system with a digital twin. PPO learns continuous fan and pump control using a reward that balances energy consumption, carbon emissions, and temperature stability.',
    technologies: ['PPO', 'PyTorch', 'Gymnasium', 'Digital Twin'],
    status: 'Currently Building',
  },
  {
    number: '03',
    category: 'Mobile · Backend · ML',
    title: 'Traffica',
    description: 'Real-time traffic and delivery management system built around a Flutter client and FastAPI backend, combining route computation, traffic prediction, maps, weather data, and API-driven services.',
    technologies: ['Flutter', 'FastAPI', 'A*', 'Bellman–Ford', 'PyTorch'],
    github: 'https://github.com/Gurukiran-B/Traffica',
  },
  {
    number: '04',
    category: 'Web · Backend · Database',
    title: 'EventTrack',
    description: 'A web-based event registration and management system designed to streamline event participation, registration data, and organizer workflows through a structured application.',
    technologies: ['HTML', 'CSS', 'Flask', 'MySQL', 'Firebase'],
    github: 'https://github.com/Gurukiran-B/Event-track/tree/main/EvenTrack-main',
  },
  {
    number: '05',
    category: 'AI · RAG · Safety',
    title: 'SafeLab Assistant',
    description: 'A RAG-based AI laboratory safety assistant that retrieves relevant SOPs using semantic search and generates context-aware guidance, including emergency detection and safety-focused responses.',
    technologies: ['Python', 'Flask', 'Streamlit', 'Sentence Transformers', 'Groq · Llama 3'],
    github: 'https://github.com/Gurukiran-B/safelab-assistant',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-3 block">02 / Selected work</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">Projects with a purpose.</h2>
        <p className="text-muted max-w-3xl text-base md:text-lg leading-relaxed">
          A mix of applications, AI systems, backend development, algorithms, and research-oriented engineering. The goal is not just to make demos, but to understand the engineering behind them.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div 
            key={project.number}
            className="group bg-surface rounded-[20px] p-8 md:p-10 border border-border shadow-custom hover:shadow-[0_24px_60px_rgba(16,24,40,0.12)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-8 md:gap-12"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xl md:text-2xl font-bold text-accent">{project.number}</span>
                <span className="text-sm font-medium text-muted">{project.category}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted text-base md:text-lg leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-surface-secondary text-primary text-xs font-medium rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="shrink-0">
                  {project.status ? (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-secondary text-muted rounded-full text-sm font-medium border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                      {project.status}
                    </span>
                  ) : project.github ? (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      View repository <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
