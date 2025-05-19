import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item-component/task-item-component.component'; 
import { TaskService } from '../task.service';  
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  standalone: true,
  imports: [TaskItemComponent, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],

})
export class TaskListComponent {
  tasks = [
    { task: 'Revisar correos electrónicos importantes', completed: false },
    { task: 'Planificar la semana', completed: false },
    { task: 'Reunión del miércoles a las 10:00 am', completed: false },
    { task: 'Revisar estado del proyecto', completed: false },
    { task: 'Realizar un seguimiento de plazos', completed: false }
  ];
  newTask: string = ''; 
  editIndex: number | null = null;  
  taskToEdit: string = '';  
  taskForm: FormGroup;


  //Validators que hay: minlenght y required
  constructor(private taskService: TaskService) {
    this.taskForm = new FormGroup({
      newTask: new FormControl('', [Validators.required, Validators.minLength(5)])  
  });
  }

  ngOnInit() {

  this.taskService.obtenerTarea().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  onTaskCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed; 
  }

  // Método para eliminar una tarea
  onDeleteTask(index: number) {
    this.taskService.eliminarTarea(index); 
  }

  addNewTask() {
    if(this.taskForm.valid){
      const task = this.taskForm.get('newTask')?.value; 
      this.taskService.añadirTarea(task);  
      this.taskForm.reset();  
    }
    
  }

  // Método para iniciar la edición de una tarea
  onEditStart(index: number, task: string) {
    this.editIndex = index;  
    this.taskToEdit = task; 
  }

  // Método para guardar los cambios de la tarea
  onEditTask(index: number) {
    this.taskService.editarTarea(index, this.taskToEdit);  
    this.editIndex = null;  
    this.taskToEdit = '';  
  }
}
