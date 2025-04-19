// components/LandingPage.jsx
import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Stack,
  Paper,
  Avatar,
  Divider
} from '@mui/material';
import {
  BarChart,
  AssignmentTurnedIn,
  Notifications,
  QueryStats,
  CheckCircle,
  Timeline,
  Dashboard
} from '@mui/icons-material';

import { useTheme } from '@mui/material/styles';

const LandingPage = () => {
  const theme = useTheme();
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.main',
          color: 'primary.contrastText',
          pt: 12,
          pb: 10
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} component="div">
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Track Your Job Search Journey
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Never lose track of applications, interviews, and follow-ups with our intuitive job application tracking platform.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large"
                  color="secondary"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1.1rem' 
                  }}
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1.1rem',
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      opacity: 0.9
                    }
                  }}
                >
                  See How It Works
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} component="div">
              <Box 
                component="img"
                src="/api/placeholder/600/400"
                alt="Dashboard Preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 10
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, sm: 4 }} component="div">
            <Paper elevation={1} sx={{ py: 3, px: 4, textAlign: 'center' }}>
              <Typography variant="h3" color="primary" fontWeight="bold">
                10,000+
              </Typography>
              <Typography variant="body1">
                Active Users
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} component="div">
            <Paper elevation={1} sx={{ py: 3, px: 4, textAlign: 'center' }}>
              <Typography variant="h3" color="primary" fontWeight="bold">
                250,000+
              </Typography>
              <Typography variant="body1">
                Applications Tracked
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} component="div">
            <Paper elevation={1} sx={{ py: 3, px: 4, textAlign: 'center' }}>
              <Typography variant="h3" color="primary" fontWeight="bold">
                68%
              </Typography>
              <Typography variant="body1">
                Higher Success Rate
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            textAlign="center" 
            gutterBottom
            fontWeight="bold"
          >
            Features That Make Job Hunting Easier
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Our comprehensive tracking system helps you stay organized and focused on what matters most: landing your dream job.
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Dashboard color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Intuitive Dashboard
                  </Typography>
                  <Typography variant="body1">
                    Get a bird&apos;s-eye view of your entire job search with our comprehensive dashboard. Track status, deadlines, and priorities at a glance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Notifications color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Smart Reminders
                  </Typography>
                  <Typography variant="body1">
                    Never miss a follow-up or interview again. Set custom reminders for interviews, thank-you notes, and application deadlines.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <BarChart color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Application Analytics
                  </Typography>
                  <Typography variant="body1">
                    Understand your job search patterns with detailed analytics. See response rates, interview success, and optimize your approach.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <AssignmentTurnedIn color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Document Management
                  </Typography>
                  <Typography variant="body1">
                    Store tailored resumes, cover letters, and portfolios for each application. Quickly access what you need, when you need it.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <QueryStats color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Progress Tracking
                  </Typography>
                  <Typography variant="body1">
                    Monitor every stage of your applications with customizable status tracking. From applied to interviewed to offered.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Timeline color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Activity Timeline
                  </Typography>
                  <Typography variant="body1">
                    Review your complete job search history with an interactive timeline. See all touchpoints with each company.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography 
          variant="h3" 
          textAlign="center" 
          gutterBottom
          fontWeight="bold"
        >
          How It Works
        </Typography>
        <Typography 
          variant="h6" 
          textAlign="center" 
          color="text.secondary" 
          sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
        >
          Getting started is simple. Our platform is designed to help you focus on the job search, not learning new software.
        </Typography>
        
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} component="div">
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>1</Avatar>
                <Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Create Your Account
                  </Typography>
                  <Typography variant="body1">
                    Sign up for free and set up your personalized job search profile. No credit card required to start.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>2</Avatar>
                <Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Add Your Applications
                  </Typography>
                  <Typography variant="body1">
                    Quickly log new job applications with our intuitive form. Attach relevant documents and set important dates.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>3</Avatar>
                <Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Track Your Progress
                  </Typography>
                  <Typography variant="body1">
                    Update application statuses as you progress. Record notes from interviews and follow-ups.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>4</Avatar>
                <Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Get Insights & Land Your Job
                  </Typography>
                  <Typography variant="body1">
                    Use analytics to refine your approach and increase your chances of success.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} component="div">
            <Box 
              component="img"
              src="/api/placeholder/500/500"
              alt="Application Process"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            textAlign="center" 
            gutterBottom
            fontWeight="bold"
          >
            What Our Users Say
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Don&apos;t just take our word for it. Here&apos;s what job seekers have accomplished with our platform.
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    &quot;Before using this platform, I was constantly losing track of where I applied. Now I have everything organized in one place, and I landed a job in half the time!&quot;
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2 }}>JS</Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Jane Smith
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Software Developer
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    &quot;The analytics feature showed me that I was getting more responses from a specific type of application. I adjusted my strategy and got three interviews in one week!&quot;
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2 }}>MT</Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Michael Torres
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Marketing Specialist
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    &quot;As a recent graduate, I was overwhelmed by the job search process. This tracker helped me stay organized and confident. I&apos;m now proudly employed at my dream company!&quot;
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2 }}>AJ</Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Aisha Johnson
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Data Analyst
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography 
          variant="h3" 
          textAlign="center" 
          gutterBottom
          fontWeight="bold"
        >
          Simple, Transparent Pricing
        </Typography>
        <Typography 
          variant="h6" 
          textAlign="center" 
          color="text.secondary" 
          sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
        >
          Choose the plan that fits your job search needs.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                  Free
                </Typography>
                <Typography variant="h3" gutterBottom fontWeight="bold">
                  $0
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Perfect for getting started
                </Typography>
                
                <Stack spacing={2} sx={{ mb: -4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Track up to 10 applications
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Basic reminder notifications
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Standard dashboard
                    </Typography>
                  </Box>
                </Stack>
                
                <Button 
                  variant="outlined" 
                  color="primary" 
                  fullWidth 
                  size="large"
                  sx={{ mt: 6 }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Card sx={{ 
              height: '100%', 
              borderRadius: 2,
              border: '2px solid',
              borderColor: 'primary.main',
              boxShadow: 6
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                  Pro
                </Typography>
                <Typography variant="h3" gutterBottom fontWeight="bold">
                  $9.99
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Monthly, cancel anytime
                </Typography>
                
                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      <strong>Unlimited</strong> applications
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Advanced analytics & reporting
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Document storage & management
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Email & SMS reminders
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body1">
                      Interview preparation tools
                    </Typography>
                  </Box>
                </Stack>
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  size="large"
                  sx={{ mt: 4 }}
                >
                  Sign Up Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
            Ready to Organize Your Job Search?
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of job seekers who have streamlined their application process and found success.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ px: 6, py: 1.5, fontSize: '1.1rem' }}
            >
              Get Started for Free
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'grey.300', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }} component="div">
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                JobTrack
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                The smart way to manage your job applications and land your dream role faster.
              </Typography>
            </Grid>
            
            <Grid size={{ xs: 6, md: 2 }} component="div">
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Product
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Features</Typography>
                <Typography variant="body2">Pricing</Typography>
                <Typography variant="body2">FAQ</Typography>
                <Typography variant="body2">Testimonials</Typography>
              </Stack>
            </Grid>
            
            <Grid size={{ xs: 6, md: 2 }} component="div">
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Resources
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Blog</Typography>
                <Typography variant="body2">Guides</Typography>
                <Typography variant="body2">Support</Typography>
                <Typography variant="body2">API</Typography>
              </Stack>
            </Grid>
            
            <Grid size={{ xs: 6, md: 2 }} component="div">
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Company
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">About Us</Typography>
                <Typography variant="body2">Careers</Typography>
                <Typography variant="body2">Contact</Typography>
                <Typography variant="body2">Privacy</Typography>
              </Stack>
            </Grid>
            
            <Grid size={{ xs: 6, md: 2 }} component="div">
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Legal
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Terms</Typography>
                <Typography variant="body2">Privacy</Typography>
                <Typography variant="body2">Cookies</Typography>
                <Typography variant="body2">Licenses</Typography>
              </Stack>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, borderColor: 'grey.800' }} />
          
          <Typography variant="body2" textAlign="center">
            © {new Date().getFullYear()} JobTrack. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;