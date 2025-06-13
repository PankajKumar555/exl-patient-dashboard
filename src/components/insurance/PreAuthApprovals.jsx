// File: src/pages/insurance/components/PreAuthApprovals.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  Stack,
} from "@mui/material";

const requests = [
  { id: "AUTH001", patient: "John Doe", type: "MRI Scan" },
  { id: "AUTH002", patient: "Jane Smith", type: "Blood Test" },
];

const PreAuthApprovals = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Pre-Authorization Requests</Typography>
      <List>
        {requests.map((req, i) => (
          <ListItem
            key={i}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {req.patient} - {req.type}
            <Stack direction="row" spacing={1}>
              <Button size="small" variant="contained" color="success">
                Approve
              </Button>
              <Button size="small" variant="outlined" color="error">
                Reject
              </Button>
            </Stack>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default PreAuthApprovals;
