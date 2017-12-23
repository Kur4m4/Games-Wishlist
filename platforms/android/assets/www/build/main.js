webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_games_games__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_platforms_platforms__ = __webpack_require__(161);
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
 * Generated class for the AddGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddGamePage = (function () {
    function AddGamePage(navCtrl, navParams, toast, gamesProvider, platformsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.gamesProvider = gamesProvider;
        this.platformsProvider = platformsProvider;
        this.game = new __WEBPACK_IMPORTED_MODULE_2__providers_games_games__["a" /* Game */]();
        if (this.navParams.get("game")) {
            this.game = this.navParams.get("game");
        }
    }
    AddGamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platformsProvider.getAll().then(function (result) {
            _this.platforms = result;
        }).catch(function () {
            _this.toast.create({ message: 'Erro ao carregar as plataformas.', duration: 3000, position: 'bottom' }).present();
        });
    };
    AddGamePage.prototype.salvar = function () {
        var _this = this;
        this.saveGame().then(function () {
            _this.toast.create({ message: 'Jogo salvo.', duration: 3000, position: 'bottom' }).present();
            _this.navCtrl.pop();
        }).catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o jogo.', duration: 3000, position: 'bottom' }).present();
        });
    };
    AddGamePage.prototype.saveGame = function () {
        if (this.game.id) {
            return this.gamesProvider.update(this.game);
        }
        else {
            this.game.user_id = this.navParams.get("user_id");
            return this.gamesProvider.insert(this.game);
        }
    };
    AddGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-game',template:/*ion-inline-start:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\add-game\add-game.html"*/'<!--\n  Generated template for the AddGamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Salvar jogo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Título</ion-label>\n\n      <ion-input type="text" [(ngModel)]="game.title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Plataforma</ion-label>\n      <ion-select [(ngModel)]="game.platform_id">\n\n        <ion-option *ngFor="let platform of platforms" value="{{platform.id}}">{{platform.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block style="text-transform:none" (click)="salvar()">Salvar</button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\add-game\add-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_games_games__["b" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_platforms_platforms__["a" /* PlatformsProvider */]])
    ], AddGamePage);
    return AddGamePage;
}());

//# sourceMappingURL=add-game.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesWishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_game_add_game__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_games_games__ = __webpack_require__(78);
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
 * Generated class for the GamesWishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamesWishlistPage = (function () {
    function GamesWishlistPage(navCtrl, navParams, toast, gamesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.gamesProvider = gamesProvider;
        this.games = [];
        this.user_id = navParams.get("user_id");
    }
    GamesWishlistPage.prototype.ionViewWillEnter = function () {
        this.getUserWishlist();
    };
    GamesWishlistPage.prototype.getUserWishlist = function () {
        var _this = this;
        this.gamesProvider.getUserWishlist(this.user_id).then(function (result) {
            _this.games = result;
        }).catch(function () {
            _this.toast.create({ message: 'Erro ao carregar lista de desejos.', duration: 3000, position: 'bottom' }).present();
        });
    };
    GamesWishlistPage.prototype.addGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_game_add_game__["a" /* AddGamePage */], { user_id: this.user_id });
    };
    GamesWishlistPage.prototype.editGame = function (game) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_game_add_game__["a" /* AddGamePage */], { game: game });
    };
    GamesWishlistPage.prototype.removeGame = function (game) {
        var _this = this;
        this.gamesProvider.remove(game.id).then(function () {
            _this.getUserWishlist();
            _this.toast.create({ message: 'Jogo removido.', duration: 3000, position: 'bottom' }).present();
        }).catch(function () {
            _this.toast.create({ message: 'Erro ao remover jogo.', duration: 3000, position: 'bottom' }).present();
        });
    };
    GamesWishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games-wishlist',template:/*ion-inline-start:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\games-wishlist\games-wishlist.html"*/'<!--\n  Generated template for the GamesWishlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista de desejos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let game of games">\n\n      <ion-item (click)="editGame(game)">\n\n        <h2>{{game.title}}</h2>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="removeGame(game)">Excluir</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-fab right bottom>\n\n    <button ion-fab (click)="addGame()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\games-wishlist\games-wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_games_games__["b" /* GamesProvider */]])
    ], GamesWishlistPage);
    return GamesWishlistPage;
}());

//# sourceMappingURL=games-wishlist.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__games_wishlist_games_wishlist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(81);
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
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toast, usersProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.usersProvider = usersProvider;
    }
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.usersProvider.getUserByEmail(this.email).then(function (result) {
            if (result != null && result.password == _this.senha) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__games_wishlist_games_wishlist__["a" /* GamesWishlistPage */], { user_id: result.id });
            }
            else {
                _this.toast.create({ message: 'Dados inválidos', duration: 3000, position: 'bottom' }).present();
            }
        }).catch(function (e) { return console.error(e); });
    };
    LoginPage.prototype.criarConta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Games Wishlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input type="password" [(ngModel)]="senha"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block style="text-transform:none" (click)="logar()">Entrar</button>\n    <button ion-button block clear style="text-transform:none" (click)="criarConta()">Cadastre-se</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["b" /* UsersProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(81);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, toast, usersProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.usersProvider = usersProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* User */]();
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.usersProvider.getUserByEmail(this.user.email).then(function (result) {
            if (result == null) {
                _this.usersProvider.insert(_this.user).then(function () {
                    _this.toast.create({ message: 'Conta criada.', duration: 3000, position: 'bottom' }).present();
                    _this.navCtrl.pop();
                }).catch(function () {
                    _this.toast.create({ message: 'Erro ao criar conta.', duration: 3000, position: 'bottom' }).present();
                });
            }
            else {
                _this.toast.create({ message: 'Email já cadastrado.', duration: 3000, position: 'bottom' }).present();
            }
        }).catch(function (e) { return console.error(e); });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastre-se</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Senha</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block style="text-transform:none" (click)="signup()">Cadastrar-se</button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["b" /* UsersProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-game/add-game.module": [
		279,
		3
	],
	"../pages/games-wishlist/games-wishlist.module": [
		280,
		2
	],
	"../pages/login/login.module": [
		281,
		1
	],
	"../pages/signup/signup.module": [
		282,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformsProvider; });
/* unused harmony export Platform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(40);
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
  Generated class for the PlatformsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PlatformsProvider = (function () {
    function PlatformsProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    PlatformsProvider.prototype.insert = function (platform) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'insert into platforms (name) values (?)';
            var data = [platform.name];
            return db.executeSql(sql, data).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    PlatformsProvider.prototype.getPlatform = function (platform_id) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'select * from platforms where id = ?';
            var data = [platform_id];
            return db.executeSql(sql, data).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
                else {
                    return null;
                }
            }).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    PlatformsProvider.prototype.getAll = function () {
        return this.dbProvider.getDB().then(function (db) {
            return db.executeSql('select * from platforms', []).then(function (data) {
                if (data.rows.length > 0) {
                    var platforms = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var platform = data.rows.item(i);
                        platforms.push(platform);
                    }
                    return platforms;
                }
                else {
                    return [];
                }
            }).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    PlatformsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], PlatformsProvider);
    return PlatformsProvider;
}());

var Platform = (function () {
    function Platform() {
    }
    return Platform;
}());

//# sourceMappingURL=platforms.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_games_wishlist_games_wishlist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_game_add_game__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_database_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_users_users__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_platforms_platforms__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_games_games__ = __webpack_require__(78);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_games_wishlist_games_wishlist__["a" /* GamesWishlistPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_game_add_game__["a" /* AddGamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-game/add-game.module#AddGamePageModule', name: 'AddGamePage', segment: 'add-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games-wishlist/games-wishlist.module#GamesWishlistPageModule', name: 'GamesWishlistPage', segment: 'games-wishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_games_wishlist_games_wishlist__["a" /* GamesWishlistPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_game_add_game__["a" /* AddGamePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_users_users__["b" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_platforms_platforms__["a" /* PlatformsProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_games_games__["b" /* GamesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            dbProvider.createDatabase().then(function () {
                _this.openLoginPage(splashScreen);
            }).catch(function () {
                _this.openLoginPage(splashScreen);
            });
        });
    }
    MyApp.prototype.openLoginPage = function (splashScreen) {
        splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Kai\Documents\Ionic\GamesWishlist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(159);
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
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'games-wishlist.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB().then(function (db) {
            _this.createTables(db);
            _this.insertDefaultItems(db);
        }).catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS users (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, email TEXT, password TEXT)'],
            ['CREATE TABLE IF NOT EXISTS platforms (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
            ['CREATE TABLE IF NOT EXISTS games (id integer primary key AUTOINCREMENT NOT NULL, title TEXT, user_id INTEGER, platform_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY(platform_id) REFERENCES platforms(id))']
        ]).then(function () { return console.log('Tabelas criadas'); }).catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(id) as qtd from platforms', {}).then(function (data) {
            if (data.rows.item(0).qtd == 0) {
                db.sqlBatch([
                    ['insert into platforms (name) values (?)', ['Nintendo 3DS']],
                    ['insert into platforms (name) values (?)', ['Nintendo Switch']],
                    ['insert into platforms (name) values (?)', ['PC']],
                    ['insert into platforms (name) values (?)', ['PS3']],
                    ['insert into platforms (name) values (?)', ['PS4™']],
                    ['insert into platforms (name) values (?)', ['PSP']],
                    ['insert into platforms (name) values (?)', ['PS Vita']],
                    ['insert into platforms (name) values (?)', ['Wii U']],
                    ['insert into platforms (name) values (?)', ['Xbox 360']],
                    ['insert into platforms (name) values (?)', ['Xbox One']]
                ]).then(function () { return console.log('Dados padrões incluídos'); }).catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
        }).catch(function (e) { return console.error('Erro ao consultar a quantidade de plataformas', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GamesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(40);
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
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GamesProvider = (function () {
    function GamesProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    ;
    GamesProvider.prototype.insert = function (game) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'insert into games (title, user_id, platform_id) values (?, ?, ?)';
            var data = [game.title, game.user_id, game.platform_id];
            return db.executeSql(sql, data).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    GamesProvider.prototype.update = function (game) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'update games set title = ?, platform_id = ? where id = ?';
            var data = [game.title, game.platform_id, game.id];
            return db.executeSql(sql, data).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    GamesProvider.prototype.remove = function (id) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'delete from games where id = ?';
            var data = [id];
            return db.executeSql(sql, data).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    GamesProvider.prototype.getUserWishlist = function (user_id) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'select * from games where user_id = ? order by title';
            var data = [user_id];
            return db.executeSql(sql, data).then(function (data) {
                if (data.rows.length > 0) {
                    var games = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var game = data.rows.item(i);
                        games.push(game);
                    }
                    return games;
                }
                else {
                    return [];
                }
            }).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    GamesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], GamesProvider);
    return GamesProvider;
}());

var Game = (function () {
    function Game() {
    }
    return Game;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UsersProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(40);
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
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsersProvider = (function () {
    function UsersProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    UsersProvider.prototype.insert = function (user) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'insert into users (name, email, password) values (?, ?, ?)';
            var data = [user.name, user.email, user.password];
            return db.executeSql(sql, data).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    UsersProvider.prototype.getUserByEmail = function (email) {
        return this.dbProvider.getDB().then(function (db) {
            var sql = 'select * from users where email = ?';
            var data = [email];
            return db.executeSql(sql, data).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
                return null;
            }).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], UsersProvider);
    return UsersProvider;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=users.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map