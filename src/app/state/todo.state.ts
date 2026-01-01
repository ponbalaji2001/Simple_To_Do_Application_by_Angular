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
    { id: 1, task: "Morning walk", description: "30-minute brisk walk for daily fitness.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-01", status: "Completed", category: "Health & Wellness", categ_id: "C1" },
    { id: 2, task: "Doctor follow-up", description: "Review blood reports with the doctor.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-02", status: "Not Started", category: "Health & Wellness", categ_id: "C1" },
    { id: 3, task: "Gym workout", description: "Leg day strength training session.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-03", status: "In Progress", category: "Fitness", categ_id: "C6" },
    { id: 4, task: "Pay electricity bill", description: "Pay monthly electricity bill online.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-04", status: "Completed", category: "Finance", categ_id: "C3" },
    { id: 5, task: "Grocery shopping", description: "Buy vegetables and daily essentials.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-05", status: "Completed", category: "Shopping", categ_id: "C7" },
    { id: 6, task: "Clean water tank", description: "Schedule water tank cleaning service.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-06", status: "Not Started", category: "Home Maintenance", categ_id: "C2" },
    { id: 7, task: "Read technical book", description: "Read system design concepts.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-07", status: "In Progress", category: "Personal Growth", categ_id: "C4" },
    { id: 8, task: "Family call", description: "Weekly call with family.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-08", status: "Completed", category: "Family", categ_id: "C5" },
    { id: 9, task: "Plan trip budget", description: "Estimate travel expenses.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-09", status: "Not Started", category: "Travel Planning", categ_id: "C8" },
    { id: 10, task: "Buy gym supplements", description: "Purchase protein and vitamins.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-10", status: "Not Started", category: "Shopping", categ_id: "C7" },
    { id: 11, task: "Fix kitchen tap", description: "Repair leaking kitchen tap.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-11", status: "Not Started", category: "Home Maintenance", categ_id: "C2" },
    { id: 12, task: "Yoga session", description: "Light yoga and stretching.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-12", status: "Not Started", category: "Fitness", categ_id: "C6" },
    { id: 13, task: "Health insurance renewal", description: "Renew health insurance policy.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-13", status: "Not Started", category: "Finance", categ_id: "C3" },
    { id: 14, task: "Online course", description: "Continue Flutter advanced course.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-14", status: "In Progress", category: "Personal Growth", categ_id: "C4" },
    { id: 15, task: "Meal prep", description: "Prepare healthy meals for the week.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-15", status: "Not Started", category: "Health & Wellness", categ_id: "C1" },
    { id: 16, task: "Wardrobe cleanup", description: "Sort and donate old clothes.", type: "Personal", type_id: "T1", priority: "Low", due_date: "2025-12-16", status: "Not Started", category: "Home Maintenance", categ_id: "C2" },
    { id: 17, task: "Savings review", description: "Review monthly savings and expenses.", type: "Personal", type_id: "T1", priority: "Medium", due_date: "2025-12-17", status: "Not Started", category: "Finance", categ_id: "C3" },
    { id: 18, task: "Book travel tickets", description: "Book train travel tickets.", type: "Personal", type_id: "T1", priority: "High", due_date: "2025-12-18", status: "Not Started", category: "Travel Planning", categ_id: "C8" },
    { id: 19, task: "Sprint planning", description: "Prepare sprint backlog.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-05", status: "Completed", category: "Project Management", categ_id: "C9" },
    { id: 20, task: "Client call", description: "Discuss requirements with client.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-06", status: "In Progress", category: "Client Relations", categ_id: "C10" },
    { id: 21, task: "API development", description: "Develop CRUD APIs.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-07", status: "In Progress", category: "Development", categ_id: "C11" },
    { id: 22, task: "Bug fixing", description: "Fix login-related issues.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-08", status: "Not Started", category: "Testing & QA", categ_id: "C12" },
    { id: 23, task: "Write API docs", description: "Prepare Swagger documentation.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-09", status: "Not Started", category: "Documentation", categ_id: "C13" },
    { id: 24, task: "Daily standup", description: "Attend daily team standup.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-10", status: "Completed", category: "Meetings", categ_id: "C14" },
    { id: 25, task: "Code review", description: "Review pull requests.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-11", status: "In Progress", category: "Development", categ_id: "C11" },
    { id: 26, task: "Performance testing", description: "Execute load testing.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-12", status: "Not Started", category: "Testing & QA", categ_id: "C12" },
    { id: 27, task: "Prepare release notes", description: "Write version release notes.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-13", status: "Not Started", category: "Documentation", categ_id: "C13" },
    { id: 28, task: "Client demo", description: "Demonstrate features to client.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-14", status: "Not Started", category: "Client Relations", categ_id: "C10" },
    { id: 29, task: "Refactor code", description: "Improve code performance.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-15", status: "Not Started", category: "Development", categ_id: "C11" },
    { id: 30, task: "Team meeting", description: "Weekly team sync meeting.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-16", status: "Completed", category: "Meetings", categ_id: "C14" },
    { id: 31, task: "Learn new library", description: "Explore state management library.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-17", status: "In Progress", category: "Professional Development", categ_id: "C15" },
    { id: 32, task: "Deployment", description: "Deploy application to production.", type: "Work", type_id: "T2", priority: "High", due_date: "2025-12-18", status: "Not Started", category: "Operations", categ_id: "C16" },
    { id: 33, task: "Monitor logs", description: "Monitor application logs.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-20", status: "Not Started", category: "Operations", categ_id: "C16" },
    { id: 34, task: "Optimize queries", description: "Improve database query performance.", type: "Work", type_id: "T2", priority: "Medium", due_date: "2025-12-22", status: "Not Started", category: "Development", categ_id: "C11" },
    { id: 35, task: "Training session", description: "Internal technical training session.", type: "Work", type_id: "T2", priority: "Low", due_date: "2025-12-24", status: "Not Started", category: "Professional Development", categ_id: "C15" }
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
    password: 'Balaji@123'
}

};
