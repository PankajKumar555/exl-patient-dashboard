import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Chip,
} from "@mui/material";

const MedicationTracker = ({ medications }) => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "250px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
      bgcolor: "#ffe6f0",
    }}
  >
    <CardContent>
      <Typography variant="h6">Medication Tracker</Typography>
      <List>
        {medications.map((med, i) => (
          <ListItem key={i}>
            {med.name} - {med.dose} ({med.frequency})
            {med.refill && (
              <Chip
                label="Refill Due"
                color="warning"
                sx={{ ml: 2 }}
                onClick={() => console.log(`Refill clicked for ${med.name}`)}
              />
            )}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default MedicationTracker;
