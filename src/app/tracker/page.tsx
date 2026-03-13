
"use client";

import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Search, 
  FileText, 
  Calendar, 
  CreditCard, 
  CreditCard as CardIcon,
  CheckCircle,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TrackerPage() {
  const stages = [
    { 
      id: 1, 
      title: 'Application Submitted', 
      date: 'Oct 12, 2023', 
      status: 'completed', 
      icon: FileText,
      description: 'Your application has been received and ID generated.'
    },
    { 
      id: 2, 
      title: 'Document Verification', 
      date: 'Oct 15, 2023', 
      status: 'completed', 
      icon: Search,
      description: 'Submitted documents verified by the RTO officer.'
    },
    { 
      id: 3, 
      title: 'Fee Paid', 
      date: 'Oct 16, 2023', 
      status: 'completed', 
      icon: CreditCard,
      description: 'Application fees successfully processed.'
    },
    { 
      id: 4, 
      title: 'Test Scheduled', 
      date: 'Nov 25, 2023', 
      status: 'current', 
      icon: Calendar,
      description: 'Waiting for your appearance at the test ground.'
    },
    { 
      id: 5, 
      title: 'Test Passed', 
      date: 'Pending', 
      status: 'upcoming', 
      icon: CheckCircle,
      description: 'Approval based on your driving test performance.'
    },
    { 
      id: 6, 
      title: 'Licence Generated', 
      date: 'Pending', 
      status: 'upcoming', 
      icon: CardIcon,
      description: 'Smart card printing and dispatch via post.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-3xl font-bold font-headline">Application Tracker</h1>
        <p className="text-muted-foreground">Enter your application details to see live status updates.</p>
        
        <div className="max-w-xl mx-auto flex gap-2 mt-8">
          <Input placeholder="Application Number (e.g., APP-12345678)" className="h-12" />
          <Button size="lg" className="px-8 h-12">Track Status</Button>
        </div>
      </div>

      <Card className="border-slate-100 shadow-xl overflow-hidden">
        <CardHeader className="bg-slate-50 border-b flex flex-row items-center justify-between p-6">
          <div className="space-y-1">
            <CardTitle>Application: <span className="text-primary">APP-564231</span></CardTitle>
            <p className="text-sm text-muted-foreground">Driving Licence (Permanent) • Rajesh Kumar</p>
          </div>
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1">In Progress</Badge>
        </CardHeader>
        <CardContent className="p-8">
          <div className="relative space-y-0">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100" />
            
            {stages.map((stage, idx) => (
              <div key={stage.id} className="relative flex gap-8 pb-12 last:pb-0">
                <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-all
                  ${stage.status === 'completed' ? 'bg-green-500 text-white' : 
                    stage.status === 'current' ? 'bg-primary text-white scale-110 ring-4 ring-primary/20' : 'bg-slate-100 text-slate-400'}
                `}>
                  <stage.icon className="w-5 h-5" />
                </div>
                
                <div className={`flex-1 pt-1 ${stage.status === 'upcoming' ? 'opacity-60' : ''}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`font-bold text-lg ${stage.status === 'current' ? 'text-primary' : 'text-slate-800'}`}>{stage.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-slate-50 text-slate-500">{stage.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                  
                  {stage.status === 'current' && (
                    <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10 space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-primary">
                        <span>ESTIMATED COMPLETION</span>
                        <span>Nov 30, 2023</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary animate-pulse" style={{ width: '40%' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground mb-4">Facing issues with your application?</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="text-xs">File a Grievance</Button>
          <Button variant="outline" className="text-xs">Contact RTO Support</Button>
        </div>
      </div>
    </div>
  );
}
