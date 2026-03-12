import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { TodoData } from '../../model/toDoInterface';
import { TodoServices } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todoService = inject(TodoServices);

  ngOnInit(): void {
    this.todoService.getTodoList();
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.todoService.searchTerm.set(value);
  }

  // get todoDataInfo() {
  //   return thi
  // s._todoDataInfo.todoService;
  // }

  // log () {
  //   console.log(this.todoDataInfo.todoService);

  // }
}
