import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const AppointmentScheduler = ({ appointments }) => (
  <Card
    sx={{
      minHeight: "250px",
      maxHeight: "250px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
      bgcolor: "#d6f5f4",
    }}
  >
    <CardContent>
      <Typography variant="h6">Appointments</Typography>
      <List>
        {appointments?.map((a, i) => (
          <ListItem key={i}>
            {a.date} at {a.time} with {a.doctor}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default AppointmentScheduler;
