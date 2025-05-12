import { Component } from '@angular/core';
import { TaskListComponent } from './tasklist/tasklist.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [TaskListComponent]
})


export class AppComponent {
  title = 'gestor-tareas';
}


