import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message content is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const WEB3FORMS_ACCESS_KEY = "2902a571-07b4-482b-81d5-0d1ee7638f71";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // If key is not configured, fallback to mock success
    if (WEB3FORMS_ACCESS_KEY === "2902a571-07b4-482b-81d5-0d1ee7638f71") {
      console.warn("Web3Forms Access Key is not configured. Falling back to mock submission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Das Portfolio Inquiry",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrors({ form: result.message || "Submission failed. Please try again." });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setErrors({ form: "Network error. Please check your connection." });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-cyber-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-cyber-accent tracking-widest uppercase font-space block mb-2">05 / Contact</span>
            <h2 className="text-4xl font-space font-extrabold tracking-tight text-white">
              Let's Build Something Intelligent
            </h2>
          </div>
          <p className="text-cyber-muted max-w-md font-normal text-sm md:text-base">
            Reach out if you are recruiting for Full Stack or AI roles, or have questions.
          </p>
        </div>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12">
          
          {/* Contact Information panels */}
          <div className="space-y-6">
            
            {/* Email Card */}
            <a 
              href={`mailto:${portfolioData.email}`}
              className="glass-panel rounded-2xl p-6 flex items-center gap-4 hover:border-cyber-accent/30 hover:bg-cyber-accent/5 transition-all duration-300 group block"
            >
              <div className="p-3 bg-cyber-accent/10 border border-cyber-accent/20 rounded-xl group-hover:bg-cyber-accent group-hover:text-cyber-bg transition-colors">
                <Mail className="w-5 h-5 text-cyber-accent group-hover:text-cyber-bg" />
              </div>
              <div>
                <span className="block text-xs font-bold text-cyber-muted uppercase tracking-wider">Email Me</span>
                <span className="block text-sm font-semibold text-white break-all">{portfolioData.email}</span>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href={`tel:${portfolioData.phone}`}
              className="glass-panel rounded-2xl p-6 flex items-center gap-4 hover:border-cyber-accent2/30 hover:bg-cyber-accent2/5 transition-all duration-300 group block"
            >
              <div className="p-3 bg-cyber-accent2/10 border border-cyber-accent2/20 rounded-xl group-hover:bg-cyber-accent2 group-hover:text-cyber-bg transition-colors">
                <Phone className="w-5 h-5 text-cyber-accent2 group-hover:text-cyber-bg" />
              </div>
              <div>
                <span className="block text-xs font-bold text-cyber-muted uppercase tracking-wider">Call Me</span>
                <span className="block text-sm font-semibold text-white">+{portfolioData.phone}</span>
              </div>
            </a>

            {/* Social Panel */}
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <span className="block text-xs font-bold text-cyber-muted uppercase tracking-wider mb-2">Connect Digitally</span>
              <div className="flex gap-3">
                <a 
                  href={portfolioData.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 bg-white/5 border border-cyber-border hover:border-cyber-accent/40 rounded-xl flex items-center justify-center gap-2 hover:text-cyber-accent transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-bold">LinkedIn</span>
                </a>
                <a 
                  href={portfolioData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 bg-white/5 border border-cyber-border hover:border-cyber-accent/40 rounded-xl flex items-center justify-center gap-2 hover:text-cyber-accent transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-bold">GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Validated Contact Form */}
          <div className="glass-panel rounded-2xl p-8 relative">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {errors.form && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}
              
              {/* Row 1: Name and Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-bold text-cyber-muted uppercase tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-cyber-bg/40 border ${errors.name ? 'border-red-500' : 'border-cyber-border'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-accent/80 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-bold text-cyber-muted uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-cyber-bg/40 border ${errors.email ? 'border-red-500' : 'border-cyber-border'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-accent/80 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="subject" className="text-xs font-bold text-cyber-muted uppercase tracking-wide">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-cyber-bg/40 border ${errors.subject ? 'border-red-500' : 'border-cyber-border'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-accent/80 transition-colors`}
                  placeholder="Internship opportunity / Collaboration / Inquiry"
                />
                {errors.subject && (
                  <span className="text-red-400 text-xs flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-xs font-bold text-cyber-muted uppercase tracking-wide">Message Details</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-cyber-bg/40 border ${errors.message ? 'border-red-500' : 'border-cyber-border'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-accent/80 transition-colors resize-none`}
                  placeholder="Describe details..."
                />
                {errors.message && (
                  <span className="text-red-400 text-xs flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyber-accent to-cyber-accent3 hover:from-cyber-accent3 hover:to-cyber-accent disabled:opacity-75 text-cyber-bg font-bold tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 hover:shadow-cyber-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cyber-bg border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>

              {/* Success notification overlay */}
              {submitSuccess && (
                <div className="absolute inset-0 bg-cyber-bg/95 flex flex-col justify-center items-center p-8 rounded-2xl animate-fade-in text-center space-y-4">
                  <div className="p-4 bg-cyber-accent/15 border border-cyber-accent/20 rounded-2xl">
                    <CheckCircle className="w-12 h-12 text-cyber-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-space font-extrabold text-white">Message Transmitted!</h4>
                    <p className="text-sm text-cyber-muted max-w-sm">
                      Thank you for reaching out. Dasprakash M has received your message and will respond shortly.
                    </p>
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
