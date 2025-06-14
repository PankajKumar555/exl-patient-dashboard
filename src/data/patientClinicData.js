export const patientsClinicData = [
  {
    id: 1,
    name: "John Doe",
    pcp: {
      responsibilities: [
        "Monitors patient vitals",
        "Reviews care history",
        "Prescribes/refers",
        "Coordinates treatment",
      ],
    },
    suggestions: [
      "Patient missed 3 BP readings this week.",
      "Consider adjusting medication dose.",
      "Schedule a follow-up for glucose trend.",
    ],
    history: [
      { label: "Allergies", value: "Penicillin" },
      { label: "Chronic Conditions", value: "Type 2 Diabetes" },
      { label: "Last Visit", value: "2025-06-01" },
    ],
    rpmTrend: {
      title: "RPM Trend - BP & Glucose",
      description: "Graph showing BP and Glucose trends for the week.",
      data: [
        { date: "2025-06-01", bp: 132, glucose: 165 },
        { date: "2025-06-03", bp: 130, glucose: 160 },
        { date: "2025-06-05", bp: 128, glucose: 158 },
        { date: "2025-06-07", bp: 135, glucose: 155 },
        { date: "2025-06-09", bp: 129, glucose: 150 },
      ],
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    pcp: {
      responsibilities: [
        "Monitors patient vitals",
        "Reviews care history",
        "Prescribes/refers",
        "Coordinates treatment",
      ],
    },
    suggestions: [
      "Glucose readings stable, continue current plan.",
      "Encourage regular walking routine.",
      "Check cholesterol in next lab visit.",
    ],
    history: [
      { label: "Allergies", value: "None" },
      { label: "Chronic Conditions", value: "Hypertension" },
      { label: "Last Visit", value: "2025-05-21" },
    ],
    rpmTrend: {
      title: "RPM Trend - BP & Steps",
      description: "Graph showing BP stability and daily step count.",
      data: [
        { date: "2025-06-01", bp: 125, steps: 3200 },
        { date: "2025-06-03", bp: 126, steps: 4800 },
        { date: "2025-06-05", bp: 124, steps: 5300 },
        { date: "2025-06-07", bp: 123, steps: 4600 },
        { date: "2025-06-09", bp: 122, steps: 5100 },
      ],
    },
  },
  {
    id: 3,
    name: "Carlos Alvarez",
    pcp: {
      responsibilities: [
        "Monitors patient vitals",
        "Reviews care history",
        "Prescribes/refers",
        "Coordinates treatment",
      ],
    },
    suggestions: [
      "Patient reported dizziness after medication.",
      "Evaluate need for ECG.",
      "Discuss side effects during next consultation.",
    ],
    history: [
      { label: "Allergies", value: "Sulfa drugs" },
      { label: "Chronic Conditions", value: "Atrial fibrillation" },
      { label: "Last Visit", value: "2025-06-10" },
    ],
    rpmTrend: {
      title: "RPM Trend - Heart Rate",
      description: "Graph showing heart rate over past week.",
      data: [
        { date: "2025-06-01", heartRate: 88 },
        { date: "2025-06-03", heartRate: 92 },
        { date: "2025-06-05", heartRate: 95 },
        { date: "2025-06-07", heartRate: 90 },
        { date: "2025-06-09", heartRate: 87 },
      ],
    },
  },
  {
    id: 4,
    name: "Aisha Khan",
    pcp: {
      responsibilities: [
        "Monitors patient vitals",
        "Reviews care history",
        "Prescribes/refers",
        "Coordinates treatment",
      ],
    },
    suggestions: [
      "BP spiked last two days – flag for urgent review.",
      "Advise patient to limit salt intake.",
      "Request dietary consultation.",
    ],
    history: [
      { label: "Allergies", value: "Latex" },
      { label: "Chronic Conditions", value: "Hypertension, PCOS" },
      { label: "Last Visit", value: "2025-06-12" },
    ],
    rpmTrend: {
      title: "RPM Trend - BP Fluctuation",
      description: "Graph showing recent BP fluctuations.",
      data: [
        { date: "2025-06-01", bp: 135 },
        { date: "2025-06-03", bp: 140 },
        { date: "2025-06-05", bp: 145 },
        { date: "2025-06-07", bp: 142 },
        { date: "2025-06-09", bp: 138 },
      ],
    },
  },
  {
    id: 5,
    name: "Ravi Mehta",
    pcp: {
      responsibilities: [
        "Monitors patient vitals",
        "Reviews care history",
        "Prescribes/refers",
        "Coordinates treatment",
      ],
    },
    suggestions: [
      "Patient missed glucose logs for 5 days.",
      "Check wearable device sync.",
      "Send reminder notification.",
    ],
    history: [
      { label: "Allergies", value: "None" },
      { label: "Chronic Conditions", value: "Type 1 Diabetes" },
      { label: "Last Visit", value: "2025-05-28" },
    ],
    rpmTrend: {
      title: "RPM Trend - Glucose",
      description: "Graph showing glucose variability over time.",
      data: [
        { date: "2025-06-01", glucose: 185 },
        { date: "2025-06-03", glucose: 178 },
        { date: "2025-06-05", glucose: 190 },
        { date: "2025-06-07", glucose: 200 },
        { date: "2025-06-09", glucose: 175 },
      ],
    },
  },
];
