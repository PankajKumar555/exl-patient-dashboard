export const careCoordinatorDashboardData = {
  date: "2025-06-07",
  dailyTaskQueue: [
    { task: "Confirm appointment for John Doe" },
    { task: "Follow-up on glucose log with Jane Smith" },
    { task: "Send medication reminder to Carlos Alvarez" },
    { task: "Call Aisha Khan for diet compliance check-in" },
    { task: "Schedule follow-up for Ravi Mehta's missed logs" },
  ],
  multiPatientMonitoring: [
    { name: "John Doe", status: "Stable" },
    { name: "Jane Smith", status: "BP Alert" },
    { name: "Carlos Alvarez", status: "Needs ECG Review" },
    { name: "Aisha Khan", status: "Salt Intake Non-compliance" },
    { name: "Ravi Mehta", status: "Missing Glucose Logs" },
  ],
  flaggedPatients: [
    { name: "Carlos Alvarez", flag: "Missed heart rate readings 2 days" },
    { name: "Jane Smith", flag: "High BP spike - urgent follow-up" },
    { name: "Ravi Mehta", flag: "No wearable sync since last week" },
  ],
  postDischargeChecklist: [
    {
      patient: "John Doe",
      checklist: [
        "Discharge education given",
        "Follow-up scheduled",
        "Medication list shared",
      ],
    },
    {
      patient: "Jane Smith",
      checklist: [
        "Follow-up scheduled",
        "BP monitor instructions given",
        "Dietary guide shared",
      ],
    },
    {
      patient: "Carlos Alvarez",
      checklist: [
        "ECG appointment arranged",
        "Medication side effects reviewed",
      ],
    },
    {
      patient: "Aisha Khan",
      checklist: ["Nutritionist referral sent", "Lifestyle coaching assigned"],
    },
    {
      patient: "Ravi Mehta",
      checklist: [
        "Device re-pairing scheduled",
        "Glucose monitoring SOP emailed",
      ],
    },
  ],
};
