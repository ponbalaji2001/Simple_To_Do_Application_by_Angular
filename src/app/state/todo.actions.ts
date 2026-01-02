import { createAction, props } from "@ngrx/store";
import { categModel, todoModel } from "./todo.model";

export const addData = createAction('addData', props<{todoData:todoModel}>());
export const updateData = createAction('updateData', props<{todoData:todoModel}>());
export const deleteData = createAction('deleteData', props<{id:number}>());
export const updateStatus = createAction('updateStatus', props<{id:number, status:string}>());
export const addCateg = createAction('addCateg', props<{categ:categModel}>());
export const setAuthToken = createAction('setAuthToken', props<{token:string}>());
export const addType = createAction('addType', props<{ newType:string}>());
