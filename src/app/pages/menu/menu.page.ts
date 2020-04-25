import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  closeMenu() {
    this.modalController.dismiss();
  }
  

}
