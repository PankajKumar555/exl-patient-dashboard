import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const PrescriptionManager = ({ selectedPatient }) => {
  if (!selectedPatient || !selectedPatient.pcp) return null;

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
        <Typography variant="h6" gutterBottom>
          PCP Responsibilities
        </Typography>
        <List dense>
          {selectedPatient.pcp.responsibilities.map((task, index) => (
            <ListItem key={index}>• {task}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PrescriptionManager;
