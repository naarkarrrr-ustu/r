
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
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              {selectedState} RTO Portal
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Driving Licence Services
            </h1>
            <p className="text-base md:text-lg text-white/90">
              Fast, secure, contactless digital services for all your transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.actions.map((action, actionIdx) => (
                  <Link key={actionIdx} href={action.href} className="group">
                    <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all border-slate-100">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-2 rounded-lg bg-slate-50 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <action.icon className="w-5 h-5" />
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-base font-bold text-slate-900">{action.title}</CardTitle>
                        <CardDescription className="text-xs text-slate-500">{action.desc}</CardDescription>
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
      <section className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-primary to-blue-700 text-white border-none overflow-hidden">
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">Check Your Test Slot</h2>
              <p className="text-white/90">View booked test details or find your nearest RTO</p>
            </div>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-slate-100 font-bold" asChild>
              <Link href="/slots">Check Slots</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
