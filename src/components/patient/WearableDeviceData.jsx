import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import { wearableData } from "../../data/data";

const WearableDeviceData = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Wearable Device Data</Typography>
      <List>
        {wearableData.map((d, i) => (
          <ListItem key={i}>
            {d.type}: {d.value}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default WearableDeviceData;
