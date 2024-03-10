import { Component } from '@angular/core';
import { ApiAdminPageService } from '../api-admin-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  isChecked = false;
  password = "";

  checkValue(event: any) {
    this.isChecked = event
  }

  constructor(private _apiAdmin: ApiAdminPageService, private _router: Router) {
  }

  admin = {
    email: "",
    password: ""
  }

  checkLogin() {
    this._apiAdmin.login(this.admin).subscribe((res: any) => {
      console.log(res.status);

      if (res.status == 400) {
        this._router.navigate(['/']);
      }
      else {
        console.log("Successfull");

        this._router.navigate(['adminLogin/admin']);
      }
    })
  }

}
