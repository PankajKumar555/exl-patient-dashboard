// File: src/pages/insurance/components/OutcomesTracker.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const outcomes = [
  { metric: "Hospital Readmission Rate", value: "5%" },
  { metric: "Preventive Care Compliance", value: "92%" },
];

const OutcomesTracker = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Outcomes Tracker</Typography>
      <List>
        {outcomes.map((item, i) => (
          <ListItem key={i}>
            {item.metric}: {item.value}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default OutcomesTracker;
