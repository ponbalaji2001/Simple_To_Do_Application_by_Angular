import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDoState } from 'src/app/state/todo.state';
import { addCateg, addData, updateData } from 'src/app/state/todo.actions';
import { getCategories, getToDo } from 'src/app/state/todo.selectors';
import { Observable } from 'rxjs';
import { getPriority, getStatus } from 'src/app/state/todo.selectors';
import { typeModel } from 'src/app/state/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent {
  @Input() isShowModal:boolean=false;
  @Input() option:string='';
  @Input() todoId: number = -1;
  @Input() type: typeModel | null = null;
  @Output() showModalChange = new EventEmitter<boolean>();
  tableTitle:string = '';
  todoForm: FormGroup;
  ToDo$ !: Observable<any>;
  priorityFilter:any[]=[];
  statusFilter:any[]=[];
  categories: any[] = [];

  
  constructor(private fb: FormBuilder, private store: Store<ToDoState>) {
   
    this.todoForm = this.fb.group({
      task: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      due_date: [null, Validators.required],
      priority: [null, Validators.required],
      status: [null, Validators.required]
    });

  }

  ngOnInit() {

    this.store.select(getPriority).subscribe(items => {
      this.priorityFilter = items;
    });
    
    this.store.select(getStatus).subscribe(items => {
      this.statusFilter = items;
    });

    this.getCategories(this.type!.id);

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isShowModal'] && this.option === 'update') {
      this.updateForm();
    }
  }

  updateForm() {
    if (this.option === 'update' && this.todoId > -1) {

      this.ToDo$ = this.store.select(getToDo, { id: this.todoId }); 

      this.ToDo$.subscribe(data => {
        if (data) {
          this.todoForm.patchValue(data); 
        }
      });
    }
  }
 

  handleOk(): void {

    if(this.todoForm.valid && this.type) {

      const data = {
        ...this.todoForm.value,
        type: this.type.name,
        type_id: this.type.id
      };
     
      if(this.option==='add'){
        this.store.dispatch(addData({ todoData:data })); 
      }else if(this.option==='update'){
        data.id=this.todoId;
        this.store.dispatch(updateData({ todoData:data })); 
      }

      this.todoForm.reset();
      this.showModalChange.emit(false);
    } else {
      Object.values(this.todoForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }

  }

  handleCancel(): void {
    this.todoForm.reset();
    this.showModalChange.emit(false);
  }

  showError(controlName: string): void {
    const control = this.todoForm.get(controlName);
    if (control && control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity();
    }
  }

  getCategories(typeId: string){
    this.store.select(getCategories, { type_id: typeId })
    .subscribe(categories => {
      this.categories = categories.map(categ => ({
        text: categ.name,
        value: categ.name
      }));
    });
  }

  addCategory(input: HTMLInputElement): void {
    const categ = {
      id: "C" + (this.categories.length + 1),
      name: input.value,
      type: this.type!.name,
      type_id: this.type!.id
    }

    this.store.dispatch(addCateg({categ}));
    this.getCategories(this.type!.id);
  }


}
