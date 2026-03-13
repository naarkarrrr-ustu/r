
"use client";

import React, { useState } from 'react';
import { 
  User, 
  FileUp, 
  CreditCard, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Info
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

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Documents', icon: FileUp },
  { id: 3, title: 'Fee Payment', icon: CreditCard },
  { id: 4, title: 'Slot Booking', icon: Calendar },
  { id: 5, title: 'Confirmation', icon: CheckCircle2 },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const progressValue = (currentStep / steps.length) * 100;

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
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="As per Aadhar" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="As per Aadhar" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Permanent Address</Label>
              <Input id="address" placeholder="Building name, Street, Area" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Info className="w-4 h-4" />
              Accepted formats: PDF, JPG (Max 2MB per file)
            </p>
            <div className="grid grid-cols-1 gap-4">
              {['Proof of Age', 'Proof of Address', 'Medical Fitness Certificate'].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border-2 border-dashed rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <FileUp className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                    <span className="font-medium">{doc}</span>
                  </div>
                  <Button variant="ghost" size="sm">Select File</Button>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Summary of Fees</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Application Fee</span>
                    <span>₹ 200.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Card Fee</span>
                    <span>₹ 200.00</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t mt-2">
                    <span>Total Payable Amount</span>
                    <span className="text-primary">₹ 400.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Label>Select Payment Gateway</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-xl flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                  <span className="font-bold">SBI ePay</span>
                </div>
                <div className="p-4 border rounded-xl flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                  <span className="font-bold">GRAS Pay</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">Select an available date for your driving test at RTO Bangalore (KA-01).</p>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(31)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-12 flex items-center justify-center border rounded-lg text-sm transition-all cursor-pointer
                    ${i === 14 ? 'bg-primary text-white font-bold border-primary' : i > 14 && i < 20 ? 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100' : 'bg-slate-50 text-slate-300 pointer-events-none opacity-50'}
                  `}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center text-xs">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded" /> Available</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-primary rounded" /> Selected</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-200 rounded" /> Booked/Closed</div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center space-y-4 py-8">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold font-headline">Application Submitted Successfully!</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your application ID is <span className="font-bold text-foreground">KA-01-2023-456221</span>. 
              We've sent a confirmation SMS to your registered mobile number.
            </p>
            <div className="pt-6">
              <Button variant="outline" className="gap-2">
                Download Receipt (PDF)
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-3xl font-bold font-headline">New Licence Application</h1>
        <p className="text-muted-foreground">Complete the following steps to submit your request.</p>
      </div>

      {/* Progress Wizard */}
      <div className="mb-12">
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${currentStep >= step.id ? 'bg-primary border-primary text-white' : 'bg-white border-slate-200 text-slate-400'}
              `}>
                <step.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-semibold hidden md:block ${currentStep >= step.id ? 'text-primary' : 'text-slate-400'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <Progress value={progressValue} className="h-1 bg-slate-100" />
      </div>

      <Card className="border-slate-100 shadow-xl shadow-slate-200/50">
        <CardHeader className="border-b bg-slate-50/50">
          <CardTitle className="flex items-center gap-2">
            Step {currentStep}: {steps[currentStep-1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          {renderStepContent()}
        </CardContent>
        {currentStep < 5 && (
          <div className="p-6 border-t flex justify-between bg-slate-50/30">
            <Button 
              variant="ghost" 
              onClick={handleBack} 
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </Button>
            <Button 
              onClick={handleNext}
              className="gap-2 px-8"
            >
              {currentStep === 4 ? 'Submit Application' : 'Continue'} 
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-8 p-4 rounded-lg bg-blue-50 text-blue-800 text-sm flex gap-3 items-start border border-blue-100">
        <Info className="w-5 h-5 shrink-0 mt-0.5" />
        <p>
          Need help? Contact our technical support team at 011-23456789 or use the chat assistant for immediate guidance on document requirements.
        </p>
      </div>
    </div>
  );
}
