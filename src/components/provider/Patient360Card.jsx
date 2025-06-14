import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const Patient360Card = ({ selectedPatient }) => {
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
        <Typography variant="h6">Patient 360 View</Typography>
        <List>
          {selectedPatient?.history?.map((item, i) => (
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
