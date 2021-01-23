import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { SortTasks } from 'src/app/services/services/sort-tasks.service';


@Component({
  selector: 'app-sort-triggers',
  templateUrl: './sort-triggers.component.html',
  styleUrls: ['./sort-triggers.component.scss']
})
export class SortTriggersComponent implements OnInit {

  constructor(
    public taskSvc: TaskService, 
    public SortDateSevc: SortTasks,

  ) { }

  ngOnInit(): void {
  }

}
