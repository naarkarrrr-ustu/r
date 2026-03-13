import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, Heart, Bot, MessageCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  const mainLogo = PlaceHolderImages.find(img => img.id === 'main-logo');
  const secondaryLogo = PlaceHolderImages.find(img => img.id === 'secondary-logo');

  return (
    <>
      {/* Assistant Section - Before Footer */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30 -ml-48 -mb-48" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Bot Image */}
            <div className="flex-shrink-0 w-40 h-40 relative animate-bounce-gentle hidden md:flex">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />
              <Image
                src="https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
                alt="Assistant Bot"
                width={160}
                height={160}
                className="relative object-contain drop-shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-4 animate-fade-in-up">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Need Help?</h2>
                  <p className="text-white/80 text-sm">Chat with Sarathi Assistant 24/7</p>
                </div>
              </div>
              <p className="text-white/90 text-sm md:text-base">
                Get instant answers to all your driving licence questions. Our AI-powered assistant is available anytime to guide you through application processes, document requirements, test schedules, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 font-bold transition-all duration-300 hover:shadow-lg">
                  <Link href="/assistant" className="inline-flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Start Chatting
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold transition-all duration-300" asChild>
                  <Link href="/home">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
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
                  { label: 'Apply for LL', href: '/apply?type=ll' },
                  { label: 'Apply for DL', href: '/apply?type=dl' },
                  { label: 'Slot Booking', href: '/slots' },
                  { label: 'Fee Payment', href: '/apply?step=4' },
                  { label: 'Track Status', href: '/tracker' }
                ].map((item, idx) => (
                  <li key={idx} className="animate-fade-in-up">
                    <Link href={item.href} className="group relative inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-300">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {item.label}
                    </Link>
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
                <li className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-1">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 group-hover:animate-bounce-gentle" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Helpline: 0120-2459168</span>
                </li>
                <li className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-1">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">helpdesk-sarathi@gov.in</span>
                </li>
                <li className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-1">
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
                  <li key={idx} className="animate-fade-in-up">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-300">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 text-center text-xs text-slate-500 space-y-2 animate-fade-in-up">
            <p>© {new Date().getFullYear()} National Informatics Centre. Content Managed by Ministry of Road Transport & Highways.</p>
            <p className="flex items-center justify-center gap-1 transition-all duration-300 hover:text-primary/60">
              Made with <Heart className="w-3 h-3 animate-pulse text-red-500" /> for a better India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}