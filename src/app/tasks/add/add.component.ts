import { Component, EventEmitter, Output,Input,  inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from './add.model';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService)

  protected onCancel(){
    this.close.emit();
  }

  protected onSubmit(){
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
      },
      this.userId
    )
    this.close.emit();
  }
}
