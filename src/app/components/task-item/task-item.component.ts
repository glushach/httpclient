import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input('index') index: number; //он используется в task-container и передается в task-item на кнопку удалить
  @Input('data') data: any; //он используется в task-container и передается в task-item для вывода данных в браузер
  @Output() onClass:EventEmitter<any> = new EventEmitter<any>()

  constructor(public taskSvc:TaskService) {
    
  }
  ngOnInit(): void {
  }

}
