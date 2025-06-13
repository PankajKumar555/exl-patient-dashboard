// Folder: src/pages/coordinator/components/MultiPatientMonitor.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const MultiPatientMonitor = () => {
  const patients = [
    { name: "John Doe", status: "Stable" },
    { name: "Jane Smith", status: "BP Alert" },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Multi-Patient Monitoring</Typography>
        <List>
          {patients.map((p, i) => (
            <ListItem key={i}>
              {p.name}: {p.status}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default MultiPatientMonitor;
