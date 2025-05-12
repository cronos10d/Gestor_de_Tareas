import { Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskItemComponent } from './task-item-component/task-item-component.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent },
    {path: '', component: TaskItemComponent}
];
