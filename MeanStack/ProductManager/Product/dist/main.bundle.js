webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/product-list/product-list.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'product-new', component: product_component_1.ProductComponent },
    { path: 'product-list', component: product_list_component_1.ProductListComponent },
    { path: 'product-list/edit/:id', component: edit_component_1.EditComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n    color: white\n}\n.navBar {\n    padding-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navBar\" style=\"background: gray!important\">\n  <div style=\"display: inline-block;\">\n    <h1>SH<i class=\"fas fa-eye fa-1x\"></i>P</h1>\n  </div>\n  <div class=\"navBar\" style=\"display: inline-block;\">\n    <a [routerLink]=\"['home']\" class=\"navBar-brand\">Home</a>\n    <a [routerLink]=\"['product-list']\" class=\"navBar-brand\">Product List</a>\n    <a [routerLink]=\"['product-new']\" class=\"navBar-brand\">Register Product</a>\n  </div>\n</nav>\n<div style=\"text-align: center\">\n    <h1>Welcome to the SH<i class=\"fas fa-eye fa-1x\"></i>P</h1>\n    <div>\n      <p>Fill your hearts desire by uploading your useless items so that other people can find uses for them</p>\n    </div>\n  </div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/product-list/product-list.component.ts");
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                product_list_component_1.ProductListComponent,
                product_component_1.ProductComponent,
                edit_component_1.EditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <form (submit)=\"edit()\">\n    <label for=\"product.title\">Product Title:</label>\n    <input type=\"text\" name=\"product.title\" [(ngModel)]=\"updatedProduct.title\" placeholder=\"{{ product.title }}\" minlength=\"4\" maxlength=\"18\" #title=\"ngModel\">\n    <label for=\"product.price\">Product Price:</label>\n    <input type=\"number\" name=\"product.price\" [(ngModel)]=\"updatedProduct.price\" placeholder=\"{{ product.price }}\">\n    <label for=\"product.imageUrl\">Product Image Url:</label>\n    <input type=\"text\" name=\"product.imageUrl\" [(ngModel)]=\"updatedProduct.imageUrl\" placeholder=\"{{ product.imageUrl }}\" minlength=\"1\" #imageUrl='ngModel'>\n    <input type=\"submit\" [disabled]=\"title.errors\" value=\"Submit\">\n    <button><a href=\"/product-list\">Cancel</a></button>\n  </form>\n  <button (click)=\"delete()\">Delete</button>\n  <div style=\"text-align: center\"  *ngIf=\"!title.valid \">\n      <h5 *ngIf=\"!(title.value < 4)\">first name must be atleast 4 characters</h5>\n  </div>\n  <div style=\"text-align: center\" *ngIf=\"price.value < 0\">\n    <h5>Price must have postive value</h5>\n  </div>\n  <div style=\"text-align: center\" *ngIf=\"imageUrl.errors\">\n    <h5>Image must have a link</h5>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _router, _http) {
        this._route = _route;
        this._router = _router;
        this._http = _http;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.updatedProduct = {
            title: "",
            price: 0,
            imageUrl: ""
        };
        this.getProduct();
    };
    EditComponent.prototype.getProduct = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log('here is the id', _this.id);
        });
        var observable = this._http.editProduct(this.id);
        observable.subscribe(function (data) {
            console.log('here is the data', data);
            _this.product = data['data'];
        });
    };
    EditComponent.prototype.edit = function () {
        var _this = this;
        console.log('we changed it', this.product);
        var observable = this._http.changeProduct(this.updatedProduct, this.id);
        observable.subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/product-list']);
        });
    };
    EditComponent.prototype.delete = function () {
        var _this = this;
        var observable = this._http.deleteProduct(this.id);
        observable.subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/product-list']);
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Product of the day</h1>\n  <h5>{{ item.title }}</h5>\n  <img src=\"{{ item.imageUrl }}\" alt=\"product\" width=\"300px\" height=\"300px\">\n  <h5>{{ item.price }}$ </h5>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http) {
        this._http = _http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.grabProducts();
    };
    HomeComponent.prototype.grabProducts = function () {
        var _this = this;
        var observable = this._http.getProduct();
        observable.subscribe(function (data) {
            console.log('data here', data);
            var cointainer = data['data'];
            var random = Math.floor(Math.random() * (cointainer.length - 0));
            _this.item = cointainer[random];
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.createProduct = function (product) {
        console.log("create product has been called", product);
        return this._http.post('/api/product/', product);
    };
    HttpService.prototype.getProduct = function () {
        console.log("pulled products");
        return this._http.get('/api/product');
    };
    HttpService.prototype.editProduct = function (id) {
        return this._http.get("/api/product/" + id);
    };
    HttpService.prototype.changeProduct = function (product, id) {
        return this._http.put("/api/product/" + id, product);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this._http.delete("/api/product/" + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ".products {\n    border: solid 2px black;\n    margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"products\" *ngFor=\"let item of product\" style=\"display: inline-block;\">\n    <h5>Product Title: {{ item.title }}</h5>\n    <img alt=\"product\" src=\"{{ item.imageUrl }}\" width=\"300px\" height=\"300px\">\n    <h5>Price: {{ item.price }}$</h5>\n    <button [routerLink]=\"['edit/' + item._id]\">Edit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_http) {
        this._http = _http;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.GetProduct();
    };
    ProductListComponent.prototype.GetProduct = function () {
        var _this = this;
        var observable = this._http.getProduct();
        observable.subscribe(function (data) {
            console.log('Got your product', data);
            _this.product = data['data'];
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h2>Add your product</h2>\n  <form (submit)=\"ProductCreation()\">\n    <label for=\"product.title\">Product Name:</label>\n    <input type=\"text\" name=\"product.title\" required [(ngModel)]=\"product.title\" minlength=\"4\" maxlength=\"18\" #title=\"ngModel\">\n    <label for=\"product.price\">Product Price:</label>\n    <input type=\"number\" name=\"product.price\" required [(ngModel)]=\"product.price\" #price='ngModel'>\n    <label for=\"product.imageUrl\">Product Image:</label>\n    <input type=\"text\" name=\"product.imageUrl\" required [(ngModel)]=\"product.imageUrl\" minlength=\"1\" #imageUrl='ngModel'>\n    <input type=\"submit\" [disabled]=\"title.errors\" value=\"Add Product\">\n  </form>\n  <div style=\"text-align: center\"  *ngIf=\"!title.valid \">\n      <h5 *ngIf=\"!(title.value < 4)\">first name must be atleast 4 characters</h5>\n  </div>\n  <div style=\"text-align: center\" *ngIf=\"price.value < 0\">\n    <h5>Price must have postive value</h5>\n  </div>\n  <div style=\"text-align: center\" *ngIf=\"imageUrl.errors\">\n    <h5>Image must have a link</h5>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(_http) {
        this._http = _http;
        this.check = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.product = {
            title: "",
            price: 0,
            imageUrl: ""
        };
    };
    ProductComponent.prototype.ProductCreation = function () {
        var _this = this;
        console.log(this.product);
        var observable = this._http.createProduct(this.product);
        observable.subscribe(function (data) {
            console.log("created data", data);
            _this.product = {
                title: "",
                price: 0,
                imageUrl: ""
            };
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map