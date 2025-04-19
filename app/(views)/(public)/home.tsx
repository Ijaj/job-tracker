import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for a bit more visual flair
const HeroSection = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const CallToAction = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  textAlign: 'center',
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const LandingPage = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Track Your Job Applications Effortlessly
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Stop juggling spreadsheets and emails. Organize your job search and stay on top of every application with our intuitive dashboard.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Sign Up for Free
          </Button>
          <Box mt={2}>
            <Typography variant="body2" color="inherit">
              Already have an account? <Button color="inherit" size="small">Log In</Button>
            </Typography>
          </Box>
        </Container>
      </HeroSection>

      <FeatureSection>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {/* Feature 1 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
              <FeatureItem>
                <Typography variant="h6" gutterBottom>
                  Centralized Tracking
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Keep all your applications in one organized place. No more lost emails or forgotten submissions.
                </Typography>
              </FeatureItem>
            </Grid>

            {/* Feature 2 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
              <FeatureItem>
                <Typography variant="h6" gutterBottom>
                  Status Updates
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Easily update and monitor the status of each application (Applied, Interviewing, Offer, Rejected, etc.).
                </Typography>
              </FeatureItem>
            </Grid>

            {/* Feature 3 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
              <FeatureItem>
                <Typography variant="h6" gutterBottom>
                  Important Dates
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Never miss a follow-up or interview. Set reminders and track key dates.
                </Typography>
              </FeatureItem>
            </Grid>

            {/* Feature 4 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
              <FeatureItem>
                <Typography variant="h6" gutterBottom>
                  Notes & Documents
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Attach your resume, cover letter, and interview notes directly to each application.
                </Typography>
              </FeatureItem>
            </Grid>

            {/* Feature 5 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
              <FeatureItem>
                <Typography variant="h6" gutterBottom>
                  Progress Visualization
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Get a clear overview of your job search progress with simple charts and summaries.
                </Typography>
              </FeatureItem>
            </Grid>

            {/* Feature 6 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }} component="div">
              <FeatureItem>
                <Typography variant="h6" gutterBottom>
                  Accessible Anywhere
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Access your job application data from any device, anytime.
                </Typography>
              </FeatureItem>
            </Grid>
          </Grid>
        </Container>
      </FeatureSection>

      <CallToAction>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ready to Take Control of Your Job Search?
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Sign up today and experience a more organized and efficient way to manage your job applications.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started Now - It&apos;s Free!
          </Button>
        </Container>
      </CallToAction>

      <Footer>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Job Application Tracker. All rights reserved.
        </Typography>
      </Footer>
    </Box>
  );
};

export default LandingPage;