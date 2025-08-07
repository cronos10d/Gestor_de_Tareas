import { Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ImagenComponent } from './imagen-component/imagen-component.component';
import { SaludoComponent } from './saludo/saludo.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tareas', pathMatch: 'full' },
    { path: 'tareas', component: TaskListComponent },
    { path: 'tareas/:id', component: TaskDetailComponent },
    { path: 'imagenes', component: ImagenComponent},
    {path: 'saludo', component: SaludoComponent}
];


