import { Card, CardContent, Typography, Divider } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RPMTrendChart = ({ selectedPatient }) => {
  if (!selectedPatient || !selectedPatient.rpmTrend) return null;

  const { title, description, data } = selectedPatient.rpmTrend;

  return (
    <Card
      sx={{
        minHeight: "250px",
        maxHeight: "400px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        pb: 1,
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption" color="textSecondary">
          {description}
        </Typography>
        <Divider sx={{ my: 2 }} />

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bp" stroke="#8884d8" name="BP" />
            <Line
              type="monotone"
              dataKey="glucose"
              stroke="#82ca9d"
              name="Glucose"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RPMTrendChart;
