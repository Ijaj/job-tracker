"use client"
import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../../components/sidenav";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { usePathname } from 'next/navigation';
import { routes, Route, Group } from '../../libs/routes';
import { Checkbox, ThemeProvider, Typography } from "@mui/material";
import { useThemeManager } from '@/app/hooks/theme';

const drawerWidth = 240;

const getTitleFromRoutes = (pathname: string, routes: (Route | Group)[]): string => {
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

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const title = getTitleFromRoutes(pathname, routes);
  const { currentTheme, themeMode, toggleThemeMode } = useThemeManager();
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          // width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
        }}>
          <Box display={'flex'}>
            <Toolbar>
              <Typography variant="h4">{title}</Typography>
            </Toolbar>
            <Box flex={1} />
            <Checkbox checked={themeMode === 'dark'} onChange={toggleThemeMode} />
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
      <Box>
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
