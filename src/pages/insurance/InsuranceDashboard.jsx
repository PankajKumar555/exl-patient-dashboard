// File: src/pages/insurance/InsuranceDashboard.js
import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import CarePlanReview from "../../components/insurance/CarePlanReview";
import PreAuthApprovals from "../../components/insurance/PreAuthApprovals";
import OutcomesTracker from "../../components/insurance/OutcomesTracker";
import UtilizationReports from "../../components/insurance/UtilizationReports";

const InsuranceDashboard = () => (
  <Box sx={{ p: 3, backgroundColor: "#f3e5f5", minHeight: "100vh" }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom color="secondary">
        Insurance Reviewer Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CarePlanReview />
        </Grid>
        <Grid item xs={12} md={6}>
          <PreAuthApprovals />
        </Grid>
        <Grid item xs={12} md={6}>
          <OutcomesTracker />
        </Grid>
        <Grid item xs={12} md={6}>
          <UtilizationReports />
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default InsuranceDashboard;
