import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const VideoConsultation = () => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "250px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
      bgcolor: "#fff2e6",
    }}
  >
    <CardContent>
      <Typography variant="h6">Video Consultation</Typography>
      <Box
        sx={{
          mt: 2,
          height: 100,
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">Video Frame (Mock)</Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Start Call
      </Button>
    </CardContent>
  </Card>
);

export default VideoConsultation;
