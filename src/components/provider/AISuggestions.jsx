import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const AISuggestions = ({ selectedPatient }) => {
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
        <Typography variant="h6">AI Care Suggestions</Typography>
        <List>
          {selectedPatient?.suggestions.map((s, i) => (
            <ListItem key={i}>{s}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AISuggestions;
