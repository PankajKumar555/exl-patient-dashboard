import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const OutcomesTracker = ({ tracker }) => {
  const data = tracker?.[0];

  if (!data) return null;

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
          Outcomes Tracker
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Total Plans Reviewed"
              secondary={data.totalPlansReviewed}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Approved" secondary={data.approvals} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Rejected" secondary={data.rejections} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Pending" secondary={data.pending} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Average Compliance Score"
              secondary={`${data.averageComplianceScore}%`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Most Common Compliance Flag"
              secondary={data.mostCommonFlag}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default OutcomesTracker;
