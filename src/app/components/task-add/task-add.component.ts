import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  model: any = '';
  constructor(private taskSvc: TaskService) { }

  ngOnInit(): void {
  }

  add(){
    if(!this.model.length || this.model.length > 200){
      // this.alertSvc.alertShow = true;
      return window.alert('Min 1, Max 200 characters!');
    }
    if(this.model.trim()) {
      // Обрезание слишком длинных слов в предложении
      let charArr = this.model.split(' ');
      const arr:any = [];
      charArr.forEach((item:any) => {
      item = `${item.substring(0, 15)}`;
      arr.push(item);
      });
      this.model = arr.join(' ');

      this.taskSvc.add(this.model); //отобразится в на 20 строке файла task.service.ts
      this.model = '';
    }
  }

}
