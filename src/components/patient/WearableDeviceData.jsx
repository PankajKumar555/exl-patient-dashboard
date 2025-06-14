import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const WearableDeviceData = ({ wearableData }) => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "250px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
      bgcolor: "#e6ffee",
    }}
  >
    <CardContent>
      <Typography variant="h6">Wearable Device Data</Typography>
      <List>
        {wearableData?.map((d, i) => (
          <ListItem key={i}>
            {d.type}: {d.value}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default WearableDeviceData;
