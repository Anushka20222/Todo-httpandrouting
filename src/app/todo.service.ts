import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public tododetails = [
    {"Description":"Submit SL Lab assignment", "due_date":"13 Nov 2021", "created":"9 Nov 2021"},
    {"Description":"Haircut", "due_date":"15 Nov 2021", "created":"9 Nov 2021"},
    {"Description":"Book plane tickets", "due_date":"16 Nov 2021", "created":"9 Nov 2021"},
    {"Description":"Go out for stationary shopping", "due_date":"14 Nov 2021", "created":"9 Nov 2021"},
    {"Description":"Book train tickets", "due_date":"14 Dec 2021", "created":"9 Nov 2021"},
  ]

  getTodo(){
    return this.tododetails
  }
  constructor() { }
}
