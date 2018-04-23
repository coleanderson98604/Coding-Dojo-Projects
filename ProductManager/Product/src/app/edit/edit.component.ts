import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  product;
  updatedProduct;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.updatedProduct = {
      title: "",
      price: 0,
      imageUrl: ""
    }
    this.getProduct()
  }
  getProduct(){
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('here is the id', this.id)
    })
    let observable = this._http.editProduct(this.id)
    observable.subscribe(data => {
      console.log('here is the data', data)
      this.product = data['data']
    })
  }
  edit(){
    console.log('we changed it', this.product)
    let observable = this._http.changeProduct(this.updatedProduct,this.id)
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/product-list'])
    })
  }
  delete(){
    let observable = this._http.deleteProduct(this.id)
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/product-list'])
    })
  }
}
