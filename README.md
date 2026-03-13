# Sarathi Connect - Enhanced Driving Licence Portal

Sarathi Connect is a modern, citizen-centric prototype for driving licence services, inspired by the Ministry of Road Transport and Highways (MoRTH) initiative. It provides a seamless, digital-first experience for managing Learner and Driving Licence applications across all Indian states.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [Genkit](https://github.com/firebase/genkit) with Google AI (Gemini)
- **State Management**: React Context (State Selection & Global Context)
- **Deployment**: Firebase App Hosting ready

## ✨ Features

- **State-Specific Portal**: Context-aware services based on user state selection.
- **Learner Licence (LL) Flow**: Complete 6-step application journey from details to slot booking.
- **Driving Licence (DL) Flow**: Independent 7-step journey for transitioning from LL to a permanent licence.
- **AI Sarathi Assistant**: 24/7 AI-powered chatbot (via Genkit) to guide users through RTO processes.
- **Application Tracker**: Real-time progress monitoring for pending applications.
- **Digital Wallet**: Secure access to digital versions of issued licences.
- **Mock Test Module**: Interactive practice test for the Learner Licence exam.
- **Appointment System**: Dynamic slot booking for RTO tests.

## 🛠️ Getting Started

To explore the application logic, check out:
- `src/app/apply/page.tsx`: The primary application wizard for LL and DL.
- `src/app/home/page.tsx`: The main service hub.
- `src/app/assistant/page.tsx`: The AI Assistant interface.
- `src/context/state-context.tsx`: Global state management for state selection.

---
*This project is a functional prototype built for Firebase Studio.*
