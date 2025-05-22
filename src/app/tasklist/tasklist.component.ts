import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskItemComponent } from '../task-item-component/task-item-component.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TaskItemComponent]
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  taskForm!: FormGroup;
  editIndex: number | null = null;
  taskToEdit: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.cargarTareasDesdeApi();
    this.taskService.tasks$.subscribe(t => this.tasks = t);

    this.taskForm = new FormGroup({
      newTask: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  addNewTask() {
    const task = this.taskForm.value.newTask;
    this.taskService.añadirTarea(task);
    this.taskForm.reset();
  }

  onTaskCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  onEditStart(index: number, task: string) {
    this.editIndex = index;
    this.taskToEdit = task;
  }

  onEditTask(index: number) {
    this.taskService.editarTarea(index, this.taskToEdit);
    this.editIndex = null;
    this.taskToEdit = '';
  }

  onDeleteTask(index: number) {
    this.taskService.eliminarTarea(index);
  }
}
