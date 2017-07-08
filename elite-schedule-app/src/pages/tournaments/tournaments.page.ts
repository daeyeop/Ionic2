import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';

@Component({
  templateUrl: 'tournaments.page.html',
})
export class TournamentsPage {

  constructor(private nav: NavController) {

  }

  navigateBack()
  {
      this.nav.pop();
  }

  itemTapped()
  {
      this.nav.push(TeamsPage);
  }

  //itemTapped(){
  //  this.nav.push(TeamsPage); 
  //}
}
