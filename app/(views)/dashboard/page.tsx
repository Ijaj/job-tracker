import { Box, Grid, Typography } from "@mui/material";
import StatCard from "./components/StatCard";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import EventIcon from "@mui/icons-material/Event";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container spacing={2} size={{ sm: 12 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <StatCard label="Total Applications" value={48} icon={<WorkOutlineIcon />} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <StatCard label="Applied This Week" value={5} icon={<TrendingUpIcon />} color="#43a047" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <StatCard label="Active Applications" value={21} icon={<GroupWorkIcon />} color="#0288d1" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <StatCard label="Interviews Scheduled" value={3} icon={<EventIcon />} color="#f57c00" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <StatCard label="Offers Received" value={1} icon={<LocalOfferIcon />} color="#ab47bc" />
          </Grid>
        </Grid>
        <Grid size={{ md: 12, lg: 6}}>
          <Typography variant="h6" gutterBottom>CHART</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
