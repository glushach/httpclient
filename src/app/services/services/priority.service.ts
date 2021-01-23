import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(public task: TaskService) { }

  increase(id: number) {
    this.task.completeTodo(id).subscribe(todo => {
      if(this.task.items.find(t => t.id === todo.id).prior < 10) {
        this.task.items.find(t => t.id === todo.id).prior++;
      }
      
    });
  }

  decrease(id: number) {
    this.task.completeTodo(id).subscribe(todo => {
      if(this.task.items.find(t => t.id === todo.id).prior > 1) {
        this.task.items.find(t => t.id === todo.id).prior--;
      }
    });
  }
}
