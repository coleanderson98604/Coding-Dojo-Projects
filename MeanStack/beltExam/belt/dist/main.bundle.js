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
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent }
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

module.exports = "*{\n    background: gray\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav>\n  <div style=\"text-align:center\">\n    <i style=\"display: inline-block\" class=\"fas fa-paw fa-5x\"></i> \n    <h1>Pet Adoption Central</h1>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_component_1.NewComponent,
                edit_component_1.EditComponent,
                details_component_1.DetailsComponent
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

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Details about {{ pet.name }}</h1>\n  <h2>Pet type: {{ pet.type }}</h2>\n  <h2>Description: {{ pet.description }}</h2>\n  <h2 style=\"text-decoration: underline\">Skills</h2>\n    <h4>{{ pet.skillOne }}</h4>\n    <h4>{{ pet.skillTwo }}</h4>\n    <h4>{{ pet.skillThree }}</h4>\n  <h2><i class=\"fas fa-heart\"></i> {{ pet.likes }}</h2>\n  <button (click)=\"Like()\" [disabled]=\"disabled\"><i class=\"fas fa-heart\"></i> this Pet</button>\n  <button (click)=\"Adopt()\"><i class=\"fas fa-heart\"></i> adopt</button>\n  <button (click)=\"goHome()\">Home</button>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.disabled = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.pet = {
            name: "",
            type: "",
            description: "",
            skillOne: "",
            skillTwo: "",
            skillThree: ""
        };
        this.grabPet();
    };
    DetailsComponent.prototype.grabPet = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
        });
        var observable = this._http.showPet(this.id);
        observable.subscribe(function (data) {
            console.log("here's the one pet", data);
            _this.pet = data['data'];
            if (!_this.pet.likes) {
                _this.pet.likes = 0;
            }
        });
    };
    DetailsComponent.prototype.Like = function () {
        this.pet.likes += 1;
        var observable = this._http.likePet(this.id, this.pet);
        observable.subscribe(function (data) {
            console.log("made it back from patch", data);
        });
        this.disabled = true;
    };
    DetailsComponent.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    DetailsComponent.prototype.Adopt = function () {
        var _this = this;
        var observable = this._http.adoptPet(this.id);
        observable.subscribe(function (data) {
            console.log('you adopted', data);
            _this.goHome();
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-size: 30px;\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Edit this... pet?</h1>\n  <form (submit)=\"editPet()\">\n      <div class=\"form-group\">\n        <label for=\"pet.name\">Pet Name:</label>\n        <input type=\"text\" name=\"pet.name\" required minlength=\"3\" [(ngModel)]=\"pet.name\" #name=\"ngModel\">\n        <label for=\"pet.type\">Pet species:</label>\n        <input type=\"text\" name=\"pet.type\" required minlength=\"3\" [(ngModel)]=\"pet.type\" #type=\"ngModel\">\n        <label for=\"pet.description\">Description</label>\n        <input type=\"text\" name=\"pet.description\" required minlength=\"3\" [(ngModel)]=\"pet.description\" #description=\"ngModel\">\n      </div>\n      <h4>Skills:</h4>\n      <div class=\"form-group\">\n        <label for=\"pet.skillOne\">Skill 1:</label>\n        <input type=\"text\" name=\"pet.skillOne\" [(ngModel)]=\"pet.skillOne\">\n        <label for=\"pet.skillTwo\">Skill 2:</label>\n        <input type=\"text\" name=\"pet.skillTwo\" [(ngModel)]=\"pet.skillTwo\">\n        <label for=\"pet.skillThree\">Skill 3:</label>\n        <input type=\"text\" name=\"pet.skillThree\" [(ngModel)]=\"pet.skillThree\">\n      </div>\n      <input type=\"submit\" [disabled]=\"name.errors || type.errors || description.errors\" value=\"Edit Pet\">\n      <button (click)=\"goHome()\">Cancel</button>\n    </form>\n    <h5  *ngIf=\"!name.valid\"> Pet must have a name longer than 3 chars</h5>\n    <h5 *ngIf=\"!type.valid\"> Pet must be something right? perhapse a dog?</h5>\n    <h5 *ngIf=\"!description.valid\"> Describe your pet, say something good atleast</h5>\n    <h5 *ngIf=\"duplicate\">Name already exists, time to change it lol</h5>\n</div>\n"

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
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.duplicate = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.grabPet();
    };
    EditComponent.prototype.grabPet = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
        });
        var observable = this._http.showPet(this.id);
        observable.subscribe(function (data) {
            console.log("here's the one pet", data);
            _this.pet = data['data'];
        });
    };
    EditComponent.prototype.editPet = function () {
        var _this = this;
        var UniqueObservable = this._http.getPet();
        UniqueObservable.subscribe(function (data) {
            console.log('pet data', data);
            for (var i = 0; i < data['data'].length; i++) {
                if (_this.pet.name == data['data'][i].name) {
                    _this.duplicate = true;
                    return;
                }
                else {
                    _this.duplicate = false;
                }
            }
        });
        var observable = this._http.likePet(this.id, this.pet);
        observable.subscribe(function (data) {
            console.log("changed the pet", data);
            _this.goHome();
        });
    };
    EditComponent.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "td {\n    padding: 10px;\n    font-size: 40px\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Current pets looking for a forever home</h1>\n  <h3><a [routerLink]=\"['new']\">Have a pet you'd like to adopt?</a></h3>\n  <div>\n  <table style=\"text-align: center; margin: 0 auto\">\n    <tr>\n      <td>Name</td>\n      <td>Type <i (click)=\"sort()\" class=\"fas fa-sort-up fas-2x\"></i></td>\n      <td>Actions</td>\n    </tr>\n    <tr *ngFor=\"let pet of pets\">\n      <td>{{ pet.name }}</td>\n      <td>{{ pet.type }}</td>\n      <td><button [routerLink]=\"['edit/' + pet._id ]\">edit</button><span> </span><button [routerLink]=\"['details/' + pet._id]\">Details</button></td>\n    </tr>\n  </table>\n  </div>\n</div>"

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
        var _this = this;
        this.getPets();
        setInterval(function () { return _this.sort(); }, 100);
    };
    HomeComponent.prototype.getPets = function () {
        var _this = this;
        var observable = this._http.getPet();
        observable.subscribe(function (data) {
            console.log("list of pets yo", data);
            _this.pets = data['data'];
            console.log(_this.pets);
        });
    };
    HomeComponent.prototype.sort = function () {
        for (var i = 0; i < this.pets.length - 1; i++) {
            if (this.pets[i].type.toLowerCase() > this.pets[i + 1].type.toLowerCase()) {
                var temp = this.pets[i + 1];
                this.pets[i + 1] = this.pets[i];
                this.pets[i] = temp;
                i = 0;
            }
        }
        console.log("finished sorting");
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
    HttpService.prototype.newPet = function (pet) {
        console.log("hit pet creation service", pet);
        return this._http.post('/api/newPet/', pet);
    };
    HttpService.prototype.getPet = function () {
        console.log("hit get pet");
        return this._http.get('/api/getPet/');
    };
    HttpService.prototype.showPet = function (id) {
        console.log("hit pet show route");
        return this._http.get("/api/getPet/" + id);
    };
    HttpService.prototype.likePet = function (id, like) {
        console.log("liked the pet");
        return this._http.put("/api/likePet/" + id, like);
    };
    HttpService.prototype.adoptPet = function (id) {
        console.log("adopting pet");
        return this._http.delete("/api/adoptPet/" + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-size: 30px;\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Register your pet that you don't want <i class=\"far fa-frown\"></i></h1>\n  <form (submit)=\"newPet()\">\n    <div class=\"form-group\">\n      <label for=\"pet.name\">Pet Name:</label>\n      <input type=\"text\" name=\"pet.name\" required minlength=\"3\" [(ngModel)]=\"pet.name\" #name=\"ngModel\">\n      <label for=\"pet.type\">Pet species:</label>\n      <input type=\"text\" name=\"pet.type\" required minlength=\"3\" [(ngModel)]=\"pet.type\" #type=\"ngModel\">\n      <label for=\"pet.description\">Description</label>\n      <input type=\"text\" name=\"pet.description\" required minlength=\"3\" [(ngModel)]=\"pet.description\" #description=\"ngModel\">\n    </div>\n    <h4>Skills:</h4>\n    <div class=\"form-group\">\n      <label for=\"pet.skillOne\">Skill 1:</label>\n      <input type=\"text\" name=\"pet.skillOne\" [(ngModel)]=\"pet.skillOne\">\n      <label for=\"pet.skillTwo\">Skill 2:</label>\n      <input type=\"text\" name=\"pet.skillTwo\" [(ngModel)]=\"pet.skillTwo\">\n      <label for=\"pet.skillThree\">Skill 3:</label>\n      <input type=\"text\" name=\"pet.skillThree\" [(ngModel)]=\"pet.skillThree\">\n    </div>\n    <input type=\"submit\" [disabled]=\"name.errors || type.errors || description.errors\" value=\"Add Pet\">\n    <button (click)=\"goHome()\">Cancel</button>\n  </form>\n  <h5  *ngIf=\"!name.valid\"> Pet must have a name longer than 3 chars</h5>\n  <h5 *ngIf=\"!type.valid\"> Pet must be something right? perhapse a dog?</h5>\n  <h5 *ngIf=\"!description.valid\"> Describe your pet, say something good atleast</h5>\n  <h5 *ngIf=\"duplicate\">Name already exists, time to change it lol</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.duplicate = false;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.pet = {
            name: "",
            type: "",
            description: "",
            skillOne: "",
            skillTwo: "",
            skillThree: ""
        };
    };
    NewComponent.prototype.newPet = function () {
        var _this = this;
        var UniqueObservable = this._http.getPet();
        UniqueObservable.subscribe(function (data) {
            console.log('pet data', data);
            for (var i = 0; i < data['data'].length; i++) {
                if (_this.pet.name == data['data'][i].name) {
                    _this.duplicate = true;
                    return;
                }
                else {
                    _this.duplicate = false;
                }
            }
        });
        var observable = this._http.newPet(this.pet);
        observable.subscribe(function (data) {
            console.log("newPet ran success", data);
            _this.goHome();
        });
    };
    NewComponent.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute,
            router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


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