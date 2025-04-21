// app/auth/page.tsx
"use client"
import { FontProvider } from '@/app/hooks/fontContext';
import AuthTabs from './components/AuthTabs';
import { Container, CssBaseline, Paper, ThemeProvider, Toolbar } from '@mui/material';
import LoginAppBar from './components/Appbar';
import { useThemeManager } from '@/app/hooks/theme';

function AuthPage() {
  const { currentTheme, themeMode, toggleThemeMode } = useThemeManager();
  return (
    <FontProvider>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
          <Container component="main" maxWidth="sm" sx={{ backgroundColor: 'background.default' }}>
            <LoginAppBar themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
            <Toolbar />
            <Paper
              elevation={6}
              sx={{
                mt: 8,
                mb: 8,
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <AuthTabs />
            </Paper>
          </Container>
      </ThemeProvider>
    </FontProvider>
  );
}

export default function Auth() {
  return (
    <FontProvider>
      <AuthPage />
    </FontProvider>
  );
}