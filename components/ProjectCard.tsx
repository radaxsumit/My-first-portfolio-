
import React from 'react';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl, sourceUrl }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-slate-700">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-teal-300 transition-colors">
            <ExternalLinkIcon className="h-5 w-5 mr-2" />
            Live Demo
          </a>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-teal-300 transition-colors">
            <GithubIcon className="h-5 w-5 mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
