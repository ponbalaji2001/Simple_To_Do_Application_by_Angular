import { todoModel } from "./todo.model"

export interface ToDoState {
  personalToDos: todoModel[];
  workToDos: todoModel[];
}

export const initialState: ToDoState = {
    
  personalToDos: [
    {
        "id": 1,
        "task": "Grocery shopping",
        "description": "Buy milk, eggs, bread, and vegetables",
        "priority": "Medium",
        "due_date": new Date("2024-06-21"),
        "status": "Not Started",
        "category": "Home Maintenance"
    },
    {
        "id": 2,
        "task": "Doctor's appointment",
        "description": "Annual check-up with Dr. Smith",
        "priority": "High",
        "due_date": new Date("2024-06-22"),
        "status": "Completed",
        "category": "Health & Wellness"
    },
    {
        "id": 3,
        "task": "Call plumber",
        "description": "Fix the leaking sink in the kitchen",
        "priority": "Low",
        "due_date": new Date("2024-06-23"),
        "status": "Not Started",
        "category": "Home Maintenance"
    },
    {
        "id": 4,
        "task": "Read a book",
        "description": "Finish reading 'The Great Gatsby'",
        "priority": "Low",
        "due_date": new Date("2024-06-30"),
        "status": "In Progress",
        "category": "Leisure"
    },
    {
        "id": 5,
        "task": "Workout",
        "description": "30-minute cardio workout",
        "priority": "High",
        "due_date": new Date("2024-06-21"),
        "status": "Completed",
        "category": "Health & Wellness"
    },
    {
        "id": 6,
        "task": "Gardening",
        "description": "Weed and water the garden",
        "priority": "Medium",
        "due_date": new Date("2024-06-22"),
        "status": "Not Started",
        "category": "Home Maintenance"
    },
    {
        "id": 7,
        "task": "Cook dinner",
        "description": "Prepare a healthy meal",
        "priority": "Low",
        "due_date": new Date("2024-06-25"),
        "status": "Not Started",
        "category": "Home Maintenance"
    },
    {
        "id": 8,
        "task": "Plan weekend getaway",
        "description": "Research and book accommodation",
        "priority": "Medium",
        "due_date": new Date("2024-06-28"),
        "status": "Not Started",
        "category": "Leisure"
    },
    {
        "id": 9,
        "task": "Watch movie",
        "description": "Catch up on latest releases",
        "priority": "Low",
        "due_date": new Date("2024-06-27"),
        "status": "Not Started",
        "category": "Leisure"
    },
    {
        "id": 10,
        "task": "Call friend",
        "description": "Check in and chat with John",
        "priority": "Low",
        "due_date": new Date("2024-06-29"),
        "status": "Not Started",
        "category": "Leisure"
    },
    {
        "id": 11,
        "task": "Call friend",
        "description": "Check in and chat with John",
        "priority": "Low",
        "due_date": new Date("2024-06-29"),
        "status": "Not Started",
        "category": "Leisure"
    }
 ],

 workToDos:[
    {
        "id": 1,
        "task": "Finish project report",
        "description": "Complete the final report for the ABC project",
        "priority": "High",
        "due_date": new Date("2024-06-25"),
        "status": "In Progress",
        "category": "Project Management"
    },
    {
        "id": 2,
        "task": "Prepare presentation",
        "description": "Create slides for the upcoming conference",
        "priority": "High",
        "due_date": new Date("2024-06-27"),
        "status": "In Progress",
        "category": "Project Management"
    },
    {
        "id": 3,
        "task": "Team meeting",
        "description": "Weekly sync with the team",
        "priority": "Medium",
        "due_date": new Date("2024-06-24"),
        "status": "Completed",
        "category": "Project Management"
    },
    {
        "id": 4,
        "task": "Send emails",
        "description": "Respond to client emails",
        "priority": "High",
        "due_date": new Date("2024-06-21"),
        "status": "In Progress",
        "category": "Client Relations"
    },
    {
        "id": 5,
        "task": "Review code",
        "description": "Check and review latest code changes",
        "priority": "Medium",
        "due_date": new Date("2024-06-23"),
        "status": "Not Started",
        "category": "Project Management"
    },
    {
        "id": 6,
        "task": "Update project plan",
        "description": "Revise timeline and milestones",
        "priority": "High",
        "due_date": new Date("2024-06-28"),
        "status": "Not Started",
        "category": "Project Management"
    },
    {
        "id": 7,
        "task": "Client meeting",
        "description": "Discuss project updates with client",
        "priority": "High",
        "due_date": new Date("2024-06-26"),
        "status": "In Progress",
        "category": "Client Relations"
    },
    {
        "id": 8,
        "task": "Research new technologies",
        "description": "Explore options for upgrading our system",
        "priority": "Medium",
        "due_date": new Date("2024-06-29"),
        "status": "Not Started",
        "category": "Professional Development"
    },
    {
        "id": 9,
        "task": "Attend webinar",
        "description": "Learn about latest industry trends",
        "priority": "Low",
        "due_date": new Date("2024-06-22"),
        "status": "Completed",
        "category": "Professional Development"
    },
    {
        "id": 10,
        "task": "Organize files",
        "description": "Clean up and organize project documents",
        "priority": "Low",
        "due_date": new Date("2024-06-30"),
        "status": "Not Started",
        "category": "Project Management"
    }
],

}