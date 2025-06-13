// Folder: src/pages/provider/components/PrescriptionManager.js
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const PrescriptionManager = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Prescription Manager</Typography>
      <Button variant="outlined" sx={{ mt: 2 }}>
        Order Lab Test
      </Button>
      <Button variant="outlined" sx={{ mt: 1 }}>
        Write Prescription
      </Button>
    </CardContent>
  </Card>
);

export default PrescriptionManager;
