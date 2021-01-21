import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private subj: BehaviorSubject<any> = new BehaviorSubject([]);

  public items: any[] = [];

  constructor(public http: HttpClient) { }
  // поток
  get todos() {
    return this.subj.asObservable();
  }

  add(task: string) {
    this.items.unshift({
      date: Date.now(),
      prior: 1,
      text: task,
      done: false
  });
    this.subj.next(this.items); //передача в task.contatner
  }
}
