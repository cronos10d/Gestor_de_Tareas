import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagenComponent } from './imagen-component/imagen-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [ RouterModule, ImagenComponent]
})


export class AppComponent {
  title = 'gestor-tareas';
}



