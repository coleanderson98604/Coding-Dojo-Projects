import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product;
  check = false;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.product = {
      title: "",
      price: 0,
      imageUrl: ""
    }
  }
  ProductCreation(){
    console.log(this.product)
    let observable = this._http.createProduct(this.product)
    observable.subscribe(data => {
      console.log("created data",data);
      this.product = {
        title: "",
        price: 0,
        imageUrl: ""
      }
    })
  }
}
