
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold font-headline tracking-tight">Sarathi Connect</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Ministry of Road Transport and Highways (MoRTH) Initiative. Providing efficient, transparent, and user-centric driving licence services.
            </p>
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
              <li><a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">Vahan Portal <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">mParivahan <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">MoRTH Website <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">National Portal <ExternalLink className="w-3 h-3" /></a></li>
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
