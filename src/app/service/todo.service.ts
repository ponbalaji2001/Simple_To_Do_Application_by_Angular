import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tableTitleSubject = new BehaviorSubject<string>('work');
  tableTitle$ = this.tableTitleSubject.asObservable();

  private personalCategoryFilterSubject = new BehaviorSubject<{ text: string, value: string }[]>([
    { text: 'Home Maintenance', value: 'Home Maintenance' },
    { text: 'Health & Wellness', value: 'Health & Wellness' },
    { text: 'Leisure', value: 'Leisure' }
  ]);
  personalCategoryFilter$ = this.personalCategoryFilterSubject.asObservable();

  private workCategoryFilterSubject = new BehaviorSubject<{ text: string, value: string }[]>([
    { text: 'Project Management', value: 'Project Management' },
    { text: 'Client Relations', value: 'Client Relations' },
    { text: 'Professional Development', value: 'Professional Development' }
  ]);
  workCategoryFilter$ = this.workCategoryFilterSubject.asObservable();

  private priorityFilter= [
    { text: 'High', value: 'High' },
    { text: 'Medium', value: 'Medium' },
    { text: 'Low', value: 'Low' }
  ]

  private statusFilter= [
    { text: 'Not Started', value: 'Not Started' },
    { text: 'In Progress', value: 'In Progress' },
    { text: 'Completed', value: 'Completed' }
  ]

  constructor() {}

  setTableTitle(title: string) {
    this.tableTitleSubject.next(title);
  }

  getCategoryFilter() {
    return this.personalCategoryFilter$;
  }

  getPriorityFilter() {
    return this.priorityFilter;
  }

  getStatusFilter() {
    return this.statusFilter;
  }

  addPersonalCategoryFilter(category: { text: string, value: string }) {
    const currentFilters = this.personalCategoryFilterSubject.getValue();
    this.personalCategoryFilterSubject.next([...currentFilters, category]);
  }

  addWorkCategoryFilter(category: { text: string, value: string }) {
    const currentFilters = this.workCategoryFilterSubject.getValue();
    this.workCategoryFilterSubject.next([...currentFilters, category]);
  }

}
