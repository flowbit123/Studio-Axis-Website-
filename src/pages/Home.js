import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const featuredProjects = [
  {
    id: 1,
    title: 'Meridian Residence',
    category: 'Residential',
    location: 'Clifton, Cape Town',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  },
  {
    id: 2,
    title: 'Vertex Tower',
    category: 'Commercial',
    location: 'Sandton, Johannesburg',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    id: 3,
    title: 'The Atrium',
    category: 'Public',
    location: 'Waterfall, Midrand',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
];

const stats = [
  { value: '120+', label: 'Projects Completed' },
  { value: '28', label: 'Years of Practice' },
  { value: '18', label: 'Design Awards' },
  { value: '4', label: 'Continents' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=85"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 w-full">
          <div className="max-w-3xl">
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-5 animate-fade-in">
              Architecture · Interior · Urban Design
            </p>
            <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.05] mb-6 animate-fade-up">
              Space that<br />
              <span className="italic font-normal">inspires</span> living.
            </h1>
            <p className="text-white/70 text-lg max-w-md leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '150ms' }}>
              Studio Axis creates architecture that balances precision with poetry — structures that endure, environments that elevate. Based in Cape Town, building across South Africa.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '250ms' }}>
              <Link
                to="/projects"
                className="px-8 py-3.5 bg-white text-accent text-sm tracking-widest uppercase font-medium hover:bg-accent hover:text-white transition-all duration-300"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-accent transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-center translate-y-6">Scroll</span>
            <div className="w-px h-16 bg-white/30 relative overflow-hidden">
              <div className="w-full h-1/2 bg-white absolute top-0 animate-[scrollLine_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80}>
                <div className="text-center">
                  <div className="font-display text-4xl lg:text-5xl text-white font-medium mb-1">{s.value}</div>
                  <div className="text-white/50 text-xs tracking-widest uppercase">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">Our Philosophy</p>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-stone-900 leading-tight mb-6">
                Architecture as<br />
                <span className="italic text-accent">pure intention</span>
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                We believe that every project is a conversation between form and purpose, between the permanence of structure and the fluidity of life within it. Studio Axis was founded on the conviction that great architecture is not imposed upon its site — it is discovered there.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                From intimate residences to civic landmarks, we approach each commission with equal rigor and curiosity, guided by a commitment to material honesty and spatial clarity.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-accent font-medium group"
              >
                About the firm
                <span className="block w-8 h-px bg-accent group-hover:w-14 transition-all duration-300" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Architectural detail"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Selected Work</p>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-stone-900">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-stone-600 hover:text-accent font-medium group"
            >
              All projects
              <span className="block w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 120}>
                <Link to="/projects" className="group block">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-medium text-stone-900 mb-1 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-stone-500 text-sm">{project.location}</p>
                    </div>
                    <span className="text-xs tracking-widest uppercase text-stone-400 bg-stone-100 px-2 py-1 mt-1">
                      {project.category}
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1400&q=80"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/90" />
        </div>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">Ready to build?</p>
          <h2 className="font-display text-4xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Let's create something<br />
            <span className="italic font-normal">extraordinary</span>
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-10 leading-relaxed">
            Whether you're envisioning a dream home or a landmark building, Studio Axis is ready to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-accent text-sm tracking-widest uppercase font-medium hover:bg-stone-100 transition-colors"
          >
            Begin the Conversation
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
