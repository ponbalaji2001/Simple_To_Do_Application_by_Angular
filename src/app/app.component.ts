import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableTitle:string = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.tableTitle$.subscribe(title => {
      this.tableTitle = title;
    });
  }

  tableTitleChange(title:string){
    this.todoService.setTableTitle(title);
  }

}
