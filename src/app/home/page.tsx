
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  FileText, 
  CreditCard, 
  RefreshCcw, 
  Search, 
  Calendar, 
  BookOpen, 
  ShieldCheck,
  Zap,
  Globe,
  PlusCircle,
  MapPin,
  Phone,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useSelectedState } from '@/context/state-context';

export default function HomeHubPage() {
  const { selectedState } = useSelectedState();
  const router = useRouter();

  useEffect(() => {
    if (!selectedState) {
      router.push('/');
    }
  }, [selectedState, router]);

  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-government');

  const categories = [
    {
      title: "Learner Licence Services",
      icon: FileText,
      actions: [
        { title: "Apply for LL", desc: "Start new application", href: "/apply?type=ll", icon: FileText },
        { title: "LL Test Tutorial", desc: "Watch safety videos", href: "/mock-test", icon: BookOpen },
        { title: "Online LL Test", desc: "Take test from home", href: "/mock-test", icon: Zap }
      ]
    },
    {
      title: "Driving Licence Services",
      icon: CreditCard,
      actions: [
        { title: "Apply for DL", desc: "After 30 days of LL", href: "/apply?type=dl", icon: CreditCard },
        { title: "DL Renewal", desc: "Renew expired licence", href: "/apply?type=dl-renewal", icon: RefreshCcw },
        { title: "Change of Address", desc: "Update current address", href: "/apply?type=dl-address", icon: MapPin },
        { title: "Duplicate DL", desc: "Lost or damaged card", href: "/apply?type=dl-duplicate", icon: PlusCircle }
      ]
    },
    {
      title: "Appointments & Tracker",
      icon: Calendar,
      actions: [
        { title: "Book Slot", desc: "Driving test booking", href: "/slots", icon: Calendar },
        { title: "Track Status", desc: "Check app progress", href: "/tracker", icon: Search },
        { title: "Fee Payment", desc: "Pay pending fees", href: "/apply", icon: CreditCard },
        { title: "Upload Docs", desc: "Centralized vault", href: "/apply", icon: ShieldCheck }
      ]
    },
    {
      title: "Other Utilities",
      icon: Globe,
      actions: [
        { title: "IDP", desc: "International Permit", href: "/apply?type=idp", icon: Globe },
        { title: "Mobile Update", desc: "Update phone number", href: "/dashboard", icon: Phone },
        { title: "DL Extract", desc: "Download DL details", href: "/wallet", icon: FileText },
        { title: "Withdraw Service", desc: "Cancel application", href: "/tracker", icon: LogOut }
      ]
    }
  ];

  if (!selectedState) return null;

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
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
              {selectedState} State RTO Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight">
              Driving Licence Services <br />
              <span className="text-accent">Simplified for You</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
              Access all your transportation-related documentation services online. Fast, secure, and contactless.
            </p>
          </div>
        </div>
      </section>

      {/* Grouped Services */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <div className="p-1.5 bg-primary/10 text-primary rounded-md">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-headline">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.actions.map((action, actionIdx) => (
                  <Link key={actionIdx} href={action.href}>
                    <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all border-slate-100 group">
                      <CardHeader className="p-5 pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <action.icon className="w-5 h-5" />
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-base font-bold">{action.title}</CardTitle>
                        <CardDescription className="text-xs">{action.desc}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-5 pt-4" />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Search Card */}
      <section className="container mx-auto px-4 mt-8">
        <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
          <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold font-headline">Need to check your slot?</h2>
              <p className="text-primary-foreground/80">
                Instantly view your booked driving test details or find a new RTO.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="h-12 font-bold px-8" asChild>
                <Link href="/slots">Check Test Slots</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
