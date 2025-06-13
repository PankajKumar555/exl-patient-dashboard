import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const Patient360Card = () => {
  const history = [
    { label: "Allergies", value: "Penicillin" },
    { label: "Chronic Conditions", value: "Type 2 Diabetes" },
    { label: "Last Visit", value: "2025-06-01" },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Patient 360 View</Typography>
        <List>
          {history.map((item, i) => (
            <ListItem key={i}>
              {item.label}: {item.value}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Patient360Card;
