import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from '../providers/database/database';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      dbProvider.createDatabase().then(() => {
        this.openLoginPage(splashScreen);
      }).catch(() => {
        this.openLoginPage(splashScreen);
      });
    });
  }

  private openLoginPage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = LoginPage;
  }
}

