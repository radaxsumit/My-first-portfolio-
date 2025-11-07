
import React from 'react';

const skills = [
  'React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Tailwind CSS',
  'Gemini API', 'UI/UX Design', 'Node.js', 'GraphQL', 'Jest & RTL', 'CI/CD'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
            <img 
                src="https://picsum.photos/seed/portfolio/600/600" 
                alt="Alex Doe" 
                className="rounded-full shadow-2xl mx-auto border-4 border-teal-500/50"
            />
        </div>
        <div className="lg:col-span-3">
          <p className="text-lg text-slate-400 mb-6">
            Hello! I'm a passionate Senior Frontend Engineer with over 8 years of experience creating dynamic and intuitive web applications. My expertise lies in the React ecosystem, where I leverage modern tools like TypeScript and Next.js to build scalable and maintainable solutions.
          </p>
          <p className="text-lg text-slate-400 mb-8">
            I have a strong foundation in UI/UX principles, ensuring that every interface I create is not only visually stunning but also user-friendly and accessible. Recently, I've been diving deep into the world of generative AI, specializing in integrating the Gemini API to build intelligent, next-generation applications.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className="bg-slate-800 text-teal-300 text-sm font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
