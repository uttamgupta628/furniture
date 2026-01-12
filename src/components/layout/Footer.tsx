import React from 'react';
import logo from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Property',
      links: ['Learning Modules', 'Partnership', 'Watch demo', 'Event']
    },
    {
      title: 'About',
      links: ['Learning Modules', 'Partnership', 'Watch demo', 'Event']
    },
    {
      title: 'Resource',
      links: ['Learning Modules', 'Partnership', 'Watch demo', 'Event']
    }
  ];

  return (
    <footer className="bg-[#BCAA94] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ASR Tech Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-semibold">ASR Tech</span>
            </div>
            <p className="text-sm text-gray-900">
              Solution for easy and flexible house hunting. You can trust us anywhere through this platform.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional Divider */}
        <div className="border-t border-white-300 mt-8"></div>
      </div>
    </footer>
  );
};
