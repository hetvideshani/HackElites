import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  isChecked = false;
  password = "";

  checkValue(event: any) {
    this.isChecked = event
  }
}