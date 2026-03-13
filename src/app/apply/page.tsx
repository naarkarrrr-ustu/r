
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  User, 
  FileUp, 
  CreditCard, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Info,
  MapPin,
  Car,
  Search,
  BookOpen,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

function ApplyContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'll';
  const initialStep = parseInt(searchParams.get('step') || '1');
  
  const isLL = type === 'll';
  
  const llSteps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Address Details', icon: MapPin },
    { id: 3, title: 'Documents', icon: FileUp },
    { id: 4, title: 'Fee Payment', icon: CreditCard },
    { id: 5, title: 'Slot Booking', icon: Calendar },
    { id: 6, title: 'Confirmation', icon: CheckCircle2 },
  ];

  const dlSteps = [
    { id: 1, title: 'LL Details', icon: Search },
    { id: 2, title: 'Personal Info', icon: User },
    { id: 3, title: 'Vehicle Class', icon: Car },
    { id: 4, title: 'Documents', icon: FileUp },
    { id: 5, title: 'Fee Payment', icon: CreditCard },
    { id: 6, title: 'Slot Booking', icon: Calendar },
    { id: 7, title: 'Confirmation', icon: CheckCircle2 },
  ];

  const steps = isLL ? llSteps : dlSteps;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const progressValue = (currentStep / steps.length) * 100;

  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    // LL FLOW CONTENT
    if (isLL) {
      switch (currentStep) {
        case 1:
          return (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2"><Label>First Name</Label><Input placeholder="As per Aadhaar" /></div>
                <div className="space-y-2"><Label>Last Name</Label><Input placeholder="As per Aadhaar" /></div>
                <div className="space-y-2"><Label>Date of Birth</Label><Input type="date" /></div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select><SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger><SelectContent><SelectItem value="m">Male</SelectItem><SelectItem value="f">Female</SelectItem></SelectContent></Select>
                </div>
                <div className="space-y-2"><Label>Aadhaar Number</Label><Input placeholder="XXXX-XXXX-XXXX" /></div>
                <div className="space-y-2"><Label>Mobile Number</Label><Input placeholder="+91" /></div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-6">
              <div className="space-y-2"><Label>Permanent Address</Label><Input placeholder="House No, Street, Area" /></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2"><Label>State</Label><Input value="Karnataka" disabled /></div>
                <div className="space-y-2"><Label>District</Label><Input placeholder="e.g. Bangalore" /></div>
                <div className="space-y-2"><Label>Pincode</Label><Input placeholder="XXXXXX" /></div>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              {['Age Proof (X Class Marksheet)', 'Address Proof (Voter ID/Passport)', 'Aadhaar Card', 'Photograph', 'Signature Scan'].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border rounded-xl bg-slate-50">
                  <div className="flex items-center gap-3"><FileUp className="w-5 h-5 text-slate-400" /><span>{doc}</span></div>
                  <Button variant="outline" size="sm">Upload</Button>
                </div>
              ))}
            </div>
          );
        case 4:
          return (
            <div className="space-y-6">
              <Card className="bg-slate-50 border-none"><CardContent className="p-6">
                <h3 className="font-bold mb-4">Learner Licence Fees</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>LL Application Fee</span><span>₹ 150.00</span></div>
                  <div className="flex justify-between"><span>LL Test Fee</span><span>₹ 50.00</span></div>
                  <div className="flex justify-between font-bold pt-2 border-t mt-2"><span>Total</span><span className="text-primary">₹ 200.00</span></div>
                </div>
              </CardContent></Card>
              <Button className="w-full h-12">Pay Now via SBI ePay</Button>
            </div>
          );
        case 5:
          return (
            <div className="space-y-6 text-center">
              <p className="text-sm text-muted-foreground">Select an available slot for LL Computer Test at RTO Bangalore (KA-01).</p>
              <div className="grid grid-cols-7 gap-2">
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`h-10 flex items-center justify-center border rounded-lg text-xs ${i === 15 ? 'bg-primary text-white' : 'bg-slate-50'}`}>{i + 1}</div>
                ))}
              </div>
            </div>
          );
        case 6:
          return (
            <div className="text-center space-y-4 py-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-12 h-12" /></div>
              <h2 className="text-2xl font-bold">LL Application Submitted!</h2>
              <p className="text-muted-foreground">ID: <span className="font-bold text-foreground">LL-KA01-2023-998</span></p>
              <div className="flex flex-col gap-3 pt-6">
                <Button variant="outline" asChild><Link href="/mock-test"><Zap className="w-4 h-4 mr-2" /> Take Mock Test Now</Link></Button>
                <Button variant="ghost" asChild><Link href="/home"><BookOpen className="w-4 h-4 mr-2" /> View Tutorial Videos</Link></Button>
              </div>
            </div>
          );
        default: return null;
      }
    }

    // DL FLOW CONTENT
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm mb-4">Enter your existing Learner Licence details to proceed.</div>
            <div className="space-y-4">
              <div className="space-y-2"><Label>Learner Licence Number</Label><Input placeholder="KA01 20230001234" /></div>
              <div className="space-y-2"><Label>Date of Issue</Label><Input type="date" /></div>
              <Button className="w-full">Validate LL Details</Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 text-green-800 rounded-lg text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />LL Validated. Profile details pre-filled.</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><Label className="text-xs text-muted-foreground">Name</Label><p className="font-bold">Rajesh Kumar</p></div>
              <div><Label className="text-xs text-muted-foreground">DOB</Label><p className="font-bold">12/05/1995</p></div>
              <div className="col-span-2"><Label className="text-xs text-muted-foreground">Address</Label><p className="font-bold">#45, Jayanagar, Bangalore</p></div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <Label>Select Class of Vehicles</Label>
            <div className="space-y-3">
              {['Motorcycle Without Gear (MCWOG)', 'Motorcycle With Gear (MCWG)', 'Light Motor Vehicle (LMV)'].map((v) => (
                <div key={v} className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-slate-50 cursor-pointer">
                  <Checkbox id={v} /><label htmlFor={v} className="text-sm font-medium">{v}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            {['Learner Licence Copy', 'Address Proof', 'Recent Photograph'].map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border rounded-xl bg-slate-50">
                <div className="flex items-center gap-3"><FileUp className="w-5 h-5 text-slate-400" /><span>{doc}</span></div>
                <Button variant="outline" size="sm">Upload</Button>
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <Card className="bg-slate-50 border-none"><CardContent className="p-6">
              <h3 className="font-bold mb-4">Driving Licence Fees</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>DL Application Fee</span><span>₹ 200.00</span></div>
                <div className="flex justify-between"><span>Driving Test Fee</span><span>₹ 300.00</span></div>
                <div className="flex justify-between"><span>Smart Card Fee</span><span>₹ 200.00</span></div>
                <div className="flex justify-between font-bold pt-2 border-t mt-2"><span>Total</span><span className="text-primary">₹ 700.00</span></div>
              </div>
            </CardContent></Card>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
             <div className="p-4 border rounded-xl flex items-center gap-4 bg-slate-50">
                <Calendar className="w-8 h-8 text-primary" />
                <div className="flex-1"><h4 className="font-bold">Driving Test Appointment</h4><p className="text-xs text-muted-foreground">Choose a date for your practical skill test.</p></div>
             </div>
             <div className="grid grid-cols-7 gap-2">
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`h-10 flex items-center justify-center border rounded-lg text-xs ${i === 20 ? 'bg-primary text-white font-bold' : 'bg-slate-50'}`}>{i + 1}</div>
                ))}
              </div>
          </div>
        );
      case 7:
        return (
          <div className="text-center space-y-4 py-8">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-12 h-12" /></div>
            <h2 className="text-2xl font-bold">DL Application Submitted!</h2>
            <p className="text-muted-foreground">Your Application ID is <span className="font-bold text-foreground">DL-KA01-2023-4567</span></p>
            <Button className="mt-6" asChild><Link href="/tracker">Track Application Status</Link></Button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-3xl font-bold font-headline">{isLL ? 'New Learner Licence' : 'New Driving Licence'}</h1>
        <p className="text-muted-foreground">Complete your {isLL ? 'learning' : 'driving'} stage application below.</p>
      </div>

      <div className="mb-12">
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${currentStep >= step.id ? 'bg-primary border-primary text-white' : 'bg-white border-slate-200 text-slate-400'}
              `}><step.icon className="w-5 h-5" /></div>
              <span className={`text-[10px] font-semibold hidden md:block ${currentStep >= step.id ? 'text-primary' : 'text-slate-400'}`}>{step.title}</span>
            </div>
          ))}
        </div>
        <Progress value={progressValue} className="h-1 bg-slate-100" />
      </div>

      <Card className="border-slate-100 shadow-xl shadow-slate-200/50">
        <CardHeader className="border-b bg-slate-50/50"><CardTitle className="text-lg">Step {currentStep}: {steps[currentStep-1].title}</CardTitle></CardHeader>
        <CardContent className="p-8">{renderStepContent()}</CardContent>
        {currentStep < steps.length && (
          <div className="p-6 border-t flex justify-between bg-slate-50/30">
            <Button variant="ghost" onClick={handleBack} disabled={currentStep === 1} className="gap-2"><ChevronLeft className="w-4 h-4" /> Back</Button>
            <Button onClick={handleNext} className="gap-2 px-8">{currentStep === steps.length - 1 ? 'Finish & Submit' : 'Continue'} <ChevronRight className="w-4 h-4" /></Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-20 text-center">Loading application...</div>}>
      <ApplyContent />
    </Suspense>
  );
}
