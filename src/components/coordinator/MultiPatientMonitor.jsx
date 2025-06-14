import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const MultiPatientMonitor = ({ monitoring }) => (
  <Card
    sx={{
      minHeight: "300px",
      maxHeight: "550px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
    }}
  >
    <CardContent>
      <Typography variant="h6">Multi-Patient Monitoring</Typography>
      <List>
        {monitoring.map((patient, idx) => (
          <ListItem key={idx}>{`${patient.name}: ${patient.status}`}</ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default MultiPatientMonitor;
