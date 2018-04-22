import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
  }

  getTasks(){
    return this._http.get('/tasks');
  }
  addTask(newTask){
    return this._http.post('/task', newTask)
  }
  editTask(id){
    return this._http.get(`/task/${id}`)
  }
  updateTask(id,editTask){
    return this._http.put(`/task/${id}`,editTask)
  }
  deleteTask(id){
    return this._http.delete(`/task/${id}`)
  }
}