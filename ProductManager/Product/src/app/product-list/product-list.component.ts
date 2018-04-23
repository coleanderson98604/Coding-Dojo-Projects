import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.GetProduct()
  }
  GetProduct(){
    let observable = this._http.getProduct();
    observable.subscribe(data => {
      console.log('Got your product', data);
      this.product = data['data'];
    })
  }
}
