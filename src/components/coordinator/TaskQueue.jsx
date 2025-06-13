// Folder: src/pages/coordinator/components/TaskQueue.js
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const TaskQueue = () => {
  const tasks = [
    "Confirm appointment for Mr. A",
    "Follow-up on glucose log with Mrs. B",
    "Send reminder to Mr. C",
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Daily Task Queue</Typography>
        <List>
          {tasks.map((task, i) => (
            <ListItem key={i}>{task}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TaskQueue;
