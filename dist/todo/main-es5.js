function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todo/todo.component */
    "./src/app/todo/todo.component.ts");
    /* harmony import */


    var _todo_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo/add-item/add-item.component */
    "./src/app/todo/add-item/add-item.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'create',
      component: _todo_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__["AddItemComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'edit/:itemId',
      component: _todo_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__["AddItemComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoLogin();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 1rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./todo/todo.component */
    "./src/app/todo/todo.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _todo_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./todo/add-item/add-item.component */
    "./src/app/todo/add-item/add-item.component.ts");
    /* harmony import */


    var _error_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./error/error.interceptor */
    "./src/app/error/error.interceptor.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _error_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _todo_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _todo_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _error_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = this.authService.isUserAuthenticated();

          if (!isAuth) {
            this.router.navigate(['/login']);
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = this.authService.getToken();
          var modifiedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
          });
          return next.handle(modifiedReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid Email!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid password!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          if (!this.form.valid) {
            return;
          }

          this.authService.login(this.form.value.email, this.form.value.password);
          this.form.reset();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 11,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["type", "email", "matInput", "", "name", "email", "formControlName", "email", "placeholder", "email"], [4, "ngIf"], ["type", "password", "matInput", "", "name", "password", "formControlName", "password", "placeholder", "Password"], ["type", "submit", "color", "accent", "mat-raised-button", ""]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_mat_error_4_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_mat_error_7_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && ctx.form.get("email").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").touched && ctx.form.get("password").invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SignupComponent_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid Name!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid Email!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid password!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          if (!this.form.valid) {
            return;
          }

          this.authService.createUser(this.form.value.name, this.form.value.email, this.form.value.password);
          this.form.reset();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 14,
      vars: 4,
      consts: [[3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["type", "name", "matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name"], [4, "ngIf"], ["type", "email", "matInput", "", "name", "email", "formControlName", "email", "placeholder", "email"], ["type", "password", "matInput", "", "name", "password", "formControlName", "password", "placeholder", "Password"], ["type", "submit", "color", "accent", "mat-raised-button", ""]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_mat_error_4_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_mat_error_7_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignupComponent_mat_error_10_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").touched && ctx.form.get("name").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && ctx.form.get("email").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").touched && ctx.form.get("password").invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent(data) {
        _classCallCheck(this, ErrorComponent);

        this.data = data;
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 8,
      vars: 1,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-body-1", ""], ["mat-dialog-actions", ""], ["mat-dialog-close", "", "mat-raised-button", "", "color", "primary"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An Error Occured!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.message, "");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/error/error.interceptor.ts ***!
    \********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/todo.service */
    "./src/app/services/todo.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(dialog, toDoService) {
        _classCallCheck(this, ErrorInterceptor);

        this.dialog = dialog;
        this.toDoService = toDoService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toDoService.setLoading(false);

            var message = 'an unknown error occured!';

            if (error.error.message) {
              message = error.error.message;
            }

            _this.dialog.open(_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"], {
              data: {
                message: message
              }
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HeaderComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.isAuthenticated = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.isAuthenticated = this.authService.isUserAuthenticated();
          this.authTokenSub = this.authService.getAuthTokenListner().subscribe(function (isAuthenticated) {
            _this2.isAuthenticated = isAuthenticated;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authTokenSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 11,
      vars: 4,
      consts: [["color", "primary"], [1, "app"], ["routerLink", "/"], [1, "spacer"], [4, "ngIf"], ["mat-button", "", "routerLink", "/create", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/login", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/signup", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLinkActive", "mat-accent", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Todo App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".app[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: white;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCBhe1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          // Imports of these modules will be automatically done by angualr (short hand)
          exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'users/';

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.userAuthenticated = false;
        this.authTokenListner = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "createUser",
        value: function createUser(name, email, password) {
          var _this3 = this;

          var authData = {
            name: name,
            email: email,
            password: password
          };
          this.http.post(BACKEND_URL + 'signup', authData).subscribe(function (res) {
            _this3.router.navigate(['/login']);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAuthTokenListner",
        value: function getAuthTokenListner() {
          return this.authTokenListner.asObservable();
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var authData = this.getAuthData();

          if (!authData) {
            return;
          }

          var token = authData.token;
          var userId = authData.userId;
          var expDate = authData.expDate;
          var expiryDate = new Date(expDate); // const now = new Date();

          var expiresIn = expiryDate.getTime() - new Date().getTime();

          if (expiresIn > 0) {
            this.token = token;
            this.userId = userId;
            var expDuration = expiresIn / 1000;
            this.setTokenTimer(expDuration);
            this.userAuthenticated = true;
            this.authTokenListner.next(true);
          }
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this4 = this;

          //const authData: AuthData = { 'dummy', email, password };
          this.http.post(BACKEND_URL + 'login', {
            email: email,
            password: password
          }).subscribe(function (response) {
            if (response.token) {
              _this4.token = response.token;
              _this4.userId = response.userId;
              var expDuration = response.expiresIn;

              _this4.setTokenTimer(expDuration);

              _this4.saveAuthData(response);

              _this4.userAuthenticated = true;

              _this4.authTokenListner.next(true);

              _this4.router.navigate(['/']);
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "setTokenTimer",
        value: function setTokenTimer(expDuration) {
          var _this5 = this;

          this.tokenTimer = setTimeout(function () {
            _this5.logout();
          }, expDuration * 1000); // multiplied by 1000 because setTimeout works in miliseconds
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(response) {
          var token = response.token;
          var userId = response.userId;
          var expiresIn = response.expiresIn;
          var username = response.name;
          var now = new Date();
          var expDate = new Date(now.getTime() + expiresIn * 1000);
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          localStorage.setItem('userId', userId);
          localStorage.setItem('expDate', expDate.toISOString());
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          localStorage.removeItem('expDate');
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem('token');
          var userId = localStorage.getItem('userId');
          var expDate = localStorage.getItem('expDate');

          if (!token || !userId || !expDate) {
            return;
          }

          return {
            token: token,
            userId: userId,
            expDate: expDate
          };
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "isUserAuthenticated",
        value: function isUserAuthenticated() {
          return this.userAuthenticated;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.userId = null;
          this.userAuthenticated = false;
          this.clearAuthData();
          this.authTokenListner.next(false);
          clearTimeout(this.tokenTimer);
          this.router.navigate(['/login']);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'todo/';

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService(http, router) {
        _classCallCheck(this, TodoService);

        this.http = http;
        this.router = router;
        this.toDoItems = [];
        this.itemsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.loadingListner = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.loading = false;
      }

      _createClass(TodoService, [{
        key: "setLoading",
        value: function setLoading(flag) {
          this.loadingListner.next(flag);
        }
      }, {
        key: "getLoadingListner",
        value: function getLoadingListner() {
          return this.loadingListner.asObservable();
        }
      }, {
        key: "getToDoItems",
        value: function getToDoItems(pageSize, currPage) {
          var _this6 = this;

          var queryParams = "?pagesize=".concat(pageSize, "&page=").concat(currPage);
          this.http.get(BACKEND_URL + queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (itemsData) {
            return {
              items: itemsData.items.map(function (item) {
                return {
                  title: item.title,
                  body: item.body,
                  toDoDay: item.toDoDay,
                  isDone: item.isDone,
                  id: item._id
                };
              }),
              itemsCount: itemsData.totalItems
            };
          })).subscribe(function (transformedItems) {
            _this6.toDoItems = transformedItems.items;

            _this6.itemsUpdated.next({
              items: _toConsumableArray(_this6.toDoItems),
              itemsCount: transformedItems.itemsCount
            });
          });
        }
      }, {
        key: "getItem",
        value: function getItem(itemId) {
          return this.http.get(BACKEND_URL + itemId); // returns observable (not subcribed here and will subscribe in the component)
        }
      }, {
        key: "addItem",
        value: function addItem(title, body, toDoDay) {
          var _this7 = this;

          var itemData = {
            title: title,
            body: body,
            toDoDay: toDoDay
          };
          this.http.post(BACKEND_URL, itemData).subscribe(function (res) {
            console.log(res);

            _this7.router.navigate(['/']);
          });
        }
      }, {
        key: "editItem",
        value: function editItem(itemId, title, body, toDoDay) {
          var _this8 = this;

          var itemData = {
            title: title,
            body: body,
            toDoDay: toDoDay,
            id: itemId
          };
          this.http.put(BACKEND_URL + itemId, itemData).subscribe(function (res) {
            console.log(res);

            _this8.router.navigate(['/']);
          });
        }
      }, {
        key: "setIsDone",
        value: function setIsDone(itemId, isDone) {
          var _this9 = this;

          this.http.put(BACKEND_URL + itemId, {
            isDone: isDone,
            id: itemId
          }).subscribe(function (res) {
            console.log(res);

            _this9.router.navigate(['/']);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(itemId) {
          return this.http["delete"](BACKEND_URL + itemId);
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/add-item/add-item.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todo/add-item/add-item.component.ts ***!
    \*****************************************************/

  /*! exports provided: AddItemComponent */

  /***/
  function srcAppTodoAddItemAddItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemComponent", function () {
      return AddItemComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AddItemComponent_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid Title!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddItemComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid body!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddItemComponent_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r62.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r62.value);
      }
    }

    var AddItemComponent =
    /*#__PURE__*/
    function () {
      function AddItemComponent(toDoService, router, activeRoute) {
        _classCallCheck(this, AddItemComponent);

        this.toDoService = toDoService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.mode = 'create';
        this.weekDays = [{
          value: 'Monday'
        }, {
          value: 'Tuesday'
        }, {
          value: 'Wednesday'
        }, {
          value: 'Thursday'
        }, {
          value: 'Firday'
        }, {
          value: 'Saturday'
        }, {
          value: 'Sunday'
        }];
      }

      _createClass(AddItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            selectDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.weekDays[0].value, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
          this.activeRoute.paramMap.subscribe(function (paraMap) {
            if (paraMap.has('itemId')) {
              _this10.mode = 'edit';
              _this10.itemId = paraMap.get('itemId');

              _this10.toDoService.getItem(_this10.itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resData) {
                return {
                  id: resData._id,
                  title: resData.title,
                  body: resData.body,
                  toDoDay: resData.toDoDay
                };
              })).subscribe(function (transformedItem) {
                _this10.item = transformedItem;

                _this10.form.setValue({
                  title: transformedItem.title,
                  body: transformedItem.body,
                  selectDay: transformedItem.toDoDay
                });
              });
            } else {
              _this10.itemId = null;
              _this10.item = null;
              _this10.mode = 'create';
            }
          });
        }
      }, {
        key: "onAddItem",
        value: function onAddItem() {
          if (!this.form.valid) {
            return;
          }

          if (this.mode === 'edit') {
            this.toDoService.editItem(this.itemId, this.form.value.title, this.form.value.body, this.form.value.selectDay);
          } else {
            this.toDoService.addItem(this.form.value.title, this.form.value.body, this.form.value.selectDay);
          }

          this.form.reset();
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.router.navigate(['/']);
        }
      }]);

      return AddItemComponent;
    }();

    AddItemComponent.ɵfac = function AddItemComponent_Factory(t) {
      return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddItemComponent,
      selectors: [["app-add-item"]],
      decls: 19,
      vars: 5,
      consts: [[3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["type", "text", "matInput", "", "name", "title", "formControlName", "title", "placeholder", "title"], [4, "ngIf"], ["type", "body", "matInput", "", "name", "body", "formControlName", "body", "placeholder", "body"], ["formControlName", "selectDay"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "color", "primary", "mat-raised-button", ""], ["type", "button", "color", "warn", "mat-raised-button", "", 3, "click"], [3, "value"]],
      template: function AddItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddItemComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onAddItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddItemComponent_mat_error_4_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddItemComponent_mat_error_7_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddItemComponent_mat_option_12_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_17_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("title").touched && ctx.form.get("title").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("body").touched && ctx.form.get("body").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.mode === "create" ? "Add Item" : "Edit Item");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdG9kby9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-item',
          templateUrl: './add-item.component.html',
          styleUrls: ['./add-item.component.css']
        }]
      }], function () {
        return [{
          type: _services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-cbx.js":
  /*!*************************************************************************!*\
    !*** ./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-cbx.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppTodoTnxWeeklyTodoPlannerWeeklyTodoPlannerCbxJs(module, exports) {
    customElements.define('tnx-checkbox',
    /*#__PURE__*/
    function (_HTMLElement) {
      _inherits(_class, _HTMLElement);

      var _super = _createSuper(_class);

      function _class() {
        var _this11;

        _classCallCheck(this, _class);

        _this11 = _super.call(this);

        var shadowRoot = _this11.attachShadow({
          mode: 'closed'
        });

        var label = document.createElement('label');
        label.className = "container";
        label.innerText = "";
        var span = document.createElement('span');
        span.className = "checkmark";
        var input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        label.appendChild(input);
        label.appendChild(span);
        var style = document.createElement('style');
        style.textContent = "\n        \n       .container {\n          display: inline;\n          position: relative;\n          padding-left: 35px;\n          margin-bottom: 12px;\n          cursor: pointer;\n          font-size: 22px;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n        \n        /* Hide the browser's default checkbox */\n        .container input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n          height: 0;\n          width: 0;\n        }\n\n        /* Create a custom checkbox */\n        .checkmark {\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 22px;\n          width: 22px;\n          background-color: #eee;\n        }\n        \n        /* On mouse-over, add a grey background color */\n        .container:hover input ~ .checkmark {\n          background-color: #ccc;\n        }\n        \n        /* When the checkbox is checked, add a blue background */\n        .container input:checked ~ .checkmark {\n          background-color: green;\n        }\n        \n        /* Create the checkmark/indicator (hidden when not checked) */\n        .checkmark:after {\n          content: \"\";\n          position: absolute;\n          display: none;\n        }\n        \n        /* Show the checkmark when checked */\n        .container input:checked ~ .checkmark:after {\n          display: block;\n        }\n        \n        /* Style the checkmark/indicator */\n        .container .checkmark:after {\n          left: 7px;\n          top: 3px;\n          width: 5px;\n          height: 10px;\n          border: solid white;\n          border-width: 0 3px 3px 0;\n          -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n        }\n                \n      ";
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(label);

        _this11.addEventListener('click', function () {});

        input.addEventListener('blur', updateDisplay);

        function updateDisplay() {}

        return _this11;
      }

      return _class;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(HTMLElement)));
    /***/
  },

  /***/
  "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-input.js":
  /*!***************************************************************************!*\
    !*** ./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-input.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppTodoTnxWeeklyTodoPlannerWeeklyTodoPlannerInputJs(module, exports) {
    customElements.define('tnx-input',
    /*#__PURE__*/
    function (_HTMLElement2) {
      _inherits(_class2, _HTMLElement2);

      var _super2 = _createSuper(_class2);

      function _class2() {
        var _this12;

        _classCallCheck(this, _class2);

        _this12 = _super2.call(this);
        _this12.state = {
          title: "test"
        };

        var shadowRoot = _this12.attachShadow({
          mode: 'open'
        });

        var input = document.createElement('span');
        _this12.input = input;
        input.contentEditable = "true";
        input.setAttribute("role", "textbox");
        input.className = "input";
        input.innerText = " ";
        input.setAttribute("data-bind", "title");
        input.setAttribute("id", "customInput");
        var style = document.createElement('style');
        style.textContent = "\n        .input{\n            display:inline-block;\n            border: 1px solid #ccc;\n            font-family: inherit;\n            font-size: inherit;\n            padding: 1px 6px;\n            min-width: 100px;\n        }        \n       \n                \n      ";
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(input);

        _this12.addEventListener('click', function () {});

        input.addEventListener('blur', updateDisplay);

        function updateDisplay() {}

        return _this12;
      }

      _createClass(_class2, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          if (!this.hasAttribute('value')) {
            this.setAttribute('value', 1);
          }
        }
        /*      static get observedAttributes() {
                return ['value'];
              }
        
              attributeChangedCallback(name, oldValue, newValue) {
                this.input.value = this.value;
              }*/

      }, {
        key: "setValue",
        value: function setValue(val) {
          this.input.innerText = val;
        }
      }]);

      return _class2;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(HTMLElement)));
    /***/
  },

  /***/
  "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-todo-item.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-todo-item.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppTodoTnxWeeklyTodoPlannerWeeklyTodoPlannerTodoItemJs(module, exports) {
    customElements.define('tnx-todo-item',
    /*#__PURE__*/
    function (_HTMLElement3) {
      _inherits(_class3, _HTMLElement3);

      var _super3 = _createSuper(_class3);

      function _class3() {
        var _this13;

        _classCallCheck(this, _class3);

        _this13 = _super3.call(this);
        _this13.value = {};

        var shadowRoot = _this13.attachShadow({
          mode: 'open'
        });

        var container = document.createElement('div');
        var input = document.createElement('tnx-input');
        var cbx = document.createElement('tnx-checkbox');
        var style = document.createElement('style');
        style.textContent = "\n        :host{display:block}\n        div{\n         display:flex;\n        }\n        tnx-input{\n         margin-right:5px;\n         flex-grow:1;\n        }         \n      ";
        input.setAttribute("data-bind", "title");
        container.appendChild(input);
        container.appendChild(cbx);
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);

        _this13.addEventListener('click', function () {});

        input.addEventListener('blur', updateDisplay);

        function updateDisplay() {}

        return _this13;
      }

      _createClass(_class3, [{
        key: "setState",
        value: function setState(newState) {
          var _this14 = this;

          Object.entries(newState).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            _this14.state[key] = _this14.isObject(_this14.state[key]) && _this14.isObject(value) ? _objectSpread(_objectSpread({}, _this14.state[key]), value) : value;
          });
        }
      }]);

      return _class3;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(HTMLElement)));
    /***/
  },

  /***/
  "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner.js":
  /*!*********************************************************************!*\
    !*** ./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppTodoTnxWeeklyTodoPlannerWeeklyTodoPlannerJs(module, exports) {
    customElements.define('person-details',
    /*#__PURE__*/
    function (_HTMLElement4) {
      _inherits(_class4, _HTMLElement4);

      var _super4 = _createSuper(_class4);

      function _class4() {
        var _this15;

        _classCallCheck(this, _class4);

        _this15 = _super4.call(this);
        var template = document.getElementById('person-template');
        var templateContent = template.content;

        var shadowRoot = _this15.attachShadow({
          mode: 'open'
        });

        var style = document.createElement('style');
        style.textContent = "\n        div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }\n        h2 { margin: 0 0 10px; }\n        ul { margin: 0; }\n        p { margin: 10px 0; }\n      ";
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(templateContent.cloneNode(true));
        return _this15;
      }

      return _class4;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(HTMLElement)));
    customElements.define('edit-word',
    /*#__PURE__*/
    function (_HTMLElement5) {
      _inherits(_class5, _HTMLElement5);

      var _super5 = _createSuper(_class5);

      function _class5() {
        var _this16;

        _classCallCheck(this, _class5);

        _this16 = _super5.call(this);

        var shadowRoot = _this16.attachShadow({
          mode: 'open'
        });

        var form = document.createElement('form');
        var input = document.createElement('input');
        var span = document.createElement('span');
        var style = document.createElement('style');
        style.textContent = 'span { background-color: #eef; padding: 0 2px }';
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(form);
        shadowRoot.appendChild(span);
        span.textContent = _this16.textContent;
        input.value = _this16.textContent;
        form.appendChild(input);
        form.style.display = 'none';
        span.style.display = 'inline-block';
        input.style.width = span.clientWidth + 'px';

        _this16.setAttribute('tabindex', '0');

        input.setAttribute('required', 'required');
        _this16.style.display = 'inline-block';

        _this16.addEventListener('click', function () {
          span.style.display = 'none';
          form.style.display = 'inline-block';
          input.focus();
          input.setSelectionRange(0, input.value.length);
        });

        form.addEventListener('submit', function (e) {
          updateDisplay();
          e.preventDefault();
        });
        input.addEventListener('blur', updateDisplay);

        function updateDisplay() {
          span.style.display = 'inline-block';
          form.style.display = 'none';
          span.textContent = input.value;
          input.style.width = span.clientWidth + 'px';
        }

        return _this16;
      }

      return _class5;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(HTMLElement)));
    /***/
  },

  /***/
  "./src/app/todo/todo.component.ts":
  /*!****************************************!*\
    !*** ./src/app/todo/todo.component.ts ***!
    \****************************************/

  /*! exports provided: TodoComponent */

  /***/
  function srcAppTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
      return TodoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tnx-weekly-todo-planner/weekly-todo-planner.js */
    "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner.js");
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_tnx_weekly_todo_planner_weekly_todo_planner_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_cbx_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tnx-weekly-todo-planner/weekly-todo-planner-cbx.js */
    "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-cbx.js");
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_cbx_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_tnx_weekly_todo_planner_weekly_todo_planner_cbx_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tnx-weekly-todo-planner/weekly-todo-planner-input.js */
    "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-input.js");
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_input_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_tnx_weekly_todo_planner_weekly_todo_planner_input_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_todo_item_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tnx-weekly-todo-planner/weekly-todo-planner-todo-item.js */
    "./src/app/todo/tnx-weekly-todo-planner/weekly-todo-planner-todo-item.js");
    /* harmony import */


    var _tnx_weekly_todo_planner_weekly_todo_planner_todo_item_js__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_tnx_weekly_todo_planner_weekly_todo_planner_todo_item_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function TodoComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function TodoComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onAddItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Item ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_mat_table_5_mat_header_cell_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Group ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_mat_table_5_mat_cell_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.title, " ");
      }
    }

    function TodoComponent_mat_table_5_mat_header_cell_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_mat_table_5_mat_cell_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.body, " ");
      }
    }

    function TodoComponent_mat_table_5_mat_header_cell_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Todo Day ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_mat_table_5_mat_cell_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.toDoDay, " ");
      }
    }

    function TodoComponent_mat_table_5_mat_header_cell_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Done ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_mat_table_5_mat_cell_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_mat_table_5_mat_cell_12_Template_mat_checkbox_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var element_r28 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.changeValue(element_r28.id, element_r28.isDone);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r28.isDone);
      }
    }

    function TodoComponent_mat_table_5_mat_header_cell_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/edit", a1];
    };

    function TodoComponent_mat_table_5_mat_cell_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_mat_table_5_mat_cell_15_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var element_r31 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.onItemDelete(element_r31.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, element_r31.id));
      }
    }

    function TodoComponent_mat_table_5_mat_header_row_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
      }
    }

    function TodoComponent_mat_table_5_mat_row_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
      }
    }

    function TodoComponent_mat_table_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-table", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_mat_table_5_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoComponent_mat_table_5_mat_cell_3_Template, 2, 1, "mat-cell", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoComponent_mat_table_5_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoComponent_mat_table_5_mat_cell_6_Template, 2, 1, "mat-cell", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TodoComponent_mat_table_5_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TodoComponent_mat_table_5_mat_cell_9_Template, 2, 1, "mat-cell", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TodoComponent_mat_table_5_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TodoComponent_mat_table_5_mat_cell_12_Template, 2, 1, "mat-cell", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TodoComponent_mat_table_5_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TodoComponent_mat_table_5_mat_cell_15_Template, 8, 3, "mat-cell", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TodoComponent_mat_table_5_mat_header_row_16_Template, 1, 0, "mat-header-row", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TodoComponent_mat_table_5_mat_row_17_Template, 1, 0, "mat-row", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r7.toDoListToday);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r7.displayedColumns);
      }
    }

    function TodoComponent_mat_paginator_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TodoComponent_mat_paginator_7_Template_mat_paginator_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onPageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r8.totalItems)("pageSize", ctx_r8.itemsPerPage)("pageSizeOptions", ctx_r8.pageSizeOptions);
      }
    }

    function TodoComponent_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No item added yet!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.body, " ");
      }
    }

    function TodoComponent_div_29_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.body, " ");
      }
    }

    function TodoComponent_div_29_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.body, " ");
      }
    }

    function TodoComponent_div_29_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.body, " ");
      }
    }

    function TodoComponent_div_29_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.body, " ");
      }
    }

    function TodoComponent_div_29_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.body, " ");
      }
    }

    function TodoComponent_div_29_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("done", element_r37.isDone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r37.body);
      }
    }

    function TodoComponent_div_29_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_div_29_div_1_Template, 2, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_div_29_div_2_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoComponent_div_29_div_3_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoComponent_div_29_div_4_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoComponent_div_29_div_5_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoComponent_div_29_div_6_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TodoComponent_div_29_div_7_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TodoComponent_div_29_div_8_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TodoComponent_div_29_div_9_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TodoComponent_div_29_div_10_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TodoComponent_div_29_div_11_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TodoComponent_div_29_div_12_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TodoComponent_div_29_div_13_Template, 3, 2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TodoComponent_div_29_div_14_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Monday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Monday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Tuesday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Tuesday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Wednesday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Wednesday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Thursday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Thursday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Friday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Friday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Saturday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Saturday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay === "Sunday");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r37.toDoDay !== "Sunday");
      }
    }

    var TodoComponent =
    /*#__PURE__*/
    function () {
      function TodoComponent(toDoService, router) {
        _classCallCheck(this, TodoComponent);

        this.toDoService = toDoService;
        this.router = router;
        this.toDoList = [];
        this.toDoListToday = [];
        this.loading = false;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.currPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.username = localStorage.getItem('username');
        this.displayedColumns = ['title', 'body', 'toDoDay', 'isDone', 'actions'];
        this.columnsToDisplay = this.displayedColumns.slice();
      }

      _createClass(TodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.loading = true;
          this.toDoService.setLoading(true);
          this.toDoService.getLoadingListner().subscribe(function (isLoading) {
            // alert(isLoading);
            _this17.loading = isLoading;
          });
          this.toDoService.getToDoItems(this.itemsPerPage, this.currPage);
          this.itemsSub = this.toDoService.itemsUpdated.subscribe(function (itemsData) {
            _this17.totalItems = itemsData.itemsCount;
            console.log(itemsData.items);
            _this17.toDoList = itemsData.items;
            var day = new Date().getDay();
            _this17.toDoListToday = itemsData.items.filter(function (item) {
              return item.toDoDay === _this17.Days[day];
            });

            _this17.toDoService.setLoading(false);
          }, function (error) {
            _this17.totalItems = 0;

            _this17.toDoService.setLoading(false);
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(pageData) {
          this.loading = true;
          this.itemsPerPage = pageData.pageSize;
          this.currPage = pageData.pageIndex + 1;
          this.toDoService.getToDoItems(this.itemsPerPage, this.currPage);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.itemsSub.unsubscribe();

          if (this.loadingSub) {
            this.loadingSub.unsubscribe();
          }
        }
      }, {
        key: "onAddItem",
        value: function onAddItem() {
          this.router.navigate(['/create']);
        }
      }, {
        key: "onItemEdit",
        value: function onItemEdit(itemId) {
          var _this18 = this;

          // alert(itemId);
          this.toDoService.deleteItem(itemId).subscribe(function (res) {
            _this18.router.navigate(['/']);
          });
        }
      }, {
        key: "changeValue",
        value: function changeValue(id, value) {
          this.toDoService.setIsDone(id, !value);
        }
      }, {
        key: "onItemDelete",
        value: function onItemDelete(itemId) {
          var _this19 = this;

          // alert(itemId);
          this.toDoService.deleteItem(itemId).subscribe(function (res) {
            _this19.loading = true;

            _this19.toDoService.getToDoItems(_this19.itemsPerPage, _this19.currPage);
          });
        }
      }]);

      return TodoComponent;
    }();

    TodoComponent.ɵfac = function TodoComponent_Factory(t) {
      return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoComponent,
      selectors: [["app-todo"]],
      decls: 38,
      vars: 7,
      consts: [[1, "main"], [4, "ngIf"], ["style", "float:right", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "mat-elevation-z8 item-table", 3, "dataSource", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["class", "infotext mat-body-2", 4, "ngIf"], [1, "mat-elevation-z8", 2, "padding", "8px"], [1, "colH"], [1, "rowContainer"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "colE"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"], [1, "mat-elevation-z8", "item-table", 3, "dataSource"], ["matColumnDef", "title"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "body"], ["matColumnDef", "toDoDay"], ["matColumnDef", "isDone"], ["matColumnDef", "actions"], ["class", "actions", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "checked", "click"], [1, "actions"], ["mat-mini-fab", "", "color", "primary", 3, "routerLink"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "infotext", "mat-body-2"], ["class", "col1", 4, "ngIf"], ["class", "col", 4, "ngIf"], [1, "col1"], [1, "col"]],
      template: function TodoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_button_2_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoComponent_mat_table_5_Template, 18, 3, "mat-table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TodoComponent_mat_paginator_7_Template, 1, 3, "mat-paginator", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TodoComponent_p_8_Template, 2, 0, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekly Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "DO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TodoComponent_div_29_Template, 15, 14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.username, ", deine Todos f\xFCr Heute:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toDoListToday.length > 0 && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toDoList.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toDoList.length === 0 && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toDoList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"]],
      styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n.item-table[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n.infotext[_ngcontent-%COMP%] {\n  text-align: center;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.buttons[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%] {\n  display:flex;\n  justify-content:center;\n }\n.mat-column-title[_ngcontent-%COMP%] {\n  flex: 0 0 15%;\n}\n.mat-column-body[_ngcontent-%COMP%] {\n  flex: 0 0 55%;\n}\n.mat-mini-fab[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n  .mat-mini-fab .mat-button-wrapper,   span .mat-button-wrapper {\n  padding: 0 !important;\n  display: inline-block;\n  line-height: 24px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mat-column-toDoDay[_ngcontent-%COMP%] {\n  flex: 0 0 10%;\n}\nheader[_ngcontent-%COMP%], .row[_ngcontent-%COMP%] {\n  display: flex;  \n}\n.colH[_ngcontent-%COMP%] {\n  flex: 1;        \n  border: 1px solid black;\n}\n.col[_ngcontent-%COMP%] {\n  flex: 1;        \n  border-right: 1px solid black;\n  border-left: 1px solid black;\n}\n.col1[_ngcontent-%COMP%] {\n  flex: 1;        \n  border-right: 1px solid black;\n  border-left: 1px solid black;\n  padding-top: 5px;\n}\n.colE[_ngcontent-%COMP%] {\n  flex: 1;        \n  border-right: 1px solid black;\n  border-left: 1px solid black;\n  border-bottom: 1px solid black;\n}\n.rowContainer[_ngcontent-%COMP%]{\n\n}\ntnx-todo-item[_ngcontent-%COMP%]{\n  margin-left:5px;\n}\ndiv[done='true'][_ngcontent-%COMP%]{\n  background-color: green;\n}\ndiv[done='false'][_ngcontent-%COMP%]{\n  background-color: darkorange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7Q0FDdkI7QUFFRDtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYSxHQUFHLG9EQUFvRDtBQUN0RTtBQUNBO0VBQ0UsT0FBTyxTQUFTLHNEQUFzRDtFQUN0RSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLE9BQU8sU0FBUyxzREFBc0Q7RUFDdEUsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsT0FBTyxTQUFTLHNEQUFzRDtFQUN0RSw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsT0FBTyxTQUFTLHNEQUFzRDtFQUN0RSw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uaXRlbS10YWJsZSxcbm1hdC10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5mb3RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYnV0dG9ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gfVxuXG4ubWF0LWNvbHVtbi10aXRsZSB7XG4gIGZsZXg6IDAgMCAxNSU7XG59XG4ubWF0LWNvbHVtbi1ib2R5IHtcbiAgZmxleDogMCAwIDU1JTtcbn1cbi5tYXQtbWluaS1mYWIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtbWluaS1mYWIgLm1hdC1idXR0b24td3JhcHBlcixcbjo6bmctZGVlcCBzcGFuIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYXQtY29sdW1uLXRvRG9EYXkge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuXG5oZWFkZXIsIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4OyAgLyogYWxpZ25zIGFsbCBjaGlsZCBlbGVtZW50cyAoZmxleCBpdGVtcykgaW4gYSByb3cgKi9cbn1cbi5jb2xIIHtcbiAgZmxleDogMTsgICAgICAgIC8qIGRpc3RyaWJ1dGVzIHNwYWNlIG9uIHRoZSBsaW5lIGVxdWFsbHkgYW1vbmcgaXRlbXMgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uY29sIHtcbiAgZmxleDogMTsgICAgICAgIC8qIGRpc3RyaWJ1dGVzIHNwYWNlIG9uIHRoZSBsaW5lIGVxdWFsbHkgYW1vbmcgaXRlbXMgKi9cbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG59XG4uY29sMSB7XG4gIGZsZXg6IDE7ICAgICAgICAvKiBkaXN0cmlidXRlcyBzcGFjZSBvbiB0aGUgbGluZSBlcXVhbGx5IGFtb25nIGl0ZW1zICovXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmNvbEUge1xuICBmbGV4OiAxOyAgICAgICAgLyogZGlzdHJpYnV0ZXMgc3BhY2Ugb24gdGhlIGxpbmUgZXF1YWxseSBhbW9uZyBpdGVtcyAqL1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnJvd0NvbnRhaW5lcntcbi8qICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmx1ZTsqL1xufVxudG54LXRvZG8taXRlbXtcbiAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuZGl2W2RvbmU9J3RydWUnXXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5kaXZbZG9uZT0nZmFsc2UnXXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo',
          templateUrl: './todo.component.html',
          styleUrls: ['./todo.component.css']
        }]
      }], function () {
        return [{
          type: _services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:3000/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/patrickchristen/DEV/projects/todo-mean-main/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map