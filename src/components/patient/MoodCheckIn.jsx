import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const MoodCheckIn = () => {
  const [mood, setMood] = useState("🙂");

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Mood Check-In</Typography>
        <ToggleButtonGroup
          value={mood}
          exclusive
          onChange={(e, newMood) => setMood(newMood)}
          sx={{ mt: 2 }}
        >
          <ToggleButton value="🙂">🙂</ToggleButton>
          <ToggleButton value="😐">😐</ToggleButton>
          <ToggleButton value="😟">😟</ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
    </Card>
  );
};

export default MoodCheckIn;
