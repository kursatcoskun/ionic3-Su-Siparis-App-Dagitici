import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;

  siparisler: string = "bekleyen";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public platform:Platform,public alertCtrl: AlertController) {
    this.isAndroid = platform.is('android');
  }

  bekleyenClicked(){
    const confirm = this.alertCtrl.create({
      title: 'Onay',
      message: 'Siparişi Onaylıyor musunuz ?',
      buttons: [
        {
          text: 'Hayır',
          handler: () => {
            
          }
        },
        {
          text: 'Evet',
          handler: () => {
            this.siparisler = "onaylanan"
          }
        }
      ]
    });
    confirm.present();
  }

  onaylananClicked(){
    const confirm = this.alertCtrl.create({
      title: 'Teslim',
      message: 'Siparişi teslim Ettim.',
      buttons: [
        {
          text: 'Hayır',
          handler: () => {
            
          }
        },
        {
          text: 'Evet',
          handler: () => {
            this.siparisler = "teslimedilen"
          }
        }
      ]
    });
    confirm.present();
  }

 

}
