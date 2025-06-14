import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const SOPChecklist = ({ checklist, date }) => (
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
      <Typography variant="h6">SOP / Post-Discharge Checklist</Typography>
      <Typography variant="caption" color="textSecondary">
        {date}
      </Typography>
      <List>
        {checklist.map((entry, idx) => (
          <ListItem key={idx} sx={{ display: "block" }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {entry.patient}
            </Typography>
            <List dense disablePadding>
              {entry.checklist.map((item, i) => (
                <ListItem key={i} sx={{ pl: 2 }}>
                  - {item}
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default SOPChecklist;
