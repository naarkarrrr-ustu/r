
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type StateContextType = {
  selectedState: string | null;
  setSelectedState: (state: string) => void;
  clearState: () => void;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sarathi_selected_state');
    if (saved) setSelectedState(saved);
  }, []);

  const handleSetState = (state: string) => {
    setSelectedState(state);
    localStorage.setItem('sarathi_selected_state', state);
  };

  const clearState = () => {
    setSelectedState(null);
    localStorage.removeItem('sarathi_selected_state');
  };

  return (
    <StateContext.Provider value={{ selectedState, setSelectedState: handleSetState, clearState }}>
      {children}
    </StateContext.Provider>
  );
}

export function useSelectedState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useSelectedState must be used within a StateProvider');
  }
  return context;
}
