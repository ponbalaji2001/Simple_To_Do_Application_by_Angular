import { todoModel, categModel, typeModel, userModel } from "./todo.model"
export interface ToDoState {
  ToDos: todoModel[];
  Types: typeModel[];
  Categories: categModel[];
  Priority: any[];
  Status: any[];
  User: userModel;
}

export const initialState: ToDoState = {

  Types: [
    { id: "T1", name: "Personal" },
    { id: "T2", name: "Work" }
  ],

  Categories: [
    { id: "C1", name: "Health & Wellness", type_id: "T1", type: "Personal" },
    { id: "C2", name: "Home Maintenance", type_id: "T1", type: "Personal" },
    { id: "C3", name: "Finance", type_id: "T1", type: "Personal" },
    { id: "C4", name: "Personal Growth", type_id: "T1", type: "Personal" },
    { id: "C5", name: "Family", type_id: "T1", type: "Personal" },
    { id: "C6", name: "Fitness", type_id: "T1", type: "Personal" },
    { id: "C7", name: "Shopping", type_id: "T1", type: "Personal" },
    { id: "C8", name: "Travel Planning", type_id: "T1", type: "Personal" },
    { id: "C9", name: "Project Management", type_id: "T2", type: "Work" },
    { id: "C10", name: "Client Relations", type_id: "T2", type: "Work" },
    { id: "C11", name: "Development", type_id: "T2", type: "Work" },
    { id: "C12", name: "Testing & QA", type_id: "T2", type: "Work" },
    { id: "C13", name: "Documentation", type_id: "T2", type: "Work" },
    { id: "C14", name: "Meetings", type_id: "T2", type: "Work" },
    { id: "C15", name: "Professional Development", type_id: "T2", type: "Work" },
    { id: "C16", name: "Operations", type_id: "T2", type: "Work" }
  ],

ToDos: [
  { id: 35, task: "Family call", description: "Weekly call with family to stay connected and updated.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2026-01-02", status: "Not Started", category: "Family", categ_id: "C5" },
  { id: 34, task: "Wardrobe cleanup", description: "Sort and donate old clothes to declutter and help others.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2026-01-02", status: "Not Started", category: "Home Maintenance", categ_id: "C2" },
  { id: 33, task: "Daily standup", description: "Attend daily team standup to discuss progress and blockers.", type: "Work", type_id: "T2", priority: "Low", due_date: "2026-01-02", status: "Completed", category: "Meetings", categ_id: "C14" },
  { id: 32, task: "Deployment", description: "Deploy application to production ensuring smooth rollout.", type: "Work", type_id: "T2", priority: "High", due_date: "2026-01-02", status: "Not Started", category: "Operations", categ_id: "C16" },
  { id: 31, task: "Read technical book", description: "Read system design concepts to enhance technical knowledge.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2026-01-01", status: "In Progress", category: "Personal Growth", categ_id: "C4" },
  { id: 30, task: "Meal prep", description: "Prepare healthy meals for the week to stay on track with diet.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2026-01-01", status: "Not Started", category: "Health & Wellness", categ_id: "C1" },
  { id: 29, task: "Write API docs", description: "Prepare Swagger documentation for clear API understanding.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2026-01-01", status: "Not Started", category: "Documentation", categ_id: "C13" },
  { id: 28, task: "Learn new library", description: "Explore state management library to enhance project skills.", type: "Work", type_id: "T2", priority: "Low", due_date: "2026-01-01", status: "In Progress", category: "Professional Development", categ_id: "C15" },
  { id: 27, task: "Clean water tank", description: "Schedule water tank cleaning service for safe drinking water.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-31", status: "Not Started", category: "Home Maintenance", categ_id: "C2" },
  { id: 26, task: "Online course", description: "Continue Angular advanced course for better web development skills.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-31", status: "In Progress", category: "Personal Growth", categ_id: "C4" },
  { id: 25, task: "Bug fixing", description: "Fix login-related issues and improve app stability.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-31", status: "Not Started", category: "Testing & QA", categ_id: "C12" },
  { id: 24, task: "Team meeting", description: "Weekly team sync meeting to align on project goals.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-31", status: "Completed", category: "Meetings", categ_id: "C14" },
  { id: 23, task: "Grocery shopping", description: "Buy vegetables and daily essentials for the week ahead.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-30", status: "Completed", category: "Shopping", categ_id: "C7" },
  { id: 22, task: "Health insurance renewal", description: "Renew health insurance policy to maintain coverage.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-30", status: "Not Started", category: "Finance", categ_id: "C3" },
  { id: 21, task: "API development", description: "Develop CRUD APIs for smooth backend integration.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-30", status: "In Progress", category: "Development", categ_id: "C11" },
  { id: 20, task: "Refactor code", description: "Improve code performance and maintainability across modules.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-30", status: "Not Started", category: "Development", categ_id: "C11" },
  { id: 19, task: "Pay electricity bill", description: "Pay monthly electricity bill online to avoid late charges.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-29", status: "Completed", category: "Finance", categ_id: "C3" },
  { id: 18, task: "Yoga session", description: "Light yoga and stretching session to relax body and mind.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-29", status: "Completed", category: "Fitness", categ_id: "C6" },
  { id: 17, task: "Client call", description: "Discuss requirements and updates with the client for clarity.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-29", status: "Completed", category: "Client Relations", categ_id: "C10" },
  { id: 16, task: "Gym workout", description: "Leg day strength training session for muscle growth and endurance.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-28", status: "Completed", category: "Fitness", categ_id: "C6" },
  { id: 15, task: "Fix kitchen tap", description: "Repair leaking kitchen tap to prevent water wastage.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-28", status: "Completed", category: "Home Maintenance", categ_id: "C2" },
  { id: 14, task: "Sprint planning", description: "Prepare sprint backlog and assign tasks for team members.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-28", status: "Completed", category: "Project Management", categ_id: "C9" },
  { id: 13, task: "Prepare release notes", description: "Write version release notes detailing new features and fixes.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-28", status: "Completed", category: "Documentation", categ_id: "C13" },
  { id: 12, task: "Doctor follow-up", description: "Review blood reports with the doctor and discuss next steps.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-27", status: "Completed", category: "Health & Wellness", categ_id: "C1" },
  { id: 11, task: "Buy gym supplements", description: "Purchase protein, vitamins, and other fitness supplements.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-27", status: "Completed", category: "Shopping", categ_id: "C7" },
  { id: 10, task: "Book travel tickets", description: "Book train tickets and confirm travel plans for upcoming trip.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-27", status: "Completed", category: "Travel Planning", categ_id: "C8" },
  { id: 9, task: "Performance testing", description: "Execute load testing to check app performance and reliability.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-27", status: "Completed", category: "Testing & QA", categ_id: "C12" },
  { id: 8, task: "Morning walk", description: "30-minute brisk walk for daily fitness and energy boost.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-26", status: "Completed", category: "Health & Wellness", categ_id: "C1" },
  { id: 7, task: "Plan trip budget", description: "Estimate travel expenses including transport and food.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-26", status: "Completed", category: "Travel Planning", categ_id: "C8" },
  { id: 6, task: "Savings review", description: "Review monthly savings and expenses to track financial goals.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-26", status: "Completed", category: "Finance", categ_id: "C3" },
  { id: 5, task: "Code review", description: "Review pull requests and provide feedback for quality code.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-26", status: "Completed", category: "Development", categ_id: "C11" },
  { id: 4, task: "Monitor logs", description: "Monitor application logs to identify errors and issues promptly.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-26", status: "Completed", category: "Operations", categ_id: "C16" },
  { id: 3, task: "Clean email inbox", description: "Remove spam emails and organize inbox folders properly.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-25", status: "Completed", category: "Personal Organization", categ_id: "C17" },
  { id: 2, task: "Backup project files", description: "Take local and cloud backup of important project files.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-25", status: "Completed", category: "Operations", categ_id: "C16" },
  { id: 1, task: "Plan next week tasks", description: "List priorities and plan tasks for the upcoming week.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-24", status: "Completed", category: "Personal Planning", categ_id: "C18" }
],

Priority: [
    { text: 'High', value: 'High' },
    { text: 'Medium', value: 'Medium' },
    { text: 'Low', value: 'Low' }
],

Status: [
    { text: 'Not Started', value: 'Not Started' },
    { text: 'In Progress', value: 'In Progress' },
    { text: 'Completed', value: 'Completed' }
],

User: {
    id: 'U1',
    name: 'Balaji',
    email: 'ponbalaji486@gmail.com',
    password: 'Balaji@123',
    token: ''
}

};
