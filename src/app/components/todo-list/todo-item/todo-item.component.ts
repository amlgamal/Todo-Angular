import { Component, inject, Input } from '@angular/core';
import { TodoData } from '../../../model/toDoInterface';
import { TodoServices } from '../../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  host: {
    class: '',
  },
})
export class TodoItemComponent {
  @Input() itemInfo!: TodoData;
  todoServices = inject(TodoServices)

  deleteTask(){
    this.todoServices.deleteItem(this.itemInfo.id)
  }
  toggleCheck(){
    this.todoServices.toggleCheck(this.itemInfo.id)
  }
}
