import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { messages } from "../../data/data";

const ChatBox = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Chat with Care Team</Typography>
      <List>
        {messages.map((msg, i) => (
          <ListItem key={i}>
            <Box>
              <Typography variant="body2">
                <strong>{msg.from}:</strong> {msg.message}
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
