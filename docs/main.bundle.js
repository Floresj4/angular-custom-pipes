webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n  border:1px solid #f00;\r\n}\r\n\r\n.label-adjust {\r\n  margin-top: 24px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"page-header\">\n        <h3>Angular <small>Custom Pipes</small></h3>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h4>Shorten</h4>\n        <p>\n          A custom shortening pipe truncating text longer then 30 characters, but also parameterized to allow\n          the length to be configured.  The textarea below binds to the variable <span class=\"code\">shortenMsg</span>\n          and displays in the following container. <br/> <code [innerHTML]=\"getShortenCmd()\"></code>\n        </p>\n      </div>\n  </div>\n\n  <div class=\"row\">\n    <form [formGroup]=\"shortenForm\">\n\n    <div class=\"col-xs-3\">\n      <label for=\"limitInput\">Limit</label>\n      <input type=\"number\"\n             id=\"limitInput\"\n             name=\"limitInput\"\n             formControlName=\"limitInput\"\n             class=\"form-control\"\n             [(ngModel)]=\"limit\">\n    </div>\n    <div class=\"col-xs-9\">\n        <label for=\"shortenText\">Input text</label>\n        <textarea\n          id=\"shortenText\"\n          name=\"shortenText\"\n          formControlName=\"shortenText\"\n          class=\"form-control\"\n          row=\"4\"\n          cols=\"20\"\n          [(ngModel)]=\"shortenMsg\">\n            </textarea>\n    </div>\n\n    </form>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h5>Output <small>limit: {{limit}}</small></h5>\n      <p *ngIf=\"shortenForm.valid; else invalidForm\">{{shortenMsg | shorten:limit }} &nbsp;</p>\n      <ng-template #invalidForm>\n        <div class=\"alert alert-danger\" role=\"alert\">Shorten limit must be a positive, non-zero number.</div>\n      </ng-template>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h4>Filter</h4>\n      <p>\n        A custom filter pipe for collections allowing users to specify the text to filter along with the property name of a\n        Javascript object to filter against.\n        <br/> <code [innerHTML]=\"getFilterCmd()\"></code>\n      </p>\n    </div>\n  </div>\n\n  <form [formGroup]=\"filterForm\">\n    <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <div class=\"form-group\">\n            <label for=\"filterText\">Filter</label>\n            <input type=\"text\"\n                id=\"filterText\"\n                name=\"filterText\"\n                [(ngModel)]=\"filterText\"\n                formControlName=\"filterText\"\n                class=\"form-control\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"filterProp\">Property</label>\n            <select class=\"form-control\"\n              id=\"filterProp\"\n              name=\"filterProp\"\n              [(ngModel)]=\"filterProp\"\n              formControlName=\"filterProp\">\n              <option *ngFor=\"let p of filterProperties\">{{p}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-xs-9\">\n          <label>Filter Data</label>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let d of filterData | filter:filterText:filterProp\">\n              {{ d.name }}, {{ d.age }}, <span class=\"label label-default\">{{ d.occupation }}</span></li>\n          </ul>\n        </div>\n    </div>\n  </form>\n\n  <form [formGroup]=\"filterFormAdd\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-4\">\n        <label for=\"nameField\">Name</label>\n        <input type=\"text\"\n          id=\"nameField\"\n          name=\"nameField\"\n          formControlName=\"name\"\n          placeholder=\"First and last...\"\n          class=\"form-control\"\n          required>\n      </div>\n\n      <div class=\"col-xs-3\">\n        <label for=\"ageField\">Age</label>\n        <input type=\"number\"\n          id=\"ageField\"\n          name=\"ageField\"\n          formControlName=\"age\"\n          class=\"form-control\"\n          required>\n      </div>\n\n      <div class=\"col-xs-3\">\n        <label for=\"occupationField\">Occupation</label>\n        <input type=\"text\"\n          id=\"occupationField\"\n          name=\"occupataionField\"\n          formControlName=\"occupation\"\n          placeholder=\"Job title...\"\n          class=\"form-control\"\n          required>\n      </div>\n\n      <div class=\"col-xs-2\">\n        <button type=\"button\"\n          class=\"btn btn-primary label-adjust\"\n          (click)=\"onAddData()\">Add</button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"row\" style=\"margin-top:25px\">\n    <div class=\"col-xs-12\">\n      <div class='list-group'>\n        <a class='list-group-item' href='https://floresj4.github.io/'>\n          <span class='glyphicon glyphicon-home'></span> &nbsp; floresj4.github.io</a>\n        <a class='list-group-item' href='https://github.com/Floresj4/angular-custom-pipes'>\n          <span class='glyphicon glyphicon-console'></span> &nbsp; https://github.com/Floresj4/angular-custom-pipes</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.limit = 30;
        this.filterData = [
            { name: 'John Doe', age: 27, occupation: 'Teacher' },
            { name: 'Angela Doe', age: 33, occupation: 'Engineer' },
            { name: 'Molly Doe', age: 24, occupation: 'Student' },
            { name: 'Patrick Fidgit', age: 24, occupation: 'Engineer' },
        ];
        this.filterProperties = [
            'Name', 'Age', 'Occupation'
        ];
        this.filterProp = this.filterProperties[0];
        this.shortenForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'limitInput': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.limit, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].min(1)),
            'shortenText': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null)
        });
        this.filterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'filterText': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null),
            'filterProp': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null)
        });
        this.filterFormAdd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null),
            'age': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].min(1)),
            'occupation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null)
        });
    };
    AppComponent.prototype.getShortenCmd = function () {
        return '{{shortenMsg | shorten:limit}}';
    };
    AppComponent.prototype.getFilterCmd = function () {
        return '*ngFor="let i of items | filter:filterText:propName';
    };
    AppComponent.prototype.onAddData = function () {
        if (this.filterFormAdd.valid) {
            this.filterData.push(this.filterFormAdd.value);
            this.filterFormAdd.reset();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_shorten_pipe__ = __webpack_require__("../../../../../src/app/pipes/shorten.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_shorten_pipe__["a" /* ShortenPipe */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        // ensure the value or filter string is valid
        if (value.length === 0 || this.isFilterValid(filterString)) {
            return value;
        }
        // adjust the case for property lookup
        if (propName !== undefined) {
            propName = propName.toLowerCase();
        }
        if (filterString !== undefined) {
            filterString = filterString.toLowerCase();
        }
        var results = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            // compare values as strings for simplicity
            var itemValue = item[propName].toString()
                .toLowerCase();
            // use a contains approach to filter
            if (itemValue.indexOf(filterString) > -1) {
                results.push(item);
            }
        }
        return results;
    };
    FilterPipe.prototype.isFilterValid = function (filterString) {
        return filterString === undefined || filterString === '';
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/shorten.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenPipe = (function () {
    function ShortenPipe() {
        this.defaultLength = 30;
    }
    ShortenPipe.prototype.transform = function (value, limit) {
        var length = value !== undefined
            ? value.length : 0;
        limit = limit === undefined
            ? this.defaultLength : limit;
        return length > limit
            ? value.substr(0, limit) + '...'
            : value;
    };
    ShortenPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'shorten'
        })
    ], ShortenPipe);
    return ShortenPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map