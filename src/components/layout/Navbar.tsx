
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center justify-center">
              {mainLogo ? (
                <Image
                  src={mainLogo.imageUrl}
                  alt={mainLogo.description}
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                  data-ai-hint={mainLogo.imageHint}
                />
              ) : (
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
              )}
            </div>
            <span className="text-xl font-bold font-headline tracking-tight text-primary">Sarathi Connect</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/home" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/tracker" className="text-sm font-medium hover:text-primary transition-colors">Track Status</Link>
            <Link href="/wallet" className="text-sm font-medium hover:text-primary transition-colors">Digital Wallet</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {selectedState && (
            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 text-primary font-bold bg-primary/5 border border-primary/10 rounded-full px-4" onClick={clearState}>
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedState}</span>
              <X className="w-3 h-3 opacity-50 ml-1" />
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिन्दी (Hindi)</DropdownMenuItem>
              <DropdownMenuItem>বাংলা (Bengali)</DropdownMenuItem>
              <DropdownMenuItem>मराठी (Marathi)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
          </Button>

          <Button asChild variant="default" className="hidden sm:flex items-center gap-2">
            <Link href="/dashboard">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background animate-in slide-in-from-top">
          {selectedState && (
            <div className="flex items-center justify-between p-2 rounded bg-primary/5 text-primary text-sm font-bold">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {selectedState}</span>
              <Button variant="ghost" size="sm" onClick={clearState} className="h-6 w-6 p-0"><X className="w-3 h-3" /></Button>
            </div>
          )}
          <Link href="/home" className="block text-sm font-medium py-2">Home</Link>
          <Link href="/dashboard" className="block text-sm font-medium py-2">Dashboard</Link>
          <Link href="/tracker" className="block text-sm font-medium py-2">Track Status</Link>
          <Link href="/wallet" className="block text-sm font-medium py-2">Digital Wallet</Link>
          <Link href="/mock-test" className="block text-sm font-medium py-2">Mock Test</Link>
          <Button asChild className="w-full justify-start gap-2">
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
