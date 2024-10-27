import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string{
    return `assets/users/${this.user.avatar}`;
  }

  protected onSelectUser(): void{
    this.select.emit(this.user.id);
  }
}
