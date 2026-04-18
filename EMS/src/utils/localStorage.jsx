/* eslint-disable no-unused-vars */

// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "amit@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description:
          "Complete the monthly financial report and ensure all expense entries are verified before submission.",
        date: "2025-02-20",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description:
          "Attend the team meeting and discuss project progress and blockers.",
        date: "2025-02-21",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description:
          "Update project documentation with recent feature changes and provide detailed notes for the development team.",
        date: "2025-02-22",
        category: "Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description:
          "Submit the final project report including executive summary, challenges faced, and future improvement suggestions.",
        date: "2025-02-22",
        category: "Project",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description:
          "Research the latest technology trends in artificial intelligence and prepare a summary document for discussion.",
        date: "2025-02-23",
        category: "Learning",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Raj",
    email: "raj@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description:
          "Conduct a thorough code review for the new feature implementation and provide constructive feedback.",
        date: "2025-02-23",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description:
          "Write and execute unit tests to ensure that the newly developed functionalities meet the required standards.",
        date: "2025-02-24",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Sanya",
    email: "sanya@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description:
          "Attend the client call and provide a detailed update on the ongoing project milestones and expected delivery timelines.",
        date: "2025-02-24",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description:
          "Prepare a professional PowerPoint presentation highlighting the key findings of the recent market analysis report.",
        date: "2025-02-25",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "arjun@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description:
          "Investigate and resolve critical bugs affecting the user experience in the mobile application.",
        date: "2025-02-25",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 2",
        description:
          "Analyze and optimize database queries to improve application performance and reduce latency issues.",
        date: "2025-02-26",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
