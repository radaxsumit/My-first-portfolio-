
import React, { useState } from 'react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 text-center">
         <h2 className="text-4xl font-bold text-center text-white mb-4">
            Thank You!
        </h2>
        <p className="text-lg text-slate-400">Your message has been sent. I'll get back to you shortly.</p>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Get In Touch
      </h2>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 disabled:bg-teal-800 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-slate-400 hover:text-teal-300 transition-colors"><GithubIcon className="h-8 w-8" /></a>
          <a href="#" className="text-slate-400 hover:text-teal-300 transition-colors"><LinkedinIcon className="h-8 w-8" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
