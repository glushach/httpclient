import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})


export class TaskContainerComponent implements OnInit {

  todos: Todo[] = []

  constructor(private taskSvc: TaskService) { }

  ngOnInit(): void {
    this.taskSvc.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe( todos => {
        console.log('Response',  todos);
        this.todos =  todos;
    });
  }

}
