import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const vitalsSnapshot = [
  { label: "Blood Pressure", value: "120/85" },
  { label: "Heart Rate", value: "110 bpm" },
  { label: "Glucose", value: "105 mg/dL" },
  { label: "Oxygen Saturation", value: "97%" },
];

const medicationSnapshot = [
  { name: "Metformin", dosage: "500mg", frequency: "2x/day" },
  { name: "Amlodipine", dosage: "5mg", frequency: "1x/day" },
  { name: "Insulin", dosage: "10 units", frequency: "Evening" },
];

const EmergencyScreen = () => {
  const handleAlert = () => {
    alert("🚨 Emergency alert sent to care team and caregiver!");
  };

  const handleCallAmbulance = () => {
    alert("📞 Connecting to emergency services (Mock Call)...");
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3 },
        backgroundColor: "#fff3e0",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={4} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          color="error"
          gutterBottom
          sx={{ fontSize: { xs: "28px", sm: "34px" } }}
        >
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

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Last 30 Days Vitals Snapshot:
        </Typography>
        <List dense>
          {vitalsSnapshot.map((v, i) => (
            <ListItem key={i}>
              <ListItemText primary={`${v.label}: ${v.value}`} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 3 }}>
          Medication Summary:
        </Typography>
        <List dense>
          {medicationSnapshot.map((med, i) => (
            <ListItem key={i}>
              <ListItemText
                primary={med.name}
                secondary={`Dosage: ${med.dosage} • Frequency: ${med.frequency}`}
              />
            </ListItem>
          ))}
        </List>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 4 }}
          onClick={handleCallAmbulance}
        >
          📞 Call Ambulance (Mock)
        </Button>
      </Paper>
    </Box>
  );
};

export default EmergencyScreen;
