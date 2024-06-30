import { createAction, props } from "@ngrx/store";
import { todoModel } from "./todo.model";

export const addData = createAction('addData', props<{categ: string; todoData:todoModel}>());
export const updateData = createAction('updateData', props<{categ: string; todoData:todoModel}>());
export const deleteData = createAction('deleteData', props<{categ: string; id:number}>());
export const updateStatus = createAction('updateStatus', props<{categ: string; id:number, status:string}>());
