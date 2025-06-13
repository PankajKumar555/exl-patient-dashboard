// File: src/pages/patient/PatientDashboard.js
import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

// Import all patient dashboard components
import HealthSummaryCard from "../../components/patient/HealthSummaryCard";
import MoodCheckIn from "../../components/patient/MoodCheckIn";
import AppointmentScheduler from "../../components/patient/AppointmentScheduler";
import MedicationTracker from "../../components/patient/MedicationTracker";
import ChatBox from "../../components/patient/ChatBox";
import VideoConsultation from "../../components/patient/VideoConsultation";
import WearableDeviceData from "../../components/patient/WearableDeviceData";

const PatientDashboard = () => (
  <Box sx={{ p: 3, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Patient Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <HealthSummaryCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MoodCheckIn />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppointmentScheduler />
        </Grid>
        <Grid item xs={12} md={6}>
          <MedicationTracker />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChatBox />
        </Grid>
        <Grid item xs={12} md={6}>
          <VideoConsultation />
        </Grid>
        <Grid item xs={12}>
          <WearableDeviceData />
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default PatientDashboard;
