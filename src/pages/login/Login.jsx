import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("userRole", role);
    switch (role) {
      case "patient":
        navigate("/patient/dashboard");
        break;
      case "provider":
        navigate("/provider/dashboard");
        break;
      case "coordinator":
        navigate("/coordinator/dashboard");
        break;
      case "caregiver":
        navigate("/caregiver/dashboard");
        break;
      case "insurance":
        navigate("/insurance/dashboard");
        break;
      case "emergency":
        navigate("/emergency");
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Role</InputLabel>
          <Select
            value={role}
            label="Select Role"
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="patient">Patient</MenuItem>
            <MenuItem value="provider">Provider</MenuItem>
            <MenuItem value="coordinator">Care Coordinator</MenuItem>
            <MenuItem value="caregiver">Family Caregiver</MenuItem>
            <MenuItem value="insurance">Insurance Reviewer</MenuItem>
            <MenuItem value="emergency">Emergency</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          disabled={!role}
        >
          Continue
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
