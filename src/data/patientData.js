// File: src/data/patientProfile.js
export const patientProfile = {
  id: "P123456",
  name: "John Doe",
  age: 67,
  gender: "Male",
  address: "123 Wellness St, Health City",
  phone: "+1 555-987-6543",
  email: "john.doe@example.com",
  emergencyContact: {
    name: "Jane Doe",
    relation: "Wife",
    phone: "+1 555-123-4567",
  },
  insurance: {
    provider: "HealthCare Plus",
    policyNumber: "HC12345678",
    validTill: "2026-12-31",
  },
  vitalsHistory: [
    { date: "2025-06-01", bp: "120/80", glucose: "98", hr: "70" },
    { date: "2025-06-02", bp: "125/82", glucose: "105", hr: "72" },
    { date: "2025-06-03", bp: "130/85", glucose: "110", hr: "75" },
  ],
  chronicConditions: ["Type 2 Diabetes", "Hypertension"],
  allergies: ["Penicillin"],
  medications: [
    { name: "Metformin", dose: "500mg", frequency: "Morning", refill: true },
    { name: "Lisinopril", dose: "10mg", frequency: "Evening", refill: false },
  ],
  appointments: [
    { date: "2025-06-14", time: "10:00 AM", doctor: "Dr. Smith" },
    { date: "2025-06-17", time: "02:30 PM", doctor: "Dr. Alice" },
  ],
  activity: {
    steps: 5400,
    sleepHours: 7.1,
    lastWorkout: "2025-06-11T07:00:00Z",
  },
  moodLogs: [
    { date: "2025-06-10", mood: "🙂" },
    { date: "2025-06-11", mood: "😐" },
    { date: "2025-06-12", mood: "🙂" },
  ],
  wearableData: [
    { type: "BP", value: "120/80" },
    { type: "ECG", value: "Normal" },
    { type: "Glucose", value: "98 mg/dL" },
    { type: "Spo2", value: "98%" },
    { type: "HeartRate", value: "72 bpm" },
  ],
  messages: [
    {
      from: "Nurse",
      content: "Did you take your morning dose?",
      time: "08:45 AM",
    },
    { from: "You", content: "Yes, I did!", time: "08:47 AM" },
    {
      from: "Doctor",
      content: "Your next appointment is on June 14th.",
      time: "09:00 AM",
    },
  ],
  lastUpdated: "2025-06-12T10:00:00Z",
};
