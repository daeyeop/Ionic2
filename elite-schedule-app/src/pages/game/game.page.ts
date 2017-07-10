import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import { TeamHomePage } from '../pages';


@Component({
  templateUrl: 'game.page.html',
})
export class GamePage {
  game: any = {};

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi) { }


  ionViewDidLoad(){
    this.game = this.navParams.data;
    //this.game.gameTime = Date.parse(this.game.time);
  }

  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.nav.push(TeamHomePage, team); 
  }

}
