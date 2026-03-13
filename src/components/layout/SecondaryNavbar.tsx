
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

/**
 * SecondaryNavbar component that provides a grouped service menu below the main navbar.
 * It mimics the structure of the Sarathi Parivahan portal but with a cleaner hierarchy.
 * Responsive: Horizontally scrollable on mobile/tablet.
 */
export function SecondaryNavbar() {
  const { selectedState } = useSelectedState();

  // Only show the secondary navbar if a state has been selected
  if (!selectedState) return null;

  return (
    <div className="sticky top-16 z-40 w-full border-b bg-slate-50/95 backdrop-blur overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4">
        <Menubar className="border-none bg-transparent h-12 shadow-none gap-1 min-w-max px-0">
          
          {/* Learner Licence Services */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Learner Licence
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=ll">Apply for Learner Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=ll-edit">Edit LL Application</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=ll-address">Duplicate / Address Change</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/tracker">Print Learner Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Learner Licence Extract</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/mock-test">Tutorial for LL Test</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Online LL Test</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Mock Test for LL</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Driving Licence Services */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Driving Licence
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=dl">Apply for Driving Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dl-services">DL Renewal / Duplicate / IDP Services</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem asChild><Link href="/wallet">Print Driving Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/wallet">DL Extract</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Driving Licence Test Sheet</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Conductor Licence Services */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Conductor Licence
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=cl">New Conductor Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=cl-temp">Temporary Conductor Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=cl-services">Conductor Licence Services</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Online Conductor Licence Test</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Print Conductor Licence</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Driving School Licence Services */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Driving School
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?type=dsl">New Driving School Licence</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-enroll">DSL Enrollment</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-cancel">DSL Enrollment Cancellation</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-services">Driving School Services</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?type=dsl-refresher">Refresher Course Enrollment</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Appointment Services */}
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
            </MenubarContent>
          </MenubarMenu>

          {/* Upload Document Services */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Upload Document
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?step=2">Upload Documents / Images</Link></MenubarItem>
              <MenubarItem asChild><Link href="/apply?step=2">Upload Photo & Signature</Link></MenubarItem>
              <MenubarItem asChild><Link href="/wallet">View Documents</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Fee Payment Services */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Fee Payments
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/apply?step=3">Make Fee Payment</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Verify Payment Status</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Other Utilities */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer font-semibold text-xs text-slate-700 data-[state=open]:bg-white data-[state=open]:text-primary transition-colors hover:text-primary">
              Others
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem asChild><Link href="/tracker">DL Search</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Find Application Number</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Cancel Application</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Track Dispatch Status</Link></MenubarItem>
              <MenubarItem asChild><Link href="/dashboard">Mobile Number Update</Link></MenubarItem>
              <MenubarItem asChild><Link href="/home">Camp Registration</Link></MenubarItem>
              <MenubarItem asChild><Link href="/home">Find Doctor</Link></MenubarItem>
              <MenubarItem asChild><Link href="/mock-test">Road Safety Content</Link></MenubarItem>
              <MenubarItem asChild><Link href="/tracker">Print Application Forms</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Direct Links (No Dropdown) */}
          <MenubarMenu>
            <MenubarTrigger asChild className="cursor-pointer font-semibold text-xs text-slate-700 hover:text-primary transition-colors">
              <Link href="/tracker">Application Status</Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger asChild className="cursor-pointer font-semibold text-xs text-slate-700 hover:text-primary transition-colors">
              <Link href="/tracker">File Grievance</Link>
            </MenubarTrigger>
          </MenubarMenu>

        </Menubar>
      </div>
    </div>
  );
}
