import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL:string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}?_limit=10`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(`${this.API_URL}/${todo.id}`, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.API_URL}/${todo.id}`, httpOptions);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.API_URL}`, todo, httpOptions);
  }
}
