import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { todoModel } from 'src/app/state/todo.model';
import { ToDoState } from 'src/app/state/todo.state';
import { getToDoList } from 'src/app/state/todo.selectors';
import { deleteData, updateStatus } from 'src/app/state/todo.actions';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})

export class TodoTableComponent {
  tableTitle : string=""
  option : string=""
  todoId :number=-1;
  tempStatus: string = '';
  searchValue = '';
  pageSize = 10;
  visible = false;
  ToDoDisplayData:todoModel[]=[];
  total=0;
  editId: number = -1;
  dateSortOrder: string | null = null;
  dateSortDirections: string[] = ['ascend', 'descend', ''];
  isShowModal:boolean=false;
  categoryFilter:any[]=[];
  priorityFilter:any[]=[];
  statusFilter:any[]=[];

  ToDoList$ : Observable<any[]>;

  constructor(private store: Store<ToDoState>, private todoService: TodoService) {
    this.ToDoList$ = this.store.select(getToDoList, { categ: this.tableTitle });  
      this.ToDoList$.subscribe(data => {
        this.total=data.length;
        this.ToDoDisplayData = data;
    });
  }
  

  dateSortFn = (a: any, b: any) => {
    return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
  };

  
  ngOnInit(): void {
    this.todoService.tableTitle$.subscribe(title => {
      this.tableTitle = title;
      this.updateToDoList();
      this.updateDisplayData(1, this.pageSize);
    });

    this.todoService.personalCategoryFilter$.subscribe(categories => {
      this.categoryFilter = categories;
    });

    this.priorityFilter = this.todoService.getPriorityFilter();
    this.statusFilter = this.todoService.getStatusFilter();
  }

  updateToDoList() {
    this.ToDoList$ = this.store.select(getToDoList, { categ: this.tableTitle });
    this.ToDoList$.subscribe(data => {
      this.total=data.length;
      this.ToDoDisplayData = data;
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
    this.updateDisplayData(1, this.pageSize);
  }

  search(): void {
    this.visible = false;
    this.ToDoList$.subscribe(data => {
      this.ToDoDisplayData = data.filter((item: todoModel) => item.task.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
      this.total=this.ToDoDisplayData.length;
    });
  }

  handleCategoryFilterChange = (categories: string[]) => {
    this.ToDoList$.subscribe(data => {
      this.ToDoDisplayData = data.filter(item => categories.length === 0 || categories.includes(item.category));
      this.total = this.ToDoDisplayData.length;
    });
  };

  handlePriorityFilterChange = (priorities: string[]) => {
    this.ToDoList$.subscribe(data => {
      this.ToDoDisplayData = data.filter(item => priorities.length === 0 || priorities.includes(item.priority));
      this.total = this.ToDoDisplayData.length;
    });
  };

  handleStatusFilterChange = (statuses: string[]) => {
    this.ToDoList$.subscribe(data => {
      this.ToDoDisplayData = data.filter(item => statuses.length === 0 || statuses.includes(item.status));
      this.total = this.ToDoDisplayData.length;
    });
  };


  onPageIndexChange(pageIndex: number): void {
    this.updateDisplayData(pageIndex, this.pageSize);
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.updateDisplayData(1, pageSize); 
  }

  updateDisplayData(pageIndex: number = 1, pageSize: number = this.pageSize): void {
    const start = (pageIndex - 1) * pageSize;
    const end = start + pageSize;

    this.ToDoList$.subscribe(data => {
      this.ToDoDisplayData = data.slice(start, end);
    });
  }
 
  startSatusChange(id: number, currentStatus:string): void {
    this.editId = id;
    this.tempStatus = currentStatus;
  }

  stopSatusChange(status: string): void {
    if(this.editId>-1){
      this.store.dispatch(updateStatus({categ:this.tableTitle, id:this.editId, status })); // Dispatch Update Status Action
    }
    
    this.editId = -1;
  }
  
  deleteDataInStore(id: number): void{
    this.store.dispatch(deleteData({categ:this.tableTitle, id:id})); //Dispatch Delete Action
  }

  showModal(option:string,todoId:number):void{
    this.option=option;
    this.todoId=todoId;
    this.isShowModal=true;
  }

  handleShowModal(show:boolean): void {
    this.isShowModal = show;  
  }
}
