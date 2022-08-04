import { Component, OnInit } from '@angular/core';
import { registrationForm } from 'src/app/types/regDetails';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  regForm: registrationForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  isPasswordMatched: boolean = false;


  submitReg() {
    // console.log(this.regForm)
    if (this.regForm.password === this.regForm.confirmPassword) {

      this.authService.register(this.regForm);
    }
    else {
      alert('Password mismatched  :(')
    }
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
