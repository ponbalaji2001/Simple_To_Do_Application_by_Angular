import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from '../common/todo-form/todo-form.component';
import { TodoTableComponent } from '../common/todo-table/todo-table.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { TodoRoutingModule } from './todo-routing.module';
@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoTableComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    NzModalModule,
    NzFormModule,
    NzDatePickerModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzTagModule,
    NzToolTipModule,
    NzDividerModule,
    NzInputModule,
    NzSelectModule,
    NzTabsModule
  ],
  exports:[
    TodoComponent,
    CapitalizePipe
  ]
})
export class ToDoModule { }
