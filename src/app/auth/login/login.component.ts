import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/types/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logForm:loginForm = {
    email: '',
    password: ''
  }

  submitLogin() {
    console.log(this.logForm)
  }

}
