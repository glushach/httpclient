import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {


  activeEditor: boolean = false; //регулирует появление editor
  answearEditor: boolean = false //регулирует ответ пользователя
  idOfEditor: number;


  // Данные из textarea
  model: any = ''; //входные даннные

  constructor(public task: TaskService) { }

  // Обработка ответа Save. Редактирование задачи
  onSave(id: number) {
    this.activeEditor = false;
    this.task.completeTodo(id).subscribe(todo => {
      if(this.model.trim()) {
        // Обрезание слишком длинных слов в предложении
        let charArr = this.model.split(' ');
        const arr:any = [];
        charArr.forEach((item:any) => {
        item = `${item.substring(0, 15)}`;
        arr.push(item);
        });
        this.model = arr.join(' '); //отвалидированные входные данные
      }
      this.task.items.find(t => t.id === todo.id).text = this.model; //данные обновляются на сервере через метод PUT
    });
  }


  onEditor(id: number, index: number) {
    this.activeEditor = true;
      this.idOfEditor = id; //получение индекса задачи
      // console.log(this.idOfEditor);
      this.model = this.task.items[index].text //Вывод в textarea текущего текста задачи c фронтенда
  }

  onCancel() {
    this.activeEditor = false;
  }
}
