// File: src/pages/insurance/components/UtilizationReports.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const reports = [
  { month: "May 2025", utilization: "87%" },
  { month: "April 2025", utilization: "90%" },
];

const UtilizationReports = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Utilization Reports</Typography>
      <List>
        {reports.map((r, i) => (
          <ListItem key={i}>
            {r.month}: {r.utilization}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default UtilizationReports;
