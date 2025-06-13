// File: src/pages/caregiver/CaregiverDashboard.js
import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import ReportsViewer from "../../components/caregiver/ReportsViewer";
import ReminderSetter from "../../components/caregiver/ReminderSetter";
import JoinConsultAccess from "../../components/caregiver/JoinConsultAccess";

const CaregiverDashboard = () => (
  <Box sx={{ p: 3, backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom color="info.main">
        Caregiver Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ReportsViewer />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReminderSetter />
        </Grid>
        <Grid item xs={12}>
          <JoinConsultAccess />
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default CaregiverDashboard;
