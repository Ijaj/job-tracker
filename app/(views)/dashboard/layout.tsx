"use client"
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidenav from "../../components/sidenav";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { usePathname } from 'next/navigation';
import { routes, Route, Group } from '../../libs/routes';
import { Checkbox, IconButton, ThemeProvider, Typography } from "@mui/material";
import { useThemeManager } from '@/app/hooks/theme';
import { FontProvider } from "@/app/hooks/fontContext";
import FontSelector from "@/app/components/fontSelector";
import { Settings } from "@mui/icons-material";

const drawerWidth = 240;

const getTitleFromRoutes = (pathname: string | null, routes: (Route | Group)[]): string => {
  for (const route of routes) {
    if (route.type === 'route') {
      const r: Route = route as Route;
      if(r.path === pathname) {
        return route.title;
      }
    } else if (route.type === 'group') {
      const r: Group = route as Group;
      if(r.children){
        const title = getTitleFromRoutes(pathname, r.children);
        if (title) return title;
      }
    }
  }
  return 'Dashboard'; // Default title
};

function DashboardLayoutComponent({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const title = getTitleFromRoutes(pathname, routes);
  const { currentTheme, themeMode, toggleThemeMode } = useThemeManager();

  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setSettingsOpen((prev) => !prev);
  }

  function closeSettings() {
    setSettingsOpen(false);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", fontWeight: 300 }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1201,
            // width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
          }}
        >
          <Box display={'flex'}>
            <Toolbar>
              <Typography variant="h4">{title}</Typography>
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
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            paddingTop: '70px',
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Sidenav />
        </Drawer>
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
        <Box sx={{ width: '100%' }}>
          <Box>
            <Toolbar />
          </Box>
          <Box padding={1}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <FontProvider>
      <Box>
        <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
      </Box>
    </FontProvider>
  );
}
