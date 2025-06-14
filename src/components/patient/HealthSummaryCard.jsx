import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const HealthSummaryCard = ({ vitals }) => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "250px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
      bgcolor: "#ffe6e6",
    }}
  >
    <CardContent>
      <Typography variant="h6">Health Summary</Typography>
      <List>
        {vitals?.map((item, i) => (
          <ListItem key={i}>
            Date : {item.date}, Bp : {item.bp} mmHg , Glucose : {item.glucose}{" "}
            mg/dL , Hr :{item.hr} bpm
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default HealthSummaryCard;
