import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientListService } from './services/patientListService';
import { HttpClientModule } from '@angular/common/http';
import { FilerPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ToastControlerService } from 'src/controller/tost.controller';
import { NetworkProvider } from 'src/controller/network.controller';
import { Network } from '@ionic-native/network/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PatientListService,
    LoginService,
    ToastControlerService,
    NetworkProvider,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
