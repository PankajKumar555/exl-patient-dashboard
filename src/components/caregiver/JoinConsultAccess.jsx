import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JoinConsultAccess = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Join Virtual Consultation</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Upcoming: 2025-06-18 at 11:00 AM with Dr. Ray
      </Typography>
      <Button variant="outlined" color="info" sx={{ mt: 2 }}>
        Join Call
      </Button>
    </CardContent>
  </Card>
);

export default JoinConsultAccess;
