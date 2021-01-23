import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class SortTasks {

  constructor(public task: TaskService) { }
  // Сортировка по дате на фронтенде
  onDateNew() {
    this.task.items.sort((a:any, b:any)=> b.date - a.date)
  }

  onDateOld() {
    this.task.items.sort((a:any, b:any)=> a.date - b.date)
  }

  // Сортировка по приоритету на фронтенде
  onPriorTop() {
    this.task.items.sort((a, b)=> b.prior - a.prior)
  }

  onPriorBottom() {
    this.task.items.sort((a, b)=> a.prior - b.prior)
  }

  // Сортировка по выполненности на фронтенде
  onChecked() {
    this.task.items.sort((a:any, b:any)=> a.done - b.done)
  }
}
