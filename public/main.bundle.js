webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link \n    *ngFor='let link of navLinks'\n    [routerLink]='link.path'\n    routerLinkActive #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\"\n  >\n    {{ link.title }}\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.navLinks = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (isLoggedIn) {
            if (!isLoggedIn)
                _this.navLinks = [
                    { title: 'Register', path: '/signup' },
                    { title: 'Log in', path: '/signin' }
                ];
            else
                _this.navLinks = [
                    { title: 'Todo', path: '/notes' },
                    { title: 'Log out', path: '/logout' }
                ];
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_notes_service__ = __webpack_require__("../../../../../src/app/services/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_10__notes_notes_component__["a" /* NotesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatChipsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__services_notes_service__["a" /* NotesService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");




var routes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_0__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'notes', component: __WEBPACK_IMPORTED_MODULE_2__notes_notes_component__["a" /* NotesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]] },
    { path: '', pathMatch: 'full', redirectTo: '/signin' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"add-item-block\">\n  <mat-card-title>ADD TODO</mat-card-title>\n  <mat-card-content>\n    <mat-form-field>\n      <input matInput type='text' placeholder='Some text..' \n        [(ngModel)]='newItem.noteText'\n      >\n    </mat-form-field>\n    <mat-form-field *ngIf='isAdmin'>\n      <input matInput type='text' placeholder='Secure annotation..' \n        [(ngModel)]='newItem.secretAnnotation'\n      >\n    </mat-form-field>\n    <button mat-raised-button (click)='onCreate()'>CREATE</button>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class='todo-list'>\n  <mat-card-title>TODO LIST</mat-card-title>\n  <mat-card-content>\n    <mat-card class='margin-top-10' *ngFor='let item of notesList'>\n      <mat-card-content class='todo-item'>\n        <span class='text'>Note text: {{ item.noteText }}</span>\n        <span  *ngIf='isAdmin' class='text'>Secret: {{ item.secretAnnotation }}</span>\n        <span class='text'>Owner: {{ item.ownerId }}</span>\n        <button mat-raised-button class='update' color='warn' (click)='onUpdate(item._id)'>Update item</button>\n      </mat-card-content>\n    </mat-card>  \n  </mat-card-content>\n</mat-card> \n"

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notes_service__ = __webpack_require__("../../../../../src/app/services/notes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesComponent = (function () {
    //private changedItem = {} as Note;
    function NotesComponent(notes, auth) {
        this.notes = notes;
        this.auth = auth;
        this.isAdmin = false;
        this.notesList = [];
        this.newItem = {};
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (data) {
            console.log(data.isAdmin);
            _this.isAdmin = data.isAdmin;
        });
        this.notes.getList().subscribe(function (data) {
            _this.notesList = data;
        });
    };
    NotesComponent.prototype.onCreate = function () {
        var _this = this;
        if (this.newItem)
            this.notes.addItem(this.newItem).subscribe(function (data) {
                _this.notesList = data;
            });
    };
    NotesComponent.prototype.onUpdate = function (id) {
        var _this = this;
        this.notes.updateItem(id, this.newItem).subscribe(function (data) {
            _this.notesList = data;
        });
    };
    return NotesComponent;
}());
NotesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notes',
        template: __webpack_require__("../../../../../src/app/notes/notes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notes/notes.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_notes_service__["a" /* NotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notes_service__["a" /* NotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NotesComponent);

var _a, _b;
//# sourceMappingURL=notes.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_share__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = 'http://localhost:5678/api/users';
        this.emitter = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this._authState = false;
    }
    Object.defineProperty(AuthService.prototype, "authState", {
        get: function () {
            return this.emitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.emitAuthState = function (change) {
        this.emitter.next(change);
    };
    AuthService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.isLoggedIn()
            .do(function (allowed) {
            console.log(allowed);
            _this.emitAuthState(allowed);
            if (!allowed)
                _this.router.navigate(['/signin']);
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', localStorage.getItem('Authorization'));
        return this.http.get(this.baseUrl + "/auth-state", { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) { return data.isLoggedIn; })
            .share();
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', localStorage.getItem('Authorization'));
        return this.http.get(this.baseUrl + "/me", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.register = function (credentials) {
        return this.http.post(this.baseUrl + "/signup", credentials)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginWithEmailAndPassword = function (credentials) {
        return this.http.post(this.baseUrl + "/signin", credentials)
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesService = (function () {
    function NotesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5678/api/notes';
    }
    NotesService.prototype.attachToken = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = localStorage.getItem('Authorization');
        headers.append('Authorization', token);
        return headers;
    };
    NotesService.prototype.addItem = function (note) {
        var headers = this.attachToken();
        return this.http.post("" + this.baseUrl, note, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.getList = function () {
        var headers = this.attachToken();
        return this.http.get("" + this.baseUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.updateItem = function (id, data) {
        var headers = this.attachToken();
        return this.http.put(this.baseUrl + "/" + id, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return NotesService;
}());
NotesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NotesService);

var _a;
//# sourceMappingURL=notes.service.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class='form-block'>\n  <mat-card-title>LOG IN</mat-card-title>\n  <mat-card-content>\n    <mat-form-field>\n      <input matInput type='email' placeholder='Email..'\n        [(ngModel)]='credentials.email'\n      >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type='password' placeholder='Password..'\n        [(ngModel)]='credentials.password'\n      >\n    </mat-form-field>\n    <button mat-raised-button color='primary'\n      (click)='onLoginWithEmailAndPassword()'\n    >\n      LOG IN\n    </button>\n    \n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = (function () {
    function SignInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {};
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn().subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                _this.auth.emitAuthState(true);
                _this.router.navigate(['/notes']);
            }
            else
                _this.auth.emitAuthState(false);
        });
    };
    SignInComponent.prototype.onLoginWithEmailAndPassword = function () {
        var _this = this;
        this.auth.loginWithEmailAndPassword(this.credentials).subscribe(function (data) {
            localStorage.setItem('Authorization', data.token);
            _this.router.navigate(['/notes']);
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-in/sign-in.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class='form-block'>\n  <mat-card-title>REGISTER</mat-card-title>\n  <mat-card-content>\n    <mat-form-field>\n      <input matInput type='text' placeholder='Username..' color='accent'\n        [(ngModel)]='credentials.username'\n      >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type='email' placeholder='Email..' color='accent'\n      [(ngModel)]='credentials.email'\n      >\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type='password' placeholder='Password..' color='accent'\n      [(ngModel)]='credentials.password'\n      >\n    </mat-form-field>\n    <button mat-raised-button color='accent'\n      (click)='onRegister()'\n    >\n      REGISTER\n    </button>\n    \n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {};
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn().subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                _this.auth.emitAuthState(true);
                _this.router.navigate(['/notes']);
            }
            else
                _this.auth.emitAuthState(false);
        });
    };
    SignUpComponent.prototype.onRegister = function () {
        var _this = this;
        this.auth.register(this.credentials)
            .subscribe(function (data) {
            localStorage.setItem('Authorization', data.token);
            _this.router.navigate(['/notes']);
        });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map