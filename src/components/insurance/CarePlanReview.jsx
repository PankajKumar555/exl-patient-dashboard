import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import CancelIcon from "@mui/icons-material/Cancel";

const statusColor = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

const statusIcon = {
  Approved: <CheckCircleIcon color="success" fontSize="small" />,
  Pending: <PendingIcon color="warning" fontSize="small" />,
  Rejected: <CancelIcon color="error" fontSize="small" />,
};

const CarePlanReview = ({ plans = [] }) => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "400px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
    }}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Care Plan Reviews
      </Typography>
      <List dense>
        {plans.map((plan, index) => (
          <ListItem key={index} alignItems="flex-start" divider>
            <ListItemText
              disableTypography
              primary={
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography variant="subtitle1">
                    {plan.patientName} — {plan.condition}
                  </Typography>
                  <Chip
                    label={plan.status}
                    color={statusColor[plan.status] || "default"}
                    icon={statusIcon[plan.status]}
                    size="small"
                    onClick={() => console.log(`Clicked on ${plan.status}`)}
                  />
                </Box>
              }
              secondary={
                <Box mt={1}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Submitted By:</strong> {plan.submittedBy} on{" "}
                    {plan.submittedOn}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    <strong>Notes:</strong> {plan.notes}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default CarePlanReview;
