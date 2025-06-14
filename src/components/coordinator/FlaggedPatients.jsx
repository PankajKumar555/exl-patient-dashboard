import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const FlaggedPatients = ({ flagged }) => (
  <Card
    sx={{
      minHeight: "300px",
      maxHeight: "550px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      pb: 1,
    }}
  >
    <CardContent>
      <Typography variant="h6">Flagged Patients</Typography>
      <List>
        {flagged.map((item, idx) => (
          <ListItem key={idx}>{`${item.name} - ${item.flag}`}</ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default FlaggedPatients;
