// app/auth/components/AuthTabs.tsx
'use client';

import { useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Avatar,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Signup form state
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  // Form errors
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});
  const [signupErrors, setSignupErrors] = useState<Record<string, string>>({});

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: name === 'rememberMe' ? checked : value,
    });

    // Clear error when user types
    if (loginErrors[name]) {
      setLoginErrors({
        ...loginErrors,
        [name]: '',
      });
    }
  };

  const handleSignupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setSignupForm({
      ...signupForm,
      [name]: name === 'agreeToTerms' ? checked : value,
    });

    // Clear error when user types
    if (signupErrors[name]) {
      setSignupErrors({
        ...signupErrors,
        [name]: '',
      });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateLoginForm = () => {
    const errors: Record<string, string> = {};

    if (!loginForm.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.email = 'Email is invalid';
    }

    if (!loginForm.password) {
      errors.password = 'Password is required';
    }

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateSignupForm = () => {
    const errors: Record<string, string> = {};

    if (!signupForm.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!signupForm.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!signupForm.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signupForm.email)) {
      errors.email = 'Email is invalid';
    }

    if (!signupForm.password) {
      errors.password = 'Password is required';
    } else if (signupForm.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (!signupForm.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (signupForm.password !== signupForm.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!signupForm.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateLoginForm()) {
      try {
        // Here you would typically call an API to authenticate the user
        console.log('Login form submitted', loginForm);
        
        // Example API call using fetch
        // const response = await fetch('/api/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(loginForm),
        // });
        // const data = await response.json();
        // if (data.success) {
        //   // Redirect or handle successful login
        //   window.location.href = '/dashboard';
        // }
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateSignupForm()) {
      try {
        // Here you would typically call an API to register the user
        console.log('Signup form submitted', signupForm);
        
        // Example API call using fetch
        // const response = await fetch('/api/auth/register', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     firstName: signupForm.firstName,
        //     lastName: signupForm.lastName,
        //     email: signupForm.email,
        //     password: signupForm.password,
        //   }),
        // });
        // const data = await response.json();
        // if (data.success) {
        //   // Redirect or handle successful registration
        //   setActiveTab(0); // Switch to login tab
        // }
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };

  const handleGoogleLogin = async () => {
    // Implement Google login logic
    console.log('Login with Google clicked');
    
    // If using NextAuth.js:
    // import { signIn } from 'next-auth/react';
    // await signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleGoogleSignup = async () => {
    // Implement Google signup logic (usually same as login with Google)
    console.log('Signup with Google clicked');
    
    // If using NextAuth.js:
    // import { signIn } from 'next-auth/react';
    // await signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 4,
          pb: 2,
          px: 2,
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome
        </Typography>
      </Box>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={loginForm.email}
            onChange={handleLoginChange}
            error={!!loginErrors.email}
            helperText={loginErrors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={loginForm.password}
            onChange={handleLoginChange}
            error={!!loginErrors.password}
            helperText={loginErrors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={loginForm.rememberMe}
                onChange={handleLoginChange}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="text.secondary">
              OR
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            sx={{ mb: 2 }}
          >
            Sign in with Google
          </Button>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <Box component="form" onSubmit={handleSignupSubmit} sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              value={signupForm.firstName}
              onChange={handleSignupChange}
              error={!!signupErrors.firstName}
              helperText={signupErrors.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={signupForm.lastName}
              onChange={handleSignupChange}
              error={!!signupErrors.lastName}
              helperText={signupErrors.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email-signup"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={signupForm.email}
            onChange={handleSignupChange}
            error={!!signupErrors.email}
            helperText={signupErrors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password-signup"
            autoComplete="new-password"
            value={signupForm.password}
            onChange={handleSignupChange}
            error={!!signupErrors.password}
            helperText={signupErrors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            id="confirm-password"
            autoComplete="new-password"
            value={signupForm.confirmPassword}
            onChange={handleSignupChange}
            error={!!signupErrors.confirmPassword}
            helperText={signupErrors.confirmPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTerms"
                checked={signupForm.agreeToTerms}
                onChange={handleSignupChange}
                color="primary"
                required
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{' '}
                <Link href="#" underline="hover">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link href="#" underline="hover">
                  Privacy Policy
                </Link>
              </Typography>
            }
            sx={{ mt: 2 }}
          />
          {signupErrors.agreeToTerms && (
            <Typography variant="caption" color="error">
              {signupErrors.agreeToTerms}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="text.secondary">
              OR
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignup}
            sx={{ mb: 2 }}
          >
            Sign up with Google
          </Button>
        </Box>
      </TabPanel>
    </>
  );
}