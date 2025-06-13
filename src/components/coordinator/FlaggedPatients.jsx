// Folder: src/pages/coordinator/components/FlaggedPatients.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const FlaggedPatients = () => {
  const flagged = [
    "Mr. X - Missed vitals 2 days",
    "Mrs. Y - High risk (BP spike)",
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Flagged Patients</Typography>
        <List>
          {flagged.map((f, i) => (
            <ListItem key={i}>{f}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default FlaggedPatients;
