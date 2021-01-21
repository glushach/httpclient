import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeTodo = false;
  appPage = localStorage.getItem('isEntrance');

  isHidden(active:any) {
    this.appPage = active;
  }
}
