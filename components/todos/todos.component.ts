import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title:string = 'todos';
  todos: Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos =[
      {
        content:'first task',
        completed:false
      },
        {
      content: 'second task',
          completed: true
      }

      ]
  }

}
