
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'AI-Powered Content Creator',
    description: 'A web app that leverages the Gemini API to generate creative content, from blog posts to social media captions, with a highly intuitive user interface.',
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    tags: ['React', 'Gemini API', 'Next.js', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'E-commerce Analytics Dashboard',
    description: 'A comprehensive dashboard for an e-commerce platform, providing real-time data visualization and insights to drive business decisions.',
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    tags: ['React', 'TypeScript', 'D3.js', 'GraphQL'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Collaborative Design Tool',
    description: 'A real-time collaborative whiteboard application that allows teams to brainstorm and design together, featuring a seamless and responsive canvas.',
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    tags: ['React', 'WebSockets', 'Node.js', 'UI/UX'],
    liveUrl: '#',
    sourceUrl: '#',
  },
    {
    title: 'Interactive Portfolio Platform',
    description: 'A platform for creatives to build and host their own stunning, customizable portfolios without writing a single line of code.',
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    tags: ['React', 'Next.js', 'Firebase', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
