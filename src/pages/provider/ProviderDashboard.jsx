// File: src/pages/provider/ProviderDashboard.js
import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

// Import provider components
import Patient360Card from "../../components/provider/Patient360Card";
import RPMTrendChart from "../../components/provider/RPMTrendChart";
import PrescriptionManager from "../../components/provider/PrescriptionManager";
import AISuggestions from "../../components/provider/AISuggestions";

const ProviderDashboard = () => (
  <Box sx={{ p: 3, backgroundColor: "#e8f5e9", minHeight: "100vh" }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom color="secondary">
        Clinic / Provider Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Patient360Card />
        </Grid>
        <Grid item xs={12} md={6}>
          <RPMTrendChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PrescriptionManager />
        </Grid>
        <Grid item xs={12} md={6}>
          <AISuggestions />
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default ProviderDashboard;
