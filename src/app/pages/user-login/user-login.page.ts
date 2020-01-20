import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { IUser } from 'src/app/interfaces/user.model';
import { ToastControlerService } from 'src/controller/tost.controller';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  constructor(private menu: MenuController, private router: Router, private loginService: LoginService,private tostCtrl: ToastControlerService ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  onClickLoginBtn(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const emailId = form.value.emailId;
    const password = form.value.password;

    if (emailId && password) {

      const user = <IUser> {};
      user.email = emailId;
      user.password = password;

      this.loginService.getUserLogin(user).subscribe(res => {
        console.log(JSON.stringify(res));
        if (res) {
          this.router.navigate(['/home']);
        } else {
          this.tostCtrl.failureToast('incorrect username or password !');
        }
      }, error => {
        if (error.status === 401) {
          this.menu.enable(false);
          this.tostCtrl.failureToast('incorrect username or password !');
        }
        console.log(error.status);
      });
    }

    this.menu.enable(true);
  }

}
