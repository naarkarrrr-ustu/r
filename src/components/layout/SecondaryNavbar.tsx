"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { useSelectedState } from '@/context/state-context';

export function SecondaryNavbar() {
  const { selectedState } = useSelectedState();

  if (!selectedState) return null;

  return (
    <div className="sticky top-16 z-40 w-full border-b bg-slate-50/95 backdrop-blur overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4">
        <Menubar className="border-none bg-transparent h-12 shadow-none gap-1 min-w-max px-0">
          
          {/* 1. Learner Licence */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Learner Licence
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=ll">Application For New Learner Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=ll-expired">Expired Learner Licence Issue Again</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=ll-edit">Application Edit (For LL Only Before Fee Payment)</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=ll-services">Services For Duplicate LL, Address Change, Etc</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=ll-edit-entry">LL Edit Entry</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/tracker">Print Learner Licence (Form3)</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Learner Licence Extract Print</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/mock-test">Tutorial For LL Test</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Online LLTest (Stall)</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Mock Test For LL</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Sample Question For LL Test</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 2. Driving Licence */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Driving Licence
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=dl">New Driving Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dl-services">Services On DL (Renewal / Duplicate / AEDL / IDP / Others)</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/wallet">IDP Print Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/wallet">Apply For Print Driving Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/home">DL Club</Link></MenubarItem>
              <MenubarItem asChild><Link href="/wallet">DL Extract Print</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/mock-test">Online PSV Badge Test</Link></MenubarItem>
              <MenubarItem asChild><Link href="/wallet">Display IDP Details</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Driving Licence Test Sheet</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 3. Conductor Licence */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Conductor Licence
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=cl">New Conductor Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=cl-temp">Temporary Conductor Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=cl-services">Services On Conductor Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Online Conductor Licence Test</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Print Conductors Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">CL Extract Print</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=cl-reg">Regularize Provisional CL</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 4. Driving School Licence */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Driving School
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=dsl">New Driving School Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-enroll">DSL Enrollment</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-cancel">DSL Enrollment Cancellation</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-services">Services On Driving School Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-refresher">Refresher Course Enrollment</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 5. Appointments */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Appointments
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/slots?type=ll">LL Test Slot Booking</Link></MenubarItem>
              <MenubarItem asChild><Link href="/slots?type=dl">DL Test Slot Booking</Link></MenubarItem>
              <MenubarItem asChild><Link href="/slots?type=dl-services">DL Services Slot Booking</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/slots">Cancel LL Test Slot</Link></MenubarItem>
              <MenubarItem asChild><Link href="/slots">Cancel DL Test Slot</Link></MenubarItem>
              <MenubarItem asChild><Link href="/slots">Cancel DL Services Slot</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 6. Upload Document */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Upload Document
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?step=3">Upload Documents / Scanned Images</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?step=3">Upload Photograph And Signature</Link></MenubarItem>
              <MenubarItem asChild><Link href="/wallet">View Documents</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 7. Fee Payments */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Fee Payments
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?step=4">Fee Payments</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Verify Payment Status</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 8. Others */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Others
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/tracker">Search Related Applications</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">DL Search</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Find Application Number</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Cancel Application</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Track Dispatch Article Status</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/dashboard">Mobile Number Update</Link></MenubarItem>
              <MenubarItem asChild><Link href="/home">Camp Registration</Link></MenubarItem>
              <MenubarItem asChild><Link href="/home">Find Doctor</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=add-cov">Add Class Of Vehicles</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Service Withdrawn By Applicant</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Road Safety Content</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Print Application Forms</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* 9. Application Status */}
          <MenubarMenu>
            <MenubarTrigger asChild className="cursor-pointer font-semibold text-xs text-slate-700 hover:text-primary transition-colors">
              <Link href="/tracker">Application Status</Link>
            </MenubarTrigger>
          </MenubarMenu>

          {/* 10. File Your Grievance */}
          <MenubarMenu>
            <MenubarTrigger asChild className="cursor-pointer font-semibold text-xs text-slate-700 hover:text-primary transition-colors">
              <Link href="/tracker">File Your Grievance</Link>
            </MenubarTrigger>
          </MenubarMenu>

        </Menubar>
      </div>
    </div>
  );
}