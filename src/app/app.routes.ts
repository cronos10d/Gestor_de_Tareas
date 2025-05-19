import { Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskItemComponent } from './task-item-component/task-item-component.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tareas', pathMatch: 'full' },
    { path: 'tareas', component: TaskListComponent },
    { path: 'tareas/:id', component: TaskDetailComponent },

    
    
];
