import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import TaskQueue from "../../components/coordinator/TaskQueue";
import MultiPatientMonitor from "../../components/coordinator/MultiPatientMonitor";
import FlaggedPatients from "../../components/coordinator/FlaggedPatients";
import SOPChecklist from "../../components/coordinator/SOPChecklist";
import { careCoordinatorDashboardData } from "../../data/carePatientData";

const CoordinatorDashboard = () => {
  const {
    dailyTaskQueue,
    multiPatientMonitoring,
    flaggedPatients,
    postDischargeChecklist,
    date,
  } = careCoordinatorDashboardData;
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3 },
        backgroundColor: "#fffde7",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          color="warning.main"
          sx={{ fontSize: { xs: "28px", sm: "34px" } }}
        >
          Care Coordinator Dashboard
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TaskQueue tasks={dailyTaskQueue} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <MultiPatientMonitor monitoring={multiPatientMonitoring} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FlaggedPatients flagged={flaggedPatients} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <SOPChecklist checklist={postDischargeChecklist} date={date} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CoordinatorDashboard;
