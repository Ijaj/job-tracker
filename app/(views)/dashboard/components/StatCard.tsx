// components/StatCard.tsx
import { Card, CardContent, Typography, Box } from "@mui/material";
import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  icon?: ReactNode;
  color?: string;
}

const StatCard = ({ label, value, icon, color = "#1976d2" }: StatCardProps) => {
  return (
    <Card sx={{ minWidth: 150, flexGrow: 1, height: 120 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          {icon && (
            <Box
              sx={{
                bgcolor: color,
                color: "#fff",
                p: 1.5,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
          )}
          <Box>
            <Typography variant="h6">{value}</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" color="text.primary" fontWeight={300}>
            {label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;
