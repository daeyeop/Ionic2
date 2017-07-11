import { Component, ViewChild } from '@angular/core';
import { Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';

import { MyTeamsPage, TournamentsPage } from '../pages/pages';
import { HttpModule } from '@angular/http';

import { EliteApi, UserSettings } from '../shared/shared';


@Component({
  templateUrl: 'app.html',
    providers: [
    EliteApi,
    UserSettings,
    HttpModule
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];
  rootPage: any = MyTeamsPage;

  constructor(public platform: Platform,
    public userSettings: UserSettings,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen) {
    this.initializeApp();

  }
  
    refreshFavorites() {
    this.favoriteTeams = this.userSettings.getAllFavorites();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goHome() {
    this.nav.push(MyTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
