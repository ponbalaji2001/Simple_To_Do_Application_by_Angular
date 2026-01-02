import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo.reducer';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(en);
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
    ],
    bootstrap: [AppComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ todo: todoReducer }),
]
})
export class AppModule { }
