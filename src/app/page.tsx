
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-4xl mx-auto mb-6 shadow-xl shadow-primary/20">S</div>
          <h1 className="text-3xl font-bold font-headline">Sarathi Connect</h1>
          <p className="text-muted-foreground mt-2">Ministry of Road Transport and Highways</p>
        </div>

        <Card className="border-slate-200 shadow-xl">
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
