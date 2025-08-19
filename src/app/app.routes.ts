import { Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ImagenComponent } from './imagen-component/imagen-component.component';


export const routes: Routes = [
    { path: '', redirectTo: 'imagenes', pathMatch: 'full' },
    { path: 'tareas', component: TaskListComponent },
    { path: 'tareas/:id', component: TaskDetailComponent },
    { path: 'imagenes', component: ImagenComponent},
    {
  path: 'saludo',
  loadComponent: () => import('./saludo/saludo.component').then(m => m.SaludoComponent)
}

];


