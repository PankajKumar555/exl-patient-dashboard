// Folder: src/pages/provider/components/AISuggestions.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const AISuggestions = () => {
  const suggestions = [
    "Patient missed 3 BP readings this week.",
    "Consider adjusting medication dose.",
    "Schedule a follow-up for glucose trend.",
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">AI Care Suggestions</Typography>
        <List>
          {suggestions.map((s, i) => (
            <ListItem key={i}>{s}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AISuggestions;
