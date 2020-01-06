import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  public appPages = [
    {
      title: 'Patient List',
      url: '/user-uploader',
      icon: 'home'
    },
    {
      title: 'Patient History',
      url: '/list',
      icon: 'list'
    }
  ];
}
