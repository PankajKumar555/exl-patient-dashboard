import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const CaregiverReminders = ({ reminders }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">Reminders Set</Typography>
      <List>
        {reminders.map((r, i) => (
          <ListItem key={i} divider>
            {r.time} - {r.label}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default CaregiverReminders;
