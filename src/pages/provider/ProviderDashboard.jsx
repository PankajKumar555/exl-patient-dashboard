import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import Patient360Card from "../../components/provider/Patient360Card";
import RPMTrendChart from "../../components/provider/RPMTrendChart";
import PrescriptionManager from "../../components/provider/PrescriptionManager";
import AISuggestions from "../../components/provider/AISuggestions";
import { patientsClinicData } from "../../data/patientClinicData";

const ProviderDashboard = () => {
  const [selectedPatientId, setSelectedPatientId] = useState(
    patientsClinicData[0]?.id
  );
  const selectedPatient = patientsClinicData?.find(
    (p) => p.id === selectedPatientId
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
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            color="secondary"
            sx={{ fontSize: { xs: "28px", sm: "34px" } }}
          >
            Clinic / Provider Dashboard
          </Typography>
          <FormControl sx={{ minWidth: 200, maxWidth: 400 }} margin="dense">
            <InputLabel>Select Patient</InputLabel>
            <Select
              value={selectedPatientId}
              label="Select Patient"
              onChange={(e) => setSelectedPatientId(e.target.value)}
            >
              {patientsClinicData?.map((patient) => (
                <MenuItem key={patient.id} value={patient.id}>
                  {patient.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Patient360Card selectedPatient={selectedPatient} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <RPMTrendChart selectedPatient={selectedPatient} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <PrescriptionManager selectedPatient={selectedPatient} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <AISuggestions selectedPatient={selectedPatient} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProviderDashboard;
