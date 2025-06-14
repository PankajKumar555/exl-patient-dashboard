import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const TaskQueue = ({ tasks }) => (
  <Card
    sx={{
      minHeight: "300px",
      maxHeight: "550px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
    }}
  >
    <CardContent>
      <Typography variant="h6">Daily Task Queue</Typography>
      <List>
        {tasks.map((item, idx) => (
          <ListItem key={idx}>{item.task}</ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default TaskQueue;
