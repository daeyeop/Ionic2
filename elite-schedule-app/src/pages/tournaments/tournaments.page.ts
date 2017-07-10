import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import {  TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';


@Component({
  templateUrl: 'tournaments.page.html',
})
export class TournamentsPage {

  tournaments: any;

 constructor(
      private nav: NavController, 
      private eliteApi: EliteApi,
      private loadingController: LoadingController) { }


  navigateBack()
  {
      this.nav.pop();
  }

  itemTapped($event, tourney)
  {
      this.nav.push(TeamsPage, tourney);
  }

  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
      //spinner: 'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
    
  }

  ionViewWillEnter()
  {
      console.log('## lifecyle ## ionViewWillEnter');
  }

  ionViewWillLeave()
  {
      console.log('## lifecyle ## ionViewWillLeave');
  }

}
