import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
siparisler:string;
  constructor(public navCtrl: NavController,public app:App) {

  }

  bekleyen(){
    this.app.getRootNav().getActiveChildNav().select(1);
    this.siparisler="bekleyen";
  }
  onaylanan(){
    this.app.getRootNav().getActiveChildNav().select(1);
  }

  teslim(){
    this.app.getRootNav().getActiveChildNav().select(1);
  }
}
