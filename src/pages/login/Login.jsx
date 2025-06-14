import { useState } from "react";
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
        background: "linear-gradient(to right, #6dd5ed, #2193b0)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: "#ffffffee",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 600, color: "#1976d2" }}
        >
          Welcome
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
          Please select your role to continue
        </Typography>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="role-select-label">Select Role</InputLabel>
          <Select
            labelId="role-select-label"
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
          sx={{
            py: 1.2,
            fontSize: "1rem",
            fontWeight: 500,
            borderRadius: 2,
            boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          }}
        >
          Continue
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
