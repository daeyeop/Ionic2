import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamHomePage, TournamentsPage } from '../pages';
import { EliteApi, UserSettings } from '../../shared/shared';

@Component({
    templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

    favorites = [];

    constructor(
        public loadingController: LoadingController,
        public nav: NavController,
        public eliteApi: EliteApi,
        public userSettings: UserSettings){}
    
    favoriteTapped($event, favorite){
        let loader = this.loadingController.create({
            content: 'Getting data...'
            //dismissOnPageChange: true //<- broken in RC4?
        });
        loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId)
            .subscribe(t => {
                loader.dismiss();
                this.nav.push(TeamHomePage, favorite.team);
            });
    }

    goToTournaments(){
        this.nav.push(TournamentsPage); 
    }

    ionViewDidEnter(){
        this.favorites = this.userSettings.getAllFavorites(); 
    }
}