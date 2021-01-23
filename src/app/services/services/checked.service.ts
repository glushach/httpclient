import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class CheckedService {

  constructor(public task: TaskService) { }

  onChecked(id: number) {
    this.task.completeTodo(id).subscribe(todo => {
      if(!this.task.items.find(t => t.id === todo.id).done) {
        this.task.items.find(t => t.id === todo.id).done = true;
      } else if(this.task.items.find(t => t.id === todo.id).done) {
        this.task.items.find(t => t.id === todo.id).done = false;
      }
    });
  }
} 
