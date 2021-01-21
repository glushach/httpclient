import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';

import { TaskItemComponent } from './components/task-item/task-item.component';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SortTriggersComponent } from './components/sort-triggers/sort-triggers.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { EditorComponent } from './components/editor/editor.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';

import { TaskService } from './services/task.service';
import { AlertService } from './services/services/alert.service';
import { CheckedService } from './services/services/checked.service';
import { EditorService } from './services/services/editor.service';
import { PriorityService } from './services/services/priority.service';
import { SortCheckedService } from './services/services/sort-checked.service';
import { SortDateService } from './services/services/sort-date.service';
import { SortPriorService } from './services/services/sort-prior.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TaskItemComponent,
    AlertComponent,
    ConfirmComponent,
    SortTriggersComponent,
    TaskAddComponent,
    EditorComponent,
    TaskContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TaskService, 
    AlertService, 
    CheckedService, 
    EditorService, 
    PriorityService, 
    SortCheckedService, 
    SortDateService, 
    SortPriorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
