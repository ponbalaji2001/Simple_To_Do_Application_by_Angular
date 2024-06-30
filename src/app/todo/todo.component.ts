import { Component} from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tableTitle:string='';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.tableTitle$.subscribe(title => {
      this.tableTitle = title;
    });
  }
}
