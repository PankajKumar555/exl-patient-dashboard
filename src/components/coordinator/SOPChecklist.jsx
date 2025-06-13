// Folder: src/pages/coordinator/components/SOPChecklist.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Checkbox,
} from "@mui/material";

const SOPChecklist = () => {
  const checklist = [
    "Discharge education given",
    "Follow-up scheduled",
    "Medication list shared",
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">SOP / Post-Discharge Checklist</Typography>
        <List>
          {checklist.map((item, i) => (
            <ListItem key={i}>
              <Checkbox /> {item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SOPChecklist;
