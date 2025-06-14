export const caregiverDashboardDataList = [
  {
    caregiverName: "Anita Mehta",
    associatedPatient: "Ravi Mehta",
    date: "2025-06-14",
    reports: [
      {
        type: "Vitals Summary",
        date: "2025-06-13",
        notes: "BP and glucose within normal range",
      },
      {
        type: "Doctor's Notes",
        date: "2025-06-10",
        notes: "Continue same insulin dose, monitor evening sugar dips",
      },
      {
        type: "Medication History",
        date: "2025-06-09",
        notes: "Adherence 90% last week",
      },
    ],
    remindersSet: [
      { time: "08:00 AM", label: "Morning Medication Reminder" },
      { time: "07:00 PM", label: "Evening BP Check" },
      { time: "09:00 PM", label: "Glucose Log Entry" },
    ],
    upcomingConsults: [
      {
        with: "Dr. Sharma",
        date: "2025-06-15",
        time: "11:00 AM",
        type: "Virtual Consultation",
        joinLink: "https://healthapp.com/consult/ravi123",
      },
    ],
  },
  {
    caregiverName: "Rahul Verma",
    associatedPatient: "John Doe",
    date: "2025-06-14",
    reports: [
      {
        type: "Vitals Summary",
        date: "2025-06-12",
        notes: "BP stable, HR slightly elevated",
      },
      {
        type: "Doctor's Notes",
        date: "2025-06-09",
        notes: "Evaluate need for stress test",
      },
      {
        type: "Medication History",
        date: "2025-06-08",
        notes: "Missed 2 doses last week",
      },
    ],
    remindersSet: [
      { time: "09:00 AM", label: "Take BP medication" },
      { time: "06:00 PM", label: "Evening Walk" },
    ],
    upcomingConsults: [
      {
        with: "Dr. Fernandes",
        date: "2025-06-16",
        time: "10:00 AM",
        type: "Virtual Consultation",
        joinLink: "https://healthapp.com/consult/john123",
      },
    ],
  },
  {
    caregiverName: "Fatima Ali",
    associatedPatient: "Aisha Khan",
    date: "2025-06-14",
    reports: [
      {
        type: "Vitals Summary",
        date: "2025-06-13",
        notes: "BP fluctuating; consult recommended",
      },
      {
        type: "Doctor's Notes",
        date: "2025-06-10",
        notes: "Salt intake must be reduced",
      },
    ],
    remindersSet: [
      { time: "07:30 AM", label: "BP Monitor" },
      { time: "08:30 PM", label: "Daily Diary Log" },
    ],
    upcomingConsults: [
      {
        with: "Dr. Kapoor",
        date: "2025-06-15",
        time: "03:00 PM",
        type: "Virtual Consultation",
        joinLink: "https://healthapp.com/consult/aisha123",
      },
    ],
  },
  {
    caregiverName: "Manoj Singh",
    associatedPatient: "Carlos Alvarez",
    date: "2025-06-14",
    reports: [
      {
        type: "Doctor's Notes",
        date: "2025-06-10",
        notes: "Review ECG results pending",
      },
      {
        type: "Vitals Summary",
        date: "2025-06-12",
        notes: "Low HR detected intermittently",
      },
    ],
    remindersSet: [
      { time: "10:00 AM", label: "Heart Rate Check" },
      { time: "09:00 PM", label: "Sleep Tracking On" },
    ],
    upcomingConsults: [
      {
        with: "Dr. Nair",
        date: "2025-06-16",
        time: "02:00 PM",
        type: "Virtual Consultation",
        joinLink: "https://healthapp.com/consult/carlos123",
      },
    ],
  },
  {
    caregiverName: "Neha Sinha",
    associatedPatient: "Jane Smith",
    date: "2025-06-14",
    reports: [
      {
        type: "Medication History",
        date: "2025-06-13",
        notes: "All doses taken this week",
      },
      {
        type: "Doctor's Notes",
        date: "2025-06-11",
        notes: "Encourage low-sodium diet",
      },
    ],
    remindersSet: [
      { time: "08:00 AM", label: "BP Medication" },
      { time: "06:00 PM", label: "Daily Walk Reminder" },
    ],
    upcomingConsults: [
      {
        with: "Dr. Menon",
        date: "2025-06-17",
        time: "04:30 PM",
        type: "Virtual Consultation",
        joinLink: "https://healthapp.com/consult/jane123",
      },
    ],
  },
];
