import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoModel, typeModel } from 'src/app/state/todo.model';
import { ToDoState } from 'src/app/state/todo.state';
import { deleteData, updateStatus } from 'src/app/state/todo.actions';
import { getCategories, getPriority, getStatus } from 'src/app/state/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit, OnChanges{

  @Input() title: string = '';
  @Input() type: typeModel | null = null;
  @Input() toDoList$!: Observable<todoModel[]>;

  filteredToDoList: todoModel[] = [];
  displayToDoList: todoModel[] = [];
  categories: any[] = [];
  selectedCategories: string[] = [];
  selectedPriorities: string[] = [];
  selectedStatuses: string[] = [];
  searchValue = '';
  showSearch = false;
  showDateFilter = false;
  pageSize = 10;
  total = 0;
  editId = -1;
  tempStatus = '';
  isShowModal = false;
  option = '';
  todoId = -1;
  priority: any[] = [];
  status: any[] = [];
  date: any;
  dateSortOrder: string | null = null;
  currentPage: number = 1;

  constructor(private store: Store<ToDoState>) {}

  ngOnInit(): void {
    this.store.select(getPriority).subscribe(items => {
      this.priority = items;
    });

    this.store.select(getStatus).subscribe(items => {
      this.status = items;
    });

    this.getCategories(this.type!.id);
    this.applyFilters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toDoList$']) {
      this.toDoList$.subscribe(list => {
        this.filteredToDoList = [...list]; 
        this.total = list.length;
        this.applyFilters();
      });
    }
  }

  onDateSortChange(order: any): void {
    this.dateSortOrder = order;
    this.applyFilters();
  }

  resetSearch(): void {
    this.searchValue = '';
    this.applyFilters();
    this.showSearch = false;
  }

  resetDateFilter(): void {
    this.date = null;
    this.applyFilters();
    this.showDateFilter = false;
  }

  handleCategoryFilterChange(categories: string[]): void {
    this.selectedCategories = categories;
    this.applyFilters();
  }

  handlePriorityFilterChange(priorities: string[]): void {
    this.selectedPriorities = priorities;
    this.applyFilters();
  }

  handleStatusFilterChange(statuses: string[]): void {
    this.selectedStatuses = statuses;
    this.applyFilters();
  }

  isSameDate(todoDate: string | Date, selectedDate: Date): boolean {
    const d1 = new Date(todoDate);
    const d2 = new Date(selectedDate);

    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

 applyFilters(): void {
    this.toDoList$.subscribe(list => {
      this.filteredToDoList = list.filter(todo => {
        const categoryMatch = this.selectedCategories.length === 0 || this.selectedCategories.includes(todo.categ_id);
        const priorityMatch = this.selectedPriorities.length === 0 || this.selectedPriorities.includes(todo.priority);
        const statusMatch = this.selectedStatuses.length === 0 || this.selectedStatuses.includes(todo.status);
        const searchMatch = todo.task.toLowerCase().includes(this.searchValue.toLowerCase());
        const dateMatch = !this.date || this.isSameDate(todo.due_date, this.date);
        return categoryMatch && priorityMatch && statusMatch && searchMatch && dateMatch;
      });

      if (this.dateSortOrder) {
        this.filteredToDoList = this.filteredToDoList.sort((a, b) => {
          const d1 = new Date(a.due_date).getTime();
          const d2 = new Date(b.due_date).getTime();
          return this.dateSortOrder === 'ascend' ? d1 - d2 : d2 - d1;
        });
      }

      this.total = this.filteredToDoList.length;
      const maxPage = Math.ceil(this.total / this.pageSize);
      if (this.currentPage > maxPage) {
        this.currentPage = maxPage || 1; 
      }

      this.updateDisplayData(this.currentPage, this.pageSize);
    });
  }

  onPageIndexChange(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.updateDisplayData(pageIndex, this.pageSize);
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.updateDisplayData(1, pageSize);
  }

  updateDisplayData(pageIndex: number, pageSize: number): void {
    const start = (pageIndex - 1) * pageSize;
    const end = start + pageSize;
    this.displayToDoList = this.filteredToDoList.slice(start, end);
  }

  startSatusChange(id: number, currentStatus: string): void {
    this.editId = id;
    this.tempStatus = currentStatus;
  }

  stopSatusChange(status: string): void {
    if (this.editId > -1) {
      this.store.dispatch(updateStatus({ id: this.editId, status }));
    }
    this.editId = -1;
  }

  deleteDataInStore(id: number): void {
    this.store.dispatch(deleteData({ id }));
  }

  showModal(option: string, todoId: number): void {
    this.option = option;
    this.todoId = todoId;
    this.isShowModal = true;
  }

  handleShowModal(show: boolean): void {
    this.isShowModal = show;
  }

  getCategories(typeId: string){
    this.store.select(getCategories, { type_id: typeId })
    .subscribe(categories => {
      this.categories = categories.map(categ => ({
        text: categ.name,
        value: categ.id
      }));
    });
  }
}
