import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";

const UpcomingConsults = ({ consults }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">Upcoming Virtual Consults</Typography>
      <List>
        {consults.map((c, i) => (
          <ListItem key={i} divider>
            {c.date} at {c.time} with {c.with} —
            <Button variant="contained" sx={{ ml: 2 }}>
              Join
            </Button>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default UpcomingConsults;
