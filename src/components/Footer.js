import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-stone-400 flex items-center justify-center">
                <div className="w-3 h-3 bg-stone-400" />
              </div>
              <span className="font-display font-medium text-xl text-white tracking-wide">Studio Axis</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-stone-500">
              Architecture that defines space, shapes experience, and endures through time. Based in Cape Town, building across South Africa.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'LinkedIn', 'Pinterest'].map((s) => (
                <a key={s} href="#!" className="text-xs tracking-widest uppercase text-stone-600 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/services', 'Services'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-stone-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-stone-500">
              <li>12 Bree Street, De Waterkant</li>
              <li>Cape Town, 8001</li>
              <li className="mt-3">
                <a href="mailto:hello@studioaxis.co.za" className="hover:text-white transition-colors">
                  hello@studioaxis.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27215550180" className="hover:text-white transition-colors">
                  +27 (21) 555-0180
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
          <p className="text-xs text-stone-600">© 2024 Studio Axis. All rights reserved.</p>
          <p className="text-xs text-stone-600">Architecture · Interior · Urban Design</p>
        </div>
      </div>
    </footer>
  );
}
