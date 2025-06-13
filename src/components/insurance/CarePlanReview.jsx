// File: src/pages/insurance/components/CarePlanReview.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const plans = [
  { patient: "John Doe", status: "Pending Review" },
  { patient: "Jane Smith", status: "Reviewed" },
];

const CarePlanReview = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Submitted Care Plans</Typography>
      <List>
        {plans.map((p, i) => (
          <ListItem key={i}>
            {p.patient}: {p.status}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default CarePlanReview;
