export const insuranceReviewerData = {
  reviewerName: "Dr. Rakesh Verma",
  reviewDate: "2025-06-14",
  submittedCarePlans: [
    {
      patientName: "John Doe",
      condition: "Type 2 Diabetes",
      submittedBy: "Dr. Priya Iyer",
      submittedOn: "2025-06-10",
      status: "Approved",
      notes: "Aligned with national diabetes guidelines. Monitored via RPM.",
    },
    {
      patientName: "Jane Smith",
      condition: "Hypertension",
      submittedBy: "Dr. Sanjay Rao",
      submittedOn: "2025-06-09",
      status: "Pending",
      notes: "Awaiting lab results for cholesterol risk stratification.",
    },
    {
      patientName: "Carlos Alvarez",
      condition: "Atrial Fibrillation",
      submittedBy: "Dr. Nita Shah",
      submittedOn: "2025-06-11",
      status: "Rejected",
      notes: "Missing ECG compliance history. Re-submit with updated RPM data.",
    },
    {
      patientName: "Aisha Khan",
      condition: "Hypertension, PCOS",
      submittedBy: "Dr. Ravi Nair",
      submittedOn: "2025-06-08",
      status: "Approved",
      notes: "Lifestyle change plan included. SOP checklist complete.",
    },
    {
      patientName: "Ravi Mehta",
      condition: "Type 1 Diabetes",
      submittedBy: "Dr. Leela Menon",
      submittedOn: "2025-06-12",
      status: "Pending",
      notes: "Reviewing insulin log compliance and wearable sync data.",
    },
  ],
  preAuthorizations: [
    {
      patient: "Carlos Alvarez",
      service: "Remote ECG Monitoring",
      requestedBy: "Dr. Nita Shah",
      status: "Rejected",
      reason: "Insufficient recent vitals submitted",
    },
    {
      patient: "Jane Smith",
      service: "Home BP Monitoring Kit",
      requestedBy: "Dr. Sanjay Rao",
      status: "Pending",
    },
    {
      patient: "Ravi Mehta",
      service: "Continuous Glucose Monitor",
      requestedBy: "Dr. Leela Menon",
      status: "Approved",
    },
  ],
  outcomesTracker: [
    {
      totalPlansReviewed: 5,
      approvals: 2,
      rejections: 1,
      pending: 2,
      averageComplianceScore: 78.4,
      mostCommonFlag: "RPM data missing or outdated",
    },
  ],
  reportsGenerated: [
    {
      reportName: "June Value-Based Reimbursement Summary",
      generatedOn: "2025-06-13",
      utilization: "87%",
      outcomeScore: "74%",
      comments:
        "Slight dip in Q2 adherence. Recommend provider audit for Jane Smith’s group.",
    },
  ],
};
