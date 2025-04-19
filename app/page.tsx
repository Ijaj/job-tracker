"use client";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useThemeManager } from '@/app/hooks/theme';
import { Box, Button, Checkbox, IconButton, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { Settings } from "@mui/icons-material";
import FontSelector from './components/fontSelector';
import { FontProvider } from './hooks/fontContext';
import LandingPage from './(views)/(public)/home3';
// import HomePage from './(views)/(public)/home2';

function FontWrapper() {
  const { currentTheme, themeMode, toggleThemeMode } = useThemeManager();
  const [settingsOpen, setSettingsOpen] = useState(false);
  // const drawerWidth = 240;
  const toggleSettings = () => {
    setSettingsOpen((prev) => !prev);
  }

  function closeSettings() {
    setSettingsOpen(false);
  }
  return (
    <Box>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Box>
          <AppBar
            position="fixed"
            sx={{
              zIndex: 1200,
              // width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`
            }}>
            <Box display={'flex'}>
              <Toolbar>
                <Typography variant="h4" fontWeight={500}>Job Tracker BD</Typography>
              </Toolbar>
              <Box flex={1} />
              <Box display={'flex'} alignItems={'center'}>
                <Button color="inherit" href="/login">
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="/signup"
                  sx={{ ml: 2 }}
                >
                  Sign Up
                </Button>
                <IconButton onClick={toggleSettings} sx={{ ml: 2 }}>
                  <Settings />
                </IconButton>
              </Box>
            </Box>
          </AppBar>
          <Drawer
            anchor="right"
            open={settingsOpen}
            onClose={closeSettings}
            sx={{ width: 240, zIndex: 1201, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}
          >
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <FontSelector />
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
                <Typography variant="body1">Dark Mode</Typography>
                <Checkbox checked={themeMode === 'dark'} onChange={toggleThemeMode} />
              </Box>
            </Box>
          </Drawer>
          <Box>
            <Toolbar />
            <LandingPage />
            {/* <HomePage /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default function Public() {
  return (
    <FontProvider>
      <FontWrapper />
    </FontProvider>
  );
}