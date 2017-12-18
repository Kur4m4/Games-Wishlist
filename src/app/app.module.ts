import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { GamesWishlistPage } from '../pages/games-wishlist/games-wishlist';
import { AddGamePage } from '../pages/add-game/add-game';

import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { UsersProvider } from '../providers/users/users';
import { PlatformsProvider } from '../providers/platforms/platforms';
import { GamesProvider } from '../providers/games/games';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    GamesWishlistPage,
    AddGamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    GamesWishlistPage,
    AddGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite,
    DatabaseProvider,
    UsersProvider,
    PlatformsProvider,
    GamesProvider
  ]
})
export class AppModule {}
