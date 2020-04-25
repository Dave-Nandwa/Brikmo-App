import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  RouteReuseStrategy
} from '@angular/router';

import {
  IonicModule,
  IonicRouteStrategy
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';

/* ------------------------------------ - ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Custom Modules                               */
/* -------------------------------------------------------------------------- */

// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  HttpClientModule
} from '@angular/common/http';

/* -------------------------------------------------------------------------- */
/*                               Custom Services                              */
/* -------------------------------------------------------------------------- */

import {
  UtilitiesService
} from './services/utilities.service';
/* -------------------------------------------------------------------------- */
/*                                 AngularFire                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Native Providers                              */
/* -------------------------------------------------------------------------- */

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,

    /* ----------------------------- Custom Services ---------------------------- */
    UtilitiesService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}