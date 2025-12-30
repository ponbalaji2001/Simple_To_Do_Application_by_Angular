import { initialState } from "./todo.state";
import { createReducer, on } from "@ngrx/store";
import { addData, updateData, deleteData, updateStatus, addCateg } from "./todo.actions";

export const _todoReducer = createReducer(
    initialState,

    on(addData, (state, action) => {
        let data = { ...action.todoData };
        data.id = state.ToDos.length + 1;
        return {
            ...state,
            ToDos: [...state.ToDos, data]
        };
    }),

    on(updateData, (state,action)=>{
        const updatedToDoData = state.ToDos.map((data)=>{
            return action.todoData.id === data.id ? action.todoData : data;
        })

        return {
            ...state,
            ToDos: updatedToDoData 
        }
    }),

    on(deleteData,(state, action)=>{    
        const updatedToDoData = state.ToDos.filter((data)=>{
            return data.id !== action.id;
        })
        return{
            ...state,
            ToDos: updatedToDoData 
        };       
    }),

    on(updateStatus, (state,action)=>{

        const updatedToDoData = state.ToDos.map((data)=>{
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
            ToDos: updatedToDoData 
        }
    }),

    on(addCateg, (state, action) => {
        let data = { 
            ...action.categ,
            id: 'C' + (state.Categories.length + 1).toString() 
        };
        
        return {
            ...state,
            Categories: [...state.Categories, data]
        };
    }),

)

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}