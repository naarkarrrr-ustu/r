
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  CreditCard, 
  RefreshCcw, 
  Search, 
  Calendar, 
  BookOpen, 
  CheckCircle,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const quickActions = [
  {
    title: "Apply for Learner Licence",
    description: "Start your journey as a new driver.",
    icon: FileText,
    href: "/apply",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    title: "Apply for Driving Licence",
    description: "Upgrade from LL to a full licence.",
    icon: CreditCard,
    href: "/apply",
    color: "bg-green-50 text-green-600 border-green-100"
  },
  {
    title: "Renew Licence",
    description: "Keep your driving credentials up to date.",
    icon: RefreshCcw,
    href: "/apply",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    title: "Track Application",
    description: "Check the status of your request.",
    icon: Search,
    href: "/tracker",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    title: "Book Driving Test",
    description: "Schedule your slot at the nearest RTO.",
    icon: Calendar,
    href: "/slots",
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    title: "Mock Learner Test",
    description: "Practice road signs and safety rules.",
    icon: BookOpen,
    href: "/mock-test",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  }
];

const features = [
  {
    title: "Contactless Services",
    description: "Avoid queues with fully digital application and document upload processes.",
    icon: Zap
  },
  {
    title: "Secure Data Handling",
    description: "Your personal details and documents are protected with high-level encryption.",
    icon: ShieldCheck
  },
  {
    title: "Real-time Notifications",
    description: "Get instant updates via SMS and Email on your application status.",
    icon: Clock
  },
  {
    title: "Citizen Feedback",
    description: "Directly share your experience to help us improve the digital infrastructure.",
    icon: CheckCircle
  }
];

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-government');

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImg && (
            <Image 
              src={heroImg.imageUrl}
              alt={heroImg.description}
              fill
              className="object-cover brightness-[0.4]"
              priority
              data-ai-hint={heroImg.imageHint}
            />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
              Government of India Initiative
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight">
              Modernizing Citizen <br />
              <span className="text-accent">Driving Services</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
              Applying for your driving licence is now easier than ever. Comprehensive, digital-first services at your fingertips.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 font-semibold shadow-lg" asChild>
                <Link href="/apply">Get Started Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white" asChild>
                <Link href="/tracker">Track Status</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold font-headline">What can we help you with?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of digital services for all your driving-related documentation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all border-slate-100 group">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-3 rounded-xl border ${action.color}`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline leading-tight">Empowering Citizens with Digital Transparency</h2>
                <p className="text-muted-foreground">
                  The Sarathi Connect portal is designed to eliminate bureaucratic delays and provide a direct link between the RTO and the common man.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                src="https://picsum.photos/seed/sarathi-tech/800/600" 
                alt="Technology background"
                fill
                className="object-cover"
                data-ai-hint="digital future"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="text-2xl font-bold font-headline">Over 50 Million+</p>
                    <p className="opacity-90">Licences issued digitally since 2020</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTO Search Shortcut */}
      <section className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold font-headline">Ready to take the next step?</h2>
              <p className="text-primary-foreground/80 max-w-md">
                Find your nearest RTO office, check available test slots, or start a new application in just a few clicks.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="h-12 font-bold px-8" asChild>
                <Link href="/slots">Find RTO Near Me</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
