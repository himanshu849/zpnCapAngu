import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { NetworkProvider } from 'src/controller/network.controller';
import { ToastControlerService } from 'src/controller/tost.controller';
import { Plugins, PluginListenerHandle, NetworkStatus } from '@capacitor/core';
//import { Network } from '@ionic-native/network/ngx';

const { Network } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  networkListner: PluginListenerHandle;
  networkStatus: NetworkStatus;
  public appPages = [
    {
      title: 'Patient List',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Past Patient',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private loginSvc: LoginService,
    private tostCtrl: ToastControlerService,
   // private network: Network
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.checkNetwork()
      const zpnuser = JSON.parse(localStorage.getItem('zpnuser'));
      if (zpnuser && zpnuser.jwt_token) {
        this.router.navigate(['/home']);
      }
    });
  }

  async checkNetwork() {
    this.networkListner = Network.addListener('networkStatusChange', (status) => {
      console.log("status: "+status)
     // this.networkStatus = status;
      if (!status.connected) {
        this.tostCtrl.failureToast('Please check your internet connection');
      }
    });

    const status = await Network.getStatus();
    if (!status.connected) {
      this.tostCtrl.failureToast('Please check your internet connection');
    }

  }

  logout() {
    this.loginSvc.logOutUser();
  }
}
