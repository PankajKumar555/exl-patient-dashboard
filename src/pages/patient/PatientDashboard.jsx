import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import HealthSummaryCard from "../../components/patient/HealthSummaryCard";
import MoodCheckIn from "../../components/patient/MoodCheckIn";
import AppointmentScheduler from "../../components/patient/AppointmentScheduler";
import MedicationTracker from "../../components/patient/MedicationTracker";
import ChatBox from "../../components/patient/ChatBox";
import VideoConsultation from "../../components/patient/VideoConsultation";
import WearableDeviceData from "../../components/patient/WearableDeviceData";
import { patientProfile } from "../../data/patientData.js";

const PatientDashboard = () => {
  const {
    vitalsHistory,
    appointments,
    medications,
    messages,
    wearableData,
    name,
  } = patientProfile;
  return (
    <Box sx={{ p: { xs: 1, sm: 3 }, backgroundColor: "#f5f7fa" }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            color="primary"
            sx={{ fontSize: { xs: "28px", sm: "34px" } }}
          >
            Patient Dashboard
          </Typography>
          <Typography variant="h6" gutterBottom color="success">
            {name}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <HealthSummaryCard vitals={vitalsHistory} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <MoodCheckIn />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <AppointmentScheduler appointments={appointments} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <MedicationTracker medications={medications} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ChatBox messages={messages} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <VideoConsultation />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <WearableDeviceData wearableData={wearableData} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PatientDashboard;
