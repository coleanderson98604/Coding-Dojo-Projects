import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mean';
  tasks;
  clicked = false;
  newTask: any;
  edit = false;
  EditTask: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    this.newTask = {
      title: "",
      description: ""
    }
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!",data)
      this.tasks = data['data'];
    });
  }
  EditButtonClick(str: String, id: number){ 
    if(str == 'edit'){
      let EditObservable = this._httpService.editTask(id);
      EditObservable.subscribe(data => {
        console.log("Updated Task",data)
        this.EditTask = data['data']
      });
      this.edit = true;
    }
    if(str == 'delete'){
      console.log("made it to delete", id);
      let DeleteObservable = this._httpService.deleteTask(id);
      DeleteObservable.subscribe(data => {
        console.log("it's been deleted",data)
        this.getTasksFromService();
      })
    }
  }
  EditOnSubmit(id: number){
    let UpdateObservable = this._httpService.updateTask(id,this.EditTask)
    UpdateObservable.subscribe(data => {
      console.log("task has been updated", data);
    });
    this.getTasksFromService()
    this.edit = false;
  }
  onSubmit(){
    let TaskObservable = this._httpService.addTask(this.newTask);
    TaskObservable.subscribe(data => {
      console.log("Task succesffuly added", data)
    })
    this.newTask = {
      title: "",
      description: ""
    }
    this.getTasksFromService()
  }
}