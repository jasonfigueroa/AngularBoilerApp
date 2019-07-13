import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoApiService } from '../services/todo-api.service';

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.css']
})
export class TodoItemsListComponent implements OnInit {

  todoItems: TodoItem[] = [];

  constructor(private todoItemService: TodoApiService) { }

  ngOnInit() {
    this.getTodoItems();
  }

  getTodoItems() {
    this.todoItemService.getTodoItems().subscribe(data => this.todoItems = data);
  }

}
