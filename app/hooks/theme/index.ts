"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import { useFont } from '../fontContext';

export type ThemeMode = 'light' | 'dark';
type CustomThemes = Record<string, Theme>;

const LOCAL_STORAGE_THEME_MODE_KEY = 'themeMode';
const LOCAL_STORAGE_CUSTOM_THEME_KEY = 'customThemes';

export const useThemeManager = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [customThemes, setCustomThemes] = useState<CustomThemes>({});
  const { currentFont } = useFont();

  useEffect(() => {
    const storedThemeMode = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode;
    const storedCustomThemes = localStorage.getItem(LOCAL_STORAGE_CUSTOM_THEME_KEY);

    if (storedThemeMode) {
      setThemeMode(storedThemeMode);
    }

    if (storedCustomThemes) {
      setCustomThemes(JSON.parse(storedCustomThemes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CUSTOM_THEME_KEY, JSON.stringify(customThemes));
  }, [customThemes]);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const addCustomTheme = useCallback((name: string, theme: Theme) => {
    setCustomThemes((prevThemes) => ({
      ...prevThemes,
      [name]: theme,
    }));
  }, []);

  const removeCustomTheme = useCallback((name: string) => {
    setCustomThemes((prevThemes) => {
      const { [name]: {}, ...rest } = prevThemes;
      return rest;
    });
  }, []);

  const currentTheme = useMemo(() => {
    if (customThemes[themeMode]) {
      return customThemes[themeMode];
    }
    return createTheme({
      palette: {
        mode: themeMode,
      },
      typography: {
        fontFamily: currentFont,
      }
    });
  }, [customThemes, themeMode, currentFont]);

  return {
    themeMode,
    toggleThemeMode,
    addCustomTheme,
    removeCustomTheme,
    currentTheme,
  };
};
