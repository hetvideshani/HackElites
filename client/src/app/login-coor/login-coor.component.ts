import { Component } from '@angular/core';

@Component({
  selector: 'app-login-coor',
  templateUrl: './login-coor.component.html',
  styleUrl: './login-coor.component.css'
})
export class LoginCoorComponent {
  coordinator = {
    email: "",
    password: ""
  }
}
