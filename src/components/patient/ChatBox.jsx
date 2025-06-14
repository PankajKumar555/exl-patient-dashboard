import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material";

const ChatBox = ({ messages }) => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "250px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
      bgcolor: "#e6e6ff",
    }}
  >
    <CardContent>
      <Typography variant="h6">Chat with Care Team</Typography>
      <List>
        {messages?.map((msg, i) => (
          <ListItem key={i}>
            <Box>
              <Typography variant="body2">
                <strong>{msg.from}:</strong> {msg.content}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {msg.time}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ChatBox;
