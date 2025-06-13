import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import { vitals } from "../../data/data";

const HealthSummaryCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Health Summary</Typography>
      <List>
        {vitals.map((item, i) => (
          <ListItem key={i}>
            {item.label}: {item.value}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default HealthSummaryCard;
