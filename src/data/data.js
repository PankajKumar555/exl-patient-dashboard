export const healthSummary = {
  vitals: { BP: "120/80", HR: "72 bpm", Glucose: "98 mg/dL" },
  activity: "3,000 steps",
  mood: "🙂 Happy",
};

export const appointments = [
  {
    date: "2025-06-14",
    time: "10:00 AM",
    doctor: "Dr. Smith",
    type: "Follow-up",
  },
  {
    date: "2025-06-17",
    time: "02:30 PM",
    doctor: "Dr. Alice",
    type: "Nutrition Consult",
  },
];

export const medications = [
  { name: "Metformin", dose: "500mg", time: "Morning", refill: true },
  { name: "Lisinopril", dose: "10mg", time: "Evening", refill: false },
];

export const messages = [
  {
    from: "Nurse",
    message: "Did you take your morning dose?",
    time: "08:45 AM",
  },
  { from: "You", message: "Yes, I did!", time: "08:47 AM" },
];

export const vitals = [
  { label: "Blood Pressure", value: "120/80" },
  { label: "Heart Rate", value: "72 bpm" },
  { label: "Glucose", value: "98 mg/dL" },
];

export const wearableData = [
  { type: "BP", value: "120/80" },
  { type: "ECG", value: "Normal" },
  { type: "Glucose", value: "98 mg/dL" },
];
