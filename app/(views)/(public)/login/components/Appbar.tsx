"use client";
import { useState } from "react";
import { Settings } from '@mui/icons-material';
import FontSelector from '@/app/components/fontSelector';
import { AppBar, Box, Checkbox, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { ThemeMode } from "@/app/hooks/theme";

export default function LoginAppBar(
  { themeMode, toggleThemeMode }: { themeMode: ThemeMode, toggleThemeMode: () => void }
) {
    const [settingsOpen, setSettingsOpen] = useState(false);
    
    const toggleSettings = () => {
      setSettingsOpen((prev) => !prev);
    }
  
    function closeSettings() {
      setSettingsOpen(false);
    }
  return (
    <>
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
        sx={{
          width: 240,
          zIndex: 1201,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box'
            }
        }}>
          <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <FontSelector />
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
              <Typography variant="body1">Dark Mode</Typography>
              <Checkbox checked={themeMode === 'dark'} onChange={toggleThemeMode} />
            </Box>
          </Box>
      </Drawer>
    </>
  );
}