import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getPets()
    setInterval(() => this.sort(), 100)
  }
  getPets(){
    let observable = this._http.getPet()
    observable.subscribe(data => {
      console.log("list of pets yo",data);
      this.pets = data['data'];
      console.log(this.pets)
    })
  }
  sort(){
    for(var i = 0; i < this.pets.length - 1; i++){
      if(this.pets[i].type.toLowerCase() > this.pets[i+1].type.toLowerCase()){
        let temp = this.pets[i + 1];
        this.pets[i+1] = this.pets[i];
        this.pets[i] = temp;
        i = 0
      }
    }
    console.log("finished sorting")
  }
}
