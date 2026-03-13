
"use client";

import React from 'react';
import { 
  FileText, 
  Calendar, 
  Clock, 
  Upload, 
  BadgeCheck, 
  AlertCircle, 
  ChevronRight,
  User,
  ExternalLink
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  const user = {
    name: "Rajesh Kumar",
    id: "KA-01-2023-000456",
    status: "Active"
  };

  const applications = [
    {
      id: "APP-564231",
      type: "Driving Licence (Permanent)",
      date: "Oct 12, 2023",
      status: "Processing",
      progress: 65,
      variant: "default" as const
    },
    {
      id: "APP-412239",
      type: "Address Change",
      date: "Sep 05, 2023",
      status: "Approved",
      progress: 100,
      variant: "outline" as const
    }
  ];

  const testDates = [
    {
      title: "DL Practical Test",
      date: "Nov 25, 2023",
      time: "10:30 AM",
      location: "RTO Bangalore Central (KA-01)",
      status: "Upcoming"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary border-2 border-primary/20">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-headline">Welcome back, {user.name}</h1>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Citizen ID: <span className="font-mono font-medium text-foreground">{user.id}</span>
              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">KYC Verified</Badge>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Documents
          </Button>
          <Button className="gap-2">
            New Application
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-headline flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                My Applications
              </h2>
              <Button variant="link" size="sm" className="text-primary font-semibold">View All</Button>
            </div>
            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id} className="overflow-hidden">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{app.type}</CardTitle>
                        <p className="text-xs text-muted-foreground">ID: {app.id} • Applied on {app.date}</p>
                      </div>
                      <Badge className={app.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                        {app.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="font-semibold">{app.progress}%</span>
                    </div>
                    <Progress value={app.progress} className="h-2" />
                  </CardContent>
                  <CardFooter className="p-4 bg-slate-50 border-t flex justify-end">
                    <Button variant="ghost" size="sm" className="gap-1 h-8">
                      Track Details <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              Recent Notifications
            </h2>
            <div className="space-y-3">
              {[
                { type: 'success', text: 'Document Verification for APP-564231 was successful.', time: '2h ago' },
                { type: 'info', text: 'Reminder: Your Practical Test is scheduled for Nov 25.', time: '1d ago' },
                { type: 'alert', text: 'Action Required: Upload Form 1-A for Medical Fitness.', time: '3d ago' }
              ].map((notif, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${notif.type === 'success' ? 'bg-green-500' : notif.type === 'alert' ? 'bg-red-500' : 'bg-blue-500'}`} />
                  <div className="flex-1">
                    <p className="text-sm text-slate-800">{notif.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Upcoming Events
            </h2>
            {testDates.map((test, i) => (
              <Card key={i} className="bg-primary text-primary-foreground border-none">
                <CardHeader className="p-5 space-y-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{test.title}</CardTitle>
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
                      {test.status}
                    </Badge>
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{test.date} at {test.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm opacity-90">
                      <MapPin className="w-4 h-4 mt-1" />
                      <span>{test.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button variant="secondary" className="w-full font-bold">Reschedule</Button>
                </CardFooter>
              </Card>
            ))}
          </section>

          <Card className="border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Document Vault
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Aadhar Card</span>
                </div>
                <BadgeCheck className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Medical Certificate</span>
                </div>
                <BadgeCheck className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between text-sm p-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-orange-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Address Proof</span>
                </div>
                <AlertCircle className="w-4 h-4 text-orange-600" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-xs gap-2">
                Go to Digilocker <ExternalLink className="w-3 h-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
