import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  date: number,
  prior: number,
  text: string,
  done: boolean,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  search = ''; //для поисковой строки

  activeConfirm: boolean = false; //регулирует появление confirm
  idOfComfirm: number;

  private subj: BehaviorSubject<any> = new BehaviorSubject([]);

  public items: Todo[] = [];

  constructor(public http: HttpClient) { }
  // поток
  get todos() {
    return this.subj.asObservable();
  }

  add(task: string) {
    const newTodo = {
      date: Date.now(),
      prior: 1,
      text: task,
      done: false,
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
    .subscribe(todo => {
      let firstObjectWithBiggestId;
      let biggestId;
      if(this.items.length > 0) {
        firstObjectWithBiggestId =  this.items.sort((a, b) => b.id - a.id);
        biggestId = firstObjectWithBiggestId[0].id; //получение найбольшего id
        todo.id = biggestId + 1; //кастомное id
        this.items.unshift(todo)
      } else {
        todo.id = 1; //кастомное id
        this.items.unshift(todo)
      }
      console.log('Todo', todo);
      this.subj.next(this.items) //передача в стрим
    });
  }



   // Обработка ответа YES из confirm
  removeTodo(id: number) {
    this.activeConfirm = false;
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`) //удалить с сервера
    .subscribe( () => {
      this.items = this.items.filter(t=> t.id !== id); //удалить со страницы
      this.subj.next(this.items); //передача в стрим
    })
  }

  // Для вызова модального окна confirm
  onConfirm(id: number) {
    this.activeConfirm = true;
    this.idOfComfirm = id; //получение индекса задачи
    // console.log(this.idOfComfirm); 
  }
  // Oбработки ответа NO
  onNo() {
    this.activeConfirm = false;
  }


  // Реализация метода по редактированию текста задачи, выполненнности задачи, приоритета задачи
  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      prior: true,
      text: true,
      done: true
    });
  }

}
