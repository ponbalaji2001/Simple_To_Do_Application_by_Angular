import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { getCategories, getToDoList, getUser } from '../state/todo.selectors';
import { getTypes } from '../state/todo.selectors';
import { ToDoState } from '../state/todo.state';
import { todoModel, typeModel, userModel } from '../state/todo.model';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { setAuthToken } from '../state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: string = '';
  types : typeModel[] = [];
  type!: typeModel;
  categories: any[] = [];
  userData!: userModel;

  toDoList$!: Observable<todoModel[]>;
  categories$!: Observable<any[]>
  
  constructor(private store: Store<ToDoState>, private router: Router) {}

  ngOnInit() {
    this.getTypes();
    this.title = this.type!.name;

    this.store.select(getUser).subscribe(user => {
      this.userData = user;
    });
    
    this.getCategories(this.type!.id);
    this.getToDoList(this.type!.id);
  }

  onTabChange(type: any){
    this.type = type;
    this.title = this.type!.name;
    this.getCategories(type!.id);
    this.getToDoList(type!.id);
  }

  getTypes(){
    this.store.select(getTypes).subscribe(types => {
      this.types = types;
      this.type = this.types[0];
    });
  }

  getCategories(typeId: string){
    this.categories$ = this.store.select(getCategories, { type_id: typeId }).pipe(
      tap(categories => {
        this.categories = categories.map(c => ({ text: c.name, value: c.id }));
      })
    );
  }

  getToDoList(typeId: string){
    this.toDoList$ = this.store.select(getToDoList, { type_id: typeId });
  }

  logout(){
    this.store.dispatch(setAuthToken({ token: '' }));
    this.router.navigate(['/login']);
  }
}
