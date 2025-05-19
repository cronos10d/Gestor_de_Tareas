import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
  standalone: true
})
export class TaskDetailComponent {
  task: any;
  index: number=0;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.obtenerTarea().subscribe(tasks => {
      this.task = tasks[this.index];
    });
  }
}


