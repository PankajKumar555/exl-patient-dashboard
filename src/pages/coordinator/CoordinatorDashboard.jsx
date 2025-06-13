// File: src/pages/coordinator/CoordinatorDashboard.js
import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

// Import coordinator components
import TaskQueue from "../../components/coordinator/TaskQueue";
import MultiPatientMonitor from "../../components/coordinator/MultiPatientMonitor";
import FlaggedPatients from "../../components/coordinator/FlaggedPatients";
import SOPChecklist from "../../components/coordinator/SOPChecklist";

const CoordinatorDashboard = () => (
  <Box sx={{ p: 3, backgroundColor: "#fffde7", minHeight: "100vh" }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom color="warning.main">
        Care Coordinator Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TaskQueue />
        </Grid>
        <Grid item xs={12} md={6}>
          <MultiPatientMonitor />
        </Grid>
        <Grid item xs={12} md={6}>
          <FlaggedPatients />
        </Grid>
        <Grid item xs={12} md={6}>
          <SOPChecklist />
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default CoordinatorDashboard;
