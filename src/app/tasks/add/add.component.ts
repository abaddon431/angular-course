import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from './add.model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<AddTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  protected onCancel(){
    this.cancel.emit();
  }

  protected onSubmit(){
    this.submit.emit(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
      }
    );
  }
}
