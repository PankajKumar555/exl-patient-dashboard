import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import { appointments } from "../../data/data";

const AppointmentScheduler = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Appointments</Typography>
      <List>
        {appointments.map((a, i) => (
          <ListItem key={i}>
            {a.date} at {a.time} with {a.doctor}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default AppointmentScheduler;
