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
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/Pending";

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

const PreAuthApprovals = ({ approvals = [] }) => (
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
        Pre-Authorization Requests
      </Typography>
      <List dense>
        {approvals.map((req, index) => (
          <ListItem key={index} divider alignItems="flex-start">
            <ListItemText
              primary={
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1">
                    {req.patient} — {req.service}
                  </Typography>
                  <Chip
                    label={req.status}
                    color={statusColor[req.status] || "default"}
                    icon={statusIcon[req.status]}
                    size="small"
                    onClick={() => console.log(`Clicked on ${req.status}`)}
                  />
                </Box>
              }
              secondary={
                <>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Requested by:</strong> {req.requestedBy}
                  </Typography>
                  {req.reason && (
                    <Typography variant="body2" color="error" mt={0.5}>
                      <strong>Reason:</strong> {req.reason}
                    </Typography>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default PreAuthApprovals;
