
"use client";

import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Info, 
  Calendar as CalendarIcon, 
  Map, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const rtoOffices = [
  {
    id: 'KA-01',
    name: 'Bangalore Central (Koramangala)',
    address: 'B.D.A. Complex, Koramangala, Bangalore - 560034',
    slots: '14 Slots Available',
    distance: '2.4 km'
  },
  {
    id: 'KA-03',
    name: 'Bangalore East (Indiranagar)',
    address: '2nd Floor, B.D.A. Complex, Indiranagar, Bangalore - 560038',
    slots: '8 Slots Available',
    distance: '4.8 km'
  },
  {
    id: 'KA-05',
    name: 'Bangalore South (Jayanagar)',
    address: 'Shopping Complex, 4th Block, Jayanagar, Bangalore - 560011',
    slots: '0 Slots Available',
    distance: '5.2 km'
  }
];

export default function SlotsPage() {
  const [selectedRto, setSelectedRto] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-headline">Book Driving Test Slot</h1>
          <p className="text-muted-foreground">Select your nearest RTO and find an available time for your practical test.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Map className="w-4 h-4" />
            View on Map
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: RTO Selection */}
        <div className="lg:col-span-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input placeholder="Search RTO by name or pin..." className="pl-10 h-12" />
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Nearest RTO Offices</h2>
            {rtoOffices.map((rto) => (
              <Card 
                key={rto.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${selectedRto === rto.id ? 'ring-2 ring-primary bg-primary/5' : 'border-slate-100'}`}
                onClick={() => setSelectedRto(rto.id)}
              >
                <CardHeader className="p-5 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base font-bold">{rto.name}</CardTitle>
                    <Badge variant="outline" className="text-[10px] uppercase">{rto.distance}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-3">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                    {rto.address}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <div className={`w-2 h-2 rounded-full ${rto.slots === '0 Slots Available' ? 'bg-red-500' : 'bg-green-500'}`} />
                    <span className={rto.slots === '0 Slots Available' ? 'text-red-600' : 'text-green-600'}>{rto.slots}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Calendar & Slots */}
        <div className="lg:col-span-2">
          {selectedRto ? (
            <Card className="border-slate-100 shadow-xl shadow-slate-200/50">
              <CardHeader className="bg-slate-50/50 border-b flex flex-row items-center justify-between p-6">
                <div>
                  <CardTitle className="text-xl">Select Date & Time</CardTitle>
                  <p className="text-sm text-muted-foreground">For {rtoOffices.find(r => r.id === selectedRto)?.name}</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-primary text-white">November 2023</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Mock Calendar */}
                  <div className="space-y-6">
                    <h3 className="font-bold flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                      1. Choose Date
                    </h3>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                        <div key={d} className="text-[10px] font-bold text-slate-400 mb-2">{d}</div>
                      ))}
                      {[...Array(31)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-9 flex items-center justify-center rounded-lg text-xs cursor-pointer transition-all
                            ${i === 24 ? 'bg-primary text-white font-bold' : i > 20 && i < 30 ? 'bg-white hover:bg-slate-100 border' : 'bg-slate-50 text-slate-300 pointer-events-none'}
                          `}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock Slots */}
                  <div className="space-y-6">
                    <h3 className="font-bold flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      2. Select Time Slot
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'].map((time, idx) => (
                        <div 
                          key={idx}
                          className={`p-3 rounded-xl border-2 text-center text-sm font-semibold transition-all cursor-pointer
                            ${idx === 1 ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-300'}
                            ${idx === 3 ? 'opacity-30 pointer-events-none' : ''}
                          `}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-lg bg-orange-50 text-orange-800 text-xs border border-orange-100 flex gap-2">
                      <Info className="w-4 h-4 shrink-0" />
                      Please arrive 30 minutes before your scheduled slot for document verification.
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-slate-50 border-t flex justify-end">
                <Button size="lg" className="px-10 h-12 font-bold shadow-lg shadow-primary/20">
                  Confirm Booking
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                 <MapPin className="w-8 h-8 text-slate-300" />
               </div>
               <div className="space-y-2">
                  <h3 className="text-xl font-bold font-headline">No RTO Selected</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Please select an RTO office from the left panel to see available test slots.
                  </p>
               </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Testimonials or Info */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
          <h4 className="font-bold text-lg">Instant Booking</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Your test slot is confirmed immediately after selection. No manual intervention required.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
          <Clock className="w-8 h-8 text-blue-500" />
          <h4 className="font-bold text-lg">Reschedule Anytime</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Changed your plans? Reschedule your test up to 48 hours before the original slot.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
          <Info className="w-8 h-8 text-purple-500" />
          <h4 className="font-bold text-lg">Waitlist Feature</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">If no slots are available, join our digital waitlist to get notified of cancellations.</p>
        </div>
      </div>
    </div>
  );
}
