
import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const mainLogo = PlaceHolderImages.find(img => img.id === 'main-logo');
  const secondaryLogo = PlaceHolderImages.find(img => img.id === 'secondary-logo');

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              {mainLogo ? (
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src={mainLogo.imageUrl}
                    alt={mainLogo.description}
                    width={40}
                    height={40}
                    className="object-contain"
                    data-ai-hint={mainLogo.imageHint}
                  />
                </div>
              ) : (
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">S</div>
              )}
              <span className="text-xl font-bold font-headline tracking-tight">Sarathi Connect</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Ministry of Road Transport and Highways (MoRTH) Initiative. Providing efficient, transparent, and user-centric driving licence services.
            </p>
            {secondaryLogo && (
              <div className="pt-3 mt-3 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-2">Government Portal</p>
                <Image
                  src={secondaryLogo.imageUrl}
                  alt={secondaryLogo.description}
                  width={80}
                  height={40}
                  className="object-contain"
                  data-ai-hint={secondaryLogo.imageHint}
                />
              </div>
            )}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Apply for LL</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Apply for DL</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Slot Booking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fee Payment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-headline">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Helpline: 0120-2459168</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>helpdesk-sarathi@gov.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Parivahan Bhawan, 1, Sansad Marg, New Delhi-110001</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-headline">Other Portals</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://vahan.parivahan.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">Vahan Portal <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://mparrivahan.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">mParivahan <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://morth.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">MoRTH Website <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">National Portal <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} National Informatics Centre. Content Managed by Ministry of Road Transport & Highways.</p>
        </div>
      </div>
    </footer>
  );
}
