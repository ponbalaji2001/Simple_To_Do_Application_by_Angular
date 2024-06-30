import { initialState } from "./todo.state";
import { createReducer, on } from "@ngrx/store";
import { addData, updateData, deleteData, updateStatus } from "./todo.actions";
export const _todoReducer = createReducer(
    initialState,

    on(addData, (state, action) => {
        let data = { ...action.todoData };
        if (action.categ === "personal") {
            data.id = state.personalToDos.length + 1;
            return {
                ...state,
                personalToDos: [...state.personalToDos, data]
            };
        } else if (action.categ === "work") {
            data.id = state.workToDos.length + 1;
            return {
                ...state,
                workToDos: [...state.workToDos, data]
            };
        }
        return state; 
    }),

    on(updateData, (state,action)=>{
        if (action.categ === "personal") {
            const updatedPersonalData = state.personalToDos.map((data)=>{
                return action.todoData.id === data.id ? action.todoData : data;
            })
            return {
                ...state,
                personalToDos: updatedPersonalData
            }
        } else if (action.categ === "work") {
            const updatedWorkData = state.workToDos.map((data)=>{
                return action.todoData.id === data.id ? action.todoData : data;
            })
            return {
                ...state,
                workToDos: updatedWorkData
            }
        }
        return state; 
    }),

    on(deleteData,(state, action)=>{    
        if (action.categ === "personal") {
            const updatedPersonalData = state.personalToDos.filter((data)=>{
                return data.id !== action.id;
            })
            return{
                ...state,
                personalToDos: updatedPersonalData
            };       
        } else if (action.categ === "work") {
            const updatedWorkData = state.workToDos.filter((data)=>{
                return data.id !== action.id;
            })
            return{
                ...state,
                workToDos: updatedWorkData
            };
        }
        return state; 
    }),

    on(updateStatus, (state,action)=>{
        if (action.categ === "personal") {

            const updatedPersonalData = state.personalToDos.map((data)=>{
                if (action.id === data.id) {
                    return {
                      ...data,
                      status: action.status
                    };
                }
                return data;
            })

            return {
                ...state,
                personalToDos: updatedPersonalData
            }

        } else if (action.categ === "work") {

            const updatedWorkData = state.workToDos.map((data)=>{
                if (action.id === data.id) {
                    return {
                      ...data,
                      status: action.status
                    };
                }
                return data;
            })
            
            return {
                ...state,
                workToDos: updatedWorkData
            }
        }
        return state; 
    }),


    
)

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
  }