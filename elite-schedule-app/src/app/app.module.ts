import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { MyTeamsPage, MapPage, TeamDetailPage, TeamsPage, TournamentsPage, GamePage, TeamHomePage, StandingsPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ListPage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,
    GamePage,
    TeamHomePage,
    StandingsPage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ListPage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,
    GamePage,
    TeamHomePage,
     StandingsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
