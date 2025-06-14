import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const PatientReports = ({ reports }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">Patient Reports</Typography>
      <List>
        {reports.map((r, i) => (
          <ListItem key={i} divider>
            <strong>{r.type}</strong> ({r.date}): {r.notes}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default PatientReports;
