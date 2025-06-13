import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Chip,
} from "@mui/material";
import { medications } from "../../data/data";

const MedicationTracker = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Medication Tracker</Typography>
      <List>
        {medications.map((med, i) => (
          <ListItem key={i}>
            {med.name} - {med.dose} ({med.time})
            {med.refill && (
              <Chip label="Refill Due" color="warning" sx={{ ml: 2 }} />
            )}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default MedicationTracker;
