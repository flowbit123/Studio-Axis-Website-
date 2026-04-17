import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h1 className="font-display text-5xl lg:text-6xl font-medium text-white">Contact</h1>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Left — info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Studio Axis</p>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-stone-900 mb-6 leading-tight">
                  Let's build<br />
                  <span className="italic text-accent">something together.</span>
                </h2>
                <p className="text-stone-500 leading-relaxed mb-10">
                  We welcome enquiries for projects of all scales and typologies. Whether you're at the earliest stage of thinking or have a fully formed brief, we'd love to hear from you.
                </p>

                <div className="space-y-8">
                  <div className="border-t border-stone-100 pt-6">
                    <h4 className="text-xs tracking-widest uppercase text-stone-400 mb-3">Cape Town Studio</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      12 Bree Street, De Waterkant<br />
                      Cape Town, 8001<br />
                      South Africa
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-6">
                    <h4 className="text-xs tracking-widest uppercase text-stone-400 mb-3">Contact</h4>
                    <p className="text-stone-600 text-sm">
                      <a href="mailto:hello@studioaxis.co.za" className="hover:text-accent transition-colors block mb-1">
                        hello@studioaxis.co.za
                      </a>
                      <a href="tel:+27215550180" className="hover:text-accent transition-colors block">
                        +27 (21) 555-0180
                      </a>
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-6">
                    <h4 className="text-xs tracking-widest uppercase text-stone-400 mb-3">Studio Hours</h4>
                    <p className="text-stone-600 text-sm">
                      Monday – Friday: 9:00 AM – 6:00 PM<br />
                      Saturday: By appointment
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-6">
                    <h4 className="text-xs tracking-widest uppercase text-stone-400 mb-3">Follow</h4>
                    <div className="flex gap-4">
                      {['Instagram', 'LinkedIn', 'Pinterest'].map((s) => (
                        <a key={s} href="#!" className="text-xs tracking-widest uppercase text-stone-500 hover:text-accent transition-colors">
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={150}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-stone-900 mb-3">Message Received</h3>
                    <p className="text-stone-500 max-w-sm leading-relaxed">
                      Thank you for reaching out. A member of our team will be in touch within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors bg-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors bg-white"
                          placeholder="+1 (000) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors bg-white appearance-none"
                        >
                          <option value="">Select type...</option>
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Public / Civic</option>
                          <option>Interior Design</option>
                          <option>Urban Planning</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Approximate Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors bg-white appearance-none"
                      >
                        <option value="">Select range...</option>
                        <option>Under R2M</option>
                        <option>R2M – R5M</option>
                        <option>R5M – R20M</option>
                        <option>R20M – R100M</option>
                        <option>R100M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">Tell us about your project *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors bg-white resize-none"
                        placeholder="Describe your vision, site, timeline, and any other relevant details..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-accent text-white text-sm tracking-widest uppercase font-medium hover:bg-accent-light transition-colors"
                    >
                      Send Enquiry
                    </button>

                    <p className="text-xs text-stone-400 text-center">
                      We respond to all enquiries within 48 business hours.
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 lg:h-80 bg-stone-100 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1400&q=70"
          alt="Cape Town"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-8 py-5 shadow-lg text-center">
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Studio Axis</p>
            <p className="text-stone-800 font-medium text-sm">12 Bree Street, De Waterkant, Cape Town</p>
          </div>
        </div>
      </section>
    </div>
  );
}
