
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-6 md:px-10 lg:px-20">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
