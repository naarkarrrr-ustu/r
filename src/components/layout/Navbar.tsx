
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, Globe, Bell, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelectedState } from '@/context/state-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedState, clearState } = useSelectedState();
  const mainLogo = PlaceHolderImages.find(img => img.id === 'main-logo');

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out">
              {mainLogo ? (
                <Image
                  src={mainLogo.imageUrl}
                  alt={mainLogo.description}
                  width={40}
                  height={40}
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                  priority
                  data-ai-hint={mainLogo.imageHint}
                />
              ) : (
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary/80 transition-all duration-300 group-hover:shadow-lg">S</div>
              )}
            </div>
            <span className="text-xl font-bold font-headline tracking-tight text-primary group-hover:text-primary/80 transition-colors duration-300">Sarathi Connect</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/home" className="text-sm font-medium relative py-2 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/dashboard" className="text-sm font-medium relative py-2 group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/tracker" className="text-sm font-medium relative py-2 group">
              Track Status
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/wallet" className="text-sm font-medium relative py-2 group">
              Digital Wallet
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {selectedState && (
            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 text-primary font-bold bg-primary/5 border border-primary/10 rounded-full px-4 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md" onClick={clearState}>
              <MapPin className="w-3.5 h-3.5 transition-transform duration-300" />
              <span>{selectedState}</span>
              <X className="w-3 h-3 opacity-50 ml-1 transition-transform duration-300 group-hover:rotate-90" />
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2 transition-all duration-300">
                <Globe className="w-4 h-4 transition-transform duration-300" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="animate-fade-in-up">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
              <DropdownMenuItem>বাংলা (Bengali)</DropdownMenuItem>
              <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="relative transition-all duration-300 hover:bg-primary/10 group">
            <Bell className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full animate-pulse" />
          </Button>

          <Button asChild variant="default" className="hidden sm:flex items-center gap-2 transition-all duration-300">
            <Link href="/dashboard">
              <User className="w-4 h-4 transition-transform duration-300" />
              <span>Login</span>
            </Link>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 animate-spin-slow" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t animate-fade-in-up p-4 space-y-4 bg-background/95 backdrop-blur">
          {selectedState && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-bold border border-primary/20 animation-scale-in transition-all duration-300">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 animate-bounce-gentle" /> {selectedState}</span>
              <Button variant="ghost" size="sm" onClick={clearState} className="h-6 w-6 p-0 hover:bg-primary/20 transition-all duration-300"><X className="w-3 h-3 transition-transform duration-300 hover:rotate-90" /></Button>
            </div>
          )}
          <Link href="/home" className="block text-sm font-medium py-3 px-2 rounded-md hover:bg-primary/5 transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-12" />
          </Link>
          <Link href="/dashboard" className="block text-sm font-medium py-3 px-2 rounded-md hover:bg-primary/5 transition-all duration-300 relative group">
            Dashboard
            <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-24" />
          </Link>
          <Link href="/tracker" className="block text-sm font-medium py-3 px-2 rounded-md hover:bg-primary/5 transition-all duration-300 relative group">
            Track Status
            <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-20" />
          </Link>
          <Link href="/wallet" className="block text-sm font-medium py-3 px-2 rounded-md hover:bg-primary/5 transition-all duration-300 relative group">
            Digital Wallet
            <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-24" />
          </Link>
          <Button asChild className="w-full justify-start gap-2 transition-all duration-300">
            <Link href="/dashboard">
              <User className="w-4 h-4" />
              Login
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
