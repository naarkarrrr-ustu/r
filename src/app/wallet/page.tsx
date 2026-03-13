
"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Download, 
  Share2, 
  CheckCircle2, 
  MapPin, 
  User, 
  Calendar,
  CreditCard,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WalletPage() {
  const qrImg = PlaceHolderImages.find(img => img.id === 'qr-code');

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-headline">Digital Licence Wallet</h1>
          <p className="text-muted-foreground">Carry your driving credentials securely on your smartphone.</p>
        </div>
        <div className="flex gap-3">
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            Share QR
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Visual DL Card */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold font-headline flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Your Smart Card
          </h2>
          
          <div className="relative aspect-[1.6/1] w-full bg-gradient-to-br from-primary to-blue-800 rounded-3xl overflow-hidden shadow-2xl p-6 text-white border-4 border-white/20">
            {/* Design Elements */}
            <div className="absolute top-0 right-0 p-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <span className="text-xs font-bold">MoRTH</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 p-8 opacity-10">
               <Smartphone className="w-32 h-32" />
            </div>

            {/* Card Content */}
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-20 h-24 bg-slate-100 rounded-lg overflow-hidden border-2 border-white/50 relative">
                   <Image 
                    src="https://picsum.photos/seed/user-rajesh/200/240" 
                    alt="User Photo" 
                    fill 
                    className="object-cover"
                   />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Driving Licence Number</p>
                  <p className="text-xl font-bold font-mono">KA01 20230004562</p>
                  <h3 className="text-2xl font-bold mt-2">RAJESH KUMAR</h3>
                  <p className="text-xs font-medium opacity-90">S/O MR. SOMNATH KUMAR</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Valid From</p>
                  <p className="text-sm font-bold">12-10-2023</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Valid Till</p>
                  <p className="text-sm font-bold text-accent">11-10-2033</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Auth. to Drive</p>
                  <p className="text-sm font-bold">MCWG, LMV</p>
                </div>
                <div className="space-y-1 text-right">
                   <div className="inline-block px-2 py-1 bg-white text-primary rounded text-[10px] font-bold uppercase">
                     State: Karnataka
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-4 rounded-xl bg-green-50 border border-green-100 text-green-800">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-medium">This is a verified digital document valid u/s 139 of MV Act 1988.</span>
          </div>
        </section>

        {/* Details & Verification */}
        <section className="space-y-8">
          <Card className="border-slate-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Full Licence Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Date of Issue</p>
                  <p className="font-semibold">Oct 12, 2023</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">RTO Name</p>
                  <p className="font-semibold">Bangalore Central (KA-01)</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Blood Group</p>
                  <p className="font-semibold text-red-600">B +ve</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Status</p>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Active</Badge>
                </div>
                <div className="col-span-2">
                  <p className="text-muted-foreground mb-1">Address</p>
                  <p className="font-semibold leading-snug">#45, 2nd Main Road, Jayanagar 4th Block, Bangalore, KA - 560011</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-100 bg-slate-50 border-dashed">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Verification QR Code</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <div className="w-48 h-48 bg-white p-4 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center relative">
                 {qrImg && (
                   <Image 
                    src={qrImg.imageUrl} 
                    alt="License QR" 
                    width={180} 
                    height={180} 
                    className="opacity-90"
                    data-ai-hint={qrImg.imageHint}
                   />
                 )}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white border-4 border-white">S</div>
                 </div>
              </div>
              <p className="text-xs text-center text-muted-foreground max-w-xs">
                Traffic authorities can scan this QR code to instantly verify your driving credentials even without an internet connection.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
