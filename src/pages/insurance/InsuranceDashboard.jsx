import { useState } from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import CarePlanReview from "../../components/insurance/CarePlanReview";
import PreAuthApprovals from "../../components/insurance/PreAuthApprovals";
import OutcomesTracker from "../../components/insurance/OutcomesTracker";
import UtilizationReports from "../../components/insurance/UtilizationReports";
import { insuranceReviewerData } from "../../data/insuranceReviewrData";

const InsuranceDashboard = () => {
  const [reviewDate] = useState(insuranceReviewerData.reviewDate);

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3 },
        backgroundColor: "#f3e5f5",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          color="secondary"
          sx={{ fontSize: { xs: "28px", sm: "34px" } }}
        >
          Insurance Reviewer Dashboard
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Reviewer: {insuranceReviewerData.reviewerName}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Review Date: {reviewDate}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CarePlanReview plans={insuranceReviewerData.submittedCarePlans} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PreAuthApprovals
              approvals={insuranceReviewerData.preAuthorizations}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <OutcomesTracker tracker={insuranceReviewerData.outcomesTracker} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UtilizationReports
              reports={insuranceReviewerData.reportsGenerated}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InsuranceDashboard;
