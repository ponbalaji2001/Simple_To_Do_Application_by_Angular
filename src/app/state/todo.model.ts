export interface todoModel{
    id: number;
    task: string;
    description: string;
    type: string;
    type_id: string;
    priority: string;
    due_date: string;
    status: string;
    category: string;
    categ_id: string;
}
export interface categModel{
    id?: string;
    name: string;
    type: string;
    type_id: string;
}
export interface typeModel{
    id: string;
    name: string;
}