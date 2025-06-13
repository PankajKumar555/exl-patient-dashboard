// File: src/pages/emergency/EmergencyScreen.js
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
} from "@mui/material";

const vitalsSnapshot = [
  { label: "Blood Pressure", value: "120/85" },
  { label: "Heart Rate", value: "110 bpm" },
  { label: "Glucose", value: "105 mg/dL" },
];

const EmergencyScreen = () => {
  const handleAlert = () => {
    alert("Emergency alert sent to care team and caregiver!");
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#fff3e0", minHeight: "100vh" }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" color="error" gutterBottom>
          🚨 Emergency Mode
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Button
          variant="contained"
          color="error"
          size="large"
          fullWidth
          sx={{ mb: 3 }}
          onClick={handleAlert}
        >
          Panic Button
        </Button>

        <Typography variant="h6" gutterBottom>
          Real-time Location (Mock):
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          📍 22.5726° N, 88.3639° E (Kolkata, India)
        </Typography>

        <Typography variant="h6" gutterBottom>
          Last 30 Days Snapshot:
        </Typography>
        <List>
          {vitalsSnapshot.map((v, i) => (
            <ListItem key={i}>
              {v.label}: {v.value}
            </ListItem>
          ))}
        </List>

        <Button variant="outlined" color="primary" fullWidth sx={{ mt: 3 }}>
          Call Ambulance (Mock)
        </Button>
      </Paper>
    </Box>
  );
};

export default EmergencyScreen;
