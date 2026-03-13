
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

  // Service categories
  const categories = [
    {
      title: "Learner Licence",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      actions: [
        { title: "Apply for LL", desc: "Start new application", href: "/apply?type=ll", icon: FileText },
        { title: "LL Test", desc: "Watch tutorials", href: "/mock-test", icon: BookOpen },
        { title: "Online Test", desc: "Take test online", href: "/mock-test", icon: Zap }
      ]
    },
    {
      title: "Driving Licence",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
      actions: [
        { title: "Apply for DL", desc: "Main application", href: "/apply?type=dl", icon: CreditCard },
        { title: "Renewal", desc: "Renew licence", href: "/apply?type=dl-renewal", icon: RefreshCcw },
        { title: "Address Update", desc: "Change address", href: "/apply?type=dl-address", icon: MapPin }
      ]
    },
    {
      title: "Appointments",
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      actions: [
        { title: "Book Slot", desc: "Driving test", href: "/slots", icon: Calendar },
        { title: "Track Status", desc: "Check progress", href: "/tracker", icon: Search },
        { title: "Fee Payment", desc: "Pay fees", href: "/apply", icon: CreditCard }
      ]
    },
    {
      title: "Utilities",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
      actions: [
        { title: "IDP", desc: "International Permit", href: "/apply?type=idp", icon: Globe },
        { title: "Phone Update", desc: "Update number", href: "/dashboard", icon: Phone },
        { title: "DL Extract", desc: "Download details", href: "/wallet", icon: FileText }
      ]
    }
  ];

  if (!selectedState) return null;

  return (
    <div className="w-full flex flex-col gap-12 pb-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium animate-fade-in-down">
              {selectedState} RTO Portal
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Driving Licence Services
            </h1>
            <p className="text-base md:text-lg text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Fast, secure, contactless digital services for all your transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.actions.map((action, actionIdx) => (
                  <Link key={actionIdx} href={action.href} className="group h-full">
                    <Card className="h-full transition-all duration-300 ease-out border-slate-100 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transform hover:glow-effect relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                      <CardContent className="p-5 relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-600 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                            <action.icon className="w-5 h-5" />
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1" />
                        </div>
                        <CardTitle className="text-base font-bold text-slate-900 transition-colors duration-300">{action.title}</CardTitle>
                        <CardDescription className="text-xs text-slate-500 transition-colors duration-300">{action.desc}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Card */}
      <section className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: `${0.1 + categories.length * 0.1}s` }}>
        <Card className="bg-gradient-to-r from-primary to-blue-700 text-white border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold transition-all duration-300 group-hover:translate-x-2">Check Your Test Slot</h2>
              <p className="text-white/90 transition-all duration-300 group-hover:text-white">View booked test details or find your nearest RTO</p>
            </div>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-slate-100 font-bold transform transition-all duration-300 hover:scale-110 hover:shadow-lg" asChild>
              <Link href="/slots" className="inline-flex items-center gap-2 group/btn">
                Check Slots
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
