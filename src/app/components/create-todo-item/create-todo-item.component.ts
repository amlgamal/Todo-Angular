import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoServices } from '../../services/todo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-todo-item.component.html',
  styleUrl: './create-todo-item.component.css',
})
export class CreateTodoItemComponent {
  router = inject(Router)
  todoService = inject(TodoServices)
  
  createForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.createForm.valid) {
      const {title, description} = this.createForm.value;
      this.todoService.addNewItem(title!, description!)

      // Navigate to list
      this.router.navigate(['/todo-list'])
    } else {
      this.createForm.markAllAsTouched();
      
    }
  }
}
