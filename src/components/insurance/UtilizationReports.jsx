import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const UtilizationReports = ({ reports = [] }) => (
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
        Utilization Reports
      </Typography>
      <List dense>
        {reports.map((report, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={report.reportName}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Date:</strong> {report.generatedOn}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Utilization:</strong> {report.utilization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Outcome Score:</strong> {report.outcomeScore}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      <strong>Comments:</strong> {report.comments}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index !== reports.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default UtilizationReports;
