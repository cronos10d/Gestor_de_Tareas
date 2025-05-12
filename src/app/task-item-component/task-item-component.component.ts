import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item-component.component.html',
  styleUrls: ['./task-item-component.component.css'],
  standalone: true,  
  imports: [CommonModule]  
  
})
export class TaskItemComponent {
  @Input() task: string = '';   
  @Input() completed: boolean = false;  
  @Output() taskCompleted = new EventEmitter<void>();

  onTaskCompleted() {
    this.taskCompleted.emit(); 
  }
}

