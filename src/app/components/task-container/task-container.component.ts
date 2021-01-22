import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})


export class TaskContainerComponent implements OnInit {

  items: Observable<any>;

  
  constructor(public taskSvc: TaskService) { }

  ngOnInit() {
    this.items = this.taskSvc.todos;
  }

}
