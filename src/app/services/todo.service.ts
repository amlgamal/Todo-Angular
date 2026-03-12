import { computed, inject, Injectable, signal } from '@angular/core';
import { TodoData } from '../model/toDoInterface';
import { HttpClient } from '@angular/common/http';
import { delay, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServices {
  // private _todoService: TodoData[] = [
  //   {
  //     title: 'Task 1',
  //     description: 'Description of Task 1',
  //     date: new Date(),
  //     check: false,
  //   },
  //   {
  //     title: 'Task 2',
  //     description: 'Description of Task 2',
  //     date: new Date(),
  //     check: false,
  //   },
  //   {
  //     title: 'Task 3',
  //     description: 'Description of Task 3',
  //     date: new Date(),
  //     check: true,
  //   },
  // ];
  // get todoService() {
  //   return this._todoService;
  // }

  http = inject(HttpClient);
  // private _todoList: TodoData[] = [];
  private _todoList = signal<TodoData[]>([]);
  todoList = this._todoList;
  searchTerm = signal('');

  addNewItem(title: string, description: string) {
    const id = (Math.random() * new Date().getTime()).toString();
    const newItem: TodoData = {
      id,
      title,
      description,
      date: new Date(),
      check: false,
    };
    // this._todoList.push(newItem);
    this.http.post('http://localhost:3000/todoList', newItem).subscribe({
      complete: () => {
        this.getTodoList(true); //
      },
    });
  }

  getTodoList(isNewItemAdded = false) {
    if (this._todoList().length && !isNewItemAdded) return; // not working to make webite does't load unnesscary

    this.http.get<TodoData[]>('http://localhost:3000/todoList').subscribe({
      next: (data) => {
        this._todoList.set(data);
      },
    });
  }
  // Delete task
  deleteItem(id: string) {
    // optemistic Update
    const tempArray = [...this._todoList()]; // save old state
    const todolist = this._todoList().filter((item) => item.id !== id); // error done ✔
    // this._todoList() = todolist;
    this._todoList.set(todolist);

    this.http
      .delete(`http://localhost:3000/todoList/${id}`)
      .pipe(delay(3000))
      .subscribe({
        // done ✔
        error: () => {
          // this._todoList = tempArray
          this._todoList.set(tempArray);
        },
      });
  }

  toggleCheck(id: string) {
    const tempcheck = [...this._todoList()];
    // update ui first
    const updateList = this._todoList().map(
      (item) => (item.id === id ? { ...item, check: !item.check } : item), // done
    );
    this._todoList.set(updateList);

    this.http
      .patch(`http://localhost:3000/todoList/${id}`, {
        check: updateList.find((item) => item.id === id)?.check,
      })
      .pipe(delay(3000))
      .subscribe({
        error: () => {
          this._todoList.set(tempcheck);
        },
      });
  }
  filterdTodos = computed(() => {
    const term = this.searchTerm().toLowerCase();

    return this._todoList().filter((todo) => todo.title.toLowerCase().includes(term));
  });

  // get todoList() {
  //   return this._todoList();
  // }
}
