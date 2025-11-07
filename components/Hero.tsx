
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Hi, I'm <span className="text-teal-300">Alex Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">
          A Senior Frontend React Engineer with deep expertise in Gemini API and UI/UX Design.
        </p>
        <p className="text-lg text-slate-300 mb-12">
          I build beautiful, responsive, and highly functional web applications that provide exceptional user experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-slate-700 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-slate-600/50 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
