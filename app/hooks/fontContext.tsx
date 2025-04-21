"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

type Font = 'Roboto' | 'Poppins' | 'Inter' | string;

interface FontContextType {
  currentFont: Font;
  setFont: (font: Font) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  // Load font preference from localStorage or use default
  const [currentFont, setCurrentFont] = useState<Font>('Poppins');

  useEffect(() => {
    const savedFont = localStorage.getItem('preferredFont') as Font | null;
    if (savedFont && ['Roboto', 'Poppins', 'Inter'].includes(savedFont)) {
      setCurrentFont(savedFont);
    }
  }, []);

  const setFont = (font: Font) => {
    setCurrentFont(font);
    localStorage.setItem('preferredFont', font);
  };

  return (
    <FontContext.Provider value={{ currentFont, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = (): FontContextType => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};
