
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useSelectedState } from '@/context/state-context';

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

export default function StateSelectionPage() {
  const { selectedState, setSelectedState } = useSelectedState();
  const [tempState, setTempState] = useState('');
  const router = useRouter();
  const mainLogo = PlaceHolderImages.find((img) => img.id === 'main-logo');
  const indiaFlag = PlaceHolderImages.find((img) => img.id === 'gov-flag');
  const rtoBackdrop = PlaceHolderImages.find((img) => img.id === 'gov-rto-command');

  useEffect(() => {
    if (selectedState) {
      router.push('/home');
    }
  }, [selectedState, router]);

  const handleProceed = () => {
    if (tempState) {
      setSelectedState(tempState);
      router.push('/home');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-8">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 relative flex items-center justify-center">
            {mainLogo ? (
              <Image
                src={mainLogo.imageUrl}
                alt={mainLogo.description}
                width={128}
                height={128}
                className="object-contain drop-shadow-lg"
                priority
                data-ai-hint={mainLogo.imageHint}
              />
            ) : (
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/10 border border-primary/10">
                <span className="text-3xl font-bold text-primary">S</span>
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold font-headline">Sarathi Connect</h1>
          <p className="text-muted-foreground mt-2">Ministry of Road Transport and Highways</p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-3">Government of India Service Portal</p>
          {indiaFlag && (
            <div className="mt-4 inline-flex rounded-md border border-slate-200 bg-white p-1 shadow-sm">
              <Image
                src={indiaFlag.imageUrl}
                alt={indiaFlag.description}
                width={72}
                height={48}
                className="h-8 w-auto rounded-sm object-cover"
                data-ai-hint={indiaFlag.imageHint}
              />
            </div>
          )}
        </div>

        <Card className="border-slate-200 shadow-xl overflow-hidden">
          {rtoBackdrop && (
            <div className="relative h-36 border-b border-slate-200">
              <Image
                src={rtoBackdrop.imageUrl}
                alt={rtoBackdrop.description}
                fill
                className="object-cover"
                data-ai-hint={rtoBackdrop.imageHint}
              />
              <div className="absolute inset-0 bg-slate-900/35" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">Official RTO Services</p>
              </div>
            </div>
          )}
          <CardHeader className="text-center">
            <CardTitle>Select State Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Select State to initiate Service</label>
              <Select onValueChange={setTempState}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="-- Select State Name --" />
                </SelectTrigger>
                <SelectContent>
                  {states.sort().map(s => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full h-12 font-bold text-lg" disabled={!tempState} onClick={handleProceed}>
              Proceed
            </Button>
          </CardContent>
        </Card>
        
        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to the terms of service and road safety policies of the respective State RTO.
        </p>
      </div>
    </div>
  );
}
