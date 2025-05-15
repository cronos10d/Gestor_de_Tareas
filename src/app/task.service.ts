import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  

@Injectable({
  providedIn: 'root'  
})
export class TaskService {
  
  private tasksSubject = new BehaviorSubject<any[]>([
    { task: 'Revisar correos electrónicos importantes', completed: false },
    { task: 'Planificar la semana', completed: false },
    { task: 'Reunión del miércoles a las 10:00 am', completed: false },
    { task: 'Revisar estado del proyecto', completed: false },
    { task: 'Realizar un seguimiento de plazos', completed: false }
  ]);

  constructor() {}

  // Obtener las tareas
  obtenerTarea() {
    return this.tasksSubject.asObservable();
  }

  // Agregar una tarea 
  añadirTarea(task: string) {
    const currentTasks = this.tasksSubject.value;
    const newTask = { task, completed: false };
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  // Eliminar una tarea
  eliminarTarea(index: number) {
    const currentTasks = this.tasksSubject.value;
    currentTasks.splice(index, 1);
    this.tasksSubject.next([...currentTasks]);
  }

  // Cambiar el estado de completado de una tarea
  toggleCompletion(index: number) {
    const currentTasks = this.tasksSubject.value;
    currentTasks[index].completed = !currentTasks[index].completed;
    this.tasksSubject.next([...currentTasks]);
  }

  
  editarTarea(index: number, updatedTask: string) {
    const currentTasks = this.tasksSubject.value;
    currentTasks[index].task = updatedTask;  
    this.tasksSubject.next([...currentTasks]);  
  }

}
