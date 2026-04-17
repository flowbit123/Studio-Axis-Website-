import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Elena Vasquez',
    role: 'Principal Architect & Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Yale School of Architecture. 20 years shaping civic and residential landmarks across three continents.',
  },
  {
    name: 'Marcus Chen',
    role: 'Partner, Structural Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'MIT graduate with deep expertise in engineered timber and adaptive reuse projects.',
  },
  {
    name: 'Sophia Adler',
    role: 'Partner, Interior Architecture',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    bio: "Parsons School of Design. Leads the firm's bespoke interior practice and material research.",
  },
];

const values = [
  { title: 'Material Honesty', desc: 'We let materials speak truthfully. No ornamental concealment — only authentic expression of structure and substance.' },
  { title: 'Contextual Sensitivity', desc: 'Every site carries a story. We listen before we draw, ensuring each project belongs to its place and time.' },
  { title: 'Spatial Clarity', desc: 'Complexity in experience, economy in means. Our spaces are refined through subtraction, not addition.' },
  { title: 'Enduring Quality', desc: 'We design for the long arc — buildings that age with grace, adapt to change, and improve over time.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
          alt="About Studio Axis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h1 className="font-display text-5xl lg:text-6xl font-medium text-white">About Studio Axis</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">Est. 1996 · Cape Town</p>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-stone-900 leading-tight mb-8">
                Built on a belief that<br />
                <span className="italic text-accent">space transforms</span> life.
              </h2>
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Studio Axis was founded in 1996 by Elena Vasquez with a single conviction: that exceptional architecture is not a luxury — it is a right. From a small De Waterkant studio in Cape Town, the firm has grown into a 45-person practice recognised nationally and internationally for work that is simultaneously rigorous and poetic.
                </p>
                <p>
                  Our projects span the full range of architectural scale — from intimate private residences to public cultural institutions, from adaptive reuse of industrial buildings to new mixed-use urban developments. What unites them is an unwavering commitment to spatial quality, material authenticity, and the lived experience of the people who inhabit our work.
                </p>
                <p>
                  We believe that the best architecture emerges through deep collaboration — with clients, with communities, with engineers and craftspeople. Every project is a unique dialogue, and we approach each one with fresh eyes and genuine curiosity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80"
                  alt="Studio"
                  className="w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80"
                  alt="Design detail"
                  className="w-full aspect-square object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80"
                  alt="Office"
                  className="w-full aspect-square object-cover -mt-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80"
                  alt="Architecture"
                  className="w-full aspect-square object-cover mt-4"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">What guides us</p>
            <h2 className="font-display text-4xl font-medium text-stone-900">Design Philosophy</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="pt-6 border-t border-stone-200">
                  <div className="w-8 h-0.5 bg-accent mb-4" />
                  <h3 className="font-display text-lg font-medium text-stone-900 mb-3">{v.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Work with us</p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium text-stone-900 mb-6">
            Ready to start a conversation?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent text-white text-sm tracking-widest uppercase font-medium hover:bg-accent-light transition-colors"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
