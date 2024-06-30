import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDoState } from 'src/app/state/todo.state';
import { addData, updateData } from 'src/app/state/todo.actions';
import { TodoService } from 'src/app/service/todo.service';
import { getToDo } from 'src/app/state/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent {
  @Input() isShowModal:boolean=false;
  @Input() option:string='';
  @Input() todoId: number = -1;
  @Output() showModalChange = new EventEmitter<boolean>();
  tableTitle:string = '';
  todoForm: FormGroup;
  ToDo$ !: Observable<any>;
  categoryFilter:any[]=[];
  priorityFilter:any[]=[];
  statusFilter:any[]=[];

  
  constructor(private fb: FormBuilder, private store: Store<ToDoState>, private todoService: TodoService) {
   
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
    this.todoService.tableTitle$.subscribe(title => {
      this.tableTitle = title;

      if(this.tableTitle==='personal'){
        this.todoService.personalCategoryFilter$.subscribe(categories => {
          this.categoryFilter = categories;
        });
      }else if(this.tableTitle==='work'){
        this.todoService.workCategoryFilter$.subscribe(categories => {
          this.categoryFilter = categories;
        });
      }

      this.updateForm();
    });

    this.priorityFilter = this.todoService.getPriorityFilter();
    this.statusFilter = this.todoService.getStatusFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isShowModal'] && this.option === 'update') {
      this.updateForm();
    }
  }

  updateForm() {
    if (this.option === 'update' && this.todoId > -1) {

      // Get ToDo Data by Category & ID
      this.ToDo$ = this.store.select(getToDo, { categ: this.tableTitle, id: this.todoId }); 

      this.ToDo$.subscribe(data => {
        if (data) {
          this.todoForm.patchValue(data);  // Load ToDo Data into Form
        }
      });
    }
  }
 

  handleOk(): void {

    if(this.todoForm.valid) {
      const formValue = this.todoForm.value;
     
      if(this.option==='add'){
        this.store.dispatch(addData({categ:this.tableTitle, todoData:formValue })); // Dispatch Add Action
      }else if(this.option==='update'){
        formValue.id=this.todoId;
        this.store.dispatch(updateData({categ:this.tableTitle, todoData:formValue })); // Dispatch Update Action
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

  addCategory(input: HTMLInputElement): void {
    const categ = input.value;
    if(this.tableTitle==='personal'){
      this.todoService.addPersonalCategoryFilter({ text:categ, value:categ });
    }else if(this.tableTitle==='work'){
      this.todoService.addWorkCategoryFilter({ text:categ, value:categ });
    }
    
  }


}
