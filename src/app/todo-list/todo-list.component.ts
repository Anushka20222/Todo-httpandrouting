import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public tododetails:any = []
  constructor(private infotodo2:TodoService) { }

  ngOnInit(): void {
    this.tododetails = this.infotodo2.getTodo()
  }

}
