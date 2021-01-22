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

  onEditor(id: number) {
    this.activeEditor = true;
    this.idOfEditor = id; //получение индекса задачи
    console.log(this.idOfEditor);
    // this.model = this.task.items[index].text //Вывод в textarea текущего текста задачи
  }

  onCancel() {
    this.activeEditor = false;
  }





  //  // Обработка ответа Save. Редактирование задачи
  // onSave(index: any) {
  //   this.activeEditor = false;
  //   if(this.model.trim()) {
  //     // Обрезание слишком длинных слов в предложении
  //     let charArr = this.model.split(' ');
  //     const arr = [];
  //     charArr.forEach((item) => {
  //     item = `${item.substring(0, 15)}`;
  //     arr.push(item);
  //     });
  //     this.model = arr.join(' '); //отвалидированные входные данные
  //   }
  //   this.task.items[index].text = this.model; //получение ключа text объекта [index]
  // }

}
