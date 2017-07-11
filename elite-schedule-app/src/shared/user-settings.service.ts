import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';

const win: any = window;

@Injectable()
export class UserSettings {

     constructor(public events: Events, public storage: Storage) {

    }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id.toString(), JSON.stringify(item));
    }

    unfavoriteTeam(team) {
        this.storage.remove(team.id);
    }

    isFavoriteTeam(teamId) : Promise<boolean> {

        return new Promise(resolve => resolve(this.storage.get(teamId.toString()).then(value => value ? true : false)));
    }

    getAllFavorites(){
        let items = [];
        _.forIn(window.localStorage, (v, k) => {
            
            console.log(JSON.parse(v));
            items.push(JSON.parse(v));
        });
        console.log(items);
        return items.length? items:null;
    }
}