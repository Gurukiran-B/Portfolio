
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'Dart', 'C']
    },
    {
      title: 'Development',
      skills: ['Flutter', 'FastAPI', 'Flask', 'Node.js']
    },
    {
      title: 'AI / ML',
      skills: ['PyTorch', 'Machine Learning', 'RAG', 'Sentence Transformers', 'LLM APIs']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Firebase', 'SQLite']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-4">Technical Stack</h2>
        <p className="text-muted max-w-2xl text-base md:text-lg">
          The languages, frameworks, and tools I use to build software and learn new concepts.
        </p>
      </div>

      <div className="bg-surface rounded-[20px] p-8 md:p-10 border border-border shadow-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface-secondary text-primary text-sm font-medium rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
