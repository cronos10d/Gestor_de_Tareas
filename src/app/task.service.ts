import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  private tasksSubject = new BehaviorSubject<any[]>([]);
  tasks$: Observable<any[]> = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 1. Cargar tareas desde API externa
  cargarTareasDesdeApi(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al cargar tareas desde API', error);
        return throwError(() => error);
      })
    ).subscribe(tareas => {
      const adaptadas = tareas.slice(0, 4).map(t => ({
        task: t.title,
        completed: t.completed
      }));
      this.tasksSubject.next(adaptadas);
    });
  }

  // 2. Agregar tarea
  añadirTarea(task: string): void {
    const currentTasks = this.tasksSubject.value;
    const newTask = { task, completed: false };
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  // 3. Editar tarea
  editarTarea(index: number, updatedTask: string): void {
    const currentTasks = [...this.tasksSubject.value];
    currentTasks[index].task = updatedTask;
    this.tasksSubject.next(currentTasks);
  }

  // 4. Eliminar tarea
  eliminarTarea(index: number): void {
    const currentTasks = [...this.tasksSubject.value];
    currentTasks.splice(index, 1);
    this.tasksSubject.next(currentTasks);
  }

  // 5. Toggle completado
  toggleCompletion(index: number): void {
    const currentTasks = [...this.tasksSubject.value];
    currentTasks[index].completed = !currentTasks[index].completed;
    this.tasksSubject.next(currentTasks);
  }
}
