import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  createProduct(product){
    console.log("create product has been called", product);
    return this._http.post('/api/product/', product);
  }
  getProduct(){
    console.log("pulled products");
    return this._http.get('/api/product')
  }
  editProduct(id){
    return this._http.get(`/api/product/${id}`)
  }
  changeProduct(product,id){
    return this._http.put(`/api/product/${id}`, product)
  }
  deleteProduct(id){
    return this._http.delete(`/api/product/${id}`)
  }
}
