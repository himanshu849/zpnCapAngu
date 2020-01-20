import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router, private menu: MenuController) {}

  getUserLogin(data) {
    const url = `${environment.apiBaseUrl}/api/user/login`;
    return this.http.post<any>(url, data).pipe(
      map(user => {
        if (user && user.jwt_token) {
          localStorage.setItem('zpnuser',JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logOutUser() {
    localStorage.removeItem('zpnuser');
    this.menu.enable(false);
    this.router.navigate(['/user-login']);
  }
}
