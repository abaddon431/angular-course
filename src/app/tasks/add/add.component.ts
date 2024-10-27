import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() cancel = new EventEmitter<void>();

  protected onCancel(){
    this.cancel.emit();
  }
}
