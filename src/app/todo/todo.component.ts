import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { ToDoState } from '../state/todo.state';
import { todoModel, typeModel, userModel } from '../state/todo.model';
import { getCategories, getToDoList, getTypes, getUser } from '../state/todo.selectors';
import { addType, setAuthToken } from '../state/todo.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: string = '';
  types$!: Observable<typeModel[]>; 
  typeLen: number = 0;
  type!: typeModel;
  categories: any[] = [];
  isShowModal: boolean = false;
  tabForm: FormGroup;
  userData!: userModel;

  toDoList$!: Observable<todoModel[]>;
  categories$!: Observable<any[]>;

  constructor(private fb: FormBuilder, private store: Store<ToDoState>, private router: Router) {
    this.tabForm = this.fb.group({
      tabName: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.store.select(getUser).subscribe(user => this.userData = user);
   
    this.types$ = this.store.select(getTypes).pipe(
      tap(types => {
        if (types.length && !this.type) {
          this.type = types[0];
          this.title = this.type.name;
          this.getCategories(this.type.id);
          this.getToDoList(this.type.id);
        }
      })
    );
  }

  onTabChange(type: any){
    this.type = type;
    this.title = this.type!.name;
    this.getCategories(type!.id);
    this.getToDoList(type!.id);
  }

  getCategories(typeId: string) {
    this.categories$ = this.store.select(getCategories, { type_id: typeId }).pipe(
      tap(categories => {
        this.categories = categories.map(c => ({ text: c.name, value: c.id }));
      })
    );
  }

  getToDoList(typeId: string) {
    this.toDoList$ = this.store.select(getToDoList, { type_id: typeId });
  }

  addTab(): void {
    if(this.tabForm.invalid) {
      this.tabForm.controls['tabName'].markAsDirty();
      this.tabForm.controls['tabName'].updateValueAndValidity();
      return;
    }

    this.store.dispatch(addType({ newType: this.tabForm.value.tabName || 'New Tab' }));
    this.isShowModal = false;
    this.tabForm.reset();
  }

  logout() {
    this.store.dispatch(setAuthToken({ token: '' }));
    this.router.navigate(['/login']);
  }

}
