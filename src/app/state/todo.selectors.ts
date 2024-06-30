import { createFeatureSelector, createSelector} from "@ngrx/store";
import { ToDoState } from "./todo.state";

const todoStateSelector = createFeatureSelector<ToDoState>('todo');

export const getToDoList = createSelector(
    todoStateSelector, 

    (state: ToDoState, props: { categ: string })=>{
        if(props.categ==="personal"){
            return state.personalToDos
        }else if(props.categ==="work"){
            return state.workToDos
        }

        return [];
    }
)

export const getToDo = createSelector(
    todoStateSelector,
    (state: ToDoState, props: { categ: string, id: number }) => {
      if (props.categ === "personal") {
        return state.personalToDos.find(data => data.id === props.id);
      } else if (props.categ === "work") {
        return state.workToDos.find(data => data.id === props.id);
      }
      return null;
    }
);