import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const categories = ['All', 'Residential', 'Commercial', 'Public', 'Interior'];

const projects = [
  {
    id: 1, title: 'Meridian Residence', category: 'Residential', location: 'Clifton, Cape Town', year: '2023',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    size: 'large',
  },
  {
    id: 2, title: 'Vertex Tower', category: 'Commercial', location: 'Sandton, Johannesburg', year: '2022',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    size: 'small',
  },
  {
    id: 3, title: 'The Atrium', category: 'Public', location: 'Waterfall, Midrand', year: '2022',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80',
    size: 'small',
  },
  {
    id: 4, title: 'Casa Pietra', category: 'Residential', location: 'Franschhoek, Western Cape', year: '2021',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    size: 'small',
  },
  {
    id: 5, title: 'Harbour Cultural Centre', category: 'Public', location: 'V&A Waterfront, Cape Town', year: '2021',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=700&q=80',
    size: 'large',
  },
  {
    id: 6, title: 'The Loft Collection', category: 'Interior', location: 'Maboneng, Johannesburg', year: '2023',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80',
    size: 'small',
  },
  {
    id: 7, title: 'Eclipse Pavilion', category: 'Public', location: 'uMhlanga, KwaZulu-Natal', year: '2020',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80',
    size: 'small',
  },
  {
    id: 8, title: 'Monolith House', category: 'Residential', location: 'Constantia, Cape Town', year: '2023',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80',
    size: 'small',
  },
  {
    id: 9, title: 'The Silk Office', category: 'Commercial', location: 'Rosebank, Johannesburg', year: '2022',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    size: 'large',
  },
  {
    id: 10, title: 'Sanctuary Interiors', category: 'Interior', location: 'Stellenbosch, Western Cape', year: '2023',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=700&q=80',
    size: 'small',
  },
  {
    id: 11, title: 'Bushveld Retreat', category: 'Residential', location: 'Hoedspruit, Limpopo', year: '2021',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
    size: 'small',
  },
  {
    id: 12, title: 'Glass Bridge Terminal', category: 'Public', location: 'OR Tambo, Ekurhuleni', year: '2020',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=700&q=80',
    size: 'small',
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80"
          alt="Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3">Portfolio</p>
            <h1 className="font-display text-5xl lg:text-6xl font-medium text-white">Our Work</h1>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 border-b border-stone-100 sticky top-16 lg:top-20 bg-white/95 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-accent text-white'
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 60} className={project.size === 'large' ? 'lg:col-span-2' : ''}>
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover ${
                        project.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-medium text-stone-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-stone-400 text-sm">{project.location} · {project.year}</p>
                    </div>
                    <span className="text-xs tracking-widest uppercase text-stone-400 bg-stone-100 px-2 py-1 shrink-0 mt-1">
                      {project.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-stone-400">No projects found in this category.</div>
          )}
        </div>
      </section>

      {/* Start a project CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">Next project</p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-stone-900 mb-6">
              Could be yours.
            </h2>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-accent text-white text-sm tracking-widest uppercase font-medium hover:bg-accent-light transition-colors"
            >
              Start a Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
