import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { caregiverDashboardDataList } from "../../data/careGiverData";
import PatientReports from "../../components/caregiver/PatientReports";
import CaregiverReminders from "../../components/caregiver/CaregiverReminders";
import UpcomingConsults from "../../components/caregiver/UpcomingConsults";

const CaregiverDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(
    caregiverDashboardDataList[0]
  );

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3 },
        backgroundColor: "#e8f5e9",
        minHeight: "100vh",
      }}
    >
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
            color="success.main"
            sx={{ fontSize: { xs: "28px", sm: "34px" } }}
          >
            Family Caregiver Dashboard
          </Typography>

          <FormControl sx={{ minWidth: 200, maxWidth: 400 }} margin="dense">
            <InputLabel>Select Patient</InputLabel>
            <Select
              value={selectedPatient.associatedPatient}
              label="Select Patient"
              onChange={(e) =>
                setSelectedPatient(
                  caregiverDashboardDataList.find(
                    (p) => p.associatedPatient === e.target.value
                  )
                )
              }
            >
              {caregiverDashboardDataList.map((patient) => (
                <MenuItem
                  key={patient.associatedPatient}
                  value={patient.associatedPatient}
                >
                  {patient.associatedPatient}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Viewing reports and care for:{" "}
          <strong>{selectedPatient.associatedPatient}</strong>
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <PatientReports reports={selectedPatient.reports} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CaregiverReminders reminders={selectedPatient.remindersSet} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UpcomingConsults consults={selectedPatient.upcomingConsults} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CaregiverDashboard;
