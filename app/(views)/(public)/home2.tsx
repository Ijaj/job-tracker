import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">JobTrackr</Typography>
          <Box>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Stay on Top of Your Job Search
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Organize, track, and review every application in one intuitive
            dashboard.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/signup"
            sx={{ mt: 4 }}
          >
            Get Started Free
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid key={1} size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Track Applications
                </Typography>
                <Typography>Monitor each stage of your job hunt in one place.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={2} size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Set Reminders
                </Typography>
                <Typography>Never miss an interview or deadline again.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid key={3} size={{ xs: 12, sm: 6, md: 4 }} component="div">
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Generate Reports
                </Typography>
                <Typography>Get insights on your application success rates.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "grey.100", py: 6 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 JobTrackr. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
