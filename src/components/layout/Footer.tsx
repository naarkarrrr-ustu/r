
import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const mainLogo = PlaceHolderImages.find(img => img.id === 'main-logo');
  const secondaryLogo = PlaceHolderImages.find(img => img.id === 'secondary-logo');

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 -ml-48 -mb-48" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Branding */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-3 text-white group transition-all duration-300">
              {mainLogo ? (
                <div className="w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={mainLogo.imageUrl}
                    alt={mainLogo.description}
                    width={40}
                    height={40}
                    className="object-contain transition-all duration-300 group-hover:brightness-125"
                    data-ai-hint={mainLogo.imageHint}
                  />
                </div>
              ) : (
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">S</div>
              )}
              <span className="text-xl font-bold font-headline tracking-tight group-hover:text-primary transition-colors duration-300">Sarathi Connect</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-300 hover:text-slate-300">
              Ministry of Road Transport and Highways (MoRTH) Initiative. Providing efficient, transparent, and user-centric driving licence services.
            </p>
            {secondaryLogo && (
              <div className="pt-3 mt-3 border-t border-slate-800 transform transition-all duration-300 hover:translate-x-1">
                <p className="text-xs text-slate-500 mb-2 transition-colors duration-300 hover:text-slate-400">Government Portal</p>
                <Image
                  src={secondaryLogo.imageUrl}
                  alt={secondaryLogo.description}
                  width={80}
                  height={40}
                  className="object-contain transition-all duration-300 hover:brightness-125"
                  data-ai-hint={secondaryLogo.imageHint}
                />
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-semibold mb-6 font-headline flex items-center gap-2 text-lg">
              Quick Links
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent ml-2" />
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Apply for LL', href: '#' },
                { label: 'Apply for DL', href: '#' },
                { label: 'Slot Booking', href: '#' },
                { label: 'Fee Payment', href: '#' },
                { label: 'Track Status', href: '#' }
              ].map((item, idx) => (
                <li key={idx} style={{ animationDelay: `${0.15 + idx * 0.05}s` }} className="animate-fade-in-up">
                  <a href={item.href} className="group relative inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-300">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-semibold mb-6 font-headline flex items-center gap-2 text-lg">
              Support
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent ml-2" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-1 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                <Phone className="w-4 h-4 text-primary flex-shrink-0 group-hover:animate-bounce-gentle" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Helpline: 0120-2459168</span>
              </li>
              <li className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-1 animate-fade-in-up" style={{ animationDelay: '0.30s' }}>
                <Mail className="w-4 h-4 text-primary flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">helpdesk-sarathi@gov.in</span>
              </li>
              <li className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-1 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:animate-bounce-gentle" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Parivahan Bhawan, 1, Sansad Marg, New Delhi-110001</span>
              </li>
            </ul>
          </div>

          {/* Other Portals */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-semibold mb-6 font-headline flex items-center gap-2 text-lg">
              External Links
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent ml-2" />
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Vahan Portal', href: 'https://vahan.parivahan.gov.in/' },
                { label: 'mParivahan', href: 'https://mparrivahan.gov.in/' },
                { label: 'MoRTH Website', href: 'https://morth.gov.in/' },
                { label: 'National Portal', href: 'https://www.india.gov.in/' }
              ].map((item, idx) => (
                <li key={idx} style={{ animationDelay: `${0.35 + idx * 0.05}s` }} className="animate-fade-in-up">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-300">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {item.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 space-y-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="transition-all duration-300 hover:text-slate-400">© {new Date().getFullYear()} National Informatics Centre. Content Managed by Ministry of Road Transport & Highways.</p>
          <p className="flex items-center justify-center gap-1 transition-all duration-300 hover:text-primary/60">
            Made with <Heart className="w-3 h-3 animate-pulse text-red-500" /> for a better India
          </p>
        </div>
      </div>
    </footer>
  );
}
