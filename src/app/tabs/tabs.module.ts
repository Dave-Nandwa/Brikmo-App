import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { IconsModule } from '../custom-modules/icons/icons.module';
import { MenuPageModule } from '../pages/menu/menu.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IconsModule,
    MenuPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
