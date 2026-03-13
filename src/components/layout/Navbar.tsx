
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, Globe, Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="text-xl font-bold font-headline tracking-tight text-primary">Sarathi Connect</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/tracker" className="text-sm font-medium hover:text-primary transition-colors">Track Status</Link>
            <Link href="/wallet" className="text-sm font-medium hover:text-primary transition-colors">Digital Wallet</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
          <Link href="/" className="block text-sm font-medium py-2">Home</Link>
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
