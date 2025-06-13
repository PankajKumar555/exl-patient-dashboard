import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

const ReminderSetter = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Set Reminders</Typography>
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Reminder"
          placeholder="e.g., Take BP reading"
          fullWidth
        />
        <TextField type="datetime-local" fullWidth />
        <Button variant="contained" color="primary">
          Set Reminder
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default ReminderSetter;
