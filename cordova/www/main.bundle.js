webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_dialog_contact_dialog_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_dialog_map_dialog_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.contactDialog = function (contact) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */]);
        dialogRef.componentInstance.contact = contact;
        return dialogRef.afterClosed();
    };
    DialogService.prototype.mapDialog = function (contact) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__map_dialog_map_dialog_component__["a" /* MapDialogComponent */]);
        dialogRef.componentInstance.contact = contact;
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserApiService = (function () {
    function UserApiService(http) {
        this.http = http;
        this.url = 'http://localhost:54731/api/login';
    }
    UserApiService.prototype.findUsers = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    UserApiService.prototype.findUserByUsername = function (Username) {
        return this.http.get(this.url + '/' + Username).map(function (response) { return response.json(); });
    };
    return UserApiService;
}());
UserApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserApiService);

var _a;
//# sourceMappingURL=user-api.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_api_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(httpService) {
        this.httpService = httpService;
    }
    UserService.prototype.findUsers = function () {
        return this.httpService.findUsers();
    };
    UserService.prototype.findUser = function (Username) {
        return this.httpService.findUserByUsername(Username);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_api_service__["a" /* UserApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_api_service__["a" /* UserApiService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 131;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(162);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](event.urlAfterRedirects, '/') || __WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](event.urlAfterRedirects, '/login')) {
                    _this.toolbarActive = false;
                    return;
                }
                _this.toolbarActive = true;
            }
        });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(225),
        styles: [__webpack_require__(217)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contacts_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_list_contact_list_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_list_item_contact_list_item_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_dialog_contact_dialog_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_map_dialog_map_dialog_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_login_login_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_services_contact_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_services_dialog_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_services_contact_storage_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_services_user_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_services_user_api_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_pipes_contact_address_pipe__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__user_login_login_component__["a" /* LoginComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_9__contact_contacts_component__["a" /* ContactsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_list_item_contact_list_item_component__["a" /* ContactListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contact_map_dialog_map_dialog_component__["a" /* MapDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_21__contact_pipes_contact_address_pipe__["a" /* ContactAddressPipe */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdToolbarModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__contact_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */], __WEBPACK_IMPORTED_MODULE_13__contact_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_15__contact_services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_16__contact_services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_17__contact_services_contact_storage_service__["a" /* ContactStorageService */], __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_service__["a" /* ContactApiService */], __WEBPACK_IMPORTED_MODULE_19__user_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20__user_services_user_api_service__["a" /* UserApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListItemComponent = (function () {
    function ContactListItemComponent() {
    }
    ContactListItemComponent.prototype.editContact = function () {
        this.edit.emit(this.contact);
    };
    ContactListItemComponent.prototype.deleteContact = function () {
        this.remove.emit(this.contact);
    };
    ContactListItemComponent.prototype.showMapLocation = function () {
        this.map.emit(this.contact);
    };
    ContactListItemComponent.prototype.ngOnInit = function () {
    };
    return ContactListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactListItemComponent.prototype, "contact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], ContactListItemComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], ContactListItemComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _d || Object)
], ContactListItemComponent.prototype, "map", void 0);
ContactListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contact-list-item',
        template: __webpack_require__(227),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [])
], ContactListItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list-item.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = (function () {
    function ContactListComponent() {
        this.editContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.removeContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.showMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    return ContactListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Array)
], ContactListComponent.prototype, "contacts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], ContactListComponent.prototype, "editContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], ContactListComponent.prototype, "removeContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], ContactListComponent.prototype, "showMap", void 0);
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__(228),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = (function () {
    function ContactsComponent(contactService, dialog) {
        this.contactService = contactService;
        this.dialog = dialog;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.updateContacts();
    };
    ContactsComponent.prototype.updateContacts = function () {
        //this.contacts = this.contactService.findContacts();
        var _this = this;
        this.contactService.findContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactsComponent.prototype.pressAddContact = function () {
        var _this = this;
        var buttonPressed = this.dialog.contactDialog();
        buttonPressed.subscribe(function (result) {
            if (result) {
                _this.contactService.addNewContact(result).subscribe(function (allDone) {
                    if (allDone) {
                        _this.updateContacts();
                    }
                });
            }
        });
    };
    ContactsComponent.prototype.editContact = function (contact) {
        var _this = this;
        var buttonPressed = this.dialog.contactDialog(contact);
        buttonPressed.subscribe(function (result) {
            if (result) {
                _this.contactService.newEdit(result).subscribe(function (allDone) {
                    if (allDone) {
                        _this.updateContacts();
                    }
                });
            }
        });
    };
    ContactsComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.contactService.newDelete(contact.id).subscribe(function (allDone) {
            if (allDone) {
                _this.updateContacts();
            }
        });
    };
    ContactsComponent.prototype.showOnMap = function (contact) {
        this.dialog.mapDialog(contact);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__(229),
        styles: [__webpack_require__(221)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
], ContactsComponent);

var _a, _b;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddressPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactAddressPipe = (function () {
    function ContactAddressPipe() {
    }
    ContactAddressPipe.prototype.transform = function (contact, args) {
        var addressParts = [contact.streetAddress || null, contact.city || null];
        addressParts = __WEBPACK_IMPORTED_MODULE_1_lodash__["reject"](addressParts, __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"]);
        return addressParts.join(', ');
    };
    return ContactAddressPipe;
}());
ContactAddressPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'contactAddress'
    })
], ContactAddressPipe);

//# sourceMappingURL=contact-address.pipe.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */];
    };
    LoginComponent.prototype.login = function () {
        /*this.errorMessage = '';
        this.userService.findUser(this.user.username).subscribe(result => {
          if(!result) {
            this.errorMessage = "Username does not exist";
          }
          else if(result.password == this.user.password) {
            this.user = result;
            this.router.navigate(['contacts']);
          }
          else {
            this.errorMessage = "Invalid username and password combination";
          }
        });*/
        this.router.navigate(['contacts']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(231),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 162:
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "md-sidenav-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: whitesmoke;\r\n}\r\n\r\nmd-sidenav {\r\n  width: 300px;\r\n}\r\n\r\nmd-toolbar {\r\n  background-color: cornflowerblue;\r\n  color: white;\r\n}\r\n\r\n.side-toolbar {\r\n  height: 200px;\r\n}\r\n\r\n.app-content {\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "* {\r\n  color: royalblue;\r\n}\r\n\r\n.content-area {\r\n  height: 340px;\r\n}\r\n\r\nbutton {\r\n  background-color: cornflowerblue;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "md-card {\r\n  width: 400px;\r\n  margin: 10px 0;\r\n  color: royalblue;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "md-card {\r\n  width: 450px;\r\n  background-color: cornflowerblue;\r\n  color: white;\r\n}\r\n\r\nbutton {\r\n  float: right;\r\n  margin-top: 10px;\r\n  background-color: cornflowerblue;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".login-card-title {\r\n  width: 250px;\r\n  background-color: cornflowerblue;\r\n  color:white;\r\n}\r\n\r\n.login-card-content {\r\n  width: 200px;\r\n  background-color: white;\r\n}\r\n\r\nmd-icon {\r\n  margin-right: 10px;\r\n  color: cornflowerblue;\r\n}\r\n\r\nbutton {\r\n  margin-top: 10px;\r\n  background-color: cornflowerblue;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <md-toolbar *ngIf=\"toolbarActive\">\n    <button md-icon-button (click)=\"sidenav.toggle()\">\n      <md-icon>menu</md-icon>\n    </button>\n  </md-toolbar>\n  <md-sidenav *ngIf=\"toolbarActive\" #sidenav mode=\"push\">\n    <md-toolbar class=\"side-toolbar\">\n    </md-toolbar>\n    <div class=\"side-content\">\n    </div>\n  </md-sidenav>\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{dialogMode}} Contact</h1>\n<div md-dialog-content=\"\" class=\"content-area\">\n  <md-input-container floatPlaceholder=\"auto\">\n    <input mdInput name=\"firstName\" [(ngModel)]=\"contact.firstName\" type=\"text\" required placeholder=\"First name\">\n  </md-input-container>\n  <br>\n  <md-input-container floatPlaceholder=\"auto\">\n    <input mdInput name=\"lastName\" [(ngModel)]=\"contact.lastName\" type=\"text\" required placeholder=\"Last name\">\n  </md-input-container>\n  <br>\n  <md-input-container floatPlaceholder=\"auto\">\n    <input mdInput name=\"phone\" [(ngModel)]=\"contact.phone\" type=\"text\" required placeholder=\"Phone\">\n  </md-input-container>\n  <br>\n  <md-input-container floatPlaceholder=\"auto\">\n    <input mdInput name=\"streetAddress\" [(ngModel)]=\"contact.streetAddress\" type=\"text\" required placeholder=\"Street address\">\n  </md-input-container>\n  <br>\n  <md-input-container floatPlaceholder=\"auto\">\n    <input mdInput name=\"city\" [(ngModel)]=\"contact.city\" type=\"text\" required placeholder=\"City\">\n  </md-input-container>\n  <md-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"button-area\">\n    <button md-raised-button md-dialog-close (click)=\"cancel()\">Cancel</button>\n    <button type=\"submit\" md-raised-button (click)=\"save()\">{{saveMode}}</button>\n  </md-dialog-actions>\n</div>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n    <h4 fxLayout=\"row\" fxLayoutAlign=\"start end\"><md-icon style=\"margin-right: 5px;\">person</md-icon>{{contact.firstName}}\n      {{contact.lastName}}</h4>\n    {{contact | contactAddress}}<br>\n    {{contact.phone}}\n  </md-card-content>\n  <md-card-actions>\n    <button md-icon-button (click)=\"deleteContact()\">\n      <md-icon>delete</md-icon>\n    </button>\n    <button md-icon-button (click)=\"editContact()\">\n      <md-icon>edit</md-icon>\n    </button>\n    <button md-icon-button (click)=\"showMapLocation()\" style=\"float: right;\">\n      <md-icon>place</md-icon>\n    </button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<app-contact-list-item *ngFor=\"let contact of contacts\"\n                       [contact]=\"contact\"\n                       [edit]=\"editContact\"\n                       [remove]=\"removeContact\"\n                       [map]=\"showMap\"\n>\n</app-contact-list-item>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <md-card fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <h2>Contacts</h2>\n  </md-card>\n  <div>\n    <app-contact-list\n      [contacts]=\"contacts\"\n      (editContact)=\"editContact($event)\"\n      (removeContact)=\"deleteContact($event)\"\n      (showMap)=\"showOnMap($event)\"\n    >\n    </app-contact-list>\n    <button md-mini-fab (click)=\"pressAddContact()\"><md-icon>person_add</md-icon></button>\n  </div>\n</div>\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"start end\">\n  <button md-icon-button (click)=\"close()\" style=\"float: right;\">\n    <md-icon>close</md-icon>\n  </button>\n  <iframe\n    width=\"600\"\n    height=\"450\"\n    frameborder=\"0\" style=\"border:0\"\n    [src]=\"getMapSource(mapUrl)\"\n    allowfullscreen>\n  </iframe>\n</div>\n\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <md-card fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-card-title\">\n    <h2>Contacts App</h2>\n  </md-card>\n  <md-card class=\"login-card-content\">\n    <md-card-content>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <md-icon>person</md-icon>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"user.username\" type=\"text\" placeholder=\"Username\">\n        </md-input-container>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <md-icon>lock</md-icon>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"Password\">\n        </md-input-container>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"color: red\">\n        {{errorMessage}}\n        <button md-raised-button (click)=\"login()\">Login</button>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDialogComponent = (function () {
    function ContactDialogComponent(dialog) {
        this.dialog = dialog;
    }
    ContactDialogComponent.prototype.save = function () {
        this.dialog.close(this.contact);
    };
    ContactDialogComponent.prototype.cancel = function () {
        this.dialog.close();
    };
    ContactDialogComponent.prototype.ngOnInit = function () {
        this.dialogMode = 'Edit';
        this.saveMode = 'Save';
        if (!this.contact) {
            this.contact = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]();
            this.dialogMode = 'New';
            this.saveMode = 'Add';
        }
    };
    return ContactDialogComponent;
}());
ContactDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-contact-dialog',
        template: __webpack_require__(226),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object])
], ContactDialogComponent);

var _a;
//# sourceMappingURL=contact-dialog.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(firstName, lastName, phone, streetAddress, city, id) {
        this.firstName = firstName ? firstName : '';
        this.lastName = lastName ? lastName : '';
        this.phone = phone ? phone : '';
        this.streetAddress = streetAddress ? streetAddress : '';
        this.city = city ? city : '';
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapDialogComponent = (function () {
    function MapDialogComponent(dialog, sanitizer) {
        this.dialog = dialog;
        this.sanitizer = sanitizer;
    }
    MapDialogComponent.prototype.close = function () {
        this.dialog.close();
    };
    MapDialogComponent.prototype.getMapSource = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    MapDialogComponent.prototype.ngOnInit = function () {
        this.mapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDmUcAU7BWA5VkyY5KvP84kM8fc_bdXMoM&q='
            + this.contact.streetAddress + ', ' + this.contact.city;
    };
    return MapDialogComponent;
}());
MapDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-map-dialog',
        template: __webpack_require__(230),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _b || Object])
], MapDialogComponent);

var _a, _b;
//# sourceMappingURL=map-dialog.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactApiService = (function () {
    function ContactApiService(http) {
        this.http = http;
        this.url = 'http://localhost:54731/api/contacts';
    }
    ContactApiService.prototype.findContacts = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    ContactApiService.prototype.saveContact = function (contact) {
        return contact.id ? this.updateContact(contact) : this.createContact(contact);
    };
    ContactApiService.prototype.createContact = function (contact) {
        return this.http.post(this.url, contact);
    };
    ContactApiService.prototype.updateContact = function (contact) {
        return this.http.put(this.url + '/' + contact.id, contact);
    };
    ContactApiService.prototype.deleteContact = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    return ContactApiService;
}());
ContactApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactApiService);

var _a;
//# sourceMappingURL=contact-api.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactStorageService = (function () {
    function ContactStorageService() {
        this.contactsStorageKey = 'ca-contacts';
        if (localStorage.getItem(this.contactsStorageKey) === null) {
            localStorage.setItem(this.contactsStorageKey, JSON.stringify([]));
        }
    }
    ContactStorageService.prototype.loadContacts = function () {
        return this.getLocalStorageData();
    };
    ContactStorageService.prototype.saveContacts = function (contacts) {
        this.setLocalStorageData(contacts);
    };
    ContactStorageService.prototype.getLocalStorageData = function () {
        var data = localStorage.getItem(this.contactsStorageKey);
        return JSON.parse(data);
    };
    ContactStorageService.prototype.setLocalStorageData = function (givenData) {
        var contacts = JSON.stringify(givenData);
        localStorage.setItem(this.contactsStorageKey, contacts);
    };
    return ContactStorageService;
}());
ContactStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ContactStorageService);

//# sourceMappingURL=contact-storage.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_storage_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_api_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(storageService, httpService) {
        this.storageService = storageService;
        this.httpService = httpService;
    }
    ContactService.prototype.findContacts = function () {
        //return this.storageService.loadContacts();
        return this.httpService.findContacts();
    };
    ContactService.prototype.addNewContact = function (contact) {
        /*let contacts = this.storageService.loadContacts();
        contacts.push(contact);
        this.storageService.saveContacts(contacts);*/
        return this.httpService.saveContact(contact);
    };
    ContactService.prototype.newEdit = function (contact) {
        /*let contacts = this.storageService.loadContacts();
        let newEditsId = _.findIndex(contacts, ['id', contact.id]);
        contacts.splice(newEditsId, 1, contact);
        this.storageService.saveContacts(contacts);*/
        return this.httpService.saveContact(contact);
    };
    ContactService.prototype.newDelete = function (id) {
        /*let contacts = this.storageService.loadContacts();
        let removeId = _.findIndex(contacts, ['id'], id);
        contacts.splice(removeId, 1);
        this.storageService.saveContacts(contacts);*/
        return this.httpService.deleteContact(id);
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_storage_service__["a" /* ContactStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_storage_service__["a" /* ContactStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_api_service__["a" /* ContactApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_api_service__["a" /* ContactApiService */]) === "function" && _b || Object])
], ContactService);

var _a, _b;
//# sourceMappingURL=contact.service.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.bundle.js.map