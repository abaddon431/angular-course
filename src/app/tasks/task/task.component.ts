import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Input({required: true}) id!: string;
  private tasksService = inject(TaskService)

  protected onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }
}
