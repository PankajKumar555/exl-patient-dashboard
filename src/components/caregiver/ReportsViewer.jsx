import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const reports = [
  { title: "BP Log", date: "2025-06-12" },
  { title: "Glucose Chart", date: "2025-06-10" },
];

const ReportsViewer = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Patient Reports</Typography>
      <List>
        {reports.map((r, i) => (
          <ListItem key={i}>
            {r.title} - {r.date}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ReportsViewer;
