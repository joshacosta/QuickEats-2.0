webpackJsonp([10],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_locations_json__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_data_locations_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_data_locations_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.locationsData = __WEBPACK_IMPORTED_MODULE_4__assets_data_locations_json___default.a.locations;
        //this.restaurantCollection = this.firestore.firestore.collection("restaurants");
        /*this.restaurantCollection.get().then( (snap) => {
          snap.forEach((doc) => {
            
            this.restaurantsData.push({
              name: doc.data().name,
              rating: doc.data().rating,
              address: doc.data().address,
              type: doc.data().type,
              price: doc.data().price,
              imageURL: doc.data().imageURL
    
            });
          })
         
        } )*/
        // Used to populate db with restaurant info 
        //this.locationsData.forEach(element => {
        //this.firestore.collection("restaurants").add(element);
        //})
    }
    ListPage.prototype.goToDetails = function (location) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__["a" /* RouletteDetailsPage */], { locations: location });
    };
    ListPage.prototype.logout = function () {
        var _this = this;
        this.authService.logoutUser()
            .then(function (res) {
            console.log(res);
            _this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    var _a, _b, _c;
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color = "nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurants</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item ion-item *ngFor="let location of this.locationsData" (click)="goToDetails(location)">\n      <ion-thumbnail item-left>\n        <ion-img src=\'{{location.imgURL}}\'></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{location.name}}</h3>\n        <p><ion-icon name="star" style="color:gold"></ion-icon> {{location.rating}}</p>\n        <p style="color:green">{{location.price}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" ? _c : Object])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, fireStore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireStore = fireStore;
        this.historyData = [];
        this.historyCollection = this.fireStore.firestore.collection("users/" + __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid + "/history");
        this.usersCollection = this.fireStore.firestore.collection("users");
        this.historyCollection.get().then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.data());
                _this.historyData.push({
                    date: doc.data().date,
                    name: doc.data().name
                });
            });
        });
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\history\history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color = "nav">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>History</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item ion-item *ngFor="let history of this.historyData" >\n      <ion-label>\n        <h3 start>{{history.name}}</h3> \n        <p end>{{history.date}} </p> \n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    };
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.registerUser(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created. Please log in.";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.goLoginPage = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color = "nav">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <div text-center>\n      <img src="https://i.imgur.com/zLsxNdx.png" style="width: 100%; height: auto;">\n  </div>\n  <form class="form" [formGroup]="validations_form"  (ngSubmit)="tryRegister(validations_form.value)">\n \n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" formControlName="email"placeholder="Email"></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.email">\n        <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll" placeholder="Password" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.password">\n        <div class="error-message" *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n \n    \n    <button ion-button  class="submit-btn" type="submit" full>Register</button>\n    <label class="error-message">{{errorMessage}}</label>\n    <label class="success-message">{{successMessage}}</label>\n  </form>\n  <p class="go-to-login">Already have an account? <a (click)="goLoginPage()">Try to Log In.</a></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_types_types__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferencesPage = /** @class */ (function () {
    function PreferencesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    PreferencesPage.prototype.goToTypesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_types_types__["a" /* TypesPage */], {
            callback: this.setTypeData
        });
    };
    PreferencesPage.prototype.setTypeData = function (data) {
    };
    PreferencesPage.prototype.goToFavoritesPage = function () {
    };
    PreferencesPage.prototype.setFavoritesData = function () {
    };
    PreferencesPage.prototype.goToBlacklistPage = function () {
    };
    PreferencesPage.prototype.setBlacklistData = function () {
    };
    PreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preferences',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\preferences\preferences.html"*/'<!--\n  Generated template for the PreferencesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color = "nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Preferences</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-item >\n    <ion-label>Rating</ion-label>\n    <ion-select interface="popover" [(ngModel)]="rating">\n      <ion-option value="1">1 Star</ion-option>\n      <ion-option value="2">2 Star</ion-option>\n      <ion-option value="3">3 Star</ion-option>\n      <ion-option value="4">4 Star</ion-option>\n      <ion-option value="5">5 Star</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Price</ion-label>\n    <ion-select interface="popover" [(ngModel)]="price">\n      <ion-option value="1">&#36;</ion-option>\n      <ion-option value="2">&#36;&#36;</ion-option>\n      <ion-option value="3">&#36;&#36;&#36;</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item (click)="goToTypesPage()">Types <ion-icon name="arrow-forward" style="float: right;"></ion-icon></ion-item>\n  <ion-item (click)="goToFavoritesPage()">Favorites <ion-icon name="arrow-forward" style="float: right;"></ion-icon></ion-item>\n  <ion-item (click)="goToBlacklistPage()">Blacklist <ion-icon name="arrow-forward" style="float: right;"></ion-icon></ion-item>\n\n  <br>\n  <div text-center>\n    <button ion-button>Save</button>\n  </div>\n</ion-content> \n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\preferences\preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TypesPage = /** @class */ (function () {
    function TypesPage(navCtrl, navParams, menuCtrl, fireStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.fireStore = fireStore;
        this.typeSet = new Set();
        this.callback = navParams.get('callback');
    }
    TypesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypesPage');
    };
    TypesPage.prototype.returnData = function () {
        this.callback('some data');
        this.navCtrl.pop();
    };
    TypesPage.prototype.ionViewDidEnter = function () { this.menuCtrl.enable(false, 'myMenu'); };
    TypesPage.prototype.ionViewWillLeave = function () { this.menuCtrl.enable(true, 'myMenu'); };
    TypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-types',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\types\types.html"*/'<!--\n  Generated template for the TypesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color = "nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Preferences</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\types\types.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], TypesPage);
    return TypesPage;
}());

//# sourceMappingURL=types.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.email = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.email;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authService.logoutUser()
            .then(function (res) {
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color = "nav">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Profile</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <div text-center>\n      <p style="color: white">Logged in: {{email}} </p>\n    </div>\n    <button ion-button color="danger" full (click)="logout()">Log Out</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoulettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_locations_json__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_locations_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_data_locations_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as locations from "../../assets/data/restaurants.json"
/**
 * Generated class for the RoulettePage page.../
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoulettePage = /** @class */ (function () {
    function RoulettePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationsData = __WEBPACK_IMPORTED_MODULE_3__assets_data_locations_json___default.a.locations;
        console.log(this.locationsData);
    }
    RoulettePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoulettePage');
    };
    RoulettePage.prototype.openRouletteDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__roulette_details_roulette_details__["a" /* RouletteDetailsPage */], { locations: this.getRandom() });
    };
    RoulettePage.prototype.getRandom = function () {
        return this.locationsData[Math.floor(Math.random() * Math.floor(this.locationsData.length))];
    };
    RoulettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roulette',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette\roulette.html"*/'<!--\n  Generated template for the RoulettePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color = "nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Roulette</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n      <ion-icon name="aperture" style="font-size: 360px; text-align: center"></ion-icon>\n  </div>\n  <div text-center class = "roulette"> \n      <button ion-button (click)="openRouletteDetails()"> Roulette! </button>\n  </div>\n\n</ion-content> \n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette\roulette.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RoulettePage);
    return RoulettePage;
}());

//# sourceMappingURL=roulette.js.map

/***/ }),

/***/ 198:
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
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blacklist/blacklist.module": [
		477,
		9
	],
	"../pages/favorites/favorites.module": [
		478,
		8
	],
	"../pages/history/history.module": [
		479,
		7
	],
	"../pages/login/login.module": [
		480,
		6
	],
	"../pages/preferences/preferences.module": [
		481,
		5
	],
	"../pages/profile/profile.module": [
		482,
		4
	],
	"../pages/register/register.module": [
		483,
		3
	],
	"../pages/roulette-details/roulette-details.module": [
		484,
		2
	],
	"../pages/roulette/roulette.module": [
		485,
		1
	],
	"../pages/types/types.module": [
		486,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlacklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BlacklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlacklistPage = /** @class */ (function () {
    function BlacklistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BlacklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlacklistPage');
    };
    BlacklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blacklist',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\blacklist\blacklist.html"*/'<!--\n  Generated template for the BlacklistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>blacklist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\blacklist\blacklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BlacklistPage);
    return BlacklistPage;
}());

//# sourceMappingURL=blacklist.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\favorites\favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>favorites</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_roulette_details_roulette_details__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_types_types__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_blacklist_blacklist__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar_ngx__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen_ngx__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator_ngx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authentication_authentication__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_auth__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























__WEBPACK_IMPORTED_MODULE_21_firebase__["initializeApp"]({
    apiKey: "AIzaSyDO5GeztIScNhBZScPmp9pROnYANsReHPM",
    authDomain: "quickeats-b4bb0.firebaseapp.com",
    databaseURL: "https://quickeats-b4bb0.firebaseio.com",
    projectId: "quickeats-b4bb0",
    storageBucket: "quickeats-b4bb0.appspot.com",
    messagingSenderId: "560504759766",
    appId: "1:560504759766:web:ca284a9e71502afb873077"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_roulette_details_roulette_details__["a" /* RouletteDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_types_types__["a" /* TypesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_blacklist_blacklist__["a" /* BlacklistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/blacklist/blacklist.module#BlacklistPageModule', name: 'BlacklistPage', segment: 'blacklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette-details/roulette-details.module#RouletteDetailsPageModule', name: 'RouletteDetailsPage', segment: 'roulette-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roulette/roulette.module#RoulettePageModule', name: 'RoulettePage', segment: 'roulette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/types/types.module#TypesPageModule', name: 'TypesPage', segment: 'types', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyDO5GeztIScNhBZScPmp9pROnYANsReHPM",
                    authDomain: "quickeats-b4bb0.firebaseapp.com",
                    databaseURL: "https://quickeats-b4bb0.firebaseio.com",
                    projectId: "quickeats-b4bb0",
                    storageBucket: "quickeats-b4bb0.appspot.com",
                    messagingSenderId: "560504759766",
                    appId: "1:560504759766:web:ca284a9e71502afb873077"
                }),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__["AngularFirestoreModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__["a" /* RoulettePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_roulette_details_roulette_details__["a" /* RouletteDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_types_types__["a" /* TypesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_blacklist_blacklist__["a" /* BlacklistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator_ngx__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_authentication_authentication__["a" /* AuthenticationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = {"locations":[{"name":"Blue Sky","rating":"4.4","address":"3216 4th St, Lubbock, TX 79415","type":["American","Burgers"],"price":"$$$","imgURL":"http://www.blueskytexas.com/4th.jpg"},{"name":"Chipotle","rating":"4.4","address":"2411 Glenna Goodacre Blvd, Lubbock, TX 79401","type":["Mexican Grill"],"price":"$$","imgURL":"https://fastly.4sqi.net/img/general/600x600/66898335_5isfU_CQ9R3YW9ieXc7cOVFl28fYdnn_7Ac1z89abz8.jpg"},{"name":"Thai Pepper","rating":"4.5","address":"3702 20th St, Lubbock, TX 79410","type":["Thai","Asian"],"price":"$$","imgURL":"https://lh5.googleusercontent.com/p/AF1QipP-jUMmDnc8kFCUMrB4pNd83aW6a0gkHZwWCITz=w600-h321-p-k-no"},{"name":"Chick-fil-A","rating":"4.6","address":"312 University Ave, Lubbock, TX 79415","type":["Chicken","American"],"price":"$","imgURL":"https://lh5.googleusercontent.com/p/AF1QipPdI8_GlFE8t348WFYqNveMBgqLppSdEbrgL51y=w750-h401-p-k-no"},{"name":"Vitality Bowls","rating":"4.1","address":"2400 Glenna Goodacre Blvd Suite 106–D, Lubbock, TX 79401","type":["Health"],"price":"$$$","imgURL":"https://i.imgur.com/K2Qrp0g.png"},{"name":"Potbelly","rating":"4.5","address":"2402 9th St, Lubbock, TX 79401","type":["Deli","Sandwiches"],"price":"$","imgURL":"https://lh5.googleusercontent.com/p/AF1QipMadXV033y9Q7VM-8WvPglT5mwZIwarQrhiaQs=w750-h348-p-k-no"},{"name":"Spanky's","rating":"4.3","address":"811 University Ave, Lubbock, TX 79401","type":["American","Burgers"],"price":"$$","imgURL":"https://i.pinimg.com/originals/63/66/a8/6366a847baa0e88bc433189bf59441cd.jpg"},{"name":"Raising Cane's","rating":"4.5","address":"907 University Ave, Lubbock, TX 79401","type":["Chicken"],"price":"$","imgURL":"https://www.raisingcanes.com/sites/default/files/styles/location_images/public/RaisingCanes_C158_TheSandstorm_Exterior_1.jpg?itok=gW19HC6y"},{"name":"One Guy's Pizza","rating":"4.6","address":"1101 University Ave Lubbock TX","type":["Pizza","Italian"],"price":"$$","imgURL":"https://media-cdn.tripadvisor.com/media/photo-s/01/05/2c/cd/front-of-one-guy.jpg"},{"name":"Whataburger","rating":"4.0","address":"2412 9th St Lubbock TX 79401","type":["American","Burgers"],"price":"$$","imgURL":"https://lh5.googleusercontent.com/p/AF1QipNYRLIyb96dzRd5NzZ7eVgZRxsLxZ7L6k4klyOh=w750-h401-p-k-no"}]}

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_history_history__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_preferences_preferences__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().onAuthStateChanged(function (user) {
            _this.rootPage = user ? __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */] : __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            _this.nav.setRoot(_this.rootPage);
        });
        this.pages = [
            { title: 'Restaurants', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: "pizza" },
            { title: 'Roulette', component: __WEBPACK_IMPORTED_MODULE_5__pages_roulette_roulette__["a" /* RoulettePage */], icon: "aperture" },
            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_8__pages_history_history__["a" /* HistoryPage */], icon: "time" },
            { title: 'Quick Eats', component: __WEBPACK_IMPORTED_MODULE_8__pages_history_history__["a" /* HistoryPage */], icon: "restaurant" },
            { title: 'Preferences', component: __WEBPACK_IMPORTED_MODULE_9__pages_preferences_preferences__["a" /* PreferencesPage */], icon: "heart" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openProfile = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], { static: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\app\app.html"*/'<ion-menu id = "myMenu" [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color = "nav">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"  style="padding-right:10px;zoom: 1.15"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>  \n    <ion-list>\n        <button menuClose ion-item (click)="openProfile()" bottom><ion-icon name="person"  style="padding-right:10px;zoom: 1.15"></ion-icon>Profile</button>\n    </ion-list>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" ></ion-nav>'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(fireStore) {
        this.fireStore = fireStore;
        this.userCollection = fireStore.collection('users');
    }
    AuthenticationProvider.prototype.registerUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (val) {
                _this.userCollection.doc(val.user.uid).set({
                    uid: val.user.uid,
                    email: val.user.email
                });
            }, function (err) { return reject(err); });
        });
    };
    AuthenticationProvider.prototype.loginUser = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthenticationProvider.prototype.logoutUser = function () {
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().currentUser) {
                __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().signOut()
                    .then(function () {
                    console.log("LOG Out");
                    resolve();
                }).catch(function (error) {
                    reject();
                });
            }
        });
    };
    AuthenticationProvider.prototype.userDetails = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().currentUser;
    };
    AuthenticationProvider.prototype.userEmail = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().currentUser.email;
    };
    AuthenticationProvider.prototype.userID = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase_app__["auth"]().currentUser.uid;
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.userDetails = this.authService.userDetails;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    };
    LoginPage.prototype.loginUser = function (value) {
        var _this = this;
        this.authService.loginUser(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color = "nav">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <div text-center>\n    <img src="https://i.imgur.com/zLsxNdx.png" style="width: 100%; height: auto;">\n  </div>\n  <form class="form" [formGroup]="validations_form"  (ngSubmit)="loginUser(validations_form.value)">\n \n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" formControlName="email" placeholder="Email"></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.email">\n        <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll" placeholder= "Password" required></ion-input>\n    </ion-item>\n    <div class="validation-errors" >\n      <ng-container *ngFor="let validation of validation_messages.password">\n        <div class="error-message" *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <br>\n    <button ion-button class="submit-btn" type="submit"   full>Log In</button>\n  \n    <label class="error-message">{{errorMessage}}</label>\n  </form>\n  <p class="go-to-register">\n    No account yet? <a (click)="goToRegisterPage()">Create an account.</a>\n  </p>\n</ion-content>'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouletteDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator_ngx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RouletteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RouletteDetailsPage = /** @class */ (function () {
    function RouletteDetailsPage(navCtrl, navParams, launchNavigator, fireStore, auth, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.fireStore = fireStore;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.locationsData = navParams.get('locations');
        this.tags = this.locationsData.type.join(", ");
        this.userDoc = this.fireStore.collection("users/" + __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid + "/history");
    }
    RouletteDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RouletteDetailsPage');
    };
    RouletteDetailsPage.prototype.ionViewDidEnter = function () { this.menuCtrl.enable(false, 'myMenu'); };
    RouletteDetailsPage.prototype.ionViewWillLeave = function () { this.menuCtrl.enable(true, 'myMenu'); };
    RouletteDetailsPage.prototype.goToNavigation = function () {
        var options = {
            app: this.launchNavigator.APP.USER_SELECT
        };
        // let options: LaunchNavigatorOptions = {
        //   start: 'London, ON',
        //   app: LaunchNavigator.getSupportedPlatforms.
        // }
        // this.launchNavigator.navigate('Toronto, ON', options)
        //   .then(
        //     success => console.log('Launched navigator'),
        //     error => console.log('Error launching navigator', error)
        //   );
        this.launchNavigator.navigate(this.locationsData.address, options);
    };
    RouletteDetailsPage.prototype.addToHistory = function () {
        this.date = new Date() + "";
        this.userDoc.add({
            name: this.locationsData.name,
            date: this.date.substring(0, 24)
        });
    };
    RouletteDetailsPage.prototype.openMenu = function () {
        window.open("https://www.potbelly.com/menu/Sandwiches", "_system");
    };
    RouletteDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roulette-details',template:/*ion-inline-start:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette-details\roulette-details.html"*/'<!--\n  Generated template for the RouletteDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="nav">\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <img src ="{{this.locationsData.imgURL}}" >\n        <ion-card-content>\n          <ion-card-title>\n            {{this.locationsData.name}}\n          </ion-card-title>\n          <p>{{this.tags}}</p>\n          <p style="color:green">{{this.locationsData.price}}</p>\n          <p><ion-icon name="star" style="color:gold"></ion-icon> {{this.locationsData.rating}}</p>\n        </ion-card-content>\n      </ion-card>\n      <br>\n      <div text-center> \n          <button ion-button (click)="goToNavigation()"> Directions </button>\n      </div>\n      <br>\n      <div text-center> \n          <button ion-button (click)="openMenu()"> Menu </button>\n      </div>\n      <br><br>\n      <div text-center> \n          <button ion-button style="color:white;background-color:violet;" (click)=addToHistory()> Yummy </button>\n      </div>\n    </ion-content>\n'/*ion-inline-end:"C:\Users\acost\Desktop\Capstone\QuickEatsTemp\src\pages\roulette-details\roulette-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator_ngx__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], RouletteDetailsPage);
    return RouletteDetailsPage;
}());

//# sourceMappingURL=roulette-details.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map