import { createFeatureSelector, createSelector} from "@ngrx/store";
import { ToDoState } from "./todo.state";

const todoStateSelector = createFeatureSelector<ToDoState>('todo');

export const getToDoList = createSelector(
  todoStateSelector,
  (state: ToDoState, props: { type_id: string }) => {
    return state.ToDos.filter(todo => todo.type_id === props.type_id);
  }
);

export const getToDo = createSelector(
  todoStateSelector,
  (state: ToDoState, props: { id: number }) => {
    return state.ToDos.find(data => data.id === props.id);
  }
);

export const getTypes = createSelector(
  todoStateSelector,
  (state: ToDoState) => {
    return state.Types;
  }
);

export const getCategories = createSelector(
  todoStateSelector,
  (state: ToDoState, props: { type_id: string }) => {
    return state.Categories.filter(data => data.type_id === props.type_id);
  }
);

export const getPriority = createSelector(
  todoStateSelector,
  (state: ToDoState) => {
    return state.Priority;
  }
);

export const getStatus = createSelector(
  todoStateSelector,
  (state: ToDoState) => {
    return state.Status;
  }
);

