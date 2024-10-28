import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddComponent } from "./add/add.component";
import { type AddTask } from './add/add.model';
import { TaskComponent } from "./task/task.component";
import { TaskService } from './tasks.services';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<boolean>;
  protected isAddingTask = false;
  constructor(private tasksService: TaskService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  protected onCompleteTask(id: string){
    this.tasksService.removeTask(id)
  }

  protected addNewTask() {
    this.isAddingTask = true;
  }

  protected onCancelAddTask() {
    this.isAddingTask = false;
  }

  protected onSubmit(newTask: AddTask){
    this.tasksService.addTask(newTask, this.userId);
    this.isAddingTask = false;
  }
}
