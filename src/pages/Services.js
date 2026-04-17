import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const services = [
  {
    number: '01',
    title: 'Architectural Design',
    subtitle: 'Full-service architecture from concept to completion',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    items: [
      'Site analysis and feasibility studies',
      'Concept design and schematic development',
      'Design development and documentation',
      'Planning and regulatory approvals',
      'Construction documentation',
      'Contract administration',
    ],
    desc: 'We guide each project from its earliest conceptual stage through to handover, maintaining design integrity at every phase. Our process is transparent, collaborative, and deeply attentive to your goals.',
  },
  {
    number: '02',
    title: 'Interior Architecture',
    subtitle: 'Spatial design that reflects who you are',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    items: [
      'Space planning and layout optimization',
      'Material and finish selection',
      'Custom millwork and joinery',
      'Lighting design strategy',
      'Furniture specification',
      'Art curation and styling',
    ],
    desc: 'Interior architecture is the art of shaping how people feel within a space. Our interiors practice creates environments of refined comfort — where proportion, light, and material work in quiet harmony.',
  },
  {
    number: '03',
    title: 'Urban & Master Planning',
    subtitle: 'Visioning at the scale of the city',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80',
    items: [
      'Urban design and placemaking',
      'Mixed-use development planning',
      'Public realm strategy',
      'Community engagement',
      'Phasing and implementation',
      'Zoning analysis',
    ],
    desc: 'At the urban scale, our work focuses on creating places that people genuinely want to inhabit — neighborhoods with identity, streets with vitality, and public spaces that serve as true civic anchors.',
  },
  {
    number: '04',
    title: 'Adaptive Reuse',
    subtitle: 'New life for existing structures',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    items: [
      'Heritage assessment and conservation',
      'Structural integration strategies',
      'Program repositioning',
      'Sustainability upgrades',
      'Historical documentation',
      'Regulatory navigation',
    ],
    desc: 'Some of our most meaningful work involves the transformation of existing buildings — giving them new purpose while honoring their history. We find the latent potential in every structure and release it with skill and care.',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We begin with deep listening. Understanding your vision, your constraints, your aspirations, and your site.' },
  { step: '02', title: 'Concept', desc: 'Translating insights into spatial ideas. This is where the design begins to take form — in sketches, models, and dialogue.' },
  { step: '03', title: 'Development', desc: 'Refining the concept into a fully resolved design, tested against every technical, regulatory, and experiential requirement.' },
  { step: '04', title: 'Delivery', desc: 'Precise documentation and active site presence ensure that the built result faithfully realizes the design vision.' },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
          alt="Services"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3">What we do</p>
            <h1 className="font-display text-5xl lg:text-6xl font-medium text-white">Services</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="max-w-2xl">
            <p className="text-stone-500 text-lg leading-relaxed">
              Studio Axis offers a comprehensive range of architectural and design services, each delivered with the same commitment to precision, beauty, and meaningful human experience. Whether a single room or a city block, we bring the same exacting standards to every scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section>
        {services.map((service, i) => (
          <div key={service.number} className={`py-20 lg:py-28 ${i % 2 === 1 ? 'bg-stone-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <AnimatedSection className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="font-display text-6xl text-stone-100 font-medium mb-4">{service.number}</p>
                  <h2 className="font-display text-3xl lg:text-4xl font-medium text-stone-900 mb-2">{service.title}</h2>
                  <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6">{service.subtitle}</p>
                  <p className="text-stone-500 leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-stone-600 text-sm">
                        <span className="w-4 h-px bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
                <AnimatedSection delay={150} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-14">
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-3">How we work</p>
            <h2 className="font-display text-4xl font-medium text-white">Our Process</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="pt-6 border-t border-white/20">
                  <div className="font-display text-5xl text-white/20 font-medium mb-3">{step.step}</div>
                  <h3 className="text-white font-medium text-lg mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Start your project</p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium text-stone-900 mb-4">
            Every great building begins with a conversation.
          </h2>
          <p className="text-stone-500 max-w-md mx-auto mb-8">
            Tell us about your project. We'll listen carefully and help you explore what's possible.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent text-white text-sm tracking-widest uppercase font-medium hover:bg-accent-light transition-colors"
          >
            Contact Us
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
